class Hero {
  constructor() {
    this.heroElement = document.getElementById('hero');
    this.left = Number(getComputedStyle(this.heroElement).left.split('px')[0]);

    this.speed = 2;
    this.isRightKey = false;
    this.isLeftKey = false;
  }

  checkDirection() {
    this.heroElement.className = 'face';

    if (this.isRightKey) {
      this.heroElement.className = 'right';
      this.setLeft(-this.speed);
    } else if (this.isLeftKey) {
      this.heroElement.className = 'left';
      this.setLeft(this.speed);
    }
  }

  setLeft(left) {
    const newleft = this.left - left;

    if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

    this.left = newleft;
    this.heroElement.style.left = this.left + 'px';
  }
}
