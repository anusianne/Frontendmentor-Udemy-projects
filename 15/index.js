const container = document.getElementById("container");
const occupation = ["Youtuber", "WebDeveloper", "Freelancer", "Instructor"];
let carrerIndex = 0;
let charIndex = 0;

function updateText() {
  charIndex++;
  container.innerHTML = `<h1>I am a ${occupation[carrerIndex].slice(
    0,
    charIndex
  )}</h1>`;

  if (charIndex === occupation[carrerIndex].length) {
    carrerIndex++;
    charIndex = 0;
  }
  setTimeout(updateText, 400);
}

updateText();
