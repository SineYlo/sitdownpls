import Swiper from 'swiper/swiper-bundle';
import checkingVisibilitySlides from '../../global/_checking-visibility-slides';

const similarProductsSection = document.querySelector('.similar-products-section');

if (similarProductsSection) {
  const swiperContainer = similarProductsSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: 16,
    slidesPerView: 2,
    slidesPerGroup: 2,
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    navigation: {
      nextEl: '.similar-products-section .swiper-controls__button-next',
      prevEl: '.similar-products-section .swiper-controls__button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      1071: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 32,
      },

      831: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },

      577: {
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
