import type {Camera} from 'three'
import {OrbitControls} from 'three/examples/jsm/Addons.js'

export function createControls(camera: Camera, element: HTMLCanvasElement) {
  const controls = new OrbitControls(camera, element)
  controls.minDistance = 200
  controls.maxDistance = 600
  return controls
}
