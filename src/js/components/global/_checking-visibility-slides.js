/* eslint no-param-reassign: ["error", { "props": false }] */
function checkingVisibilitySlides(elements, visibilityClass) {
  elements.forEach((slide) => {
    const focusableElements = slide.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    );

    if (!slide.classList.contains(visibilityClass)) {
      slide.setAttribute('tabindex', '-1');

      [...focusableElements].forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    } else {
      slide.removeAttribute('tabindex');

      [...focusableElements].forEach((element) => {
        element.removeAttribute('tabindex');
      });
    }
  });
}

export default checkingVisibilitySlides;
