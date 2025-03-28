const container = document.querySelector(".container");
const colorContainer = document.querySelectorAll(".color-container");

colorContainer.forEach((el) => {
  el.addEventListener("click", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    el.style.backgroundColor = randomColor;
    console.log(randomColor);
    el.innerText = randomColor;
  });
});
