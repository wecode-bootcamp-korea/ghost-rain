function create() {
  const ghostElement = document.createElement('div');

  ghostElement.style.position = 'absolute';
  ghostElement.style.top = '0px';
  ghostElement.style.left = '50%';

  ghostElement.style.width = GHOST_WIDTH + 'px';
  ghostElement.style.height = GHOST_HEIGHT + 'px';
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bg.appendChild(ghostElement);
}

create();
