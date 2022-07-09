import Swiper from 'swiper/swiper-bundle';
import checkingVisibilitySlides from '../global/_checking-visibility-slides';
import { firstGap, thirdGap } from '../global/_gap';

const usefulSection = document.querySelector('.useful-section');

if (usefulSection) {
  const swiperContainer = usefulSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: thirdGap,
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
        spaceBetween: firstGap,
      },

      831: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: firstGap,
      },

      1071: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: firstGap,
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
