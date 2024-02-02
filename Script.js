let secretNumber;
let attemptsLeft = 5;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('result').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attemptsLeft--;

    if (guess === secretNumber) {
        document.getElementById('result').textContent = `Congratulations! You guessed the number ${secretNumber}!`;
        disableInputAndButton();
    } else if (attemptsLeft === 0) {
        document.getElementById('result').textContent = `Game over! The number was ${secretNumber}.`;
        disableInputAndButton();
    } else {
        document.getElementById('result').textContent = `Incorrect guess. You have ${attemptsLeft} attempts left.`;
    }
}

function restartGame() {
    generateSecretNumber();
    attemptsLeft = 5;
    document.getElementById('result').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button').disabled = false;
}

function disableInputAndButton() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}

// Initialize the game
generateSecretNumber();