function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function create() {
  let enemyTop = 0;
  const ghostElement = document.createElement('div');

  ghostElement.style.position = 'absolute';
  ghostElement.style.top = enemyTop + 'px';
  ghostElement.style.left = randomRange(0, BG_WIDTH - GHOST_WIDTH) + 'px';

  ghostElement.style.width = GHOST_WIDTH + 'px';
  ghostElement.style.height = GHOST_HEIGHT + 'px';
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bg.appendChild(ghostElement);

  window.requestAnimationFrame(function () {
    move(enemyTop, ghostElement);
  });
}

function move(top, el) {
  top++;

  if (top > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
    const ghostLeft = Number(el.style.left.split('px')[0]);
    const heroLeft = Number(heroElement.style.left.split('px')[0]);

    if (heroLeft < ghostLeft + GHOST_WIDTH && heroLeft + HERO_WIDTH > ghostLeft) {
      die(el);
      return;
    }

    if (top > BG_HEIGHT - GHOST_HEIGHT) {
      remove(el);
      return;
    }
  }

  el.style.top = top + 'px';

  window.requestAnimationFrame(function () {
    move(top, el);
  });
}

function remove(ghostElement) {
  ghostElement.remove();
}

function die(ghostElement) {
  ghostElement.style.backgroundPosition = '-45px';

  const soundEffect = new Audio('./audio/dying.wav');
  soundEffect.play();

  setTimeout(() => {
    remove(ghostElement);
  }, 3000);
}
