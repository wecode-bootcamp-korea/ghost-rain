const heroElement = document.getElementById('hero');

function setLeft(left) {
  const currentLeft = Number(getComputedStyle(heroElement).left.split('px')[0]);
  const newleft = currentLeft + left;

  heroElement.style.left = newleft + 'px';
}
