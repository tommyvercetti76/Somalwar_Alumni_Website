// carousel.js

const carousel = document.querySelector('.carousel');
let startX;
let scrollLeft;

function handleSwipeStart(e) {
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
}

function handleSwipeMove(e) {
  const currentX = e.pageX || e.touches[0].pageX;
  const difference = startX - currentX;
  carousel.scrollLeft = scrollLeft + difference;
}

carousel.addEventListener('mousedown', handleSwipeStart);
carousel.addEventListener('mousemove', handleSwipeMove);
carousel.addEventListener('mouseup', () => {
  carousel.removeEventListener('mousemove', handleSwipeMove);
});

carousel.addEventListener('touchstart', handleSwipeStart);
carousel.addEventListener('touchmove', handleSwipeMove);
carousel.addEventListener('touchend', () => {
  carousel.removeEventListener('touchmove', handleSwipeMove);
});
