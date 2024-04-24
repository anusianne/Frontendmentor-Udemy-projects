let apiQuotes = [];
const quote = document.getElementById("quote");
const author = document.getElementById("author");

function newQuote() {
  const quoteAPI = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quote.innerText = `${quoteAPI.text}`;
  author.innerText = `${quoteAPI.author}`;
}
async function getQuotes() {
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const res = await fetch(apiURL);
    apiQuotes = await res.json();
    newQuote();
  } catch (e) {
    alert(e);
  }
}

getQuotes();
