import {DRACOLoader, GLTFLoader} from 'three/examples/jsm/Addons.js'

export function createLoader() {
  const loader = new GLTFLoader()
  const draco = new DRACOLoader()
  draco.setDecoderPath('js/')
  loader.setDRACOLoader(draco)
  return loader
}
