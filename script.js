let chosenMove;
 
function resetMove(){
    chosenMove = 0;
}

document.getElementById('rockButton').addEventListener('click', function() {
    chosenMove = 1;
    document.getElementById('player').innerText = 'You played rock';
    selectMove();
});

document.getElementById('paperButton').addEventListener('click', function() {
    chosenMove = 2;
    document.getElementById('player').innerText = 'You played paper';
    selectMove();
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    chosenMove = 3;
    document.getElementById('player').innerText = 'You played scissors';
    selectMove();
});

function selectMove(){
    const randomNumber = Math.floor(Math.random() * 3); // random 0, 1 or 2 
    if (randomNumber === 0) {
        document.getElementById('computer').innerText = 'Computer played rock'; 
        hisPlay = 'rock';
    } else if (randomNumber === 1){
        document.getElementById('computer').innerText = 'Computer played paper'; 
        hisPlay = 'paper';
    } else {
        document.getElementById('computer').innerText = 'Computer played scissors'; 
        hisPlay = 'scissors';
    }
}

function calculateWinner() {

}

