(function() {

  const table = document.getElementById('customer-table')
  table.classList.add('customers-table__body')

  function infoItems() {
    let id = document.getElementById('form-id')
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
    let form = document.getElementById('form-info')

  

    return {
      id,
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
    boxId.classList.add('col', 'col-lg-1', 'col-md-1', 'ms-lg-0', 'ps-lg-2',  'ms-md-0', 'ps-md-1', 'customers-col__id', 'text-center', 'align-self-center')
    boxFio.classList.add('col', 'col-lg-3', 'col-md-4','ms-lg-0','ps-lg-2','ms-md-1', 'ps-md-3', 'customers-col__fio', 'align-self-center')
    boxDataTime.classList.add('col', 'col-lg-2', 'col-md-1','ms-lg-3','ps-lg-2','ms-md-0', 'ps-md-1', 'customers-col__data', 'align-self-center')
    boxLastCharge.classList.add('col', 'col-lg-2', 'col-md-1','ms-lg-3','ps-lg-2','ms-md-0', 'ps-md-0', 'customers-col__last-change', 'align-self-center')
    boxContact.classList.add('col', 'col-lg-2', 'col-md-3','ms-lg-1','ps-lg-2','ms-md-0', 'ps-md-2', 'customers-col__contacts', 'align-self-center')

    textId.classList.add('customers-col__text', 'customers-col__text-id')
    textFio.classList.add('customers-col__text')
    textData.classList.add('customers-col__text')
    textDataLastchange.classList.add('customers-col__text')
    textTime.classList.add('customers-col__text-time')
    textTimeLastchange.classList.add('customers-col__text-time')

    list.classList.add('social-list')
    // telefonLink.classList.add('social-phone')
    // vkLink.classList.add('social-vk')
    // telefon.classList.add('social-item')
    // vk.classList.add('social-item')

    boxButton.classList.add('col', 'col-lg-2', 'col-md-2','ms-lg-3','ps-lg-2','ms-md-0', 'ps-md-2', 'customers-col__actions')
    buttonLastchange.classList.add('customers-col__button', 'button-change')
    buttonCancel.classList.add('customers-col__button', 'button-cancel')

    let contactsObj = customerObj.contacts


    for (let i = 0; i < contactsObj.length; i++) {

      switch(contactsObj[i].type) {

        case 'Телефон':
          telefonLink.setAttribute('href', 'tel:' + contactsObj[i].value)
          if (telefonLink.hasAttribute('href')) {
            telefonLink.classList.add('social-phone')
            telefon.classList.add('social-item')
          }
          tippy(telefonLink, {
            content: 'Телефон' + ': ' + contactsObj[i].value,
            allowHTML: true,
          });
          break

          case 'Email':
            emailLink.setAttribute('href', contactsObj[i].value)
            if (emailLink.hasAttribute('href')) {
              emailLink.classList.add('social-mail')
              email.classList.add('social-item')
            }
            tippy(emailLink, {
              content: 'Email' + ': ' + contactsObj[i].value,
              allowHTML: true,
            });
             break

            case 'Facebook':
              facebookLink.setAttribute('href', contactsObj[i].value)

              if (facebookLink.hasAttribute('href')) {
                facebookLink.classList.add('social-fb')
                facebook.classList.add('social-item')
              }
              
              tippy(facebookLink, {
                content: 'Facebook' + ': ' + contactsObj[i].value,
                allowHTML: true,
              });
              break
              
      }
    }


    buttonLastchange.setAttribute('id', 'change-customer')

    buttonLastchange.addEventListener('click', function() {

      changeCustomerForm(customerObj)
     
    })

    buttonCancel.setAttribute('id', 'btn-cancel')

    buttonCancel.addEventListener('click', function() {
      let formCancel = document.querySelector('.form-cancel')
      let block = document.querySelector('.block')
      let header = document.querySelector('.header')
      let btnCancel = document.querySelector('.form__btn-delete')
      let btnCancellation = document.querySelector('.form__btn-cancellation')

      formCancel.classList.add('show')
      block.classList.add('block-on')
      header.classList.add('header-on')
  
          btnCancel.addEventListener('click', function() {
            let customerNumber = customerObj.id
           
            deleteCustomerServer(customerNumber)
            formCancel.classList.remove('show')
            block.classList.remove('block-on')
            header.classList.remove('header-on')
            row.remove() 
          })

            btnCancellation.addEventListener('click', function() {
                formCancel.classList.remove('show')
                block.classList.remove('block-on')
                header.classList.remove('header-on')
            })

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

    return {
      row,
      textId
    }
  }
  
  async function deleteCustomerServer(id) {
          const response = await fetch('http://localhost:3000/api/clients/' + id, {
          method: 'DELETE'
        })
         abc = await response.json()
  }

  function createTable(list) {
    for (let i = 0; i < list.length; i++) {
      createCustomer(list[i])
    }
  }

  function addCustomer() {
    let addButton = document.getElementById('add-customer')
    let deleteForm = document.getElementById('form-delete')
    let deleteFormTwo = document.getElementById('form-delete__two')
    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    let docId = document.getElementById('form-id')
    let btnChange = document.getElementById('btn-save__change')
    let btnSave = document.getElementById('button-save')
    let table = document.querySelector('.customers-table')

    let hCustomer = document.querySelector('.form-h2__newcustomer')
    let hChangeCustomer = document.querySelector('.form-h2__changecustomer')
    let formid = document.querySelector('.form-id__case')
    let btnCancelCustomer = document.getElementById('btn-cancel__change')
    let btnCancellation = document.getElementById('btn-cancellation')

    let inputCustomers = infoItems()

    let docname = inputCustomers.name
    let docsurname = inputCustomers.surname
    let doclastname = inputCustomers.middlename
    let doconeInput = inputCustomers.oneInput
    let doctwoInput = inputCustomers.twoInput
    let doctreeInput = inputCustomers.treeInput
    let docfourInput = inputCustomers.fourInput

    let oneLine = document.getElementById('lineOne')
    let twoLine = document.getElementById('lineTwo')
    let treeLine = document.getElementById('lineTree')
    let fourLine = document.getElementById('lineFour')

    let oneInput = document.getElementById('line-inputOne')
    let twoInput = document.getElementById('line-inputTwo')
    let treeInput = document.getElementById('line-inputTree')
    let fourInput = document.getElementById('line-inputFour')

    addButton.addEventListener('click', function() {

      hCustomer.classList.remove('close')
      hChangeCustomer.classList.add('close')
      formid.classList.add('close')
      btnChange.classList.add('close')
      btnSave.classList.remove('close')
      btnCancelCustomer.classList.add('close')
      btnCancellation.classList.remove('close')
      
      let form = document.querySelector('.form')
      form.classList.add('show')
      block.classList.add('block-on')
      header.classList.add('header-on')

    let items = infoItems()
    let docsurname = items.surname
    let docname = items.name
    let doclastname = items.middlename
    let docformIdText = items.id
    let doconeInput = items.oneInput
    let doctwoInput = items.twoInput
    let doctreeInput = items.treeInput
    let docfourInput = items.fourInput

    let oneLine = document.getElementById('lineOne')
    let twoLine = document.getElementById('lineTwo')
    let treeLine = document.getElementById('lineTree')
    let fourLine = document.getElementById('lineFour')
    
    docformIdText.innerHTML = ''

    doconeInput.value = ''
    doctwoInput.value = ''
    doctreeInput.value = ''
    docfourInput.value = ''
    docname.value = ''
    docsurname.value = ''
    doclastname.value = ''
    
        oneLine.classList.remove("open-line")
        twoLine.classList.remove("open-line")
        treeLine.classList.remove("open-line")
        fourLine.classList.remove("open-line")

      docId.innerHTML = ''

      docname.removeAttribute('value')
      docsurname.removeAttribute('value')
      doclastname.removeAttribute('value')
      doconeInput.removeAttribute('value')
      doctwoInput.removeAttribute('value')
      doctreeInput.removeAttribute('value')
      docfourInput.removeAttribute('value')
    })

    deleteForm.addEventListener('click', function() {

      let form = document.querySelector('.form')
      let messedge = document.getElementById('messedge-id')
          
      form.classList.remove('show')
      block.classList.remove('block-on')
      header.classList.remove('header-on')
      docId.innerHTML = ''

      docname.removeAttribute('value')
      docsurname.removeAttribute('value')
      doclastname.removeAttribute('value')
      doconeInput.removeAttribute('value')
      doctwoInput.removeAttribute('value')
      doctreeInput.removeAttribute('value')
      docfourInput.removeAttribute('value')

      oneInput.innerHTML = ''
      twoInput.innerHTML = ''
      treeInput.innerHTML = ''
      fourInput.innerHTML = ''
      messedge.innerHTML = ''

      oneLine.classList.remove("open-line")
      twoLine.classList.remove("open-line")
      treeLine.classList.remove("open-line")
      fourLine.classList.remove("open-line")



    })

    deleteFormTwo.addEventListener('click', function() {
      let formDelete = document.querySelector('.form-cancel')
      formDelete.classList.remove('show')
      block.classList.remove('block-on')
      header.classList.remove('header-on')
    })
      
    saveBtn()
  }

  function saveBtn() {
    
    let button = document.getElementById('button-save')
    let docId = document.getElementById('form-id')
    let inputCustomers = infoItems()

    let oneLine = document.getElementById('lineOne')
    let twoLine = document.getElementById('lineTwo')
    let treeLine = document.getElementById('lineTree')
    let fourLine = document.getElementById('lineFour')

    let docname = inputCustomers.name
    let docsurname = inputCustomers.surname
    let doclastname = inputCustomers.middlename
    let doconeInput = inputCustomers.oneInput
    let doctwoInput = inputCustomers.twoInput
    let doctreeInput = inputCustomers.treeInput
    let docfourInput = inputCustomers.fourInput


    button.addEventListener('click', function(event) {

      event.preventDefault()
      saveInfo()

      docId.innerHTML = ''

      docname.removeAttribute('value')
      docsurname.removeAttribute('value')
      doclastname.removeAttribute('value')
      doconeInput.removeAttribute('value')
      doctwoInput.removeAttribute('value')
      doctreeInput.removeAttribute('value')
      docfourInput.removeAttribute('value')

        oneLine.classList.remove("open-line")
        twoLine.classList.remove("open-line")
        treeLine.classList.remove("open-line")
        fourLine.classList.remove("open-line")
    
    })
    
  }
  
  function saveInfo() {

      let customers = infoItems()

      let docId = document.getElementById('form-id')
      let surname = customers.surname.value.trim()
      let name = customers.name.value.trim()
      let middlename = customers.middlename.value.trim()

      let docLineOne = document.querySelectorAll('.lineOne')
      let docLineTwo = document.querySelectorAll('.lineTwo')
      let docLineTree = document.querySelectorAll('.lineTree')
      let docLineFour = document.querySelectorAll('.lineFour')

      let elementone = docLineOne[0].getElementsByClassName('choices__item choices__item--selectable')
      let elementtwo = docLineTwo[0].getElementsByClassName('choices__item choices__item--selectable')
      let elementtree = docLineTree[0].getElementsByClassName('choices__item choices__item--selectable')
      let elementfour = docLineFour[0].getElementsByClassName('choices__item choices__item--selectable')

      let oneInput = customers.oneInput
      let twoInput = customers.twoInput
      let treeInput = customers.treeInput
      let fourInput = customers.fourInput

      let oneSelect = elementone
      let twoSelect = elementtwo
      let treeSelect = elementtree
      let fourSelect = elementfour

      let contacts = []

          switch (oneSelect[0].getAttribute('data-value')) {
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

              switch (twoSelect[0].getAttribute('data-value')) {
                
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

                    switch (treeSelect[0].getAttribute('data-value')) {
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

            let now = new Date()

            let boxMessedge = document.getElementById('validation-messedge')
            let messedge = document.getElementById('messedge-id')
            let block = document.querySelector('.block')
            let header = document.querySelector('.header')
            let form = document.querySelector('.form') 
            
            const request = await fetch('http://localhost:3000/api/clients', {
              method: 'POST',  
              
              body: JSON.stringify({
                createdAt: now,
                updatedAt: now,
                name: name,
                surname: surname,
                lastName: middlename,
                contacts: contacts
              })
            })
            
            switch(request.status) {
              case(422): 
               boxMessedge.classList.add('validation-vision')
                messedge.append('Объект, переданный в теле запроса, не прошёл валидацию. Тело ответа содержит массив с описаниями ошибок валидации.')
                return
                case(404): 
               boxMessedge.classList.add('validation-vision')
                messedge.append('Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных.')
                return
                case(500): 
               boxMessedge.classList.add('validation-vision')
                messedge.append('Странно, но сервер сломался.')
                return
                case(200): 
                form.classList.remove('show')
                block.classList.remove('block-on')
                header.classList.remove('header-on')
                return
                case(201): 
                form.classList.remove('show')
                block.classList.remove('block-on')
                header.classList.remove('header-on')
                return
            }
          }

          let messedge = document.getElementById('messedge-id')
          messedge.innerHTML = ''
        
          createCustomerServer(contacts)

          docId.innerHTML = ''

          deleteList()
          start()

  }

  function changeCustomerForm(customerObj) {
    
    let id = customerObj.id

    async function getListCustomer(id) {
      const response = await fetch('http://localhost:3000/api/clients/' + id)
      const list = await response.json()

    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    let form = document.querySelector('.form')
    let hCustomer = document.querySelector('.form-h2__newcustomer')
    let hChangeCustomer = document.querySelector('.form-h2__changecustomer')
    let formid = document.querySelector('.form-id__case')
    let btnSave = document.querySelector('.form__button-save')
    let btnSaveChange = document.querySelector('.form__btn-change')
    let docId = document.getElementById('form-id')
    let btnCancelCustomer = document.getElementById('btn-cancel__change')
    let btnCancellation = document.getElementById('btn-cancellation')
   
    let items = infoItems()
    let docsurname = items.surname
    let docname = items.name
    let doclastname = items.middlename
    let docformIdText = items.id
    let doconeInput = items.oneInput
    let doctwoInput = items.twoInput
    let doctreeInput = items.treeInput
    let docfourInput = items.fourInput
    let docform = items.form

    let oneLine = document.getElementById('lineOne')
    let twoLine = document.getElementById('lineTwo')
    let treeLine = document.getElementById('lineTree')
    let fourLine = document.getElementById('lineFour')

    docformIdText.innerHTML = ''
    doconeInput.value = ''
    doctwoInput.value = ''
    doctreeInput.value = ''
    docfourInput.value = ''

      // docname.removeAttribute('value')
      // docsurname.removeAttribute('value')
      // doclastname.removeAttribute('value')
      // doconeInput.removeAttribute('value')
      // doctwoInput.removeAttribute('value')
      // doctreeInput.removeAttribute('value')
      // docfourInput.removeAttribute('value')
    
        oneLine.classList.remove("open-line")
        twoLine.classList.remove("open-line")
        treeLine.classList.remove("open-line")
        fourLine.classList.remove("open-line")
    
    let docLineOne = document.querySelectorAll('.lineOne')
    let docLineTwo = document.querySelectorAll('.lineTwo')
    let docLineTree = document.querySelectorAll('.lineTree')
    let docLineFour = document.querySelectorAll('.lineFour')

    let elementone = docLineOne[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementtwo = docLineTwo[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementtree = docLineTree[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementfour = docLineFour[0].getElementsByClassName('choices__item choices__item--selectable')

      let surname = list.surname
      let name = list.name
      let lastName = list.lastName
      let contacts = list.contacts
      let createCustomer = list.createdAt

      docsurname.setAttribute('value', surname)
      docsurname.value = surname
      docname.setAttribute('value', name)
      docname.value = name
      doclastname.setAttribute('value', lastName)
      doclastname.value = lastName
      docformIdText.append(id)

      elementone[0].setAttribute('data-value', 'Телефон')
      elementone[0].innerHTML = 'Телефон'
      elementtwo[0].setAttribute('data-value', 'Email')
      elementtwo[0].innerHTML = 'Email'
      elementtree[0].setAttribute('data-value', 'Facebook')
      elementtree[0].innerHTML = 'Facebook'

    for (let i = 0; i < contacts.length; i++) {

      switch (contacts[i].type) {

        case 'Телефон':
          doconeInput.setAttribute('value', contacts[i].value)
          doconeInput.append(contacts[i].value)
          doconeInput.value = contacts[i].value
          oneLine.classList.add('open-line')
          break
      
          case 'Email':
            doctwoInput.setAttribute('value', contacts[i].value)
            doctwoInput.append(contacts[i].value)
            doctwoInput.value = contacts[i].value
            twoLine.classList.add('open-line')
            break

            case 'Facebook':
              doctreeInput.setAttribute('value', contacts[i].value)
              doctreeInput.append(contacts[i].value)
              doctreeInput.value = contacts[i].value
              treeLine.classList.add('open-line')
              break
      } 
    }

      form.classList.add('show')
      block.classList.add('block-on')
      header.classList.add('header-on')
      hCustomer.classList.add('close')
      btnSave.classList.add('close')
      hChangeCustomer.classList.remove('close')
      formid.classList.remove('close')
      btnSaveChange.classList.remove('close')
      btnCancelCustomer.classList.remove('close')
      btnCancellation.classList.add('close')

      btnSaveChange.addEventListener('click', function(event) {
        event.preventDefault()
        changedInfoCustomer(createCustomer)
        form.classList.remove('show')
        block.classList.remove('block-on')
        header.classList.remove('header-on')

      docId.innerHTML = ''

      docname.removeAttribute('value')
      docsurname.removeAttribute('value')
      doclastname.removeAttribute('value')
      doconeInput.removeAttribute('value')
      doctwoInput.removeAttribute('value')
      doctreeInput.removeAttribute('value')
      docfourInput.removeAttribute('value')

        oneLine.classList.remove("open-line")
        twoLine.classList.remove("open-line")
        treeLine.classList.remove("open-line")
        fourLine.classList.remove("open-line")

        doconeInput.value = ''
        doctwoInput.value = ''
        doctreeInput.value = ''
        docfourInput.value = ''
        


      })

      btnCancelCustomer.addEventListener('click', function(event) {

        event.preventDefault()
       
          let formCancel = document.querySelector('.form-cancel')
          let block = document.querySelector('.block')
          let header = document.querySelector('.header')
          let form = document.querySelector('.form')
          let rows = document.querySelectorAll('.customers-row')
          let idCustomer = id.substr(7, 6)
      
              form.classList.remove('show')
              formCancel.classList.add('show')
              block.classList.add('block-on')
              header.classList.add('header-on')

          let btnCancel = document.querySelector('.form__btn-delete')
          let btnCancellation = document.querySelector('.form__btn-cancellation')

            btnCancel.addEventListener('click', function() {

              for (let i = 0; i < rows.length; i++) {

                let infoCustomer = rows[i].textContent

                    if (infoCustomer.includes(idCustomer) === true) {
                     deleteCustomerServer(id)
                      rows[i].remove()

                      formCancel.classList.remove('show')
                      block.classList.remove('block-on')
                      header.classList.remove('header-on')
                    }
              }})

              btnCancellation.addEventListener('click', function() {
                formCancel.classList.remove('show')
                block.classList.remove('block-on')
                header.classList.remove('header-on')
              })
      })
    }
      getListCustomer(id)
  }

  function changedInfoCustomer(createCustomer) {
          async function changeCustomerServer(createCustomer) {

              let id = document.getElementById('form-id').innerHTML
              let items = infoItems()
              let surname = items.surname.getAttribute('value')
              let name = items.name.getAttribute('value')
              let lastName = items.middlename.getAttribute('value')

              let docLineOne = document.querySelectorAll('.lineOne')
              let docLineTwo = document.querySelectorAll('.lineTwo')
              let docLineTree = document.querySelectorAll('.lineTree')
              let docLineFour = document.querySelectorAll('.lineFour')

              let elementone = docLineOne[0].getElementsByClassName('choices__item choices__item--selectable')
              let elementtwo = docLineTwo[0].getElementsByClassName('choices__item choices__item--selectable')
              let elementtree = docLineTree[0].getElementsByClassName('choices__item choices__item--selectable')
              let elementfour = docLineFour[0].getElementsByClassName('choices__item choices__item--selectable')

              let valueOneSelect = elementone[0].getAttribute('data-value')
              let selectOne = elementone[0].innerHTML
              let valueTwoSelect = elementtwo[0].getAttribute('data-value')
              let selectTwo = elementtwo[0].innerHTML
              let valueTreeSelect = elementtree[0].getAttribute('data-value')
              let selectTree = elementtree[0].innerHTML

              let oneInput = document.getElementById('line-inputOne')
              let twoInput = document.getElementById('line-inputTwo')
              let treeInput = document.getElementById('line-inputTree')
              let fourInput = document.getElementById('line-inputFour')

                let contacts = []

              switch (valueOneSelect) {
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

                  switch (valueTwoSelect) {
                    
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

                        switch (valueTreeSelect) {
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

            let now = new Date()

            const response = await fetch('http://localhost:3000/api/clients/' + id, {
              method: 'PATCH',  
              
              body: JSON.stringify({
                createdAt: createCustomer,
                updatedAt: now,
                name: name,
                surname: surname,
                lastName: lastName,
                contacts: contacts
              })
            })


            oneInput.value = ''
            twoInput.value = ''
            treeInput.value = ''
            fourInput.value = ''
          }

         changeCustomerServer(createCustomer)

  }

  function deleteList() {
    let rows = document.querySelectorAll('.customers-row')

    for (const item of rows) {
      item.remove()
    }
  }

  function sort() {
    let docId = document.getElementById('doc-id')
    let docFio = document.getElementById('doc-fio')
    let docData = document.getElementById('doc-data')
    let docLastchange = document.getElementById('doc-lastchange')
    
    function ab(arr, key, i) {
      if (i == 1) {
        let result = arr.sort(function(a,b) {
          if (a[key] < b[key]) {
            return -1
          }
        })
        return result
        
      }

      if (i == 0) {
        let result = arr.sort(function(a,b) {
          if (a[key] > b[key]) {
            return -1
          }
        })
        return result
      }
    }
          let i = 0
          

          function numbersVisible() {
            let number = document.querySelector('.numbers')
            number.classList.add('open')
            }

          function unvisible() {
            let number = document.querySelector('.numbers')
            number.classList.remove('open')
          }

          docId.addEventListener('click', function() {     
            deleteList()
            let arrow = document.querySelector('.customers-header__id-text')
            let number = document.querySelector('.numbers')
            let numberone = document.querySelector('.numbers_one')
            let numbertwo = document.querySelector('.numbers_two')
            let numbertree = document.querySelector('.numbers_tree')
            let numberfour = document.querySelector('.numbers_four')
            
            if (i == 1) {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'id', 1)
            
              createTable(newList)
              
            }
            getServerList()
            i = i - 1
            arrow.classList.remove('is-active')
            number.classList.add('down')
            numberone.classList.add('color_four')
            numbertwo.classList.add('color_tree')
            numbertree.classList.add('color_two')
            numberfour.classList.add('color_one')

            
            numbersVisible(number)
            setTimeout(unvisible, 5000)
            
            } else {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'id', 0)
            
              createTable(newList)
            }
                getServerList()
                i = i + 1
                arrow.classList.add('is-active')
                number.classList.remove('down')
                numberone.classList.remove('color_four')
                numbertwo.classList.remove('color_tree')
                numbertree.classList.remove('color_two')
                numberfour.classList.remove('color_one')

                numbersVisible(number)
                setTimeout(unvisible, 5000)
            }
          })
          docFio.addEventListener('click', function() {     
            deleteList()
            let arrow = document.querySelector('.customers-header__fio-text')
            if (i == 1) {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'surname', 1)
            
              createTable(newList)
              
            }
            getServerList()
            i = i - 1
            arrow.classList.remove('is-active')
            
            } else {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'surname', 0)
            
              createTable(newList)
            }
                getServerList()
                i = i + 1
                arrow.classList.add('is-active')
            }
          })
          docData.addEventListener('click', function() {     
            deleteList()
            let arrow = document.querySelector('.customers-header__data-text')
            if (i == 1) {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'createdAt', 1)
            
              createTable(newList)
              
            }
            getServerList()
            i = i - 1
            arrow.classList.remove('is-active')
            } else {
              async function getServerList() {
                
              const list = await fetch('http://localhost:3000/api/clients')
              const data = await list.json()

              let newList = ab(data, 'createdAt', 0)
            
              createTable(newList)
            }
                getServerList()
                i = i + 1
                arrow.classList.add('is-active')
            }
                
            })
            docLastchange.addEventListener('click', function() {     
              deleteList()
              let arrow = document.querySelector('.customers-header__change-text')
              if (i == 1) {
                async function getServerList() {
                  
                const list = await fetch('http://localhost:3000/api/clients')
                const data = await list.json()
  
                let newList = ab(data, 'updatedAt', 1)
              
                createTable(newList)
                
              }
              getServerList()
              i = i - 1
              arrow.classList.remove('is-active')
              } else {
                async function getServerList() {
                  
                const list = await fetch('http://localhost:3000/api/clients')
                const data = await list.json()
  
                let newList = ab(data, 'updatedAt', 0)
              
                createTable(newList)
              }
                  getServerList()
                  i = i + 1
                  arrow.classList.add('is-active')
              }
                
                })

  }

  function start() {
    async function getServerList() {

      function ab(arr, key, i) {
        if (i == 1) {
          let result = arr.sort(function(a,b) {
            if (a[key] < b[key]) {
              return -1
            }
          })
          return result
          
        }
  
        if (i == 0) {
          let result = arr.sort(function(a,b) {
            if (a[key] > b[key]) {
              return -1
            }
          })
          return result
        }
      }
                
      const list = await fetch('http://localhost:3000/api/clients')
      const data = await list.json()

      let newList = ab(data, 'id', 0)
    
      createTable(newList)
      
    }
    getServerList()
  }

  let i = 1

  function stopRequest() {
    clearTimeout(inter)
  }

  function incrementText() {
    let input = document.getElementById('input-search')

    deleteList()
    async function getServerInfo() {
      const list = await fetch('http://localhost:3000/api/clients')
      const data = await list.json()

     for (const iterator of data) {

      let one = iterator.surname + ' ' + iterator.lastName
      let two = iterator.name  + ' ' + iterator.lastName
      let tree = iterator.surname + ' ' + iterator.name

      let contacts = iterator.contacts

      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].value == input.value) {
          createCustomer(iterator)
        }
      }

      switch(input.value) {
        
        case iterator.surname:
          createCustomer(iterator)

        case iterator.name:
          createCustomer(iterator)

        case iterator.lastName:
          createCustomer(iterator)

        case one:
          createCustomer(iterator)

        case two:
          createCustomer(iterator)

        case tree:
          createCustomer(iterator)
      }

      if (input.value == '') {
        createTable(data)
      }
     }
    
    }

    getServerInfo()
    
      i = 1
  }

  function search() {

    i = i - 1
    if (i == 0) {
      inter = setTimeout(incrementText, 300);
    } else {
      stopRequest()
      inter = setTimeout(incrementText, 300)
    }
  }

  document.addEventListener('DOMContentLoaded', function() {

    start()
    addCustomer()
    sort()

    let input = document.getElementById('input-search')

    input.addEventListener('input', search)
  })


})();
