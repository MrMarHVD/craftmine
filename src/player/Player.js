/**
 * @module player/Player
 * @description Implements the first-person player controller. `Player` manages
 * keyboard and mouse input, movement physics (walk, sneak, fly), a WASD camera
 * direction system, and AABB collision resolution against solid world voxels.
 * It is the only class that writes to `camera.position` and `camera.rotation`;
 * all other systems read the player's public `position` and `velocity`.
 */

import * as THREE from "three";
import {
  DOUBLE_TAP_MS,
  FLY_SPEED,
  GRAVITY,
  JUMP_VELOCITY,
  PLAYER_EYE_HEIGHT,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  SNEAK_SPEED,
  TERMINAL_VELOCITY,
  WALK_SPEED,
  WORLD_HEIGHT,
} from "../constants.js";
import { isSolid } from "../blocks.js";

/** Small epsilon used to keep the player's AABB just clear of voxel surfaces to avoid false overlaps. */
const EPS = 0.0001;

/**
 * First-person player controller that handles input, physics, and camera sync.
 *
 * @property {THREE.Vector3} position - Foot position of the player in world space.
 * @property {THREE.Vector3} velocity - Current velocity in blocks per second.
 * @property {number} yaw - Horizontal camera angle in radians (modified by mouse X).
 * @property {number} pitch - Vertical camera angle in radians, clamped to ±89°.
 * @property {boolean} grounded - `true` if the player is standing on a solid block.
 * @property {boolean} flyMode - `true` if the player is in creative fly mode.
 * @property {boolean} isLocked - `true` if the pointer lock is currently active.
 * @property {number} walkSpeed - Configurable walking speed in blocks per second.
 * @property {number} sneakSpeed - Configurable sneaking speed in blocks per second.
 * @property {number} flySpeed - Configurable fly speed in blocks per second.
 */
export class Player {
  /**
   * Creates the player controller, binds all input events, and performs an
   * initial camera sync.
   * @param {THREE.PerspectiveCamera} camera - The perspective camera to control.
   * @param {HTMLCanvasElement} domElement - The canvas element used for pointer lock requests.
   */
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    this.position = new THREE.Vector3(0, 40, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);

    this.yaw = 0;
    this.pitch = 0;
    this.grounded = false;
    this.flyMode = false;
    this.jumpQueued = false;
    this.lastSpaceTap = -9999;

    this.keys = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      ShiftLeft: false,
      ShiftRight: false,
      Space: false,
    };

    this.isLocked = false;

    this.tmpForward = new THREE.Vector3();
    this.tmpRight = new THREE.Vector3();
    this.tmpMove = new THREE.Vector3();
    this.walkSpeed = WALK_SPEED;
    this.sneakSpeed = SNEAK_SPEED;
    this.flySpeed = FLY_SPEED;

    this.bindInput();
    this.syncCamera();
  }

  /**
   * Updates the configurable movement speeds. Called by the debug pane in
   * `main.js` when the player adjusts sliders. Speeds are clamped to safe
   * minimum values to prevent the player from becoming immobile.
   * @param {number} walkSpeed - New walk speed in blocks per second.
   * @param {number} flySpeed - New fly speed in blocks per second (capped at 300).
   */
  setMovementSpeeds(walkSpeed, flySpeed) {
    this.walkSpeed = Math.max(1, walkSpeed);
    this.sneakSpeed = Math.max(0.5, this.walkSpeed * 0.5);
    this.flySpeed = Math.max(1, Math.min(300, flySpeed));
  }

  /**
   * Registers all DOM event listeners for pointer lock state changes, mouse
   * movement (camera look), and keyboard input (movement and double-tap flight
   * toggle). Double-tapping Space within `DOUBLE_TAP_MS` milliseconds toggles
   * fly mode; a single tap queues a jump when grounded.
   */
  bindInput() {
    document.addEventListener("pointerlockchange", () => {
      this.isLocked = document.pointerLockElement === this.domElement;
    });

    document.addEventListener("mousemove", (e) => {
      if (!this.isLocked) return;
      const sensitivity = 0.0022;
      this.yaw -= e.movementX * sensitivity;
      this.pitch -= e.movementY * sensitivity;
      const limit = Math.PI / 2 - 0.01;
      this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
    });

    document.addEventListener("keydown", (e) => {
      if (e.code in this.keys) {
        if (e.repeat) return;
        if (e.code === "Space") {
          const now = performance.now();
          if (now - this.lastSpaceTap <= DOUBLE_TAP_MS) {
            this.flyMode = !this.flyMode;
            if (!this.flyMode) this.velocity.y = Math.min(this.velocity.y, 0);
            else this.velocity.y = 0;
            this.lastSpaceTap = -9999;
          } else {
            this.lastSpaceTap = now;
            if (!this.flyMode) this.jumpQueued = true;
          }
        }
        this.keys[e.code] = true;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code in this.keys) this.keys[e.code] = false;
    });
  }

  /**
   * Computes the player's AABB (axis-aligned bounding box) at position `pos`.
   * The box is centred horizontally on `pos.x`/`pos.z` and extends from
   * `pos.y` (feet) to `pos.y + PLAYER_HEIGHT` (head). Used by `overlapsSolid`
   * and `combat.canPlaceAt`.
   * @param {THREE.Vector3} [pos=this.position] - Position to compute the AABB for.
   * @returns {{minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number}}
   *   The six face positions of the AABB.
   */
  getAABB(pos = this.position) {
    const hw = PLAYER_WIDTH * 0.5;
    return {
      minX: pos.x - hw,
      maxX: pos.x + hw,
      minY: pos.y,
      maxY: pos.y + PLAYER_HEIGHT,
      minZ: pos.z - hw,
      maxZ: pos.z + hw,
    };
  }

  /**
   * Tests whether the given AABB overlaps any solid world voxel. Iterates over
   * every integer voxel cell that the AABB intersects and returns the first
   * solid block found, or `null` if the AABB is clear. The `EPS` shrink on the
   * max bounds prevents the player from locking onto the face of a voxel when
   * standing flush against it.
   * @param {Object} world - The `World` instance.
   * @param {{minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number}} aabb - AABB to test.
   * @returns {{x: number, y: number, z: number}|null} The first overlapping solid voxel, or `null`.
   */
  overlapsSolid(world, aabb) {
    const minX = Math.floor(aabb.minX);
    const maxX = Math.floor(aabb.maxX - EPS);
    const minY = Math.floor(aabb.minY);
    const maxY = Math.floor(aabb.maxY - EPS);
    const minZ = Math.floor(aabb.minZ);
    const maxZ = Math.floor(aabb.maxZ - EPS);

    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        for (let x = minX; x <= maxX; x++) {
          if (!isSolid(world.getBlock(x, y, z))) continue;
          return { x, y, z };
        }
      }
    }

    return null;
  }

  /**
   * Moves the player by `delta` along the given axis and resolves any resulting
   * AABB collision against solid voxels. On collision, the player is pushed
   * back to the surface and the corresponding velocity component is zeroed.
   * A downward Y collision sets `this.grounded = true` so the player can jump.
   * The loop repeats until no overlap remains, handling corner cases where a
   * single push resolves into another block.
   * @param {Object} world - The `World` instance.
   * @param {"x"|"y"|"z"} axis - The axis to move along.
   * @param {number} delta - Distance to move (may be negative).
   * @returns {boolean} `true` if a collision occurred on this axis.
   */
  resolveAxis(world, axis, delta) {
    if (delta === 0) return false;
    this.position[axis] += delta;

    let collided = false;
    let hit;
    while ((hit = this.overlapsSolid(world, this.getAABB(this.position)))) {
      collided = true;
      if (axis === "x") {
        if (delta > 0) this.position.x = hit.x - PLAYER_WIDTH * 0.5 - EPS;
        else this.position.x = hit.x + 1 + PLAYER_WIDTH * 0.5 + EPS;
        this.velocity.x = 0;
      } else if (axis === "y") {
        if (delta > 0) this.position.y = hit.y - PLAYER_HEIGHT - EPS;
        else {
          this.position.y = hit.y + 1 + EPS;
          this.grounded = true;
        }
        this.velocity.y = 0;
      } else if (axis === "z") {
        if (delta > 0) this.position.z = hit.z - PLAYER_WIDTH * 0.5 - EPS;
        else this.position.z = hit.z + 1 + PLAYER_WIDTH * 0.5 + EPS;
        this.velocity.z = 0;
      }
    }

    return collided;
  }

  /**
   * Advances the player simulation by one frame of duration `dt` seconds.
   * In walk/sneak mode, applies gravity and terminal velocity, then honours a
   * queued jump if the player was grounded on the previous frame. In fly mode,
   * Space ascends and Shift descends with no gravity. Movement resolves X, Z,
   * then Y in separate axis passes to prevent corner-clipping artefacts.
   * World-edge clamping prevents the player from leaving the vertical bounds.
   * @param {Object} world - The `World` instance for collision queries.
   * @param {number} dt - Frame delta time in seconds.
   */
  update(world, dt) {
    const wasGrounded = this.grounded;
    this.grounded = false;

    this.tmpForward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this.tmpRight.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    this.tmpMove.set(0, 0, 0);
    if (this.keys.KeyW) this.tmpMove.add(this.tmpForward);
    if (this.keys.KeyS) this.tmpMove.sub(this.tmpForward);
    if (this.keys.KeyD) this.tmpMove.add(this.tmpRight);
    if (this.keys.KeyA) this.tmpMove.sub(this.tmpRight);
    if (this.tmpMove.lengthSq() > 0) this.tmpMove.normalize();

    if (this.flyMode) {
      const speed = this.flySpeed;
      this.velocity.x = this.tmpMove.x * speed;
      this.velocity.z = this.tmpMove.z * speed;
      this.velocity.y = 0;
      if (this.keys.Space) this.velocity.y += speed;
      if (this.keys.ShiftLeft || this.keys.ShiftRight) this.velocity.y -= speed;
    } else {
      const speed = this.keys.ShiftLeft || this.keys.ShiftRight ? this.sneakSpeed : this.walkSpeed;
      this.velocity.x = this.tmpMove.x * speed;
      this.velocity.z = this.tmpMove.z * speed;
      this.velocity.y = Math.max(TERMINAL_VELOCITY, this.velocity.y - GRAVITY * dt);

      if (this.jumpQueued && wasGrounded) {
        this.velocity.y = JUMP_VELOCITY;
        this.grounded = false;
      }
      this.jumpQueued = false;
    }

    this.resolveAxis(world, "x", this.velocity.x * dt);
    this.resolveAxis(world, "z", this.velocity.z * dt);
    this.resolveAxis(world, "y", this.velocity.y * dt);

    if (this.position.y < 1) {
      this.position.y = 1;
      this.velocity.y = 0;
      this.grounded = true;
    }

    const topLimit = WORLD_HEIGHT - 0.1;
    if (this.position.y + PLAYER_HEIGHT > topLimit) {
      this.position.y = topLimit - PLAYER_HEIGHT;
      this.velocity.y = 0;
    }

    this.syncCamera();
  }

  /**
   * Copies the player's current position and look angles into the camera.
   * Called at the end of every `update` and also once after construction so
   * the initial camera pose is correct before the first frame.
   */
  syncCamera() {
    this.camera.position.set(this.position.x, this.position.y + PLAYER_EYE_HEIGHT, this.position.z);
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }
}
