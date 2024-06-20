import {PerspectiveCamera} from 'three'

export function createCamera(ratio: number, far = 10000) {
  return new PerspectiveCamera(45, ratio, 0.1, far)
}
