const canvas = document.getElementById('game');

const platform = {
  x: 0,
  y: canvas.height-2,
  width: canvas.width,
  height: 1,
  color: '#00ff00',
};

function drawPlatform() {
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = platform.color;
  ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  ctx.fillRect(platform.x, 0, platform.width, platform.height);
  ctx.fillRect(platform.x, platform.y, 1 , platform.height - platform.width);
  ctx.fillRect(platform.x + platform.width - 1, platform.y , platform.height , platform.height - platform.width);
}

export { platform, drawPlatform };
