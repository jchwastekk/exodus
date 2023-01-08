import { canvas } from './app.js';
import { level } from './obstacles.js';



function drawLevel() {
  const ctx = canvas.getContext('2d');
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'right';
  ctx.fillText(`Level: ${level}`, canvas.width - 40, 40);
}


export {drawLevel};
