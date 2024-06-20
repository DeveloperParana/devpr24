import { esc, p, r, up, right, down, left } from "./vectors";
import { randomInt, useKeyDown } from "../../utils";
import { Key } from "./key";

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

export function Snake({ grid, initialSize: maxCells }: SnakeAttrs) {
  const canvas = document.createElement("canvas");
  canvas.width = grid * 26;
  canvas.height = grid * 26;
  const context = canvas.getContext("2d");

  if (!context) throw `context error`;

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

  let media = matchMedia("(max-width: 991px)");

  const gameLoop = () => {
    animation = requestAnimationFrame(gameLoop);

    if (++count < (media.matches ? 8 : 4)) return;

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

  let game: JSX.Element;

  const onP = () => {
    paused = !paused;
  };
  const onR = () => {
    snake.x = grid * 10;
    snake.y = grid * 10;
    snake.dy = 0;
    snake.dx = grid;
    snake.cells = [];
    snake.maxCells = 4;

    gameOver = false;

    lastRecord = record.take();
    score = 0;
  };
  const onEsc = () => {
    cancelAnimationFrame(animation);
    document.body.classList.remove("eggs");
    canvas.remove();
    game.remove();
  };
  const onUp = () => {
    if (snake.dy === 0) {
      snake.dy = -grid;
      snake.dx = 0;
    }
  };
  const onRight = () => {
    if (snake.dx === 0) {
      snake.dx = grid;
      snake.dy = 0;
    }
  };
  const onDown = () => {
    if (snake.dy === 0) {
      snake.dy = grid;
      snake.dx = 0;
    }
  };
  const onLeft = () => {
    if (snake.dx === 0) {
      snake.dx = -grid;
      snake.dy = 0;
    }
  };

  useKeyDown((key) => {
    switch (key) {
      case "KeyP":
        return onP();
      case "KeyR":
        return onR();
      case "Escape":
        return onEsc();
      case "ArrowLeft":
        return onLeft();
      case "ArrowUp":
        return onUp();
      case "ArrowRight":
        return onRight();
      case "ArrowDown":
        return onDown();
    }
  });

  game = (
    <div className="game">
      {canvas}
      <nav>
        <Key value="left" path={left} onClick={onLeft} />
        <Key value="up" path={up} onClick={onUp} />
        <Key value="r" path={r} onClick={onR} />
        <Key value="esc" path={esc} onClick={onEsc} />
        <Key value="p" path={p} onClick={onP} />
        <Key value="down" path={down} onClick={onDown} />
        <Key value="right" path={right} onClick={onRight} />
      </nav>
    </div>
  );

  gameLoop();

  return <>{game}</>;
}
