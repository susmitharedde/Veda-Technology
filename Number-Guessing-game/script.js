
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

guessButton.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    if (gameOver) return;

    const guess = Number(guessInput.value);

    if (guessInput.value.trim() === "" ||
        !Number.isInteger(guess) ||
        guess < 1 || guess > 100) {
        message.textContent =
            "Please enter a whole number from 1 to 100.";
        return;
    }

    attempts++;
    attemptsText.textContent = "Attempts: " + attempts;

    if (guess === targetNumber) {
        message.textContent =
            "Congratulations! You guessed the number!";
        message.style.color = "green";
        gameOver = true;
        endGame();
    } else if (guess < targetNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "#2563eb";
    } else {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "#dc2626";
    }

    guessInput.value = "";
    guessInput.focus();
}

function endGame() {
    guessButton.disabled = true;
    guessInput.disabled = true;
    restartButton.hidden = false;
}

restartButton.addEventListener("click", function() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    attemptsText.textContent = "Attempts: 0";
    message.textContent = "Good luck!";
    message.style.color = "#3730a3";

    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.hidden = true;

    guessInput.value = "";
    guessInput.focus();
});
