// fadeIn.js
function fadeInEffect() {
    document.body.style.transition = "opacity 1s ease-in-out"; // 1초 동안 페이드인 효과
    document.body.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0"; // 시작 시 투명하게 설정
    setTimeout(() => {
        fadeInEffect(); // 100ms 후 페이드인 효과 실행
    }, 100);
});
