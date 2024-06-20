import {DirectionalLight} from 'three'

export function createLight() {
  const light = new DirectionalLight()
  light.position.set(25, 50, 25)
  light.castShadow = true
  light.shadow.mapSize.width = 8192
  light.shadow.mapSize.height = 8192
  light.shadow.camera.near = 0.5
  light.shadow.camera.far = 100
  light.shadow.camera.top = 100
  light.shadow.camera.bottom = -100
  light.shadow.camera.left = -100
  light.shadow.camera.right = 100
  return light
}
