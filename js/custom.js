


var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
// when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});