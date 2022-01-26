const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

    printMinutes()
    printSeconds()
    
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
  return minutes
  
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
  return seconds
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
 
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  btnLeftElement.classList.toggle("stop");
  if(btnLeftElement.innerText === 'START'){
    chronometer.start(printTime)
    btnLeftElement.innerText = 'STOP'
  }else{
    btnLeftElement.innerText = 'START'
    chronometer.stop()

  }


  btnRightElement.classList.toggle("split")
  if(btnRightElement.innerText === 'RESET'){
    btnRightElement.innerText = 'SPLIT'
  }else{
    btnRightElement.innerText = 'RESET'
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  

  chronometer.split()
  /*
  
  if(btnRightElement.innerText === 'SPLIT'){

    let newOl = document.getElementById('splits')
    const newLi = document.createElement('li')
    newLi.innerText = printMinutes() + ':' + printSeconds()
    newOl.appendChild(newLi)
  }else{
    minDecElement.innerText = 0
    minUniElement.innerText = 0
    secDecElement.innerText = 0
    secUniElement.innerText = 0
  }
  */
  
});
