import Swiper from 'swiper/swiper-bundle';
import checkingVisibilitySlides from '../../global/_checking-visibility-slides';

const catalogSection = document.querySelector('.catalog-section');

if (catalogSection) {
  const swiperContainer = catalogSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: 16,
    slidesPerView: 2,
    slidesPerGroup: 2,
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    grid: {
      fill: 'row',
      rows: 3,
    },

    pagination: {
      el: '.catalog-section .swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `
          <span
            class="${className}"
            role="button"
            aria-label="Перейти к слайду ${index + 1}"
          >
            ${index + 1}
          </span>
        `;
      },
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    breakpoints: {
      577: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,

        grid: {
          fill: 'row',
          rows: 3,
        },
      },

      831: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,

        grid: {
          fill: 'row',
          rows: 3,
        },
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
