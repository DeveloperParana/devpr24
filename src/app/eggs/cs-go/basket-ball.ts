import {
  Mesh,
  Sphere,
  Vector3,
  type IcosahedronGeometry,
  type MeshLambertMaterial,
} from "three";

export class BasketBall extends Mesh {
  static MAX_BALLS = 100;
  static BALL_RADIUS = 0.2;

  collider;
  velocity;

  constructor(geometry: IcosahedronGeometry, material: MeshLambertMaterial) {
    super(geometry, material);

    this.castShadow = true;
    this.receiveShadow = true;

    this.collider = new Sphere(new Vector3(0, -100, 0), BasketBall.BALL_RADIUS);
    this.velocity = new Vector3();
  }
}
