/* Player Selection Button Event Listener */
function addPlayer(element){
    const fiveList = document.getElementById("add-player");
    const items = fiveList.getElementsByTagName('li');
    const item = items.length;
    if(item < 5){
        const li = document.createElement('li');
        const playerName = element.parentNode.parentNode.children[0].innerText;
        li.innerText = playerName;
        fiveList.appendChild(li);
        element.disabled = "true";
    } 
    else{
        alert("You cant added more than five player")
    }
}

// All Input Field Value
function inputBudgetAmount(inputId){
    const inputBudgetField = document.getElementById(inputId);
    const inputBudgetText = inputBudgetField.value;
    const inputBudget = parseInt(inputBudgetText);
    return inputBudget;
}

// Player Expense Calculation
function playerBudget(){
    const perPlayerBudget = inputBudgetAmount('per-player-budget');
    const playerList = document.getElementById("add-player");
    const playersOnlist = playerList.getElementsByTagName('li');
    const players = playersOnlist.length;
    const playerExpense = players * perPlayerBudget;

    const playerExpenseText = document.getElementById('players-expense');
    playerExpenseText.innerText = playerExpense;
    return playerExpense;
}

