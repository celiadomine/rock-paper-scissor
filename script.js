let playerMove;
let computerMove; 

let playerElement;
let computerElement;
let winnerElement;
let explosionElement;
let playerScoreElement;
let computerScoreElement;
let bonusButton;

let scorePlayer = 0;
let scoreComputer = 0;

window.onload = function(){
    scorePlayer = 0;
    scoreComputer = 0;
    bonusButton = document.getElementById('bonusButton');
    bonusButton.style.display = 'none'; // Hide the bonus button initially

    document.getElementById('rockButton').addEventListener('click', function() {
        playerMove = 'rock';
        playerElement.innerText = '🪨';
        explosionElement.classList.add('explosion');
        computerElement.style.opacity = 0;
        winnerElement.style.opacity = 0;  
        setTimeout(function() {
            selectMove();
            calculateWinner();
            explosionElement.classList.remove('explosion');
        }, 1000);
    });

    document.getElementById('paperButton').addEventListener('click', function() {
        playerMove = 'paper';
        playerElement.innerText = '🗒️';
        explosionElement.classList.add('explosion');
        computerElement.style.opacity = 0;
        winnerElement.style.opacity = 0;  
        setTimeout( function() {
            selectMove();
            calculateWinner();
            explosionElement.classList.remove('explosion');
        }, 1000);
    });

    document.getElementById('scissorsButton').addEventListener('click', function() {
        playerMove = 'scissors';
        playerElement.innerText = '✂️';
        explosionElement.classList.add('explosion');
        computerElement.style.opacity = 0;
        winnerElement.style.opacity = 0;  
        setTimeout( function() {
            selectMove();
            calculateWinner();
            explosionElement.classList.remove('explosion');
        }, 1000);
    });

    document.getElementById('bonusButton').addEventListener('click', function() {
        playerMove = 'bonus';
        playerElement.innerText = '🎀';
        explosionElement.classList.add('explosion');
        computerElement.style.opacity = 0;
        winnerElement.style.opacity = 0;  
        setTimeout( function() {
            selectMove();
            calculateWinner();
            explosionElement.classList.remove('explosion');
        }, 1000);
    });

    //to not write out the whole getElementById 3 times
    playerElement = document.getElementById('player');
    computerElement = document.getElementById('computer');
    winnerElement = document.getElementById('winner');
    explosionElement = document.getElementById('explosion');
    playerScoreElement = document.getElementById('player-score');
    computerScoreElement = document.getElementById('computer-score');


    playerScoreElement.innerText = scorePlayer;
    computerScoreElement.innerText = scoreComputer;
}

function selectMove(){
    computerElement.style.opacity = 1; 
    const randomNumber = Math.floor(Math.random() * 3); // random 0, 1 or 2 
    if (randomNumber === 0) {
        computerElement.innerText = '🪨'; 
        computerMove = 'rock';
    } else if (randomNumber === 1){
        computerElement.innerText = '🗒️'; 
        computerMove = 'paper';
    } else {
        computerElement.innerText = '✂️'; 
        computerMove = 'scissors';
    }
}

function calculateWinner() {
    winnerElement.style.opacity = 1; 
    if (playerMove === computerMove) {
        winnerElement.innerText = "it's a tie :0 ";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        winnerElement.innerText = "OMG YOU WINNNNNNNNNN!!!!";
        scorePlayer++;
    } else if (playerMove == 'bonus'){
        winnerElement.innerText = "OMG YOU WINNNNNNNNNN!!!!";
        scorePlayer = scorePlayer + 25;
    } else {
        winnerElement.innerText = "computer winss :((";
        scoreComputer++;
    }
    playerScoreElement.innerText = scorePlayer;
    computerScoreElement.innerText = scoreComputer;

    // Check if the score is 15, 25, or 35 to show the bonus button
    if (scorePlayer === 10 || scorePlayer === 50 || scorePlayer === 75) {
        document.getElementById('bonusButton').style.display = 'block';
    } else {
        document.getElementById('bonusButton').style.display = 'none';
    }
}
