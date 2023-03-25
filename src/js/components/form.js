document.addEventListener("DOMContentLoaded", function () {
  const validationForm = new JustValidate('.contacts-form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);


  validationForm
    .addField('.contacts-form__name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: "Недостаточное количество символов"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Вы ввели больше, чем положено"
    }
  ])

  .addField('.contacts-form__phone', [{
    rule: "function",
    validator: function (name, value) {
      const phone = selector.inputmask.unmaskedvalue();
      return phone.length === 10
    },
    errorMessage: 'Недостаточное количество символов',
  }]);
  
})