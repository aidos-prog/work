let string = document.querySelector('.count-display');
let button = document.querySelector('.increment-button');
let buttontwo = document.querySelector('.increment-button-two');
let input = document.querySelector('.input');
let i = 2;

function incrementCount () {
  
  let curruntCount = parseInt(string.textContent);
  
  if (curruntCount > 0) {
    string.textContent = curruntCount - 1;
  }
}

function stop() {
  i = 2
    clearInterval(inter);
}

function start() {
  i = i - 1
  if (i == 0) {
    string.textContent = input.value
    i = 2
    stop();
  } else {
    inter = setInterval(incrementCount, 1000);
  }
}

function askForNumber() {
  
  if (i == 1) {
    string.textContent != input.value
  } else {
    string.textContent = input.value
  }
}

input.addEventListener('input', askForNumber);
button.addEventListener('click', start);
buttontwo.addEventListener('click', stop);



