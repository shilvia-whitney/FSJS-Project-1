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
 * 
 * Funtion generates random quote given the length of the quote array
 * 
***/

let indexValue = 0;

function getRandom (upperLimit) {
  
  const randomNumber = Math.floor(Math.random() * upperLimit);
  if (indexValue == randomNumber) {
    const randomNumber = Math.floor(Math.random() * upperLimit);
    return randomNumber;
    } else {
      return randomNumber;
    }
}

indexValue = getRandom(quotes.length);


function getRandomQuote() {
  quote = quotes[indexValue];
  console.log(quote);
  return quote;
}

/***
 * `printQuote` function
 * 
 * Function prints the quotes stored in the quotes array with 'if' options for the citation and year.
***/

function printQuote() {
  var quote = getRandomQuote();
  var htmlString = '';

  htmlString = '<p class="quote">' + quote.quote + '</p>' + '<p class="source">' + quote.source;
  if ('citation' in quote) {
    htmlString += '<span class="citation">' + quote.citation + '</span>';
  };
  if ('year' in quote){
    htmlString += '<span class="year">' + quote.year + '</span>';
  };
  htmlString += '</p>';

  document.getElementById('quote-box').innerHTML = htmlString;
}

printQuote();



// Refresh the page every 5 seconds.

setTimeout(function() {
  location.reload();
}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);