const roundResult = document.getElementById('round-result');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const changePlayerClass = document.getElementById('main-image');
const changeComputerClass = document.getElementById('main-image2');
const mainImage = document.getElementById('main-image');
const mainImage2 = document.getElementById('main-image2');
const startModal = document.getElementById('start-modal');
const startGame = document.getElementById('start-game');
const roundsInfo = document.getElementById('rounds-info');
const STATE_WIN = 'You win 😎';
const STATE_LOSE = 'You lose 😭';
const STATE_DRAW = 'You tie 😐';
let gameOptions = [];
let playerSelection = null;
let computerSelection = null;
let tieRound = null;
let selectedRounds = null;
let currentRound = 0;

const displayRadioValue = () => {
    const rounds = document.getElementsByName('round');
    for (i = 0; i < rounds.length; i++) {
        if (rounds[i].checked) {
            selectedRounds = rounds[i].id;
        }
    }
    startGame.disabled = '';
};

const uncheckInputs = () => {
    const rounds = document.getElementsByName('round');
    for (i = 0; i < rounds.length; i++) {
        rounds[i].checked = '';
    }
};

const startRounds = () => {
    startModal.style.display = 'none';
    gameOptions = ['rock', 'paper', 'scissors'];
    roundsInfo.innerHTML = `Rounds ${selectedRounds}/${currentRound}`;
    computerScore.innerHTML = '0';
    playerScore.innerHTML = '0';
    removeClasses();
};

resetAllValues = () => {
    currentRound = 0;
    selectedRounds = null;
    gameOptions = [];
    playerSelection = null;
    computerSelection = null;
    roundResult.innerHTML = '';
    startGame.disabled = 'disabled';
};

const addBtnColor = (element) => {
    const glowClass = roundResult.innerHTML.split(' ')[1];
    element.target.classList.add(glowClass);
    const timeOut = setTimeout(() => {
        element.target.classList.remove(glowClass);
    }, 500);
};

// create a function which makes random selection for the computer
const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
};
// create a function which removes the added classes at every begin of the round
const removeClasses = () => {
    mainImage.classList.remove('rock', 'scissors', 'paper');
    mainImage2.classList.remove('rock', 'scissors', 'paper');
};

const compareTheChoices = (player, computer) => {
    const win = () => {
        roundResult.innerHTML = STATE_WIN;
        playerScore.innerHTML = +playerScore.innerHTML + 1;
        currentRound += 1;
        roundsInfo.innerHTML = `Rounds ${selectedRounds}/${currentRound}`;
    };
    const lose = () => {
        roundResult.innerHTML = STATE_LOSE;
        computerScore.innerHTML = +computerScore.innerHTML + 1;
        currentRound += 1;
        roundsInfo.innerHTML = `Rounds ${selectedRounds}/${currentRound}`;
    };
    const tie = () => {
        roundResult.innerHTML = STATE_DRAW;
        currentRound += 1;
        roundsInfo.innerHTML = `Rounds ${selectedRounds}/${currentRound}`;
    };
    if (computer === 'paper' && player === 'paper') {
        mainImage2.classList.add('paper');
        tie();
    }
    if (computer === 'paper' && player === 'rock') {
        mainImage2.classList.add('paper');
        lose();
    }
    if (computer === 'paper' && player === 'scissors') {
        mainImage2.classList.add('paper');
        win();
    }
    if (computer === 'scissors' && player === 'paper') {
        mainImage2.classList.add('scissors');
        lose();
    }
    if (computer === 'scissors' && player === 'rock') {
        mainImage2.classList.add('scissors');
        win();
    }
    if (computer === 'scissors' && player === 'scissors') {
        mainImage2.classList.add('scissors');
        tie();
    }
    if (computer === 'rock' && player === 'paper') {
        mainImage2.classList.add('rock');
        win();
    }
    if (computer === 'rock' && player === 'rock') {
        mainImage2.classList.add('rock');
        tie();
    }
    if (computer === 'rock' && player === 'scissors') {
        mainImage2.classList.add('rock');
        lose();
    }

    if (currentRound === +selectedRounds) {
        resetAllValues();
        uncheckInputs();
        startModal.style.display = 'block';
    }
};

rockElement.addEventListener('click', (e) => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('rock');
        playerSelection = 'rock';
        computerSelection = computerPlay();
        compareTheChoices(playerSelection, computerSelection);
        addBtnColor(e, roundResult);
    }, 1000);
});

paperElement.addEventListener('click', (e) => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('paper');
        roundResult.innerHTML = '';
        playerSelection = 'paper';
        computerSelection = computerPlay();
        compareTheChoices(playerSelection, computerSelection);
        addBtnColor(e, roundResult);
    }, 1000);
});

scissorsElement.addEventListener('click', (e) => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('scissors');
        roundResult.innerHTML = '';
        playerSelection = 'scissors';
        computerSelection = computerPlay();
        compareTheChoices(playerSelection, computerSelection);
        addBtnColor(e, roundResult);
    }, 1000);
});
