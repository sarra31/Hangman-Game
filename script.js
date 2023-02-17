const words = ["javascript", "html", "css", "node", "react"];
const maxGuesses = 6;
let word;
let guesses;
let wordDisplay;
let guessDisplay;
let guessInput;
let guessButton;
function initGame() {
  word = words[Math.floor(Math.random() * words.length)];
  guesses = [];
  wordDisplay = word.split("").map(function (letter) {
    return guesses.includes(letter) ? letter : "_";
  }).join("");
  guessDisplay = "";
  guessInput.value = "";
  updateDisplay();
}
function updateDisplay() {
  document.querySelector(".hangman-word").textContent = wordDisplay;
  document.querySelector(".hangman-guesses").textContent = guessDisplay;
}
function handleGuess() {
  const letter = guessInput.value.toLowerCase();
  guessInput.value = "";
  if (guesses.includes(letter)) {
    return;
  }
  guesses.push(letter);
  if (!word.includes(letter)) {
    guessDisplay += letter + " ";
    updateDisplay();
    if (guesses.length >= maxGuesses) {
      endGame(false);
    }
    return;
  }
  wordDisplay = word.split("").map(function (letter) {
    return guesses.includes(letter) ? letter : "_";
  }).join("");
  updateDisplay();
  if (!wordDisplay.includes("_")) {
    endGame(true);
  }
}
function endGame(won) {
  if (won) {
    alert("You won!");
  } else {
    alert("You lost!");
  }
  initGame();
}