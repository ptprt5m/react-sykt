import anime from "animejs";

export const animeFunc = (selector) => {
    const img = document.querySelector(selector)

    if (img != null) {
        img.addEventListener("mouseover", function() {
            anime({
                targets: selector,
                translateX: function () {
                    return anime.random(-10, 40);
                },
                translateY: function () {
                    return anime.random(-10, 40);
                }
            })
        })
    }
}