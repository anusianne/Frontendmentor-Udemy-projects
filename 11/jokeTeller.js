const jokeBtn = document.getElementById("jokeBtn");
const audio = document.getElementById("audio");

async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
    console.log(joke);
  } catch (e) {
    console.log("whoops: ", e);
  }
}
getJokes();
