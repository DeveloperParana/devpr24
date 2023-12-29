      document.addEventListener('DOMContentLoaded', function () {
        createSquare();
        setInterval(createSquare, 3000);
      });

      window.addEventListener('resize', function () {
        createSquare();
      });

      function createSquare() {
        const commits = document.querySelector('.commits');
        commits.innerHTML = '';
        const size = 20;

        const numSquaresX = Math.floor(window.innerWidth / size);
        const numSquaresY = Math.floor(window.innerHeight / size);

        for (let y = 0; y < numSquaresY; y++) {
          for (let x = 0; x < numSquaresX; x++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.background = getColor();
            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
            commits.appendChild(square);
          }
        }
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
