import type { GLTF } from "three/examples/jsm/Addons.js";
import { Group, MathUtils, Vector3 } from "three";
import type { Control } from "./control";
import { Missile } from "./missile";

export class Su27 extends Group {
  #acceleration = 0.9;
  #maxYawAcceleration = 0.001;
  #maxMissileDistance = 10000;

  #yawVelocity = 0;
  #pitchVelocity = 0;
  #rollVelocity = 0;

  #velocity = 10;
  #maxVelocity = 16;

  #friction = 0.96;

  #missiles = new Set<Missile>();
  #missile?: Group;
  #lastMissile = Date.now();

  constructor(gltf: GLTF, readonly control: Control) {
    super();
    this.add(gltf.scene);
    this.scale.setScalar(5);
    this.position.set(0, 1000, 0);
  }

  fire() {
    if (this.#missile && Date.now() - this.#lastMissile > 100) {
      const missile = new Missile(
        this.#missile.clone(),
        this.#direction,
        this.#velocity * 3
      );
      missile.position.copy(this.position);
      missile.quaternion.copy(this.quaternion);
      this.#missiles.add(missile);
      this.#lastMissile = Date.now();
      return missile;
    }
  }

  get #direction() {
    return this.getWorldDirection(new Vector3(0, 0, 1));
  }

  #toForward(speed = 0) {
    const currentSpeed = Math.min(
      speed + this.#acceleration,
      this.#maxVelocity
    );
    const direction = new Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    this.position.addScaledVector(direction, -currentSpeed);
  }

  setMissile = (missile: GLTF) => {
    this.#missile = missile.scene.clone();
  };

  #handleInput(yawAcceleration: number) {
    if (this.control.KeyQ) {
      this.#yawVelocity += yawAcceleration;
    }

    if (this.control.keyE) {
      this.#yawVelocity -= yawAcceleration;
    }

    if (this.control.KeyA) {
      this.#rollVelocity -= this.#acceleration / 500;
    }

    if (this.control.KeyD) {
      this.#rollVelocity += this.#acceleration / 500;
    }

    if (this.control.KeyW) {
      this.#pitchVelocity += this.#acceleration / 500;
    }

    if (this.control.KeyS) {
      this.#pitchVelocity -= this.#acceleration / 500;
    }
  }

  #clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  update() {
    this.#yawVelocity *= this.#friction;
    this.#pitchVelocity *= this.#friction;
    this.#rollVelocity *= this.#friction;

    for (const missile of this.#missiles) {
      missile.update();
      const distance = missile.position.distanceTo(this.position);
      if (distance > this.#maxMissileDistance) {
        this.#missiles.delete(missile);
        missile.removeFromParent();
      }
    }

    const yawAcceleration = MathUtils.clamp(
      MathUtils.lerp(
        0.0001,
        this.#acceleration,
        Math.abs(this.#velocity) / this.#maxVelocity
      ),
      0.0001,
      this.#maxYawAcceleration
    );

    this.#handleInput(yawAcceleration);

    const speed = this.control.ShiftLeft
      ? this.#acceleration * 1000
      : this.#acceleration;

    this.#toForward(this.#velocity * speed);

    this.#yawVelocity = this.#clamp(
      this.#yawVelocity,
      -this.#maxVelocity,
      this.#maxVelocity
    );

    this.#pitchVelocity = this.#clamp(
      this.#pitchVelocity,
      -this.#maxVelocity,
      this.#maxVelocity
    );

    this.#rollVelocity = this.#clamp(
      this.#rollVelocity,
      -this.#maxVelocity,
      this.#maxVelocity
    );

    this.rotateY(this.#yawVelocity);
    this.rotateX(this.#pitchVelocity);
    this.rotateZ(this.#rollVelocity);
  }
}
