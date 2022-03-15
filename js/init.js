const player = new Hero();
let ghosts = [];

function init() {
  document.addEventListener(
    'keydown',
    function (e) {
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    'keyup',
    function (e) {
      checkKey(e, false);
    },
    false
  );

  setInterval(function () {
    initGhost();
  }, 2000);

  window.requestAnimationFrame(updateAllghosts);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39:
        player.move('right');
        e.preventDefault();
        break;
      case 37:
        player.move('left');
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}

function initGhost() {
  const ghost = new Ghost();
  ghosts.push(ghost);
}

function updateAllghosts() {
  ghosts.forEach((el, idx) => {
    if (!el.isDead) {
      el.move(player);
    } else {
      ghosts.splice(idx, 1);
    }
  });

  window.requestAnimationFrame(updateAllghosts);
}

init();
