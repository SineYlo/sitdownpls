import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import * as focusTrap from 'focus-trap';

const buttonOpenNavigationMenu = document.querySelector('.burger');
const buttonCloseNavigationMenu = document.querySelector('.close-navigation-menu');
const navigationMenu = document.querySelector('.site-header__navigation-menu');
const primaryNavigationLinks = document.querySelectorAll('.primary-navigation__link');
const additionalNavigationLinks = document.querySelectorAll('.additional-navigation__link');

// |=============== CREATING A FOCUS TRAP ===============>
const trap = focusTrap.createFocusTrap(navigationMenu, {
  onActivate: () => navigationMenu.classList.add('ui-focus-trap-active'),
  onDeactivate: () => navigationMenu.classList.remove('ui-focus-trap-active'),

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

// |=============== OPENING AND CLOSING THE NAVIGATION MENU BY CLICK ===============>
function activationNavigationMenu(element, elementClass) {
  element.classList.add(`${elementClass}`);

  trap.activate();

  disablePageScroll(element);
}

function deactivationNavigationMenu(element, elementClass) {
  element.classList.remove(`${elementClass}`);

  trap.deactivate();

  enablePageScroll(element);
}

buttonOpenNavigationMenu.addEventListener('click', () => {
  activationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
});

buttonCloseNavigationMenu.addEventListener('click', () => {
  deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
});

// |=============== CLOSING THE NAVIGATION MENU BY CLICKING ON THE LINK ===============>
if (primaryNavigationLinks) {
  [...primaryNavigationLinks].forEach((primaryLink) => {
    primaryLink.addEventListener('click', () => {
      deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
    });
  });
}

if (additionalNavigationLinks) {
  [...additionalNavigationLinks].forEach((additionalLink) => {
    additionalLink.addEventListener('click', () => {
      deactivationNavigationMenu(navigationMenu, 'ui-navigation-menu-active');
    });
  });
}

// |=============== CALCULATING THE HEIGHT OF THE NAVIGATION MENU ===============>
function heightNavigationMenu() {
  navigationMenu.style.setProperty('--height-navigation-menu', `${window.innerHeight}px`);
}

heightNavigationMenu();

window.addEventListener('resize', heightNavigationMenu);
