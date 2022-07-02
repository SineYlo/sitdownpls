const dropdownListsButtons = [...document.querySelectorAll('.filter-dropdown__button')];
const dropdownLists = [...document.querySelectorAll('.filter-dropdown__list')];

dropdownListsButtons.forEach((dropdownListButton) => {
  dropdownListButton.addEventListener('click', (event) => {
    const currentButton = event.currentTarget;

    dropdownListsButtons.forEach((button) => {
      if (button !== currentButton) {
        button.classList.remove('ui-dropdown-button-active');
        button.setAttribute('aria-expanded', 'false');
      }
    });

    currentButton.classList.toggle('ui-dropdown-button-active');
    currentButton.setAttribute('aria-expanded', 'true');

    if (currentButton.classList.contains('ui-dropdown-button-active')) {
      currentButton.setAttribute('aria-expanded', 'true');
    } else {
      currentButton.setAttribute('aria-expanded', 'false');
    }

    const currentList = dropdownListButton.parentElement.querySelector('.filter-dropdown__list');

    dropdownLists.forEach((dropdownList) => {
      if (dropdownList !== currentList) {
        dropdownList.classList.remove('ui-dropdown-visible');
      }
    });

    currentList.classList.toggle('ui-dropdown-visible');
  });
});

document.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.closest('.filter-dropdown')) {
    dropdownLists.forEach((dropdownList) => {
      dropdownList.classList.remove('ui-dropdown-visible');
    });

    dropdownListsButtons.forEach((dropdownListButton) => {
      dropdownListButton.classList.remove('ui-dropdown-button-active');
      dropdownListButton.setAttribute('aria-expanded', 'false');
    });
  }
});
