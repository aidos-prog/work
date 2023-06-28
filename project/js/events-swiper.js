document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".events-swiper", {
    
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: '.events-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.events__next',
    prevEl: '.events__prev',
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
      1650: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      },
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, 

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});
