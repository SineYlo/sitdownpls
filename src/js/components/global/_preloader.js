import {
  disablePageScroll,
  enablePageScroll,
  addFillGapTarget,
} from 'scroll-lock';

const siteBody = document.querySelector('.site-body');
const preloader = document.querySelector('.preloader');

disablePageScroll(preloader);
addFillGapTarget(preloader);

window.addEventListener('load', () => {
  window.setTimeout(() => {
    siteBody.classList.add('ui-preloader-hidden');
    siteBody.classList.add('ui-scroll-visible');
    enablePageScroll(preloader);
  }, 1500);

  window.setTimeout(() => {
    siteBody.classList.add('ui-site-loaded');
    siteBody.classList.remove('ui-preloader-hidden');
  }, 2000);
});
