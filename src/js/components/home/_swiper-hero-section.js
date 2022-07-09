/* eslint-disable no-param-reassign */
import Swiper from 'swiper/swiper-bundle';
import checkingVisibilitySlides from '../global/_checking-visibility-slides';
import { thirdGap } from '../global/_gap';

const heroSection = document.querySelector('.hero-section');

if (heroSection) {
  const swiperContainer = heroSection.querySelector('.swiper');

  const swiperDuration = 4000;
  const swiperDelay = 1000;

  const swiper = new Swiper(swiperContainer, {
    loop: true,
    speed: swiperDelay,
    spaceBetween: thirdGap,
    watchSlidesProgress: true,

    slideVisibleClass: 'ui-slide-visible',

    pagination: {
      el: '.circular-pagination',
      clickable: true,
    },

    autoplay: {
      delay: swiperDuration,
      disableOnInteraction: false,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      firstSlideMessage: 'Это первый слайд',
      lastSlideMessage: 'Это последний слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    on: {
      init() {
        const paginationBullets = document.querySelectorAll(
          '.circular-pagination .swiper-pagination-bullet',
        );

        document
          .querySelector('.circular-pagination .swiper-pagination-bullet:nth-child(1)')
          .classList.add('ui-active-first');

        paginationBullets.forEach((bullet) => {
          bullet.innerHTML = `
            <svg
              class="circular-pagination__svg"
              width="24"
              height="24"
              viewBox="0 0 24 24
            ">
              <circle
                class="circular-pagination__bg"
                r="10"
                cx="12"
                cy="12"
                fill="none"
                stroke-width="2"
              />
              <circle
                class="circular-pagination__progress"
                r="10"
                cx="12"
                cy="12"
                fill="none"
                stroke-width="3"
              />
            </svg>
          `;

          bullet.classList.add('circular-pagination__bullet');

          const circleProgress = bullet.querySelector('.circular-pagination__progress');
          const circleRadius = circleProgress.getAttribute('r');
          const circleLength = 2 * Math.PI * circleRadius;

          circleProgress.style.setProperty('--stroke-dasharray', circleLength);
          circleProgress.style.setProperty('--stroke-dashoffset', circleLength);

          document.documentElement.style.setProperty('--duration-filling', `${swiperDuration}ms`);

          checkingVisibilitySlides(this.slides, 'ui-slide-visible');
        });
      },
    },
  });

  let isFirst = true;

  swiper.on('slideChange', (options) => {
    const { pagination, slides } = options;

    if (isFirst) {
      pagination.bullets.forEach((bullet) => {
        bullet.classList.remove('ui-active-first');
      });

      isFirst = false;
    }

    checkingVisibilitySlides(slides, 'ui-slide-visible');
  });

  swiper.on('slideChangeTransitionEnd', (options) => {
    const { pagination } = options;

    pagination.bullets.forEach((bullet) => {
      bullet.classList.remove('ui-slide-change-active');
    });

    const activeBullet = document.querySelector('.swiper-pagination-bullet-active');

    activeBullet.classList.add('ui-slide-change-active');
  });
}
