const borderPosition = document.querySelectorAll('[data-cell]');

const X_CLASS = 'x'
const O_CLASS = 'o'
var playerTurn = true;

// var AIBoard = []
var AIBoard =new Set()

const gameLoop = borderPosition.forEach(cell => {
    cell.addEventListener('click', (e) => {
        console.log("hi");
        place(e);
    }); // once mean only you can click one time
});
function place(e) {
   
       const cell = e.target;
    if (cell.classList.contains("placed")) return
    cell.classList.add("placed")
    DrawCounter++;
    whoIsPLaying();
    swapTurns();
    whoIsTurn();
    AIBoard.add(cell.id)
    console.log(AIBoard);

    cell.classList.add(currentClass) // display player shape


    if (checkWin()) {
        // winner text
        winnerText();
        displaywinierText();
        return
    }
    if (DrawCounter == 9 && !checkWin()) {
        DrawTextMessage();
        displaywinierText();
        return

    }
    console.log("twiiiiis");
    const AICellChoice =borderPosition[random()]
     if(!playerTurn) placeAI(AICellChoice)
}


function placeAI(AI) {
    AI.classList.add("placed")

    console.log("stop 4");
console.log(playerTurn);
    let cell = AI
    DrawCounter++;
    whoIsPLaying();
    swapTurns();
    whoIsTurn();
    console.log("stop 3");
    AIBoard.add(cell.id)
    console.log(AIBoard);
    cell.classList.add(currentClass) // display player shape

    console.log("stop 2");

    if (checkWin()) {
        // winner text
        winnerText();
        displaywinierText();
        return
    }
    if (DrawCounter == 9 && !checkWin()) {
        DrawTextMessage();
        displaywinierText();
        return
    }
    console.log(DrawCounter);
    console.log("stop 1");

}


function whoIsTurn() {
    if (playerTurn) {
        currentClass = O_CLASS;
    } else {
        currentClass = X_CLASS;
    }

}
let currentClass = 'x'







function swapTurns() {
    playerTurn = !playerTurn

}

function checkWin() {
    return winChances.some(c => {
        return c.every(index => {
            return borderPosition[index].classList.contains(currentClass)
        })
    })

}
const winChances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const playerTurnTxt = document.querySelector('.player-turn-now');
const whoIsPLaying = () => {
    if (!playerTurn) {
        playerTurnTxt.innerHTML = 'Player *<span class="x-color-text"> X </span>* Turn &#8203 &#8203 ';
    } else {
        playerTurnTxt.innerHTML = 'Player *<span class="o-color-text"> O </span>* Turn &#8203 &#8203 ';

    }
}
const winierTextMessage = document.querySelector('[data-wining-message]');

function winnerText() {
    if (!playerTurn) {
        winierTextMessage.innerHTML = "X`s Wins"

    } else {
        winierTextMessage.innerHTML = "O`s Wins"

    }
}
function DrawTextMessage() {
    winierTextMessage.innerHTML = "Draw !!!"
}

const displayWinnerItems = document.getElementById('winner-text');
function displaywinierText() {
    displayWinnerItems.classList.add('wining-message-display')
}



function restart() {
    borderPosition.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.classList.remove("placed")
        displayWinnerItems.classList.remove('wining-message-display')
        // cell.removeEventListener('click', place,place, { once: true });
        // cell.addEventListener('click', place, { once: true });
        playerTurn = false;

        whoIsPLaying();
        swapTurns();
        whoIsTurn();
        DrawCounter = 0;
        AIBoard =new Set()
    })
}

let DrawCounter = 0;


function random() {
    let number
    do {
    number = (Math.floor(Math.random() * 9)+1)
    } while (AIBoard.has(number+''));
    return number-1
}





