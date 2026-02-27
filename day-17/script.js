let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    console.log(formatTime());
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  console.log(formatTime());
}

function formatTime() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  return h + ":" + m + ":" + s;
}

start();

setTimeout(() => stop(), 5000);
setTimeout(() => reset(), 7000);
