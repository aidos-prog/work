new Swiper('.projects-swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev',
  },
  breakpoints: {
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