import { canvas} from './app.js';
import { gameOver } from './gameover.js';

let score = 0;

function drawScore() {
  const ctx = canvas.getContext('2d');
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'left';
  ctx.fillText(`Score: ${score}`, canvas.width - 760, 20);
}

function updateScore() {
  if (gameOver === true) {
    score = 0;
  } else {
  score += 1;
  }
}

export { score, drawScore, updateScore };
