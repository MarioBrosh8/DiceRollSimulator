const buttonEl = document.getElementById('roll-button');
const diceEl = document.getElementById("dice");
const rollHistoryItem = document.getElementById("roll-history");
let rollCount = 0;

function rollDice(){
    rollCount++;

    const rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(rollResult)

    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;

    const historyItem = document.createElement("li")
    historyItem.innerHTML = `Roll ${rollCount}: <span>${diceFace}</span>`

    rollHistoryItem.appendChild(historyItem);
}

function getDiceFace(rollResult){
    switch(rollResult){
        case 1: 
        return "&#9856;";

        case 2:
        return "&#9857;";

        case 3:
        return "&#9858;";

        case 4:
        return "&#9859;";

        case 5:
        return "&#9860;";

        case 6:
        return "&#9861;";
    }
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        rollDice();
    }, 1000)
    console.log('clicked')
});