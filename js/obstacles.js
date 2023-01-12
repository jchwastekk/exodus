import { platform } from './platform.js';
import { canvas } from './app.js';
import { score } from './score.js';
import { gameOver } from './gameover.js';
import { obstacleImages, getRandomObstacleImage } from './images.js';
import Howler from 'howler';

const obstacles = [];

const speedupSound = new Howler.Howl({
    src: ['sounds/level/speedup.mp3'],
});

const enemiesSound = new Howler.Howl({
    src: ['sounds/enemies/enemy-1.mp3'],
});

const uniqueObstacleImages = new Set();

let level = 1;


function createObstacle() {
  const startX = Math.random() * canvas.width;
  const startY = Math.random() * canvas.height;
  let directionX = 0;
  let directionY = 0;

  let obstacleImage;
  if (level <= 2) {
    obstacleImage = 'obstacle-1';
  } else if (level <= 4) {
    obstacleImage = Math.random() < 0.5 ? 'obstacle-1' : 'obstacle-2';
  } else if (level <= 6) {
    obstacleImage = Math.random() < 0.5 ? 'obstacle-2' : 'obstacle-3';
  } else if (level <= 20) {
    obstacleImage = Math.random() < 0.5 ? 'obstacle-3' : 'obstacle-4';
  } else {
    obstacleImage = Math.random() < 0.5 ? 'obstacle-4' : 'obstacle-5';
  }

  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:

      directionY = Math.random() < 0.5 ? -1 : 1;
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:

      directionX = Math.random() < 0.5 ? -1 : 1;
      break;
    default:

      directionX = Math.random() < 0.5 ? -1 : 1;
      directionY = Math.random() < 0.5 ? -1 : 1;
      break;
  }

  const obstacle = {
    x: startX,
    y: startY,
    width: 25,
    height: 25,
    color: '#0000ff',
    speed: level,
    obstacleImage,
    velocity: {
      x: directionX,
      y: directionY,
    },
  };
  obstacles.push(obstacle);
  if (obstacleImage !== 'obstacle-1' && !uniqueObstacleImages.has(obstacleImage)) {
      enemiesSound.play();
      uniqueObstacleImages.add(obstacleImage);
  }


}




function updateObstacles() {

  for (const obstacle of obstacles) {
    obstacle.x += obstacle.velocity.x * obstacle.speed;
    obstacle.y += obstacle.velocity.y * obstacle.speed;
    if (obstacle.x + obstacle.width < 0 || obstacle.x > canvas.width || obstacle.y + obstacle.height < 0 || obstacle.y > canvas.height) {
      const index = obstacles.indexOf(obstacle);
      obstacles.splice(index, 1);

    }
  }

  const currentLevel = Math.floor(score / 500);

  if (gameOver === true) {
    level = 1;
    uniqueObstacleImages.clear();
  } else {
  if (currentLevel > level) {
    level = currentLevel;
    speedupSound.play();
  }

  for (const obstacle of obstacles) {
    obstacle.speed =  level/2;
  }
}
}




function drawObstacles() {
  for (const obstacle of obstacles) {
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = `img/obstacles/${obstacle.obstacleImage}.png`;
    ctx.drawImage(image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}


function drawObstacleSpeed() {
  for (const obstacle of obstacles) {
    const ctx = canvas.getContext('2d');
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095dd';
    ctx.textAlign = 'right';
    ctx.fillText(`Speed: ${obstacle.speed}`, canvas.width - 40, 20);
  }
}



export { level, obstacles, createObstacle, updateObstacles, drawObstacles, drawObstacleSpeed };
