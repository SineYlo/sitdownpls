import Swiper from 'swiper/swiper-bundle';
import checkingVisibilitySlides from '../global/_checking-visibility-slides';

const usefulSection = document.querySelector('.useful-section');

if (usefulSection) {
  const swiperContainer = usefulSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: 12,
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    navigation: {
      nextEl: '.useful-section .swiper-controls__button-next',
      prevEl: '.useful-section .swiper-controls__button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },

      831: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },

      1071: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
    },

    on: {
      init() {
        checkingVisibilitySlides(this.slides, 'ui-slide-visible');
      },

      slideChange() {
        checkingVisibilitySlides(this.slides, 'ui-slide-visible');
      },
    },
  });
}
