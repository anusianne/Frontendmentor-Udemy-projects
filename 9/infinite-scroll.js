const count = 30;
const apiKEY = `7x0Lp30rR3ej-06lEAGWg0wBIySB302W3WsSerf6N4w`;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`;

async function getPhotos() {
  try {
    const res = await fetch(apiURL);
    const data = res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
getPhotos();
