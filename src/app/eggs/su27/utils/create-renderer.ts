import {PCFSoftShadowMap, WebGLRenderer} from 'three'

export function createRenderer() {
  const renderer = new WebGLRenderer({antialias: true})
  renderer.setPixelRatio(devicePixelRatio)
  renderer.setSize(innerWidth, innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  return renderer
}
