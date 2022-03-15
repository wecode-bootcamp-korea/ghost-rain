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

  if (enemyTop > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
    const ghostLeft = Number(ghostElement.style.left.split('px')[0]);
    const heroLeft = Number(heroElement.style.left.split('px')[0]);

    if (heroLeft < ghostLeft + GHOST_WIDTH && heroLeft + HERO_WIDTH > ghostLeft) {
      die();
      return;
    }

    if (enemyTop > BG_HEIGHT - GHOST_HEIGHT) {
      remove();
      return;
    }
  }

  ghostElement.style.top = enemyTop + 'px';

  window.requestAnimationFrame(move);
}

function remove() {
  ghostElement.remove();
}

function die() {
  ghostElement.style.backgroundPosition = '-45px';

  const soundEffect = new Audio('./audio/dying.wav');
  soundEffect.play();

  setTimeout(() => {
    remove();
  }, 3000);
}

create();
