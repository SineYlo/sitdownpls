import tippy from 'tippy.js';

const callbackSection = document.querySelector('.callback-section');

if (callbackSection) {
  const tooltipWrapper = callbackSection.querySelector('.tooltip');
  const tooltipButton = tooltipWrapper.querySelector('.tooltip__button');

  tippy(tooltipButton, {
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',

    maxWidth: 157,
    interactive: true,
    appendTo: tooltipWrapper,
    trigger: 'click',
    animation: 'perspective',

    arrow: `
      <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip-1)">
          <path d="M8.49993 7.97056L16.9852 -0.514725H0.0146484L8.49993 7.97056Z" fill="#333333"/>
        </g>
        <defs>
          <clipPath id="clip-1">
            <rect width="17" height="8" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,

    onShow() {
      tooltipButton.classList.add('ui-tooltip-active');
      tooltipButton.setAttribute('aria-label', 'Закрыть всплывающую подсказку');
      tooltipButton.setAttribute('aria-controls', 'tippy-1');
      tooltipButton.setAttribute('aria-describedby', 'tippy-1');
    },

    onHide() {
      tooltipButton.classList.remove('ui-tooltip-active');
      tooltipButton.setAttribute('aria-label', 'Открыть всплывающую подсказку');
      tooltipButton.removeAttribute('aria-controls');
      tooltipButton.removeAttribute('aria-describedby');
    },
  });
}
