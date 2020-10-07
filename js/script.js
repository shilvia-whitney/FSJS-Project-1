/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
    source: 'Paulo Coelho',
    citation: 'The Alchemist',
    year: '1988'
  },
  {
    quote: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    source: 'Barack Obama'
  },
  {
    quote: 'The power of imagination makes us infinite.',
    source: 'John Muir'
  },
  {
    quote: "But I don't want to use my head!",
    source: 'Rex',
    citation: 'Toy Story 2',
    year: '1999',
  },
  {
    quote: 'Real change, enduring change, happens one step at a time.',
    source: 'Ruth Bader Ginsburg'
  }
];

/***
 * `getRandomQuote` function
 * Funtion generates random quote given the length of the quote array
***/

function getRandom () {
  // Function getRandom generates random number and repeats function until its different from previous roll.
  const randomNumber = Math.floor(Math.random() * quotes.length);
  if (getRandom == randomNumber) {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return randomNumber;
    } else {
      return randomNumber;
    }
};

function getRandomQuote() {
  // Function getRandomeQuote takes the number generated from getRandom to return a quote.
  randQuote = quotes[getRandom()];
  return randQuote;
};

/***
 * `printQuote` function
 * Function prints the quotes stored in the quotes array with 'if' options for the citation and year.
***/

function printQuote() {
  // Function printQuote calls for HTML element where the random quote generated from the getRandomQuote will be displayed and formatted.
  let quoteBox = document.getElementById('quote-box');
  let randomQuote = getRandomQuote();
  let htmlString = '';

  htmlString = '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;
  if ('citation' in randomQuote) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  };
  if ('year' in randomQuote){
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  };
  htmlString += '</p>';

  quoteBox.innerHTML = htmlString;
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);