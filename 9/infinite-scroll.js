const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArr = [];
const count = 30;
const apiKEY = `7x0Lp30rR3ej-06lEAGWg0wBIySB302W3WsSerf6N4w`;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`;

function setAttributes(element, attr) {
  for (const key in attr) {
    element.setAttribute(key, attr[key]);
  }
}
function displayPhotos() {
  photosArr.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const res = await fetch(apiURL);
    photosArr = await res.json();
    displayPhotos();
  } catch (e) {
    console.log(e);
  }
}

getPhotos();
