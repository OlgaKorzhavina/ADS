document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const validationForm = new JustValidate('.contact-application__form');
  

  validation
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Поле нужно заполнить',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])

  validationForm
    .addField('.name', [{
      rule: 'minLength',
      value: 3,
      errorMessage: "Не достаточное количество символов"
    },
    {
      rule: 'maxLength',
      value: 5,
      errorMessage: "Вы ввели больше чем положено"
    }
  ])

  .addField('.email', [{
    rule: 'required',
    errorMessage: 'Поле нужно заполнить',
  },
  {
    rule: 'email',
    errorMessage: 'Вы не корректно ввели email',
  }
])
  
})