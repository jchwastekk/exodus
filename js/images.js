const backgroundImages = [];

for (let i = 1; i <= 4; i++) {
  backgroundImages.push(`img/background/background-${i}.png`);
}

const obstacleImages = [];

for (let i = 1; i <= 5; i++) {
  obstacleImages.push(`img/obstacles/obstacle-${i}.png`);
}

const playerImages = [];

for (let i = 1; i <= 4; i++) {
  playerImages.push(`img/player/player-${i}.png`);
}

function getRandomBackgroundImage() {
  const index = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[index];
}

function getRandomObstacleImage() {
  const index = Math.floor(Math.random() * obstacleImages.length);
  return obstacleImages[index];
}

function getRandomPlayerImage() {
  const index = Math.floor(Math.random() * playerImages.length);
  return playerImages[index];
}

export { obstacleImages, playerImages, getRandomBackgroundImage, getRandomObstacleImage, getRandomPlayerImage };
