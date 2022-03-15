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
        setLeft(2);
        e.preventDefault();
        break;
      case 37: //left
        setLeft(-2);
        e.preventDefault();
        break;
    }
  }
}
