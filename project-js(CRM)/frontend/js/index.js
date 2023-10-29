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
    let oneInput = document.getElementById('line-inputOne')
    let twoInput = document.getElementById('line-inputTwo')
    let treeInput = document.getElementById('line-inputTree')
    let fourInput = document.getElementById('line-inputFour')
    let oneSelect = document.getElementById('selectOne')
    let twoSelect = document.getElementById('selectTwo')
    let treeSelect = document.getElementById('selectTree')
    let fourSelect = document.getElementById('selectFour')

  

    return {
      surname,
      name,
      middlename,
      button,
      oneInput,
      twoInput,
      treeInput,
      fourInput,
      oneSelect,
      twoSelect,
      treeSelect,
      fourSelect,
    }
  }
  
  function changeCustomerBtn(customerObj) {

    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    let form = document.querySelector('.form')
    let hCustomer = document.querySelector('.form-h2__newcustomer')
    let hChangeCustomer = document.querySelector('.form-h2__changecustomer')
    let formid = document.querySelector('.form-id')
    let items = infoItems()
    let docsurname = document.getElementById('surname-input')
    let docname = document.getElementById('name-input')
    let docmiddlename = document.getElementById('middlename-input')


    let id = customerObj.id
      let name = customerObj.name
      let surname = customerObj.surname
      let lastName = customerObj.lastName

      docsurname.setAttribute('value', 'erere')
      // толкнуть данные в input

      console.log()
      
      docname.innerHTML = name
      docmiddlename.append(lastName)


      
      form.classList.add('show')
      block.classList.add('block-on')
      header.classList.add('header-on')
      hCustomer.classList.add('close')
      hChangeCustomer.classList.remove('close')
      formid.classList.remove('close')

      

  }

  function createCustomer(customerObj) {
    let row = document.createElement('div')
    let boxId = document.createElement('div')
    let boxFio = document.createElement('div')
    let boxDataTime = document.createElement('div')
    let boxLastCharge = document.createElement('div')
    let boxContact = document.createElement('div')
    let boxButton = document.createElement('form')
    let buttonLastchange = document.createElement('button')
    let buttonCancel = document.createElement('button')

    buttonLastchange.append('Изменить')
    buttonCancel.append('Удалить')

    let textId = document.createElement('span')
    let textFio = document.createElement('span')
    let textData = document.createElement('span')
    let textDataLastchange = document.createElement('span')
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
    textDataLastchange.classList.add('customers-col__text')
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

    for (let i = 0; i < contactsObj.length; i++) {

      switch(contactsObj[i].type) {
        case 'Телефон':
          telefonLink.setAttribute('href', contactsObj[i].value)

          case 'Email':
            emailLink.setAttribute('href', contactsObj[i].value)
          
            case 'Facebook':
              facebookLink.setAttribute('href', contactsObj[i].value)
      }
       
    }

    

    boxButton.setAttribute('id', 'form-change')
    buttonLastchange.setAttribute('id', 'change-customer')
    buttonLastchange.setAttribute('type', 'submit')

    boxButton.addEventListener('submit', function(event) {
      event.preventDefault()
      changeCustomerBtn(customerObj)
    })

    let idCustomer = customerObj.id.substr(7, 6)
    let createDataCustomer = customerObj.createdAt.substr(8, 2) + '.' + customerObj.createdAt.substr(5, 2) + '.' + customerObj.createdAt.substr(0, 4) 
    let createTimeCustomer = customerObj.createdAt.substr(12, 4)

    let changeDataCustomer = customerObj.updatedAt.substr(8, 2) + '.' + customerObj.updatedAt.substr(5, 2) + '.' + customerObj.updatedAt.substr(0, 4) 
    let changeTimeCustomer = customerObj.updatedAt.substr(12, 4)

    textId.append(idCustomer)
    textFio.append(customerObj.surname + " ")
    textFio.append(customerObj.name + " ")
    textFio.append(customerObj.lastName)


    textData.append(createDataCustomer)
    textTime.append(createTimeCustomer)

    textDataLastchange.append(changeDataCustomer)
    textTimeLastchange.append(changeTimeCustomer)

    boxId.append(textId)
    boxFio.append(textFio)
    boxDataTime.append(textData)
    boxDataTime.append(textTime)
    boxLastCharge.append(textDataLastchange)
    boxLastCharge.append(textTimeLastchange)

    telefon.append(telefonLink)
    vk.append(vkLink)
    email.append(emailLink)
    facebook.append(facebookLink)

    list.append(vk)
    list.append(facebook)
    list.append(telefon)
    list.append(email)
    

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

  function addCustomerBtn() {
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

  function saveButton() {

      let customers = infoItems()
      
      let surname = customers.surname.value.trim()
      let name = customers.name.value.trim()
      let middlename = customers.middlename.value.trim()

      let oneInput = customers.oneInput
      let twoInput = customers.twoInput
      let treeInput = customers.treeInput
      let fourInput = customers.fourInput

      let oneSelect = customers.oneSelect
      let twoSelect = customers.twoSelect
      let treeSelect = customers.treeSelect
      let fourSelect = customers.fourSelect

      let contacts = []

          switch (oneSelect[0].getAttribute('value')) {
              case 'Телефон': 

              if (oneInput.value.trim() === '') {
                break
              }

              if (oneInput.value.trim() !== '') {
                let contactTel = {}

                contactTel.type = 'Телефон'
                contactTel.value = oneInput.value.trim()
                contacts.push(contactTel)

                break
              }

                case 'Email':
                  if (oneInput.value.trim() === '') {
                    break
                  }

                  if (oneInput.value.trim() !== '') {
                    
                    let concactEmail = {}

                    concactEmail.type = 'Email'
                    concactEmail.value = oneInput.value.trim()
                    contacts.push(concactEmail)
                    break
                  }

                  case 'Facebook':
                    if (oneInput.value.trim() === '') {
                      break
                    }

                    if (oneInput.value.trim() !== '') {
                      let contactFacebook = {}

                      contactFacebook.type = 'Facebook'
                      contactFacebook.value = oneInput.value.trim()
                      contacts.push(contactFacebook)
                      break
                    }
            }

              switch (twoSelect[0].getAttribute('value')) {
                
                case 'Телефон': 

                    if (twoInput.value.trim() === '') {
                      break
                    }
                    
                    let contactTel = {}
      
                    if (twoInput.value.trim() !== '') {
                      contactTel.type = 'Телефон'
                      contactTel.value = twoInput.value.trim()
                      contacts.push(contactTel)
      
                      break
                    }

                        case 'Email':

                        if (twoInput.value.trim() === '') {
                          break
                        }

                        if (twoInput.value.trim() !== '') {

                          let concactEmail = {}

                        concactEmail.type = 'Email'
                        concactEmail.value = twoInput.value.trim()
                        contacts.push(concactEmail)
                          break
                        }


                        case 'Facebook':

                        if (twoInput.value.trim() === '') {
                          break
                        }

                        if (twoInput.value.trim() !== '') {
                           let contactFacebook = {}

                          contactFacebook.type = 'Facebook'
                          contactFacebook.value = twoInput.value.trim()
                          contacts.push(contactFacebook)

                          break
                        }

                    }

                    switch (treeSelect[0].getAttribute('value')) {
                      case 'Телефон': 

                      if (treeInput.value.trim() === '') {
                        break
                      }

                      if (treeInput.value.trim() !== '') {
                        
                      let contactTel = {}

                      contactTel.type = 'Телефон'
                      contactTel.value = treeInput.value.trim()
                      contacts.push(contactTel)

                        break
                      }

                      
                        case 'Email':

                        if (treeInput.value.trim() === '') {
                          break
                        }

                        if (treeInput.value.trim() !== '') {
                         let concactEmail = {}

                        concactEmail.type = 'Email'
                        concactEmail.value = treeInput.value.trim()
                        contacts.push(concactEmail)

                        break
                        }
                            
                        

                          case 'Facebook':

                          if (treeInput.value.trim() === '') {
                            break
                          }

                          if (treeInput.value.trim() !== '') {
                            let contactFacebook = {}

                          contactFacebook.type = 'Facebook'
                          contactFacebook.value = treeInput.value.trim()
                          contacts.push(contactFacebook)

                          break
                          }
                    }


          async function createCustomerServer(contacts) {
            console.log(contacts)

            const response = await fetch('http://localhost:3000/api/clients', {
              method: 'POST',
              
              body: JSON.stringify({
                createdAt: '2021-02-03T13:07:29.554Z',
                updatedAt: '2021-02-03T13:07:29.554Z',
                name: name,
                surname: surname,
                lastName: middlename,
                contacts: contacts
              })
              
            })
            const abc = await response.json()
            createCustomer(abc)
          }

          createCustomerServer(contacts)
        


  }

  function toSendInfo() {
    
    let button = document.getElementById('button-save')
    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    let form = document.querySelector('.form')

    button.addEventListener('click', function(event) {
      event.preventDefault()
      saveButton()
      
      form.classList.remove('show')
      block.classList.remove('block-on')
      header.classList.remove('header-on')

    }) 
    
  }

  function pictureList() {
    async function getCustomersListServer() {
      const response = await fetch ('http://localhost:3000/api/clients')
      let data = await response.json()
      createTable(data)
    }
    getCustomersListServer()
  }



  document.addEventListener('DOMContentLoaded', function() {

    pictureList()
    
    addCustomerBtn()
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




