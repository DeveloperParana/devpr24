import { Color, Fog, Scene } from "three";

export function createScene() {
  const scene = new Scene();
  scene.background = new Color(0xeec788);
  scene.fog = new Fog(0xeec788, 0, 50);
  return scene;
}
