import { canvas } from './app.js';
import Howler from 'howler';

const backgroundSound = new Howler.Howl({
    src: ['sounds/background/atmosphere-1.mp3'],
    loop: true
});

function drawFirstScreen() {
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'center';
  ctx.fillText('Choose your character', canvas.width / 2, canvas.height / 2);
}

function drawStartScreen() {
  const ctx = canvas.getContext('2d');
  ctx.font = '30px Arial';
  ctx.fillStyle = '#0095dd';
  ctx.textAlign = 'center';
  ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height / 2);
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().then(() => {
      backgroundSound.play();
    });
  } else {
    backgroundSound.play();
  }
}



export { backgroundSound, drawFirstScreen, drawStartScreen };
