import A11yDialog from 'a11y-dialog';
import { createFocusTrap } from 'focus-trap';
import primarySwiper from '../pages/product-card/_swiper-enlarged-images';
import toggleTwoClasses from './_toggle-two-classes';

const swiperLargeImagesButton = document.querySelectorAll('.swiper-large-images__button');

const wrapper = document.getElementById('enlarged-images-dialog-window');

const enlargedImagesDialogWindow = new A11yDialog(wrapper);

const focusTrap = createFocusTrap(wrapper, {
  onActivate: () => wrapper.classList.add('ui-focus-trap-active'),
  onDeactivate: () => wrapper.classList.remove('ui-focus-trap-active'),

  checkCanFocusTrap: (trapContainers) => {
    const results = trapContainers.map((trapContainer) => new Promise((resolve) => {
      const interval = setInterval(() => {
        if (getComputedStyle(trapContainer).visibility !== 'hidden') {
          resolve();
          clearInterval(interval);
        }
      }, 5);
    }));

    return Promise.all(results);
  },
});

enlargedImagesDialogWindow.on('show', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.activate();
});

enlargedImagesDialogWindow.on('hide', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.deactivate();
});

[...swiperLargeImagesButton].forEach((button, index) => {
  button.setAttribute('data-index', index);

  button.addEventListener('click', (e) => {
    const idx = e.currentTarget.dataset.index;

    primarySwiper.slideTo(idx);

    enlargedImagesDialogWindow.show();
  });
});
