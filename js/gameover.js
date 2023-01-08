import { canvas } from './app.js';
import { player } from './player.js';
import { obstacles } from './obstacles.js';
import { score } from './score.js';

let gameOver = false;

function drawGameOver() {
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'center';
  ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
  ctx.font = '20px Arial';
  ctx.fillText('Press double SPACE to start again', canvas.width / 2, canvas.height / 2 + 30);
  ctx.font = '16px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 60);
}

function checkCollision() {
  for (const obstacle of obstacles) {
    if (
      player.x < obstacle.x + obstacle.width &&
      player.x + player.width > obstacle.x &&
      player.y < obstacle.y + obstacle.height && 
      player.y + player.height > obstacle.y
    ) {
      gameOver = true;
    }
  }
}



function resetGame() {
  gameOver = false;
  player.x = canvas.width / 2;
  player.y = canvas.height - player.height;
  obstacles.length = 0;
}


export { gameOver, drawGameOver, checkCollision, resetGame };
