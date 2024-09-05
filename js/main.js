const swiper = new Swiper(".swiper", {
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        620: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },

        1280: {
            slidesPerView: 4,
        },
    },
})
