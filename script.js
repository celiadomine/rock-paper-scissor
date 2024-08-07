let playerMove;
 
document.getElementById('rockButton').addEventListener('click', function() {
    playerMove = 'rock';
    document.getElementById('player').innerText = '🪨';
    selectMove();
    calculateWinner();
});

document.getElementById('paperButton').addEventListener('click', function() {
    playerMove = 'paper';
    document.getElementById('player').innerText = '🗒️';
    selectMove();
    calculateWinner();
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    playerMove = 'scissors';
    document.getElementById('player').innerText = '✂️';
    selectMove();
    calculateWinner();
});

function selectMove(){
    const randomNumber = Math.floor(Math.random() * 3); // random 0, 1 or 2 
    if (randomNumber === 0) {
        document.getElementById('computer').innerText = '🪨'; 
        computerMove = 'rock';
    } else if (randomNumber === 1){
        document.getElementById('computer').innerText = '🗒️'; 
        computerMove = 'paper';
    } else {
        document.getElementById('computer').innerText = '✂️'; 
        computerMove = 'scissors';
    }
}

function calculateWinner() {
    if (playerMove === computerMove) {
        document.getElementById('winner').innerText = "it's a tie :0 ";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        document.getElementById('winner').innerText = "OMG YOU WINNNNNNNNNN!!!!";
    } else {
        document.getElementById('winner').innerText = "computer winss :((";
    }
}

