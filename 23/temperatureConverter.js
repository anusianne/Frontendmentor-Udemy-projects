const input = document.querySelectorAll(".input");
const celcius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

input.forEach((i) => {
  i.addEventListener("change", countTemp);
});

function countTemp(e) {
  const currentValue = +e.target.value;

  switch (e.target.name) {
    case "celsius":
      kelvin.value = (currentValue + 273.32).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celcius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celcius.value = (currentValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
  }
}
