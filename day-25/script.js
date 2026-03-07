let time = 5;
let running = false;

function startCountdown() {
  if (running) {
    console.log("Timer already running");
    return;
  }

  running = true;

  let timer = setInterval(() => {
    console.log("Time left:", time);
    time--;

    if (time < 0) {
      clearInterval(timer);
      running = false;
      console.log("Countdown finished");
    }
  }, 1000);
}

function resetCountdown(newTime) {
  if (!running) {
    time = newTime;
    console.log("Timer reset to:", time);
  } else {
    console.log("Stop timer first");
  }
}

resetCountdown(5);
startCountdown();
