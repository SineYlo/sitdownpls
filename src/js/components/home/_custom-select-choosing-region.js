import Choices from 'choices.js';

// |=============== INITIALIZATION OF A CUSTOM SELECT ON THE FIRST LINE ===============>
const choosingRegionFirst = document.querySelector('.site-header__choosing-region_line_first');

if (choosingRegionFirst) {
  const select = choosingRegionFirst.querySelector('.choosing-region__select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}

// |=============== INITIALIZATION OF A CUSTOM SELECT ON THE SECOND LINE ===============>
const choosingRegionSecond = document.querySelector('.site-header__choosing-region_line_second');

if (choosingRegionSecond) {
  const select = choosingRegionSecond.querySelector('.choosing-region__select');

  const choices = new Choices(select, {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
}
