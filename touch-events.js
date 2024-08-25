const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('touchstart', () => {
    box.classList.add('touch-active');
  });

  box.addEventListener('touchend', () => {
    box.classList.remove('touch-active');
  });
});