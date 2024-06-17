import { randomInt, useKeyDown } from "../utils";

export interface Vector {
  x: number;
  y: number;
}

export interface Snake extends Vector {
  dx: number;
  dy: number;
  cells: Vector[];
  maxCells: number;
}

export interface SnakeAttrs {
  grid: number;
  initialSize: number;
}

function drawText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  color = "black",
  align: CanvasTextAlign = "start",
  font = "20px Mukta"
) {
  context.font = font;
  context.fillStyle = color;
  context.textAlign = align;
  context.fillText(text, x, y);
}

const record = {
  save(value: number) {
    localStorage.setItem("record", String(value));
  },
  take() {
    const value = localStorage.getItem("record");
    return value ? +value : 0;
  },
};

function Help() {
  return <footer>
  <figure>
    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="0.5" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1648 13.3291L12.2798 17.2141L12.8932 17.8275L15.7311 14.9896L15.7311 21.1051H16.5985L16.5985 14.9896L19.4364 17.8275L20.0498 17.2141L16.1648 13.3291Z" fill="black"/>
    </svg>
    <figcaption>Move para cima</figcaption>
  </figure>
  <figure>
    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.03027" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="1.03027" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.583 18.217L17.698 14.332L17.0846 14.9454L19.9225 17.7833L13.807 17.7833V18.6508L19.9225 18.6508L17.0846 21.4887L17.698 22.1021L21.583 18.217Z" fill="black"/>
    </svg>
    <figcaption>Move para direita</figcaption>
  </figure>
  <figure>
    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.560059" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="0.560059" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2249 23.105L20.1099 19.22L19.4965 18.6066L16.6586 21.4445L16.6586 15.3289H15.7911L15.7911 21.4445L12.9532 18.6066L12.3398 19.22L16.2249 23.105Z" fill="black"/>
    </svg>
    <figcaption>Move para baixo</figcaption>
  </figure>
  <figure>
    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.09033" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="1.09033" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8672 18.217L15.7522 22.1021L16.3656 21.4887L13.5277 18.6508L19.6432 18.6508V17.7833L13.5277 17.7833L16.3656 14.9454L15.7522 14.332L11.8672 18.217Z" fill="black"/>
    </svg>
    <figcaption>Move para esquerda</figcaption>
  </figure>
  <figure>
    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.620605" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="0.620605" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path d="M14.0728 21.6868V14.7471H16.5464C17.084 14.7471 17.5302 14.8397 17.8849 15.0249C18.2418 15.2102 18.5084 15.4666 18.6846 15.7941C18.8608 16.1194 18.9489 16.4956 18.9489 16.9225C18.9489 17.3472 18.8597 17.7211 18.6812 18.0441C18.505 18.3649 18.2384 18.6145 17.8815 18.793C17.5268 18.9715 17.0807 19.0607 16.543 19.0607H14.6691V18.1593H16.4481C16.787 18.1593 17.0626 18.1108 17.2749 18.0136C17.4895 17.9165 17.6465 17.7753 17.7459 17.5901C17.8453 17.4048 17.895 17.1823 17.895 16.9225C17.895 16.6605 17.8442 16.4334 17.7426 16.2414C17.6432 16.0494 17.4862 15.9026 17.2715 15.8009C17.0592 15.697 16.7802 15.645 16.4346 15.645H15.1198V21.6868H14.0728ZM17.4986 18.5558L19.2132 21.6868H18.0204L16.3397 18.5558H17.4986Z" fill="black"/>
    </svg>
    <figcaption>Reinicia o jogo</figcaption>
  </figure>
  <figure>
    <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.15039" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="1.15039" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path d="M14.626 21.6868V14.7471H17.0996C17.6395 14.7471 18.0868 14.8453 18.4415 15.0419C18.7962 15.2384 19.0616 15.5072 19.2378 15.8484C19.414 16.1872 19.5021 16.569 19.5021 16.9937C19.5021 17.4206 19.4129 17.8047 19.2344 18.1458C19.0582 18.4846 18.7916 18.7535 18.4347 18.9523C18.08 19.1488 17.6339 19.2471 17.0962 19.2471H15.3952V18.3593H17.0014C17.3425 18.3593 17.6192 18.3005 17.8315 18.1831C18.0439 18.0633 18.1998 17.9007 18.2992 17.6951C18.3986 17.4895 18.4483 17.2557 18.4483 16.9937C18.4483 16.7316 18.3986 16.499 18.2992 16.2956C18.1998 16.0923 18.0428 15.9331 17.8282 15.8179C17.6158 15.7026 17.3357 15.645 16.9878 15.645H15.673V21.6868H14.626Z" fill="black"/>
    </svg>
    <figcaption>Pausa</figcaption>
  </figure>
  <figure>
    <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.680664" y="0.5" width="31.5301" height="35" rx="3.5" fill="white"/>
      <rect x="0.680664" y="0.5" width="31.5301" height="35" rx="3.5" stroke="#93928B"/>
      <path d="M8.74363 30.0327C8.23083 30.0327 7.78919 29.9231 7.41871 29.704C7.05049 29.4826 6.76585 29.172 6.56479 28.7721C6.366 28.37 6.2666 27.899 6.2666 27.3591C6.2666 26.826 6.366 26.3561 6.56479 25.9495C6.76585 25.5428 7.04597 25.2254 7.40516 24.9973C7.7666 24.7691 8.18904 24.655 8.67247 24.655C8.96615 24.655 9.25079 24.7036 9.52639 24.8007C9.80199 24.8979 10.0494 25.0504 10.2685 25.2582C10.4876 25.466 10.6604 25.736 10.7869 26.0681C10.9134 26.3979 10.9767 26.7989 10.9767 27.271V27.6302H6.83927V26.8711H9.98385C9.98385 26.6046 9.92963 26.3685 9.82119 26.1629C9.71276 25.9551 9.56028 25.7913 9.36374 25.6716C9.16946 25.5519 8.9413 25.492 8.67925 25.492C8.39461 25.492 8.14612 25.562 7.93377 25.7021C7.72368 25.8399 7.56103 26.0206 7.44582 26.2443C7.33287 26.4656 7.27639 26.7062 7.27639 26.966V27.559C7.27639 27.9069 7.33738 28.2028 7.45937 28.4468C7.58362 28.6908 7.75644 28.8772 7.97782 29.0059C8.19921 29.1324 8.45787 29.1957 8.7538 29.1957C8.94582 29.1957 9.12089 29.1686 9.27903 29.1144C9.43716 29.0579 9.57383 28.9743 9.68904 28.8636C9.80425 28.7529 9.89235 28.6162 9.95335 28.4536L10.9123 28.6264C10.8355 28.9088 10.6977 29.1562 10.4989 29.3685C10.3024 29.5786 10.055 29.7424 9.75681 29.8598C9.46088 29.9751 9.12315 30.0327 8.74363 30.0327Z" fill="black"/>
      <path d="M16.0965 25.9935L15.1782 26.1562C15.1398 26.0387 15.0788 25.9269 14.9952 25.8207C14.9139 25.7145 14.8032 25.6275 14.6631 25.5598C14.5231 25.492 14.348 25.4581 14.1379 25.4581C13.851 25.4581 13.6116 25.5225 13.4195 25.6513C13.2275 25.7778 13.1315 25.9416 13.1315 26.1426C13.1315 26.3166 13.1959 26.4566 13.3247 26.5628C13.4534 26.669 13.6613 26.7559 13.9481 26.8237L14.775 27.0135C15.2539 27.1242 15.6108 27.2947 15.8457 27.5251C16.0807 27.7556 16.1981 28.0549 16.1981 28.4231C16.1981 28.7348 16.1078 29.0127 15.9271 29.2567C15.7486 29.4984 15.499 29.6882 15.1782 29.826C14.8597 29.9638 14.4903 30.0327 14.0701 30.0327C13.4873 30.0327 13.0118 29.9084 12.6436 29.6599C12.2753 29.4092 12.0494 29.0534 11.9658 28.5925L12.9451 28.4434C13.0061 28.6987 13.1315 28.8919 13.3213 29.0229C13.511 29.1516 13.7584 29.216 14.0634 29.216C14.3954 29.216 14.6609 29.1471 14.8597 29.0093C15.0585 28.8693 15.1579 28.6987 15.1579 28.4976C15.1579 28.335 15.0969 28.1983 14.9749 28.0876C14.8552 27.9769 14.671 27.8934 14.4225 27.8369L13.5415 27.6437C13.0558 27.533 12.6966 27.3568 12.464 27.1151C12.2335 26.8734 12.1183 26.5673 12.1183 26.1968C12.1183 25.8896 12.2042 25.6208 12.3759 25.3903C12.5475 25.1599 12.7847 24.9803 13.0875 24.8516C13.3902 24.7205 13.7369 24.655 14.1277 24.655C14.6902 24.655 15.133 24.777 15.4561 25.021C15.7791 25.2627 15.9926 25.5869 16.0965 25.9935Z" fill="black"/>
      <path d="M19.6 30.0327C19.0962 30.0327 18.6625 29.9186 18.2987 29.6904C17.9373 29.46 17.6594 29.1426 17.4652 28.7382C17.2709 28.3339 17.1737 27.8708 17.1737 27.3489C17.1737 26.8203 17.2731 26.3538 17.4719 25.9495C17.6707 25.5428 17.9509 25.2254 18.3123 24.9973C18.6737 24.7691 19.0996 24.655 19.5898 24.655C19.9851 24.655 20.3375 24.7284 20.647 24.8753C20.9565 25.0199 21.2061 25.2232 21.3959 25.4852C21.5879 25.7473 21.702 26.0534 21.7381 26.4035H20.7521C20.6978 26.1595 20.5736 25.9495 20.3793 25.7733C20.1873 25.597 19.9298 25.5089 19.6067 25.5089C19.3243 25.5089 19.077 25.5835 18.8646 25.7326C18.6545 25.8794 18.4908 26.0895 18.3733 26.3629C18.2558 26.6339 18.1971 26.9547 18.1971 27.3252C18.1971 27.7047 18.2547 28.0323 18.3699 28.3079C18.4851 28.5835 18.6478 28.797 18.8579 28.9483C19.0702 29.0997 19.3198 29.1754 19.6067 29.1754C19.7987 29.1754 19.9727 29.1403 20.1286 29.0703C20.2867 28.998 20.4189 28.8952 20.525 28.762C20.6335 28.6287 20.7091 28.4683 20.7521 28.2808H21.7381C21.702 28.6174 21.5924 28.9178 21.4094 29.1821C21.2265 29.4464 20.9814 29.6543 20.6741 29.8056C20.3692 29.957 20.0111 30.0327 19.6 30.0327Z" fill="black"/>
    </svg>
    <figcaption>Volta ao site</figcaption>
  </figure>
</footer>
}

export function Snake({ grid, initialSize: maxCells }: SnakeAttrs) {
  const canvas = document.createElement("canvas");
  canvas.width = grid * 26;
  canvas.height = grid * 26;
  const context = canvas.getContext("2d");

  if (!context) throw `context error`;

  const help = <Help />

  const resizeCanvas = () => {
    const width = innerWidth;
    const height = innerHeight;

    const columns = Math.floor(width / grid);
    const rows = Math.floor(height / grid);

    canvas.width = columns * grid;
    canvas.height = rows * grid;
  };

  addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const snake: Snake = {
    x: grid * 10,
    y: grid * 10,
    cells: [],
    maxCells,
    dx: grid,
    dy: 0,
  };

  const contribution: Vector = {
    x: grid * 10 * 2,
    y: grid * 10 * 2,
  };

  let count = 0;
  let score = 0;
  let paused = false;
  let gameOver = false;
  let animation = -1;

  let lastRecord = record.take();

  const gameLoop = () => {
    animation = requestAnimationFrame(gameLoop);

    if (++count < 4) return;

    count = 0;
    context.fillStyle = "#0e1117";
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (!paused && !gameOver) {
      snake.x += snake.dx;
      snake.y += snake.dy;
    }

    if (snake.x < 0) {
      snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
      snake.x = 0;
    }

    if (snake.y < 0) {
      snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
      snake.y = 0;
    }

    if (!paused && !gameOver) {
      snake.cells.unshift({ x: snake.x, y: snake.y });
    }

    if (snake.cells.length > snake.maxCells) {
      snake.cells.pop();
    }

    context.fillStyle = "#3ad353";
    context.fillRect(contribution.x, contribution.y, grid - 1, grid - 1);

    context.fillStyle = "#f9f9f9";

    snake.cells.forEach((cell, index) => {
      context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

      if (gameOver) return;

      if (cell.x === contribution.x && cell.y === contribution.y) {
        snake.maxCells++;
        score = Math.floor((snake.maxCells - maxCells) * 3.14);
        contribution.x =
          randomInt(0, Math.floor(canvas.width / grid) - 1) * grid;
        contribution.y =
          randomInt(0, Math.floor(canvas.height / grid) - 1) * grid;
      }

      for (let i = index + 1; i < snake.cells.length; i++) {
        const { x, y } = snake.cells[i];
        if (cell.x === x && cell.y === y) {
          gameOver = true;

          if (score > record.take()) {
            record.save(score);
          }

          contribution.x =
            randomInt(0, Math.floor(canvas.width / grid) - 1) * grid;
          contribution.y =
            randomInt(0, Math.floor(canvas.height / grid) - 1) * grid;
        }
      }
    });

    drawText(context, `Score: ${score}`, 30, 50, "white");
    if (lastRecord) {
      drawText(context, `Record: ${lastRecord}`, 30, 80, "white");
    }
  };

  useKeyDown((key) => {
    switch (key) {
      case "KeyP": {
        return (paused = !paused);
      }

      case "KeyR": {
        snake.x = grid * 10;
        snake.y = grid * 10;
        snake.dy = 0;
        snake.dx = grid;
        snake.cells = [];
        snake.maxCells = 4;

        gameOver = false;

        lastRecord = record.take();
        return (score = 0);
      }

      case "Escape": {
        cancelAnimationFrame(animation);
        document.body.classList.remove("snake");
        canvas.remove();
        return help.remove();
      }

      case "ArrowLeft": {
        if (snake.dx === 0) {
          snake.dx = -grid;
          snake.dy = 0;
        }
        return;
      }

      case "ArrowUp": {
        if (snake.dy === 0) {
          snake.dy = -grid;
          snake.dx = 0;
        }
        return;
      }

      case "ArrowRight": {
        if (snake.dx === 0) {
          snake.dx = grid;
          snake.dy = 0;
        }
        return;
      }

      case "ArrowDown": {
        if (snake.dy === 0) {
          snake.dy = grid;
          snake.dx = 0;
        }
        return;
      }
    }
  });

  gameLoop();

  return <> {canvas} {help} </>;
}
