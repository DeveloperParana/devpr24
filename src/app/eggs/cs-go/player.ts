import { Vector3, type PerspectiveCamera } from "three";
import { Capsule } from "three/examples/jsm/Addons.js";
import type { BasketBall } from "./basket-ball";

export class Player {
  private ballIndex = 0;
  balls: BasketBall[] = [];

  onTheFloor = false;

  collider;
  velocity;
  direction;

  constructor(readonly camera: PerspectiveCamera) {
    const start = new Vector3(0, 0.35, 0);
    const end = new Vector3(0, 1, 0);

    this.collider = new Capsule(start, end, 0.35);
    this.velocity = new Vector3();
    this.direction = new Vector3();
  }

  throwBall(mouseTime: number) {
    const ball = this.balls[this.ballIndex];

    this.camera.getWorldDirection(this.direction);

    ball.collider.center
      .copy(this.collider.end)
      .addScaledVector(this.direction, this.collider.radius * 1.5);

    const impulse =
      15 + 30 * (1 - Math.exp((mouseTime - performance.now()) * 0.01));

    ball.velocity.copy(this.direction).multiplyScalar(impulse);
    ball.velocity.addScaledVector(this.velocity, 2);

    this.ballIndex = (this.ballIndex + 1) % this.balls.length;

    return ball;
  }
}
