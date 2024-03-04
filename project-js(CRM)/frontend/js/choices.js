let elementOne = document.getElementById('selectOne');
let elementTwo = document.getElementById('selectTwo');
let elementTree = document.getElementById('selectTree');
let elementFour = document.getElementById('selectFour');
let elementFive = document.getElementById('selectFive');
let elementSix = document.getElementById('selectSix');
let elementSeven = document.getElementById('selectSeven');
let elementEight = document.getElementById('selectEight');
let elementNine = document.getElementById('selectNine');
let elementTen = document.getElementById('selectTen');


const list = []

list.push(elementOne)
list.push(elementTwo)
list.push(elementTree)
list.push(elementFour)
list.push(elementFive)
list.push(elementSix)
list.push(elementSeven)
list.push(elementEight)
list.push(elementNine)
list.push(elementTen)


for (const item of list) {

  const choices = new Choices(item, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom',
});
}



function addContact() {

    let addbutton = document.getElementById('add-contact')

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

    addbutton.addEventListener('click', function() {

      if (oneLine.classList.contains("open-line") == false) {
        oneLine.classList.add("open-line")
        return;
      } else if (twoLine.classList.contains("open-line") == false) {
        twoLine.classList.add("open-line")
        return;
      } else if (treeLine.classList.contains("open-line") == false) {
        treeLine.classList.add("open-line")
        return;
      } else if (fourLine.classList.contains("open-line") == false) {
        fourLine.classList.add("open-line")
        return;
      } else if (fiveLine.classList.contains("open-line") == false) {
        fiveLine.classList.add("open-line")
        return;
      } else if (sixLine.classList.contains("open-line") == false) {
        sixLine.classList.add("open-line")
        return;
      } else if (sevenLine.classList.contains("open-line") == false) {
        sevenLine.classList.add("open-line")
        return;
      } else if (eightLine.classList.contains("open-line") == false) {
        eightLine.classList.add("open-line")
        return;
      } else if (nineLine.classList.contains("open-line") == false) {
        nineLine.classList.add("open-line")
        return;
      } else if (tenLine.classList.contains("open-line") == false) {
        tenLine.classList.add("open-line")
        return;
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

  deleteButtonOne.addEventListener('click', function() {
    oneLine.classList.remove("open-line")
  })
  deleteButtonTwo.addEventListener('click', function() {
    twoLine.classList.remove("open-line")
  })
  deleteButtonTree.addEventListener('click', function() {
    treeLine.classList.remove("open-line")
  })
  deleteButtonFour.addEventListener('click', function() {
    fourLine.classList.remove("open-line")
  })
  deleteButtonFive.addEventListener('click', function() {
    fiveLine.classList.remove("open-line")
  })
  deleteButtonSix.addEventListener('click', function() {
    sixLine.classList.remove("open-line")
  })
  deleteButtonSeven.addEventListener('click', function() {
    sevenLine.classList.remove("open-line")
  })
  deleteButtonEight.addEventListener('click', function() {
    eightLine.classList.remove("open-line")
  })
  deleteButtonNine.addEventListener('click', function() {
    nineLine.classList.remove("open-line")
  })
  deleteButtonTen.addEventListener('click', function() {
    tenLine.classList.remove("open-line")
  })

  
}

addContact()