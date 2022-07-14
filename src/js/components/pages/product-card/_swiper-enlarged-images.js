import Swiper from 'swiper/swiper-bundle';

const swiperDialogLargeImages = document.querySelector('.swiper-dialog-large-images');
const swiperDialogSmallImages = document.querySelector('.swiper-dialog-small-images');

const additionalSwiper = new Swiper(swiperDialogSmallImages, {
  spaceBetween: 10,

  navigation: {
    nextEl: '.enlarged-images .swiper-button-next',
    prevEl: '.enlarged-images .swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },

  breakpoints: {
    1071: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 78,
    },

    831: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 78,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 78,
    },
  },
});

const primarySwiper = new Swiper(swiperDialogLargeImages, {
  thumbs: {
    swiper: additionalSwiper,
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',
  },
});

export default primarySwiper;
