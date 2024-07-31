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
    let fiveInput = document.getElementById('line-inputFive')
    let sixInput = document.getElementById('line-inputSix')
    let sevenInput = document.getElementById('line-inputSeven')
    let eightInput = document.getElementById('line-inputEight')
    let nineInput = document.getElementById('line-inputNine')
    let tenInput = document.getElementById('line-inputTen')

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
      fiveInput,
      sixInput,
      sevenInput,
      eightInput,
      nineInput,
      tenInput
    }
  }

  function docLineInfo() {
    let items = infoItems()
    let docsurname = items.surname
    let docname = items.name
    let doclastname = items.middlename
    let doconeInput = items.oneInput
    let doctwoInput = items.twoInput
    let doctreeInput = items.treeInput
    let docfourInput = items.fourInput
    let docfiveInput = items.fiveInput
    let docsixInput = items.sixInput
    let docsevenInput = items.sevenInput
    let doceightInput = items.eightInput
    let docnineInput = items.nineInput
    let doctenInput = items.tenInput

    let names = []

    names.push(docsurname,docname,doclastname)

    let docInput = []

    docInput.push(doconeInput,doctwoInput,doctreeInput,docfourInput,docfiveInput,docsixInput,docsevenInput,doceightInput,docnineInput,doctenInput)

    let oneLine = document.getElementById('lineOne')
    let twoLine = document.getElementById('lineTwo')
    let treeLine = document.getElementById('lineTree')
    let fourLine = document.getElementById('lineFour')
    let fiveLine = document.getElementById('lineFive')
    let sixLine = document.getElementById('lineSix')
    let sevenLine = document.getElementById('lineSeven')
    let eightLine = document.getElementById('lineEight')
    let nineLine = document.getElementById('lineNine')
    let tenLine = document.getElementById('lineTen')

    let listLine = []

    listLine.push(oneLine,twoLine,treeLine,fourLine,fiveLine,sixLine,sevenLine,eightLine,nineLine,tenLine)

    let docLineOne = document.querySelectorAll('.lineOne')
    let docLineTwo = document.querySelectorAll('.lineTwo')
    let docLineTree = document.querySelectorAll('.lineTree')
    let docLineFour = document.querySelectorAll('.lineFour')
    let docLineFive = document.querySelectorAll('.lineFive')
    let docLineSix = document.querySelectorAll('.lineSix')
    let docLineSeven = document.querySelectorAll('.lineSeven')
    let docLineEight = document.querySelectorAll('.lineEight')
    let docLineNine = document.querySelectorAll('.lineNine')
    let docLineTen = document.querySelectorAll('.lineTen')


    let elementone = docLineOne[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementtwo = docLineTwo[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementtree = docLineTree[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementfour = docLineFour[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementfive = docLineFive[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementsix = docLineSix[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementseven = docLineSeven[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementeight = docLineEight[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementnine = docLineNine[0].getElementsByClassName('choices__item choices__item--selectable')
    let elementten = docLineTen[0].getElementsByClassName('choices__item choices__item--selectable')

    let choiceOne = elementone[0]
    let choiceTwo = elementtwo[0]
    let choiceTree = elementtree[0]
    let choiceFour = elementfour[0]
    let choiceFive = elementfive[0]
    let choiceSix = elementsix[0]
    let choiceSeven = elementseven[0]
    let choiceEight = elementeight[0]
    let choiceNine = elementnine[0]
    let choiceTen = elementten[0]

    let choiceAtributeList = []

    choiceAtributeList.push(choiceOne,choiceTwo,choiceTree,choiceFour,choiceFive,choiceSix,choiceSeven,choiceEight,choiceNine,choiceTen)

    return {
      names,
      docInput,
      listLine,
      choiceAtributeList
    }
  }

  function contactsInfo(docInput, docInfoChoice) {
    let contacts = []

                for (let i = 0; i < docInput.length; i++) {
                 
                  if (docInput[i].value.trim() === '') {
                    continue
                  } 
                  else {
                    contacts.push({type: docInfoChoice[i].getAttribute('data-value'), value: docInput[i].value.trim()},)
                  } 
                  
                }

                return {
                  contacts
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
    let buttonDelete = document.createElement('button')

    buttonLastchange.append('Изменить')
    buttonDelete.append('Удалить')

    let textId = document.createElement('span')
    let textFio = document.createElement('span')
    let textData = document.createElement('span')
    let textDataLastchange = document.createElement('span')
    let textTime = document.createElement('span')
    let textTimeLastchange = document.createElement('span')

    let list = document.createElement('ul')

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

    boxButton.classList.add('col', 'col-lg-2', 'col-md-2','ms-lg-3','ps-lg-2','ms-md-0', 'ps-md-2', 'customers-col__actions')
    buttonLastchange.classList.add('customers-col__button', 'button-change')
    buttonDelete.classList.add('customers-col__button', 'button-cancel')

    let contactsObj = customerObj.contacts

    for (let i = 0; i < contactsObj.length; i++) {

      switch(contactsObj[i].type) {

        case 'Телефон':
          let telefon = document.createElement('li')
          let telefonLink = document.createElement('a')
          telefonLink.setAttribute('href', 'tel:' + contactsObj[i].value)
          if (telefonLink.hasAttribute('href')) {
            telefonLink.classList.add('social-phone')
            telefon.classList.add('social-item')
          }
          tippy(telefonLink, {
            content: 'Телефон' + ': ' + contactsObj[i].value,
            allowHTML: true,
          });
          telefon.append(telefonLink)
          list.append(telefon)

          break

          case 'Email':
            let email = document.createElement('li')
            let emailLink = document.createElement('a')

            emailLink.setAttribute('href', contactsObj[i].value)
            if (emailLink.hasAttribute('href')) {
              emailLink.classList.add('social-mail')
              email.classList.add('social-item')
            }
            tippy(emailLink, {
              content: 'Email' + ': ' + contactsObj[i].value,
              allowHTML: true,
            });
            email.append(emailLink)
            list.append(email)

             break

            case 'Facebook':
              let facebook = document.createElement('li')
              let facebookLink = document.createElement('a')

              facebookLink.setAttribute('href', contactsObj[i].value)

              if (facebookLink.hasAttribute('href')) {
                facebookLink.classList.add('social-fb')
                facebook.classList.add('social-item')
              }
              
              tippy(facebookLink, {
                content: 'Facebook' + ': ' + contactsObj[i].value,
                allowHTML: true,
              });
              facebook.append(facebookLink)
              list.append(facebook)
              break

              case 'VK':
              let vk = document.createElement('li')
              let vkLink = document.createElement('a')

              vkLink.setAttribute('href', contactsObj[i].value)

              if (vkLink.hasAttribute('href')) {
                vkLink.classList.add('social-vk')
                vk.classList.add('social-item')
              }
              
              tippy(vkLink, {
                content: 'VK' + ': ' + contactsObj[i].value,
                allowHTML: true,
              });
              vk.append(vkLink)
              list.append(vk)

              break
              
      }
    }

    function checkContacts(contactsObj) {

      if (contactsObj.length > 4) {
            let o = document.createElement('button')
            let text = document.createElement('span') 
            
            let number = contactsObj.length - 4
            o.classList.add('social-item','social-contacts')
            text.classList.add('contacts-text')
            list.classList.add('contacts-many')
            text.append('+' + number)
            o.append(text)
            list.append(o)

            for (let i = 0; i < 4; i++) {
              list.children[i].classList.add('signal')
            }
              
              for(let i = 0; i < contactsObj.length; i++) {
                if (list.children[i].classList.contains('signal') === false) {
                  list.children[i].classList.add('close')
                }
              }
              o.addEventListener('click', function() {
                for (let i = 0; i < contactsObj.length; i++) {
                  if (list.children[i].classList.contains("close") === true) {
                    list.children[i].classList.remove("close")
                    o.classList.add('close')
                  }
                }
              })
      }     
    }
    
    checkContacts(contactsObj)

    buttonLastchange.addEventListener('click', function() {
      getCustomerServer(customerObj.id)
    
    })

    buttonDelete.addEventListener('click', function() {
      let btnDelete = document.querySelector('.form__btn-delete')
      let btnCancellation = document.querySelector('.form__btn-cancellation')
      openDeleteform()
          btnDelete.addEventListener('click', function() {
            let customerNumber = customerObj.id
            deleteCustomerServer(customerNumber)
            closeDeleteform()            
            row.remove() 
          })

            btnCancellation.addEventListener('click', function() {
              closeDeleteform()
            })

    })

    textId.append(customerObj.id.substr(7, 6))
    textFio.append(customerObj.surname + " ", customerObj.name + " ", customerObj.lastName)

    textData.append(customerObj.createdAt.substr(8, 2) + '.' + customerObj.createdAt.substr(5, 2) + '.' + customerObj.createdAt.substr(0, 4))
    textTime.append(customerObj.createdAt.substr(12, 4))

    textDataLastchange.append(customerObj.updatedAt.substr(8, 2) + '.' + customerObj.updatedAt.substr(5, 2) + '.' + customerObj.updatedAt.substr(0, 4))
    textTimeLastchange.append(customerObj.updatedAt.substr(12, 4))

    boxId.append(textId)
    boxFio.append(textFio)
    boxDataTime.append(textData,textTime)
    boxLastCharge.append(textDataLastchange,textTimeLastchange)

    boxContact.append(list)
    boxButton.append(buttonLastchange,buttonDelete)

    row.append(boxId,boxFio,boxDataTime,boxLastCharge,boxContact,boxButton)
    table.append(row)

    return {
      row,
      textId
    }
  }

    
      // createCustomerServer(surname, name, middlename, contacts)
   
          //   case(404): 
          //   boxMessedge.classList.add('validation-vision')
          //     if (messedge.innerHTML === 'Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных.') {
          //       return
          //     } else {
          //       messedge.append('Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных.')
          //     }
          //     return

          //   case(500): 
          //     boxMessedge.classList.add('validation-vision')
          //     if (messedge.innerHTML === 'Странно, но сервер сломался.') {
          //       return
          //     } else {
          //       messedge.append('Странно, но сервер сломался.')
          //     }
          //     return

          //     case(200): 
          //     cleanForm()
          //     closeForm()
          //     deleteList()
          //     return

          //     case(201):    
          //     cleanForm()
          //     closeForm()
          //     deleteList()
          //     return
          // }

          
    


  async function createCustomerServer(surname, name, middlename, contacts) {
      
          let now = new Date()
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
          let abc = await request.json()

          createCustomer(abc)
   
          cleanForm()
          closeForm()

  }
  
  async function deleteCustomerServer(id) {
          const response = await fetch('http://localhost:3000/api/clients/' + id, {
          method: 'DELETE'
        })
         abc = await response.json()
  }

  function changeCustomerServer(createCustomer) {
    
              let docInput = docLineInfo().docInput
              let docInfoChoice = docLineInfo().choiceAtributeList
              let contacts = contactsInfo(docInput, docInfoChoice).contacts

              let docsurname = infoItems().surname.value.trim()
              let docname = infoItems().name.value.trim()
              let docmiddlename = infoItems().middlename.value.trim()
              let docId = infoItems().id.innerHTML
              let now = new Date()
                
              sendCustomerServer(createCustomer, docsurname, docname, docmiddlename, contacts, docId, now)


  }

  // почему перезагружается таблица

  async function sendCustomerServer(createCustomer, docsurname, docname, docmiddlename, contacts, docId, now) {
        
            let boxMessedge = document.getElementById('validation-messedge')
            let messedge = document.getElementById('messedge-id')
            const request = await fetch('http://localhost:3000/api/clients/' + docId, {
              method: 'PATCH',  
              
              body: JSON.stringify({
                createdAt: createCustomer,
                updatedAt: now,
                name: docname,
                surname: docsurname,
                lastName: docmiddlename,
                contacts: contacts
              })
            })
            let a = await request.json()
            console.log(a)
            switch(request.status) {
              case(422): 
               boxMessedge.classList.add('validation-vision')
               if (messedge.innerHTML === 'Введите ФИО и контакты.') {
                return
               } else {
                messedge.append('Введите ФИО и контакты.')
               }
                return
        
              case(404): 
               boxMessedge.classList.add('validation-vision')
                if (messedge.innerHTML === 'Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных.') {
                  return
                 } else {
                  messedge.append('Переданный в запросе метод не существует или запрашиваемый элемент не найден в базе данных.')
                 }
                return
        
              case(500): 
                boxMessedge.classList.add('validation-vision')
                if (messedge.innerHTML === 'Странно, но сервер сломался.') {
                  return
                } else {
                  messedge.append('Странно, но сервер сломался.')
                }
                return
        
                case(200): 
                cleanForm()
                closeForm()
                deleteList()  
                
        
                case(201):    
                cleanForm()
                closeForm()
                deleteList()
                
            }
            
  }

  async function getCustomerServer(id) {
    const response = await fetch('http://localhost:3000/api/clients/' + id) 
    const list = await response.json()

    openCustomerFormChange(list, id)
  }

  async function startListSortServer(key,i) {

      const list = await fetch('http://localhost:3000/api/clients')
      const data = await list.json()

     createTable(ab(data,key,i))
  }

  function openCustomerFormChange(list, id) {
      let btnSaveChange = document.getElementById('btn-save__change')
      let btnDeleteChange = document.getElementById('btn-cancel__change')
      let btnDelete = document.getElementById('form__btn-delete')
      let btnCancellation = document.querySelector('.form__btn-cancellation')
      let items = infoItems()
      let docsurname = items.surname
      let docname = items.name
      let doclastname = items.middlename
      let docformIdText = items.id

      let docInfoLine = docLineInfo().listLine
      let docInput = docLineInfo().docInput
      let docInfoChoice = docLineInfo().choiceAtributeList
      
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

      for (let i = 0; i < contacts.length; i++) {
        docInfoChoice[i].setAttribute('data-value', contacts[i].type)
        docInfoChoice[i].innerHTML = contacts[i].type
        docInput[i].setAttribute('value', contacts[i].value)
        docInput[i].append(contacts[i].value)
        docInput[i].value = contacts[i].value
        docInfoLine[i].classList.add('open-line')
      }

      openChangeform()

      btnSaveChange.addEventListener('click', function() {
            
            changeCustomerServer(createCustomer)
           
      })


      btnDeleteChange.addEventListener('click', function(event) {
          event.preventDefault()
          closeForm()
          openDeleteform()
          
              btnDelete.addEventListener('click', function() {
                deleteCustomerServer(id)
                closeDeleteform()
                deleteList()
                anter = setTimeout(start, 50);
              })
              btnCancellation()
      })


  }

  function closeBackground() {
    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    block.classList.remove('block-on')
    header.classList.remove('header-on')
  }

  function openBackground() {
    let block = document.querySelector('.block')
    let header = document.querySelector('.header')
    block.classList.add('block-on')
    header.classList.add('header-on')
  }

  function createTable(list) {
    for (let i = 0; i < list.length; i++) {
      createCustomer(list[i])
    }
  }

  function openNewForm() {
    let form = document.querySelector('.form')
    let hCustomer = document.querySelector('.form-h2__newcustomer')
    let hChangeCustomer = document.querySelector('.form-h2__changecustomer')
    let formid = document.querySelector('.form-id__case')
    let btnCancelCustomer = document.getElementById('btn-cancel__change')
    let btnCancellation = document.getElementById('btn-cancellation')
    let btnChange = document.getElementById('btn-save__change')
    let btnSave = document.getElementById('button-save')

      hCustomer.classList.remove('close')
      hChangeCustomer.classList.add('close')
      formid.classList.add('close')
      btnChange.classList.add('close')
      btnSave.classList.remove('close')
      btnCancelCustomer.classList.add('close')
      btnCancellation.classList.remove('close')

      form.classList.add('show')
      openBackground()
  }

  function openChangeform() {
    let form = document.querySelector('.form')
    let hCustomer = document.querySelector('.form-h2__newcustomer')
      let hChangeCustomer = document.querySelector('.form-h2__changecustomer')
      let formid = document.querySelector('.form-id__case')
      let btnSave = document.querySelector('.form__button-save')
      let btnSaveChange = document.getElementById('btn-save__change')
      let btnCancelCustomer = document.getElementById('btn-cancel__change')
      let btnCancellation = document.getElementById('btn-cancellation')

    form.classList.add('show')
    hCustomer.classList.add('close')
    btnSave.classList.add('close')
    hChangeCustomer.classList.remove('close')
    formid.classList.remove('close')
    btnSaveChange.classList.remove('close')
    btnCancelCustomer.classList.remove('close')
    btnCancellation.classList.add('close')

    openBackground()

  }

  function openDeleteform() {
    let formCancel = document.querySelector('.form-cancel')
    formCancel.classList.add('show')
    openBackground()
  }

  function closeForm() {
    let form = document.querySelector('.form')
    form.classList.remove('show')
    closeBackground()
  }

  function closeDeleteform() {
    let formCancel = document.querySelector('.form-cancel')
    formCancel.classList.remove('show')
    closeBackground()
  }

  function cleanForm() {
    let docInputs = docLineInfo().docInput
    let names = docLineInfo().names
    let lines = docLineInfo().listLine
    let messedge = document.getElementById('messedge-id')
    let docId = infoItems().id

    docId.innerHTML = ''
    messedge.innerHTML = ''

      for (let item of docInputs) {
        item.value = ''
        item.innerHTML = ''
        item.removeAttribute('value')
      }

      for (let item of names) {
        item.value = ''
        item.innerHTML = ''
        item.removeAttribute('value')
      }
      for(let i = 0;i < lines.length; i++) {
        lines[i].classList.remove("open-line")
      }
  }

  function btnCancel() {
    let deleteForm = document.getElementById('form-delete')
    deleteForm.addEventListener('click', function() {
      closeForm()
      cleanForm()
    })
  }

  function btnCancelTwo() {
    let deleteFormTwo = document.getElementById('form-delete__two')

    deleteFormTwo.addEventListener('click', function() {
      closeDeleteform()
      cleanForm()
    })
  }

  function btnCancellation() {
    let btnCancellation = document.querySelector('.form__btn-cancellation')
    btnCancellation.addEventListener('click', function() {
      closeDeleteform()
    })
  }

  function addCustomer() {
    let addButton = document.getElementById('add-customer')

    addButton.addEventListener('click', function() {
      cleanForm()
      openNewForm()
    })
      
    saveCustomer()
  }

  function saveCustomer() {
    
    let button = document.getElementById('button-save')
    
    button.addEventListener('click', function(event) {
      event.preventDefault()
      let names = docLineInfo().names
      let surname = names[0].value
      let name = names[1].value
      let middlename = names[2].value

      let docInput = docLineInfo().docInput
      let docInfoChoice = docLineInfo().choiceAtributeList
      let contacts = contactsInfo(docInput, docInfoChoice).contacts

      let boxMessedge = document.getElementById('validation-messedge')
      let messedge = document.getElementById('messedge-id')
  
      if (surname == '' || name == '') {
     
          messedge.innerHTML = 'Введите ФИО и контакты.'
          boxMessedge.classList.add('validation-vision')
  
      } else {

        createCustomerServer(surname, name, middlename, contacts)
        messedge.innerHTML = ''
        boxMessedge.classList.remove('validation-vision')
      }



    })
    
  }

  function addContact() {

    let addbutton = document.getElementById('add-contact')

    addbutton.addEventListener('click', function() {

      for(let i = 0; i < lines.length; i++) {
          if (lines[i].classList.contains("open-line") == false) {
            lines[i].classList.add("open-line")
            return
          }
        }
      })

    let deleteButtonOne = document.getElementById('line-buttonOne')
    let deleteButtonTwo = document.getElementById('line-buttonTwo')
    let deleteButtonTree = document.getElementById('line-buttonTree')
    let deleteButtonFour = document.getElementById('line-buttonFour')
    let deleteButtonFive = document.getElementById('line-buttonFive')
    let deleteButtonSix = document.getElementById('line-buttonSix')
    let deleteButtonSeven = document.getElementById('line-buttonSeven')
    let deleteButtonEight = document.getElementById('line-buttonEight')
    let deleteButtonNine = document.getElementById('line-buttonNine')
    let deleteButtonTen = document.getElementById('line-buttonTen')

    let buttons = []

    buttons.push(deleteButtonOne,deleteButtonTwo,deleteButtonTree,deleteButtonFour,deleteButtonFive,deleteButtonSix,deleteButtonSeven,deleteButtonEight,deleteButtonNine,deleteButtonTen)

    let docInputs = docLineInfo().docInput
    let lines = docLineInfo().listLine

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        lines[i].classList.remove("open-line")
        docInputs[i].removeAttribute('value')
        docInputs[i].innerHTML = ''
        
      })
    }
  }

  function deleteList() {
    let rows = document.querySelectorAll('.customers-row')

    for (const item of rows) {
      item.remove()
    }
  }

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

  function numbersVisible() {
    let number = document.querySelector('.numbers')
    number.classList.add('open')
  }

  function unvisible() {
    let number = document.querySelector('.numbers')
    number.classList.remove('open')
  }

  function sort() {
    let docId = document.getElementById('doc-id')
    let docFio = document.getElementById('doc-fio')
    let docData = document.getElementById('doc-data')
    let docLastchange = document.getElementById('doc-lastchange')

          let i = 0

          docId.addEventListener('click', function() {     
            deleteList()
            let arrow = document.querySelector('.customers-header__id-text')
            let number = document.querySelector('.numbers')
            let numberone = document.querySelector('.numbers_one')
            let numbertwo = document.querySelector('.numbers_two')
            let numbertree = document.querySelector('.numbers_tree')
            let numberfour = document.querySelector('.numbers_four')
            
            if (i == 1) {
              startListSortServer('id',1)
            i = i - 1
            arrow.classList.remove('is-active')
            number.classList.add('down')
            numberone.classList.add('color_four')
            numbertwo.classList.add('color_tree')
            numbertree.classList.add('color_two')
            numberfour.classList.add('color_one')
          
            
            numbersVisible()
            setTimeout(unvisible, 5000)
            
            } else {
              startListSortServer('id',0)
                i = i + 1
                arrow.classList.add('is-active')
                number.classList.remove('down')
                numberone.classList.remove('color_four')
                numbertwo.classList.remove('color_tree')
                numbertree.classList.remove('color_two')
                numberfour.classList.remove('color_one')
            
                numbersVisible()
                setTimeout(unvisible, 5000)
            }
          })

            docFio.addEventListener('click', function() {     
              deleteList()
              let arrow = document.querySelector('.customers-header__fio-text')
              if (i == 1) {
                startListSortServer('surname',1)
              
              i = i - 1
              arrow.classList.remove('is-active')
              
              } else {
                startListSortServer('surname',0)
              
                  i = i + 1
                  arrow.classList.add('is-active')
              }
            })
              docData.addEventListener('click', function() {     
                deleteList()
                let arrow = document.querySelector('.customers-header__data-text')
                if (i == 1) {
                  startListSortServer('createdAt',1)
                
                i = i - 1
                arrow.classList.remove('is-active')
                } else {
                  startListSortServer('createdAt',0)
                
                    i = i + 1
                    arrow.classList.add('is-active')
                }
                    
                })
                docLastchange.addEventListener('click', function() {     
                  deleteList()
                  let arrow = document.querySelector('.customers-header__change-text')
                  if (i == 1) {
                    startListSortServer('updatedAt',1)
                  
                  i = i - 1
                  arrow.classList.remove('is-active')
                  } else {
                    startListSortServer('updatedAt',0)
                  
                      i = i + 1
                      arrow.classList.add('is-active')
                  }
                    
                    })
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
        break
      }

      switch(input.value) {
        
        case iterator.surname:
          createCustomer(iterator)
          break

        case iterator.name:
          createCustomer(iterator)
          break

        case iterator.lastName:
          createCustomer(iterator)
          break

        case one:
          createCustomer(iterator)
          break

        case two:
          createCustomer(iterator)
          break

        case tree:
          createCustomer(iterator)
          break
      }

     }
     
    if (input.value === '') {
      deleteList()
      startListSortServer('id',0)
      }
    }

    getServerInfo()
    
  }

  function search() {
    i = 1
    i = i - 1
    if (i == 0) {
      inter = setTimeout(incrementText, 300);
    } else {
      stopRequest()
      inter = setTimeout(incrementText, 300)
    }

  }

  document.addEventListener('DOMContentLoaded', function() {

    startListSortServer('id',0)
    addCustomer()
    sort()
    btnCancel()
    btnCancelTwo()
    btnCancellation() 
    addContact()

    let input = document.getElementById('input-search')

    input.addEventListener('input', search)

    
  })
})();