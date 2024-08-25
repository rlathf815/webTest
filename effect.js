// Loader가 애니메이션을 마쳤을 때만 display: none을 적용
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        document.body.classList.add("reveal");

        const loaderBars = document.querySelectorAll("#loader > div");
        let completedTransitions = 0;

        // 각 div의 transition이 완료될 때마다 확인
        loaderBars.forEach((bar) => {
            bar.addEventListener("transitionend", () => {
                completedTransitions += 1;
                // 모든 bar가 화면 밖으로 나가면 loader를 숨김
                if (completedTransitions === loaderBars.length) {
                    loader.style.display = "none";
                }
            });
        });
    }, 1000);
});
