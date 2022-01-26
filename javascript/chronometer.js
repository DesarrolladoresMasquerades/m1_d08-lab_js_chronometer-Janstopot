class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      this.currentTime = this.currentTime + 1;
    }, 1000);
    console.log(this.currentTime);
  }

  getMinutes() {
    return parseInt(this.currentTime / 60);
  }

  getSeconds() {
    return parseInt(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (String(value).length < 2) return 0 + String(value);
    else return String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    if (btnRightElement.innerText === 'SPLIT') {
      let newOl = document.getElementById('splits');
      const newLi = document.createElement('li');
      newLi.innerText = printMinutes() + ':' + printSeconds();
      newOl.appendChild(newLi);
    } else {
      minDecElement.innerText = 0;
      minUniElement.innerText = 0;
      secDecElement.innerText = 0;
      secUniElement.innerText = 0;
    }
    //let time = this.computeTwoDigitNumber(this.getMinutes()) +':'+ this.computeTwoDigitNumber(this.getSeconds())
    //return time
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
