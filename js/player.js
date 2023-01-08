import {
  canvas,
  keys
} from './app.js';
import {
  playerImages
} from './images.js';
import {
  drawFirstScreen
} from './start.js';

const player = {
  x: 0,
  y: 200,
  width: 25,
  height: 25,
  color: '#ff0000',
  movement: 0,
};

function drawCharacterSelection() {
  const ctx = canvas.getContext('2d');
  drawFirstScreen();

  for (let i = 0; i < playerImages.length; i++) {
    const image = new Image();
    image.src = playerImages[i];
    ctx.drawImage(image, 50 + i * 100, 50, 75, 75);
  }


  canvas.addEventListener('click', (event) => {
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;


    for (let i = 0; i < playerImages.length; i++) {
      if (x > 50 + i * 100 && x < 125 + i * 100 && y > 50 && y < 125) {
        player.image = playerImages[i];
      }
    }
  });
}


function drawPlayer() {
  const ctx = canvas.getContext('2d');
  const playerImage = new Image();
  playerImage.src = player.playerImage;
  ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function updatePlayer() {
  if (keys.ArrowUp) player.y -= 10;
  if (keys.ArrowDown) player.y += 10;
  if (keys.ArrowLeft) player.x -= 10;
  if (keys.ArrowRight) player.x += 10;


  if (player.image) {
    player.playerImage = player.image;
  }

  if (player.x < 0) {
    player.x = 0;
  } else if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
  }
}




export {
  drawCharacterSelection,
  player,
  drawPlayer,
  updatePlayer
};
