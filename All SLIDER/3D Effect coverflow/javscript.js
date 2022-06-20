//Javascript
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 300,
        modifier: 1.5,
        slideShadows: true,
    },
    //    pagination: {
    //        el: ".swiper-pagination",
    //    },

    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});





