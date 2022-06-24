import A11yDialog from 'a11y-dialog';
import { createFocusTrap } from 'focus-trap';
import toggleTwoClasses from './_toggle-two-classes';

const wrapper = document.getElementById('data-sent-dialog-window');

const dataSentDialogWindow = new A11yDialog(wrapper);

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

dataSentDialogWindow.on('show', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.activate();
});

dataSentDialogWindow.on('hide', () => {
  toggleTwoClasses(wrapper, 'ui-dialog-window-visible', 'ui-dialog-window-hidden', 300);

  focusTrap.deactivate();
});

export default dataSentDialogWindow;
