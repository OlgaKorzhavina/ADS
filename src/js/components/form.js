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
    },
    
  ])

  .addField('.contacts-form__phone', [{
    rule: "function",
    validator: function (name, value) {
      const phone = selector.inputmask.unmaskedvalue();
      return phone.length === 10
    },
    errorMessage: 'Недостаточное количество символов',
  }]);
  
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка успешно отправлена! Мы перезвоним Вам в ближайшее время.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

