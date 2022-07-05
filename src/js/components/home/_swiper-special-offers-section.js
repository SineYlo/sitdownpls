import Swiper from 'swiper/swiper-bundle';
import { firstGap, thirdGap } from '../global/_gap';

const specialOffersSection = document.querySelector('.special-offers-section');

if (specialOffersSection) {
  const swiperContainer = specialOffersSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: thirdGap,

    navigation: {
      nextEl: '.special-offers-section .swiper-controls__button-next',
      prevEl: '.special-offers-section .swiper-controls__button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      591: {
        slidesPerGroup: 2,
        spaceBetween: firstGap,
      },

      993: {
        slidesPerGroup: 3,
        spaceBetween: firstGap,
      },
    },
  });
}
