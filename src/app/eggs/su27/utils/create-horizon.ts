import {MathUtils, Vector3, type RenderTarget} from 'three'
import {Sky, type Water} from 'three/examples/jsm/Addons.js'

export function createHorizon(water: Water, scale = 10000) {
  const sun = new Vector3()

  const sky = new Sky()
  sky.scale.setScalar(scale)

  const skyUniforms = sky.material.uniforms

  skyUniforms['turbidity'].value = 10
  skyUniforms['rayleigh'].value = 2
  skyUniforms['mieCoefficient'].value = 0.005
  skyUniforms['mieDirectionalG'].value = 0.8

  const parameters = {
    elevation: 2,
    azimuth: 180,
  }

  function updateSun(renderTarget: RenderTarget) {
    const phi = MathUtils.degToRad(90 - parameters.elevation)
    const theta = MathUtils.degToRad(parameters.azimuth)

    sun.setFromSphericalCoords(1, phi, theta)

    sky.material.uniforms['sunPosition'].value.copy(sun)
    water.material.uniforms['sunDirection'].value.copy(sun).normalize()

    if (renderTarget) renderTarget.dispose()
  }

  return {sky, updateSun}
}
