const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", (e) => {
  updateCounter();
  updateRemaining();
});

function updateCounter() {
  totalCounter.innerText = textarea.value.length;
}
function updateRemaining() {
  remainingCounter.innerText =
    textarea.getAttribute("maxlength") - textarea.value.length;
}
