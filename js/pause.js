import { canvas} from './app.js';



function drawPauseScreen() {
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'center';
  ctx.fillText('Paused', canvas.width / 2, canvas.height / 2);
}


export { drawPauseScreen };
