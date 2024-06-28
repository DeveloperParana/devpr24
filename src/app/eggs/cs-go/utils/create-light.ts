import { DirectionalLight, HemisphereLight } from "three";

export function createLight() {
  const light1 = new HemisphereLight(0x8dc1de, 0x00668d, 1.5);
  light1.position.set( 2, 1, 1 )

  const light2 = new DirectionalLight(0xffffff, 2.5);
  light2.position.set(-5, 25, -1);
  light2.castShadow = true;
  light2.shadow.camera.near = 0.01;
  light2.shadow.camera.far = 500;
  light2.shadow.camera.right = 30;
  light2.shadow.camera.left = -30;
  light2.shadow.camera.top = 30;
  light2.shadow.camera.bottom = -30;
  light2.shadow.mapSize.width = 1024;
  light2.shadow.mapSize.height = 1024;
  light2.shadow.radius = 4;
  light2.shadow.bias = -0.00006;
  return [light1, light2];
}
