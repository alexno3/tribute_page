const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener ("scroll", function () {
    if (window.scrollY >= 100) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
})
