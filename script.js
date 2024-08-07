let playerMove;
let computerMove; 

let playerElement;
let computerElement;
let winnerElement;

window.onload = function(){
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

    //to not write out the whole command 3 times
    playerElement = document.getElementById('player');
    computerElement = document.getElementById('computer');
    winnerElement = document.getElementById('winner');
    explosionElement = document.getElementById('explosion');
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
    } else {
        winnerElement.innerText = "computer winss :((";
    }
}