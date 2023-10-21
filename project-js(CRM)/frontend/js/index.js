(function() {

  const table = document.getElementById('customer-table')
  table.classList.add('customers-table__body')

  // const customerList = [
  //   { 
  //     id: '123456',
  //     fio: 'Скворцов Денис Юрьевич',
  //     dataTime: '02-02-2021 20:25',
  //     dataChange: '02-05-2022 15:56',
  //     contacts: [
  //       {
  //         phone: '79166448925',
  //         email: 'fghj@gmail.com',
  //         facebook: 'facebook.gr.com',
  //         vk: 'vk.rty.ru'
  //       }
  //     ]

  //   },
  //   { 
  //     id: '123786',
  //     fio: 'Куприянов Арсений Валерьевич',
  //     dataTime: '12-12-2021 00:45',
  //     dataChange: '05-10-2022 11:36',
  //     contacts: [
  //       {
  //         phone: '79166448925',
  //         email: 'fghj@gmail.com',
  //         facebook: 'facebook.gr.com',
  //         vk: 'vk.rty.ru'
  //       }
  //     ]

  //   },
  //   { 
  //     id: '1986456',
  //     fio: 'Константинопольская Людмила Александровна',
  //     dataTime: '16-08-2022 20:25',
  //     dataChange: '02-05-2023 15:56',
  //     contacts: [
  //       {
  //         phone: '79166448925',
  //         email: 'fghj@gmail.com',
  //         facebook: 'facebook.gr.com',
  //         vk: 'vk.rty.ru'
  //       }
  //     ]

  //   },
  // ]

  function infoItems() {
    let surname = document.getElementById('surname-input')
    let name = document.getElementById('name-input')
    let middlename = document.getElementById('middlename-input')
    let button = document.getElementById('button-save')
    let form = document.getElementById('form-send')

    return {
      surname,
      name,
      middlename,
      button,
      form
    }
  }

  function createCustomer(customerObj) {
    let row = document.createElement('div')
    let boxId = document.createElement('div')
    let boxFio = document.createElement('div')
    let boxDataTime = document.createElement('div')
    let boxLastCharge = document.createElement('div')
    let boxContact = document.createElement('div')
    let boxButton = document.createElement('div')
    let buttonLastchange = document.createElement('button')
    let buttonCancel = document.createElement('button')

    buttonLastchange.append('Изменить')
    buttonCancel.append('Удалить')

    let textId = document.createElement('span')
    let textFio = document.createElement('span')
    let textData = document.createElement('span')
    let textLastchange = document.createElement('span')
    let textTime = document.createElement('span')
    let textTimeLastchange = document.createElement('span')

    let list = document.createElement('ul')
    let telefon = document.createElement('li')
    let vk = document.createElement('li')
    let email = document.createElement('li')
    let facebook = document.createElement('li')

    let telefonLink = document.createElement('a')
    let vkLink = document.createElement('a')
    let emailLink = document.createElement('a')
    let facebookLink = document.createElement('a')

    row.classList.add('row', 'customers-row')
    boxId.classList.add('col', 'col-lg-1', 'ms-lg-1', 'ps-lg-2', 'customers-col__id', 'text-center', 'align-self-center')
    boxFio.classList.add('col', 'col-lg-3', 'ms-lg-2', 'ps-lg-3', 'customers-col__fio', 'align-self-center')
    boxDataTime.classList.add('col', 'col-lg-2', 'ms-lg-2', 'ps-lg-2', 'customers-col__data', 'align-self-center')
    boxLastCharge.classList.add('col', 'col-lg-2', 'ms-lg-3', 'ps-lg-2', 'customers-col__last-change', 'align-self-center')
    boxContact.classList.add('col', 'col-lg-2', 'ms-lg-1', 'ps-lg-2', 'customers-col__contacts', 'align-self-center')

    textId.classList.add('customers-col__text', 'customers-col__text-id')
    textFio.classList.add('customers-col__text')
    textData.classList.add('customers-col__text')
    textLastchange.classList.add('customers-col__text', 'customers-col__text-id')
    textTime.classList.add('customers-col__text-time')
    textTimeLastchange.classList.add('customers-col__text-time')

    telefon.classList.add('social-item')
    vk.classList.add('social-item')
    email.classList.add('social-item')
    facebook.classList.add('social-item')

    list.classList.add('social-list')
    telefonLink.classList.add('social-phone')
    vkLink.classList.add('social-vk')
    emailLink.classList.add('social-mail')
    facebookLink.classList.add('social-fb')

    boxButton.classList.add('col', 'col-lg-2', 'ms-lg-3', 'ps-lg-2', 'customers-col__actions')
    buttonLastchange.classList.add('customers-col__button', 'button-change')
    buttonCancel.classList.add('customers-col__button', 'button-cancel')

    let contactsObj = customerObj.contacts

    telefonLink.setAttribute('phone', contactsObj[0].phone)
    vkLink.setAttribute('href', contactsObj[0].vk)
    emailLink.setAttribute('href', contactsObj[0].email)
    facebookLink.setAttribute('href', contactsObj[0].facebook)

    buttonLastchange.setAttribute('id', 'change-customer')


    textId.append(customerObj.id)
    textFio.append(customerObj.surname + " ")
    textFio.append(customerObj.name + " ")
    textFio.append(customerObj.lastName)


    textData.append(customerObj.createdAt)
    textLastchange.append(customerObj.updatedAt)

    boxId.append(textId)
    boxFio.append(textFio)
    boxDataTime.append(textData)
    boxDataTime.append(textTime)
    boxLastCharge.append(textLastchange)
    boxLastCharge.append(textTimeLastchange)

    telefon.append(telefonLink)
    vk.append(vkLink)
    email.append(emailLink)
    facebook.append(facebookLink)

    list.append(telefon)
    list.append(vk)
    list.append(email)
    list.append(facebook)

    boxContact.append(list)
    boxButton.append(buttonLastchange)
    boxButton.append(buttonCancel)

    row.append(boxId)
    row.append(boxFio)
    row.append(boxDataTime)
    row.append(boxLastCharge)
    row.append(boxContact)
    row.append(boxButton)

    table.append(row)
  }

  function createTable(list) {
    for (let i = 0; i < list.length; i++) {
      createCustomer(list[i])
    }
  }

  function addCustomer() {
    let addButton = document.getElementById('add-customer')
    let deleteForm = document.getElementById('form-delete')
    let block = document.querySelector('.block')
    let header = document.querySelector('.header')

    addButton.addEventListener('click', function() {
      
      let form = document.querySelector('.form')
      form.classList.add('show')

      block.classList.add('block-on')
      header.classList.add('header-on')

      
    })

    deleteForm.addEventListener('click', function() {

      let form = document.querySelector('.form')
      form.classList.remove('show')
      block.classList.remove('block-on')
      header.classList.remove('header-on')
    })

  }

  function toSendInfo() {
    let customers = infoItems()
    let button = document.getElementById('button-save')

    button.addEventListener('click', function(event) {
      event.preventDefault()

      let surname = customers.surname.value.trim()
      let name = customers.name.value.trim()
      let middlename = customers.middlename.value.trim()

        async function createCustomerServer() {
            const response = await fetch('http://localhost:3000/api/clients', {
              method: 'POST',
              
              body: JSON.stringify({
                createdAt: '2021-02-03T13:07:29.554Z',
                updatedAt: '2021-02-03T13:07:29.554Z',
                name: name,
                surname: surname,
                lastName: middlename,
                contacts: [
                  {
                    type: 'Телефон',
                    value: '+79629856456'
                  },
                  {
                    type: 'Email',
                    value: 'qwerty@gmail.com'
                  },
                  {
                    type: 'Facebook',
                    value: 'https://facebook.com/'
                  }
                ]
              })
              
            })
            const abc = await response.json()
            console.log(abc)
          }

      createCustomerServer()

    })
    
  }


  document.addEventListener('DOMContentLoaded', function() {

    async function getCustomersList() {
      const response = await fetch ('http://localhost:3000/api/clients')
      let data = await response.json()
      console.log(data)
      createTable(data)
    }
    getCustomersList()

    
    addCustomer()
    toSendInfo()

  })

})();




// let line = document.createElement('div')
//       let input = document.createElement('input')
//       let delButton = document.createElement('button')

//       let choice = document.createElement('div')

//       let choiceSelect = document.createElement('select')
//       let optionTel = document.createElement('option')
//       let optionEmail = document.createElement('option')
//       let optionFb = document.createElement('option')
//       let optionVk = document.createElement('option')

//       choiceSelect.append(optionTel)
//       choiceSelect.append(optionEmail)
//       choiceSelect.append(optionFb)
//       choiceSelect.append(optionVk)

//       choice.append(choiceSelect)
//       line.append(choice)
//       line.append(input)
//       line.append(delButton)
//       container.append(line)




