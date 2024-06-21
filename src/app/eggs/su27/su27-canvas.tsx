import { Clock, PMREMGenerator, Scene } from "three";
import {
  createCamera,
  createControl,
  createControls,
  createHorizon,
  createLight,
  createLoader,
  createOcean,
  createRenderer,
} from "./utils";
import { Su27 } from "./su27";

function ratio() {
  return innerWidth / innerHeight;
}

export function Su27Canvas() {
  const far = 1000000;
  const scene = new Scene();
  const clock = new Clock();

  const camera = createCamera(ratio());
  const renderer = createRenderer();
  const controls = createControls(camera, renderer.domElement);

  const loader = createLoader();

  const control = createControl();

  addEventListener("keydown", ({ code }) => {
    if (code === "Escape") {
      renderer.domElement.remove();
      document.body.classList.remove("eggs");
    }
  });

  let su27: Su27;

  loader.loadAsync("models/su27.glb").then((gltf) => {
    su27 = new Su27(gltf, control);
    scene.add(su27);
    loader.loadAsync("models/missile.glb").then(su27.setMissile);
    animate();
  });

  const light = createLight();

  const ocean = createOcean(scene, far);
  const horizon = createHorizon(ocean.water, far);
  const sceneEnv = new Scene();
  const pmremGenerator = new PMREMGenerator(renderer);
  const renderTarget = pmremGenerator.fromScene(sceneEnv);
  scene.environment = renderTarget.texture;
  sceneEnv.add(horizon.sky);

  scene.add(light, ocean.water, sceneEnv);

  horizon.updateSun(renderTarget);

  const resize = () => {
    camera.aspect = ratio();
    renderer.setSize(innerWidth, innerHeight);
    camera.updateProjectionMatrix();
  };

  resize();

  addEventListener("resize", resize);

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    if (control.Space) {
      const missile = su27.fire();
      if (missile) scene.add(missile);
    }

    ocean.water.material.uniforms["time"].value += 1.0 / 60.0;

    su27.update();

    controls.target = su27.position;
    controls.update(delta);

    renderer.render(scene, camera);
  }

  return <>{renderer.domElement}</>;
}
