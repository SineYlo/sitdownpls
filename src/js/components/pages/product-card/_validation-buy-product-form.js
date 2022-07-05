/* eslint-disable no-console */
import JustValidate from 'just-validate';
import Inputmask from 'inputmask';
import dataSentDialogWindow from '../../global/_data-sent-dialog-window';
import buyProductDialogWindow from '../../global/_buy-product-dialog-window';

const buyProductForm = document.querySelector('.buy-product__form');

if (buyProductForm) {
  const phoneField = buyProductForm.querySelector('.js-phone-field');

  const fieldMask = new Inputmask('+7 (999) 999-99-99');
  fieldMask.mask(phoneField);

  const validation = new JustValidate(buyProductForm, {
    errorFieldCssClass: 'ui-invalid-field',
    successFieldCssClass: 'ui-valid-field',

    errorLabelStyle: {
      color: 'hsl(356 100% 71%)',
    },
  });

  validation
    .addField('.js-name-field', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимальное кол-во букв - 2',
      },
      {
        rule: 'maxLength',
        value: 50,
        errorMessage: 'Максимальное кол-во букв - 50',
      },
      {
        rule: 'customRegexp',
        value: '^[A-zА-яЁё]+$',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ])
    .addField('.js-phone-field', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
      {
        rule: 'function',
        validator() {
          const phone = phoneField.inputmask.unmaskedvalue();
          return Boolean(Number(phone)) && phone.length === 10;
        },
        errorMessage: 'Не полностью введён номер телефона',
      },
    ])
    .addField('.form-custom-checkbox__field', [
      {
        rule: 'required',
        errorMessage: 'Это поле обязательное!',
      },
    ])
    .onSuccess((e) => {
      const formData = new FormData(e.target);
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      };

      const allFields = document.querySelectorAll('.form-field');

      [...allFields].forEach((field) => {
        field.classList.remove('ui-valid-field');
      });

      buyProductDialogWindow.hide();

      dataSentDialogWindow.show();

      xhr.open('POST', '../product-card-send-data.php', true);
      xhr.send(formData);

      e.target.reset();
    });
}
