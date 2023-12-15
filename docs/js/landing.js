// animation.js
function fadeIn(element, delay) {
  setTimeout(function() {
    element.style.opacity = '1';
  }, delay);
}

document.addEventListener('DOMContentLoaded', function() {
  const sloganElement = document.querySelector('.BCII-slogan');
  const imgElement = document.querySelector('.landing-hero-img');

  const delaySlogan = 500;
  const delayImg = 1500;

  fadeIn(sloganElement, delaySlogan);
  fadeIn(imgElement, delayImg);
  
  // shift img left after fade in 
    // setTimeout(function() {
    //     imgElement.style.transform = `translateX(-30vw)`;
    // }, delayImg + 500);

});