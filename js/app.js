import { drawCharacterSelection, player, drawPlayer, updatePlayer } from './player.js';
import { platform, drawPlatform } from './platform.js';
import { obstacles, createObstacle, updateObstacles, drawObstacles, drawObstacleSpeed } from './obstacles.js';
import { score, drawScore, updateScore } from './score.js';
import { gameOver, drawGameOver, checkCollision, resetGame } from './gameover.js';
import { drawFirstScreen,drawStartScreen } from './start.js';
import { drawPauseScreen } from './pause.js';
import { drawLevel } from './level.js';
import { getRandomBackgroundImage } from './images.js';

export const keys = {
ArrowUp: false,
ArrowDown: false,
ArrowLeft: false,
ArrowRight: false,
};

document.body.style.backgroundImage = `url(${getRandomBackgroundImage()})`;

document.addEventListener('keydown', (event) => {

if (event.code === 'ArrowUp') keys.ArrowUp = true;
if (event.code === 'ArrowDown') keys.ArrowDown = true;
if (event.code === 'ArrowLeft') keys.ArrowLeft = true;
if (event.code === 'ArrowRight') keys.ArrowRight = true;
});


document.addEventListener('keyup', (event) => {

if (event.code === 'ArrowUp') keys.ArrowUp = false;
if (event.code === 'ArrowDown') keys.ArrowDown = false;
if (event.code === 'ArrowLeft') keys.ArrowLeft = false;
if (event.code === 'ArrowRight') keys.ArrowRight = false;
});

let started = false;
let paused = false;

export const canvas = document.getElementById('game');

const ctx = canvas.getContext('2d');


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!started) {
    drawFirstScreen();
    if (player.image) {
      started = true;
      drawStartScreen();
    } else {
      drawCharacterSelection();
    }
  } else if (player.image) {
    updatePlayer();
    drawPlayer();
    updateScore();
    drawScore();
    updateObstacles();
    drawObstacles();
    drawLevel();
    drawObstacleSpeed();
  }

  checkCollision();
  drawPlatform();

  if (gameOver) {
    drawGameOver();
  } else if (paused) {
    drawPauseScreen();
  } else {
    requestAnimationFrame(draw);
  }
}





draw();



document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    if (!started) {
      started = true;
    } else if (paused) {
      paused = false;
    } else {
      paused = true;
    }
    draw();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && gameOver) {
    resetGame();
  }
});



setInterval(createObstacle, 1000);
