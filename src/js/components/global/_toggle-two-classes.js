import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function toggleTwoClasses(element, visibleClass, hiddenClass, timeOfAnimation) {
  if (!element.classList.contains(visibleClass)) {
    element.classList.add(visibleClass);
    element.classList.remove(hiddenClass);

    disablePageScroll(element);
  } else {
    element.classList.add(hiddenClass);

    window.setTimeout(() => {
      element.classList.remove(visibleClass);

      enablePageScroll(element);
    }, timeOfAnimation);
  }
}

export default toggleTwoClasses;
