const quoteBlock = document.getElementById('quote');
const quoteText = document.getElementById('quote-text');
const button = document.getElementById('generate-btn');
async function getQuote() {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();

    quoteText.textContent = data.quote + ' — ' + data.author;
    quoteBlock.classList.add('visible');
}
button.addEventListener('click', getQuote);
getQuote();