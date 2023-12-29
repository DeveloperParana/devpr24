const squareSize = 20;
const squareUpdate = 200;
const squareRadius = 5;
let squaresList = []

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById("myCanvas");
  createSquares();
  setInterval(updateSquaresColors, 1000);

  window.addEventListener('resize', function () {
    createSquares();
  });
  window.addEventListener('click', function () {
    updateSquaresColors();
  });

  function createSquares() {
    squaresList = []
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const numSquaresX = Math.floor(canvas.width / squareSize) + 1;
    const numSquaresY = Math.floor(canvas.height / squareSize) + 1;

    for (let x = 0; x < numSquaresX; x++) {
      for (let y = 0; y < numSquaresY; y++) {
        drawRoundedSquare(
          ctx,
          x * squareSize,
          y * squareSize,
          squareSize,
          squareRadius
        );
      }
    }
  }

  function drawRoundedSquare(ctx, x, y, size, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + size - radius, y);
    ctx.quadraticCurveTo(x + size, y, x + size, y + radius);
    ctx.lineTo(x + size, y + size - radius);
    ctx.quadraticCurveTo(x + size, y + size, x + size - radius, y + size);
    ctx.lineTo(x + radius, y + size);
    ctx.quadraticCurveTo(x, y + size, x, y + size - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    ctx.fillStyle = getColor();
    ctx.strokeStyle = "#171717";
    ctx.lineWidth = 4;

    ctx.fill();
    ctx.stroke();

    squaresList.push({
      x: x,
      y: y,
    })
  }

  function getColor() {
    switch (Math.floor(Math.random() * 4)) {
      case 1:
        return '#0e4429';
      case 2:
        return '#006d32';
      case 3:
        return '#26a641';
      case 4:
        return '#39d353';
      default:
        return '#171717';
    }
  }

  function updateSquaresColors() {
    const ctx = canvas.getContext("2d");
    const generatedNumbersList = generateNumbers();
    for (let item of generatedNumbersList) {
      drawRoundedSquare(ctx, squaresList[item].x, squaresList[item].y, squareSize, squareRadius);
    }
  }

  function generateNumbers() {
    const min = 1;
    const max = squaresList.length - 1;
    const numbersList = new Set();

    while (numbersList.size < squareUpdate) {
      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      numbersList.add(value);
    }

    return Array.from(numbersList);
  }
});
