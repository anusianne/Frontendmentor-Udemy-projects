const bmiBtn = document.getElementById("btn");

function calculateBmi() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const bmiResult = document.getElementById("bmi");
  const weightCondition = document.getElementById("weight-condition");

  const bmiValue = (weight / (height * height)).toFixed(2);
  bmiResult.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "Underweight";
  } else if (bmiValue > 18.5 && bmiValue < 24.9) {
    weightCondition.innerText = "Normal weight";
  } else if (bmiValue > 25 && bmiValue < 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue > 30 && bmiValue < 35) {
    weightCondition.innerText = "Obese";
  } else {
    weightCondition.innerText = "Morbid obesity";
  }
}

bmiBtn.addEventListener("click", calculateBmi);
