// Biggest Project on JavaScript is here guys we are gonna start rollin over it here we go


// This code is all about a Number Guessing Game which you can enjoy and its based on very basic js


// The Code :

const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number more than 1');
  } else if (guess > 100) {
    alert('Please Enter a NUmber less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over!!! The Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right good job`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low better luck next time`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too large better luck next time`);
  }
}

function displayGuess(guess) {
 userInput.value = ''
 guessSlot.innerHTML += `${guess} , `
 numGuess++
 remaining.innerHTML = `${(11-numGuess)}`
}

function displayMessage(message) {
 lowOrHigh.innerHTML = `<h2>${message}</h2`
}

function newGame() {
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
startOver.appendChild(p)
playGame = false;
newGame();
}

function endGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*10+1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute(`diabled`)
    startOver
    playGame = true
  })
}
