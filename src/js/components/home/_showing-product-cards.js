const highRatingSection = document.querySelector('.high-rating-section');

const firstBreakpoint = window.matchMedia('(min-width: 6.25em)').matches; // 100px
const secondBreakpoint = window.matchMedia('(min-width: 51.937em)').matches; // 831px
const thirdBreakpoint = window.matchMedia('(min-width: 66.9375em)').matches; // 1071px

function showingCardsByClick(showOnLoad = 8, showMore = 4) {
  const SHOW_ON_LOAD = showOnLoad;
  const SHOW_MORE = showMore;

  const cardItems = [...highRatingSection.querySelectorAll('.high-rating-section__product-card')];
  const showMoreButton = highRatingSection.querySelector('.high-rating-section__show-more');

  function showItems(count) {
    cardItems.forEach((el) => {
      el.classList.remove('ui-product-card-active');
    });

    cardItems.splice(0, count).forEach((el) => {
      el.classList.add('ui-product-card-active');
    });

    showMoreButton.classList.remove('ui-show-more-hidden');

    if (!cardItems.length) {
      showMoreButton.classList.add('ui-show-more-hidden');
    }
  }

  showItems(SHOW_ON_LOAD);

  showMoreButton.addEventListener('click', () => {
    showItems(SHOW_MORE);
  });
}

function changingValuesOnBreakpoints() {
  if (thirdBreakpoint) {
    showingCardsByClick();
  } else if (secondBreakpoint) {
    showingCardsByClick(6, 3);
  } else if (firstBreakpoint) {
    showingCardsByClick(6, 2);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  changingValuesOnBreakpoints();
});
