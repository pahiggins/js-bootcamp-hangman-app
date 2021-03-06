const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let gameOne;

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  gameOne.makeGuess(guess);
  renderGame();
});

const renderGame = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = gameOne.statusMessage;

    gameOne.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        puzzleEl.appendChild(letterEl);
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle();
    gameOne = new Hangman(puzzle, 3);
    renderGame();
};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();