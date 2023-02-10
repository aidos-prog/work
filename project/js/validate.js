
const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#D11616',
  }
})
  validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: "Укажите ваше имя",
    },
    {
      rule: 'customRegexp',
      value: /(?=.*[а-я])(?=.*[А-Я])/, 
      errorMessage: "Недопустимый формат",
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: "Не короче 3 символов",
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Слишком длинное имя",
    },
  ])
  
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: "Укажите ваш номер",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Телефон не корректный',
    },
  ]);