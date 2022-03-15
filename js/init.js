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
    initGhosts();
  }, 2000);

  window.requestAnimationFrame(loop);
}

function checkKey(e, value) {
  const keyID = e.keyCode || e.which;

  switch (keyID) {
    case 39: //right
      player.isRightKey = value;
      e.preventDefault();
      break;
    case 37: //left
      player.isLeftKey = value;
      e.preventDefault();
      break;
  }
}

function initGhosts() {
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
}

function loop() {
  player.checkDirection();
  updateAllghosts();
  window.requestAnimationFrame(loop);
}

init();
