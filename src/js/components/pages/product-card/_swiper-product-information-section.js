import Swiper from 'swiper/swiper-bundle';

const productInformationSection = document.querySelector('.product-information-section');

if (productInformationSection) {
  const swiperContainerLargeImages = productInformationSection.querySelector(
    '.swiper-large-images',
  );
  const swiperContainerSmallImages = productInformationSection.querySelector(
    '.swiper-small-images',
  );

  const additionalSwiper = new Swiper(swiperContainerSmallImages, {
    slidesPerView: 2.6,
    spaceBetween: 38,

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
    },

    breakpoints: {
      1071: {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 38,
      },

      993: {
        direction: 'horizontal',
        slidesPerView: 3.6,
        spaceBetween: 38,
      },

      577: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  const primarySwiper = new Swiper(swiperContainerLargeImages, {
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
}
