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

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        heroElement.className = 'right';
        setLeft(2);
        e.preventDefault();
        break;
      case 37: //left
        heroElement.className = 'left';
        setLeft(-2);
        e.preventDefault();
        break;
    }
  } else {
    heroElement.className = 'stop';
  }
}
