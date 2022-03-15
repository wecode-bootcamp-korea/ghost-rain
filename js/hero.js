const heroElement = document.getElementById('hero');

function setLeft(left) {
  const currentLeft = Number(getComputedStyle(heroElement).left.split('px')[0]);
  const newleft = currentLeft + left;

  if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

  heroElement.style.left = newleft + 'px';
}
