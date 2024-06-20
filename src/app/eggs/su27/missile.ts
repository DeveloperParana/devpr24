import {Group, type Vector3} from 'three'

export class Missile extends Group {
  constructor(scene: Group, readonly direction: Vector3, readonly speed: number) {
    super()
    this.add(scene)
  }

  update() {
    this.position.addScaledVector(this.direction, this.speed)
  }
}
