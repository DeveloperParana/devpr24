import { PerspectiveCamera } from "three";

export function createCamera() {
  const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
  camera.rotation.order = "YXZ";
  return camera;
}
