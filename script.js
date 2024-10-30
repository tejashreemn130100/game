let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guess").value);
    const message = document.getElementById("message");
    attempts++;

    if (!guess) {
        message.textContent = "Please enter a valid number!";
    } else if (guess === randomNumber) {
        message.textContent = `Congrats! You guessed it in ${attempts} attempts!`;
    } else if (guess < randomNumber) {
        message.textContent = "Too low, try again!";
    } else {
        message.textContent = "Too high, try again!";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guess").value = '';
    document.getElementById("message").textContent = '';
}
