function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let enemyTop = 0;
const ghostElement = document.createElement('div');

function create() {
  ghostElement.style.position = 'absolute';
  ghostElement.style.top = enemyTop + 'px';
  ghostElement.style.left = randomRange(0, BG_WIDTH - GHOST_WIDTH) + 'px';

  ghostElement.style.width = GHOST_WIDTH + 'px';
  ghostElement.style.height = GHOST_HEIGHT + 'px';
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bg.appendChild(ghostElement);

  window.requestAnimationFrame(move);
}

function move() {
  enemyTop++;
  ghostElement.style.top = enemyTop + 'px';

  window.requestAnimationFrame(move);
}

create();
