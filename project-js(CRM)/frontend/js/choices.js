let elementOne = document.getElementById('selectOne');
let elementTwo = document.getElementById('selectTwo');
let elementTree = document.getElementById('selectTree');
let elementFour = document.getElementById('selectFour');


const list = []

list.push(elementOne)
list.push(elementTwo)
list.push(elementTree)
list.push(elementFour)


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
      }
      
     console.log()
  }) 
  let deleteButtonOne = document.getElementById('line-buttonOne')
  let deleteButtonTwo = document.getElementById('line-buttonTwo')
  let deleteButtonTree = document.getElementById('line-buttonTree')
  let deleteButtonFour = document.getElementById('line-buttonFour')

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

  
}

addContact()