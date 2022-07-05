import Swiper from 'swiper/swiper-bundle';
import { firstGap, secondGap } from '../../global/_gap';

const similarProductsSection = document.querySelector('.similar-products-section');

if (similarProductsSection) {
  const swiperContainer = similarProductsSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: secondGap,
    slidesPerView: 2,
    slidesPerGroup: 2,

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
        spaceBetween: firstGap,
      },

      831: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: firstGap,
      },

      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: firstGap,
      },
    },
  });
}
