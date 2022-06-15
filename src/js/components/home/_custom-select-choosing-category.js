import Choices from 'choices.js';

const choosingCategory = document.querySelector('.choosing-category');

if (choosingCategory) {
  const select = choosingCategory.querySelector('.choosing-category__select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    classNames: {
      flippedState: 'is-flip',
    },
  });
}
