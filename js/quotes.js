const quotes = [
  {
    qutoe: "A hug is always the right size.",
    author: " Pooh",
  },
  {
    qutoe: "After all, one can't complain. I have my friends.",
    author: " EEYORE",
  },
  {
    qutoe: "The things that make me different are the things that make me, me.",
    author: " Piglet",
  },
  {
    qutoe:
      "You're braver than you believe, stronger than you seem and smarter than you think.",
    author: " Christopher Robin",
  },
  {
    qutoe: "THe most wonderful thing about Tiggers is, I'm the only one.",
    author: " Tigger",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.qutoe;
author.innerText = todayQuote.author;
// function a() {
//   const randomNum = Math.floor(Math.random() * quotes.length);
//   quote.innerText = quotes[randomNum].qutoe;
//   author.innerText = quotes[randomNum].author;
// }

// a();
