import noUiSlider from 'nouislider';

const rangeBox = document.querySelector('.range-box');

if (rangeBox) {
  const rangeSlider = rangeBox.querySelector('.range-box__slider');
  const numberTypeFieldFirst = rangeBox.querySelector('.price-range__field_first');
  const numberTypeFieldSecond = rangeBox.querySelector('.price-range__field_second');

  const allFields = [
    numberTypeFieldFirst,
    numberTypeFieldSecond,
  ];

  noUiSlider.create(rangeSlider, {
    start: [
      30000,
      120000,
    ],
    connect: true,
    step: 1,
    range: {
      min: 2000,
      max: 150000,
    },
  });

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    allFields[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    const array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  allFields.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
