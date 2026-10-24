let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function playGame(playerChoice){

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    document.getElementById("userChoice").textContent = playerChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    let result = "";

    if(playerChoice === computerChoice){

        result = "It's a Draw!";

    }

    else if(
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){

        result = "🎉 You Win!";
        playerScore++;

    }

    else{

        result = "😢 Computer Wins!";
        computerScore++;

    }

    document.getElementById("result").textContent = result;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function resetGame(){

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    document.getElementById("userChoice").textContent = "-";
    document.getElementById("computerChoice").textContent = "-";

    document.getElementById("result").textContent = "Make Your Move!";
}