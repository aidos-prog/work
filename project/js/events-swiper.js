new Swiper('.events-swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.events__next',
    prevEl: '.events__prev',
  },
  pagination: {
    el: '.events-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },
  },
});