new Swiper('.projects-swiper', {
  
  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 21
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 21
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1919: {
      slidesPerView: 3,
      spaceBetween: 50
    },
  },
});