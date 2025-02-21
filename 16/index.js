const btn = document.querySelector(".btn");
const imageContainer = document.querySelector(".image-container");

btn.addEventListener("click", addNewImages);

function addNewImages() {
  for (let i = 0; i <= 10; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    imageContainer.appendChild(newImg);
  }
}
