import Swiper from 'swiper/swiper-bundle';
import { firstGap, secondGap } from '../../global/_gap';

const catalogSection = document.querySelector('.catalog-section');

if (catalogSection) {
  const swiperContainer = catalogSection.querySelector('.swiper');

  const swiper = new Swiper(swiperContainer, {
    spaceBetween: secondGap,
    slidesPerView: 2,
    slidesPerGroup: 2,

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
        spaceBetween: firstGap,
        slidesPerView: 2,
        slidesPerGroup: 2,

        grid: {
          fill: 'row',
          rows: 3,
        },
      },

      831: {
        spaceBetween: firstGap,
        slidesPerView: 3,
        slidesPerGroup: 3,

        grid: {
          fill: 'row',
          rows: 3,
        },
      },
    },
  });
}
