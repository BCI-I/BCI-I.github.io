// animation.js
function fadeIn(element, delay) {
  setTimeout(function() {
    element.style.opacity = '1';
  }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
  const sloganElement = document.querySelector('.BCII-slogan');
  const imgElement = document.querySelector('.landing-hero-img');

  const delaySlogan = 250;
  const delayImg = 1000;

  fadeIn(sloganElement, delaySlogan);
  fadeIn(imgElement, delayImg);
});