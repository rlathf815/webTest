function applyTouchEffect(selector) {
  const elements = document.querySelectorAll(selector); // 전달된 셀렉터로 요소 선택

  elements.forEach((element) => {
      element.addEventListener('touchstart', () => {
          element.classList.add('touch-active'); // 터치 시 touch-active 클래스 추가
      });

      element.addEventListener('touchend', () => {
          element.classList.remove('touch-active'); // 터치 끝나면 touch-active 클래스 제거
      });

      // 마우스 클릭을 위해서도 동일한 효과 적용
      element.addEventListener('mousedown', () => {
          element.classList.add('touch-active');
      });

      element.addEventListener('mouseup', () => {
          element.classList.remove('touch-active');
      });
  });
}
