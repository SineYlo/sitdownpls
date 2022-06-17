const swiperSlides = document.querySelectorAll('.swiper-slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target, isIntersecting } = entry;

    const focusableElements = target.querySelectorAll(
      'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
    );

    if (isIntersecting) {
      target.classList.add('ui-slide-visible');

      [...focusableElements].forEach((element) => {
        element.removeAttribute('tabindex');
      });
    } else {
      target.classList.remove('ui-slide-visible');

      [...focusableElements].forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    }
  });
});

[...swiperSlides].forEach((slide) => {
  observer.observe(slide);
});
