(function() {

  let container = document.getElementById('list')

  function itemsOfStudents() {

      let name = document.getElementById('name');
      let surname = document.getElementById('surname');
      let middlename = document.getElementById('middlename');
      let birthday = document.getElementById('birthday');
      let startDataStudy = document.getElementById('oneyear');
      let faculty = document.getElementById('faculty');
      let button = document.getElementById('button-addstudent')
      let form = document.getElementById('form')

      
     return {
      name,
      surname,
      middlename,
      birthday,
      startDataStudy,
      faculty,
      button,
      form
     }

  }

  function getStudentItem(studentObj) {
      let line = document.createElement('tr')
      let faculty = document.createElement('td')
      let birthday = document.createElement('td')
      let studyStart = document.createElement('td')
      let fio = document.createElement('td')
      let button = document.createElement('button')
      

      button.textContent = 'Удалить'

      line.classList.add('hot')
      
      
          let today = new Date;
          let todayyear = today.getFullYear()
          let todayMonth = today.getMonth()
          let birthdayyear = studentObj.birthday.substr(0, 4)
          let lastday =  Number(birthdayyear)

          let old = todayyear - lastday + " лет"

          let numberstartDataStudy = Number(studentObj.studyStart)
          let plusfour = numberstartDataStudy + 4
          let course = plusfour - numberstartDataStudy 

 

          let studyDates = String(numberstartDataStudy) + "-" + String(plusfour)
        
          if (todayyear === numberstartDataStudy) {
              course = "1 курс"
          } else 
            if (todayyear - numberstartDataStudy < 5 && todayMonth < 8 ) {
              course = todayyear - numberstartDataStudy + "курс"
          } else 
            if (todayyear - numberstartDataStudy < 5 && todayMonth > 8) {
              course = todayyear - numberstartDataStudy + 1 + "курс" 
          } else
            if (todayyear - numberstartDataStudy === 4 && todayMonth > 9) {
              course = "закончил" 
          } else 
            if (todayyear - numberstartDataStudy > 5 || todayyear - numberstartDataStudy === 5) {
              course = "закончил"
          }
   

      fio.append(studentObj.surname + " ")
      fio.append(studentObj.name + " ")
      fio.append(studentObj.middlename)
      birthday.append(studentObj.birthday + " " + "(" + old + ")")
      studyStart.append(studyDates + " " + course)
      faculty.append(studentObj.faculty)

      line.append(fio)
      line.append(faculty)
      line.append(birthday)
      line.append(studyStart)
      line.append(button)

      container.append(line)

          button.addEventListener('click', function() {
            if (confirm('Вы уверены')) {
            
              line.remove();

              async function deleteLine() {

                const response = await fetch(`http://localhost:3000/api/students/${studentObj.id}`, {
                  method: 'DELETE',
                });
              }
              deleteLine()
            }
          })

      return {
        fio,
        line,
        faculty,
        birthday,
        studyStart,
        button
    }
  }

  function renderStudentsTable(studentsArray) {
    deleteList()

    const getFilsurname = document.getElementById('fil-surname').value
    const getFilname = document.getElementById('fil-name').value
    const getFilmiddlename = document.getElementById('fil-middlename').value
    const getFilfaculty = document.getElementById('fil-faculty').value
    const getFilstartstudy = document.getElementById('fil-startstudy').value
    const getFilendstudy = document.getElementById('fil-endstudy').value

    newList = [...studentsArray]

    if (getFilsurname !== '') newList = filter(studentsArray, 'surname', getFilsurname)
    if (getFilname !== '') newList = filter(studentsArray, 'name', getFilname)
    if (getFilmiddlename !== '') newList = filter(studentsArray, 'middlename', getFilmiddlename)
    if (getFilfaculty !== '') newList = filter(studentsArray, 'faculty', getFilfaculty)
    if (getFilstartstudy !== '') newList = filter(studentsArray, 'studyStart', getFilstartstudy)
    if (getFilendstudy !== '') newList = filter(studentsArray, 'studyEnd', getFilendstudy)
  
    for (let i = 0; i < newList.length; i++) {
        getStudentItem(newList[i])
    }
    
  }

  function checkForm() {

      let students = itemsOfStudents()
    
        students.form.addEventListener('submit', function(event) {
    event.preventDefault() 


    let surname = students.surname.value.trim()
    let name = students.name.value.trim()
    let middlename = students.middlename.value.trim()
    let birthday = students.birthday.value.trim()
    let faculty = students.faculty.value.trim()
    let startDataStudy = students.startDataStudy.value.trim()
    let startEndStudy = Number(startDataStudy) + 4
   

    if (surname.trim() == ""){ 
        alert('Введите фамилию!')
        return
    }
    if (name.trim() == ""){ 
        alert('Введите имя!')
        return
    }
    if (middlename.trim() == ""){ 
        alert('Введите отчество!')
        return
    }
    if (birthday.trim() == ""){ 
        alert('Введите дату рождения!')
        return
    }
    if (startDataStudy.trim() == ""){ 
        alert('Введите год начала обучения!')
        return
    }
    if (faculty.trim() == ""){ 
        alert('Введите название факультета!')
        return
    }




    async function createTodoItem() {
      const response = await fetch('http://localhost:3000/api/students', {
        method: 'POST',
        body: JSON.stringify({
          name: name, 
          surname: surname, 
          middlename: middlename, 
          birthday: birthday, 
          studyStart: startDataStudy, 
          studyEnd: startEndStudy,
          faculty: faculty
        }),
        headers: {
          'Content-type': 'application/json',
        }
      });
      const abc = await response.json();
      getStudentItem(abc);
      
    }

    createTodoItem()


    // studentsList.push({
    //     name: name, 
    //     surname: surname, 
    //     middlename: middlename, 
    //     birthday: birthday,
    //     startDataStudy: parseInt(startDataStudy), 
    //     startEndStudy: parseInt(startEndStudy),
    //     faculty: faculty
    // })
    // console.log(studentsList)
    // getStudentItem(studentsList[studentsList.length - 1])

              students.surname.value = ''
              students.name.value = ''
              students.middlename.value = ''
              students.birthday.value = ''
              students.faculty.value = ''
              students.startDataStudy.value = ''
    });

  }

  function deleteList() {
    
    let listTr = document.querySelectorAll(".hot")
    
    for (let i = 0; i < listTr.length; i ++) {
      listTr[i].remove()
    }
  }

  function sort() {
    let name = document.getElementById('tFio')
    let faculty = document.getElementById('tFaculty')
    let birthday = document.getElementById('tBirthday')
    let studyYear = document.getElementById('tStudyYears')

   function ab(arr, key, status) {
          if (status == false) {
            let result = arr.sort(function(a,b) {
              if (a[key] < b[key]) {
                return -1
              }
            })
            return result
          }

          if (status == true) {
            let result = arr.sort(function(a,b) {
              if (a[key] > b[key]) {
                return -1
              }
            })
            return result
          }
        }


    name.addEventListener('click', function() {     
       deleteList()
       async function getServerList() {
          
        const list = await fetch('http://localhost:3000/api/students')
        const data = await list.json()
      
        renderStudentsTable(ab(data, 'surname', false))
      }
      getServerList()
    })
    faculty.addEventListener('click', function() {     
        deleteList()
        async function getServerList() {
          
          const list = await fetch('http://localhost:3000/api/students')
          const data = await list.json()
        
          renderStudentsTable(ab(data, 'faculty', false))
        }
        getServerList() 
    })
    birthday.addEventListener('click', function() {     
          deleteList()
          async function getServerList() {
          
            const list = await fetch('http://localhost:3000/api/students')
            const data = await list.json()
          
            renderStudentsTable(ab(data, 'birthday', false))
          }
          getServerList()
          
      })
      studyYear.addEventListener('click', function() {     
            deleteList()
            async function getServerList() {
          
              const list = await fetch('http://localhost:3000/api/students')
              const data = await list.json()
            
              renderStudentsTable(ab(data, 'studyStart', false))
            }
            getServerList()
          
          })
  }

  function filter(arr, prop, value) {
      let result = []
      copy = [...arr]

      for (let item of copy) {
        if (String(item[prop]).includes(value) == true) {
          result.push(item)
        }
      }
      console.log(result)
      return result   
  }

  document.addEventListener('DOMContentLoaded', function() {

    async function getServerList() {
          
      const list = await fetch('http://localhost:3000/api/students')
      const data = await list.json()
    
      renderStudentsTable(data)
    }
    
    getServerList()

    checkForm()
    sort()
  })

  document.getElementById('form-filter').addEventListener('submit', function(event) {
    event.preventDefault()

    async function getServerList() {
          
      const list = await fetch('http://localhost:3000/api/students')
      const data = await list.json()
        renderStudentsTable(data)
    }
    
    getServerList()
  })


})()

