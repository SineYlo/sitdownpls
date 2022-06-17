const pageStyles = window.getComputedStyle(document.documentElement);

const firstGap = parseInt(pageStyles.getPropertyValue('--first-gap'), 10);
const secondGap = parseInt(pageStyles.getPropertyValue('--second-gap'), 10);
const thirdGap = parseInt(pageStyles.getPropertyValue('--third-gap'), 10);

export {
  firstGap,
  secondGap,
  thirdGap,
};
