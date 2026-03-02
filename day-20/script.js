let isOn = false;
let brightness = 0;

function turnOn() {
  if (!isOn) {
    isOn = true;
    brightness = 50;
    showStatus();
  }
}

function turnOff() {
  isOn = false;
  brightness = 0;
  showStatus();
}

function increaseBrightness() {
  if (isOn && brightness < 100) {
    brightness += 10;
    showStatus();
  }
}

function decreaseBrightness() {
  if (isOn && brightness > 0) {
    brightness -= 10;
    showStatus();
  }
}

function showStatus() {
  console.log({
    power: isOn ? "ON" : "OFF",
    brightness: brightness
  });
}

turnOn();
increaseBrightness();
increaseBrightness();
decreaseBrightness();
turnOff();
