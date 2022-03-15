class Hero {
  constructor() {
    this.heroElement = document.getElementById('hero');
    this.left = Number(getComputedStyle(this.heroElement).left.split('px')[0]);

    this.speed = 10;
    this.isRightKey = false;
    this.isLeftKey = false;
  }

  move(direction) {
    switch (direction) {
      case 'right':
        this.heroElement.className = 'right';
        this.setLeft(-this.speed);
        break;
      case 'left':
        this.heroElement.className = 'left';
        this.setLeft(this.speed);
        break;
      default:
    }
  }

  stop() {
    this.heroElement.className = 'face';
  }

  setLeft(left) {
    const newleft = this.left - left;

    if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

    this.left = newleft;
    this.heroElement.style.left = this.left + 'px';
  }
}
