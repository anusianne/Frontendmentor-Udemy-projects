let apiQuotes = [];
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitterBtn");

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
    newQuoteBtn.addEventListener("click", newQuote);
  } catch (e) {
    alert(e);
  }
}
function tweetQuote() {
  twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}
twitterBtn.addEventListener("click", tweetQuote);
getQuotes();
