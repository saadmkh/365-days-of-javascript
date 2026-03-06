function convertTemperature(value, type) {
  if (type === "CtoF") {
    return (value * 9 / 5) + 32;
  }

  if (type === "FtoC") {
    return (value - 32) * 5 / 9;
  }

  return "Invalid type";
}

let result1 = convertTemperature(25, "CtoF");
console.log("25°C in Fahrenheit:", result1);

let result2 = convertTemperature(77, "FtoC");
console.log("77°F in Celsius:", result2);
