// Store all quotes inside an array
const quotes = [
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Opportunities don't happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke"
    },
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Never stop learning because life never stops teaching.",
        author: "Unknown"
    }
];

// Get HTML elements
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("newQuote");

// Variable to remember previous quote
let lastIndex = -1;

// Function to generate random quote
function generateQuote() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    quoteText.textContent = `"${quotes[randomIndex].quote}"`;

    authorText.textContent = `- ${quotes[randomIndex].author}`;
}

// Button click
button.addEventListener("click", generateQuote);

// Show one quote when page opens
generateQuote();