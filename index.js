const gameOptions = ['rock', 'scissors', 'paper'];
const STATE_WIN = 'player wins';
const STATE_LOSE = 'computer wins';
const STATE_DRAW = 'No winner';
const playerSelection = gameOptions[0];

const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * 3)];;
} 

const playRound = (player1, computer) => {
    player1 = player1.toLowerCase();
    if (player1 === computer) {
        console.log('No Winner');
        return STATE_DRAW;
    }
    if (player1 === gameOptions[0] && computer === gameOptions[1] ) {
        console.log('You Win ! Rock beats Scissors. ');
        return STATE_WIN;
    }
    if (player1 === gameOptions[0] && computer === gameOptions[2] ) {
        console.log('You Lose ! Paper beats Rock. '); 
        return STATE_LOSE;
    }
    if (player1 === gameOptions[2] && computer === gameOptions[1] ) {
        console.log('You Lose ! Scissors beats Paper. '); 
        return STATE_LOSE;
    }
    if (player1 === gameOptions[2] && computer === gameOptions[0] ) {
        console.log('You Win ! Paper beats Rock. '); 
        return STATE_WIN;
    }
    if (player1 === gameOptions[1] && computer === gameOptions[0] ) {
        console.log('You Lose ! Rock beats Scissors . ');
        return STATE_LOSE;
    }
    if (player1 === gameOptions[1] && computer === gameOptions[2] ) {
        console.log('You Win ! Scissors beats Paper. ');
        return STATE_WIN;
    }
};

const game = () => {

    let playerScore = 0;
    let computerScore = 0;
        
    for (let i = 0; i < 5; i++) {
        const userSelection = window.prompt('Enter rock, scissors, or paper ');
        const computerSelection = computerPlay();
        const roundScore = playRound(userSelection, computerSelection);
        if(roundScore === STATE_WIN ) {
            playerScore++;
        } else if (roundScore === STATE_LOSE) {
            computerScore++;
        }
    }
    console.log('Your score : ',playerScore)
    console.log('Computer score : ',computerScore)

    if (playerScore > computerScore) {
        console.log( 'Final result : You win');
        return STATE_WIN;
    }  
    if ( playerScore < computerScore) {
        console.log('Final result : You lose');
        return STATE_LOSE;
    } 
    console.log('Final result : Draw');
    return STATE_DRAW
    
}

game();

































