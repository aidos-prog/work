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


