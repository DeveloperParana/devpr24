import { DRACOLoader, GLTFLoader, Octree } from "three/examples/jsm/Addons.js";
import { Mesh } from "three";

export async function createWorld() {
  const octree = new Octree();

  const loader = new GLTFLoader();
  const draco = new DRACOLoader();
  draco.setDecoderPath("js/");
  loader.setDRACOLoader(draco);

  return loader
    .loadAsync("models/de_dust3.glb")
    .then(async ({ scene: world }) => {
      world.scale.setScalar(1.7);

      octree.fromGraphNode(world);

      const { scene: devpr } = await loader.loadAsync("models/devpr.glb");

      world.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          if (child.material.map) {
            child.material.map.anisotropy = 4;
          }
        }
      });

      return { octree, devpr, world };
    });
}
