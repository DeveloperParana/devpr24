import { randomInt } from "../../utils";
import { Group } from "three";

export class Cloud extends Group {
  constructor(scene: Group, readonly i: number) {
    super();
    this.add(scene);

    const x = randomInt(60, 60000);
    const z = randomInt(-20, 12000);

    this.position.set(x * 1, 800, z * 1);
    this.scale.set(150, 150, 150);
  }
}
