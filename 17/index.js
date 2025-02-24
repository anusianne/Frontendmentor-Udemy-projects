const input = document.querySelector(".input");
const body = document.querySelector("body");
input.checked = JSON.parse(localStorage.getItem("mode"));
updateBackgroundColor();

function updateBackgroundColor() {
  if (input.checked) {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
}
input.addEventListener("input", () => {
  updateBackgroundColor();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(input.checked));
}
