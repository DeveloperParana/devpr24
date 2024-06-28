import {
  Clock,
  Vector3,
  IcosahedronGeometry,
  MeshLambertMaterial,
} from "three";
import {
  createCamera,
  createControl,
  createLight,
  createRenderer,
  createScene,
  createWorld,
} from "./utils";
import { BasketBall } from "./basket-ball";
import { Player } from "./player";

export function CSGoCanvas() {
  let animation = -1;
  let game: JSX.Element;
  const clock = new Clock();
  const scene = createScene();
  const camera = createCamera();
  const lights = createLight();
  scene.add(...lights);

  const renderer = createRenderer();

  createWorld().then(({ octree, world }) => {
    scene.add(world);

    const GRAVITY = 30;
    const STEPS_PER_FRAME = 5;

    const player = new Player(camera);

    for (let i = 0; i < BasketBall.MAX_BALLS; i++) {
      player.balls.push(
        new BasketBall(
          new IcosahedronGeometry(BasketBall.BALL_RADIUS, 5),
          new MeshLambertMaterial({ color: 0xf3603b })
        )
      );
    }

    let mouseTime = 0;

    const control = createControl();

    const onMouseDown = () => {
      document.body.requestPointerLock();
      mouseTime = performance.now();
    }

    const onMouseUp = () => {
      if (document.pointerLockElement !== null) {
        scene.add(player.throwBall(mouseTime));
      }
    }

    const onMouseMove = (ev: MouseEvent) => {
      if (document.pointerLockElement === document.body) {
        camera.rotation.y -= ev.movementX / 500;
        camera.rotation.x -= ev.movementY / 500;
      }
    }

    addEventListener("mousedown", onMouseDown);

    addEventListener("mouseup", onMouseUp);

    addEventListener("mousemove", onMouseMove);

    function teleportPlayerIfOob() {
      if (camera.position.y <= -25) {
        player.collider.start.set(0, 0.35, 0);
        player.collider.end.set(0, 1, 0);
        player.collider.radius = 0.35;
        camera.position.copy(player.collider.end);
        camera.rotation.set(0, 0, 0);
      }
    }

    function playerCollisions() {
      const result = octree.capsuleIntersect(player.collider);

      player.onTheFloor = false;

      if (result) {
        player.onTheFloor = result.normal.y > 0;

        if (!player.onTheFloor) {
          player.velocity.addScaledVector(
            result.normal,
            -result.normal.dot(player.velocity)
          );
        }

        player.collider.translate(result.normal.multiplyScalar(result.depth));
      }
    }

    function updatePlayer(deltaTime: number) {
      let damping = Math.exp(-4 * deltaTime) - 1;

      if (!player.onTheFloor) {
        player.velocity.y -= GRAVITY * deltaTime;

        damping *= 0.1;
      }

      player.velocity.addScaledVector(player.velocity, damping);

      const deltaPosition = player.velocity.clone().multiplyScalar(deltaTime);
      player.collider.translate(deltaPosition);

      playerCollisions();

      camera.position.copy(player.collider.end);
    }

    const vector1 = new Vector3();
    const vector2 = new Vector3();
    const vector3 = new Vector3();

    function playerBallCollision(ball: BasketBall) {
      const center = vector1
        .addVectors(player.collider.start, player.collider.end)
        .multiplyScalar(0.5);

      const ballCenter = ball.collider.center;

      const r = player.collider.radius + ball.collider.radius;
      const r2 = r * r;

      for (const point of [
        player.collider.start,
        player.collider.end,
        center,
      ]) {
        const d2 = point.distanceToSquared(ballCenter);

        if (d2 < r2) {
          const normal = vector1.subVectors(point, ballCenter).normalize();
          const v1 = vector2
            .copy(normal)
            .multiplyScalar(normal.dot(player.velocity));
          const v2 = vector3
            .copy(normal)
            .multiplyScalar(normal.dot(ball.velocity));

          player.velocity.add(v2).sub(v1);
          ball.velocity.add(v1).sub(v2);

          const d = (r - Math.sqrt(d2)) / 2;
          ballCenter.addScaledVector(normal, -d);
        }
      }
    }

    function ballCollisions() {
      for (let i = 0, length = player.balls.length; i < length; i++) {
        const b1 = player.balls[i];

        for (let j = i + 1; j < length; j++) {
          const b2 = player.balls[j];

          const d2 = b1.collider.center.distanceToSquared(b2.collider.center);
          const r = b1.collider.radius + b2.collider.radius;
          const r2 = r * r;

          if (d2 < r2) {
            const normal = vector1
              .subVectors(b1.collider.center, b2.collider.center)
              .normalize();
            const v1 = vector2
              .copy(normal)
              .multiplyScalar(normal.dot(b1.velocity));
            const v2 = vector3
              .copy(normal)
              .multiplyScalar(normal.dot(b2.velocity));

            b1.velocity.add(v2).sub(v1);
            b2.velocity.add(v1).sub(v2);

            const d = (r - Math.sqrt(d2)) / 2;

            b1.collider.center.addScaledVector(normal, d);
            b2.collider.center.addScaledVector(normal, -d);
          }
        }
      }
    }

    function updateBalls(deltaTime: number) {
      player.balls.forEach((ball) => {
        ball.collider.center.addScaledVector(ball.velocity, deltaTime);
        const result = octree.sphereIntersect(ball.collider);

        if (result) {
          ball.velocity.addScaledVector(
            result.normal,
            -result.normal.dot(ball.velocity) * 1.5
          );
          ball.collider.center.add(result.normal.multiplyScalar(result.depth));
        } else {
          ball.velocity.y -= GRAVITY * deltaTime;
        }

        const damping = Math.exp(-1.5 * deltaTime) - 1;
        ball.velocity.addScaledVector(ball.velocity, damping);

        playerBallCollision(ball);
      });

      ballCollisions();

      for (const ball of player.balls) {
        ball.position.copy(ball.collider.center);
      }
    }

    function getForwardVector() {
      camera.getWorldDirection(player.direction);
      player.direction.y = 0;
      player.direction.normalize();

      return player.direction;
    }

    function getSideVector() {
      camera.getWorldDirection(player.direction);
      player.direction.y = 0;
      player.direction.normalize();
      player.direction.cross(camera.up);

      return player.direction;
    }

    function controls(deltaTime: number) {
      const speedDelta = deltaTime * (player.onTheFloor ? 25 : 8);

      if (control.Escape) {
        cancelAnimationFrame(animation);
        document.body.classList.remove("eggs");
        removeEventListener("mousedown", onMouseDown)
        removeEventListener("mouseup", onMouseUp)
        removeEventListener("mousemove", onMouseMove)
        renderer.domElement.remove();
        game.remove();
      }

      if (control.KeyW) {
        player.velocity.add(getForwardVector().multiplyScalar(speedDelta));
      }

      if (control.KeyS) {
        player.velocity.add(getForwardVector().multiplyScalar(-speedDelta));
      }

      if (control.KeyA) {
        player.velocity.add(getSideVector().multiplyScalar(-speedDelta));
      }

      if (control.KeyD) {
        player.velocity.add(getSideVector().multiplyScalar(speedDelta));
      }

      if (player.onTheFloor) {
        if (control.Space) {
          player.velocity.y = 15;
        }
      }
    }

    addEventListener("resize", onWindowResize);

    function onWindowResize() {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      const deltaTime = Math.min(0.05, clock.getDelta()) / STEPS_PER_FRAME;

      for (let i = 0; i < STEPS_PER_FRAME; i++) {
        controls(deltaTime);

        updatePlayer(deltaTime);

        updateBalls(deltaTime);

        teleportPlayerIfOob();
      }

      renderer.render(scene, camera);
    }

    animate();
  });

  game = <div className="game">{renderer.domElement}</div>;

  return <>{game}</>;
}
