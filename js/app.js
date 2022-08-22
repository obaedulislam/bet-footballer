/* Player Selection Button Event Listener */
function addPlayer(element){
    const fivePlayerList = document.getElementById("add-player");
    const items = fivePlayerList.getElementsByTagName('li');
    const item = items.length;
    if(item < 5){
        const li = document.createElement('li');
        const playerName = element.parentNode.parentNode.children[0].innerText;
        li.innerText = playerName;
        fivePlayerList.appendChild(li);
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
    if((perPlayerBudget === 'number')||(perPlayerBudget >= 0) ){

        const playerList = document.getElementById("add-player");
        const playersOnlist = playerList.getElementsByTagName('li');
        const players = playersOnlist.length;
        const playerExpense = players * perPlayerBudget;
    
        const playerExpenseText = document.getElementById('players-expense');
        playerExpenseText.innerText = playerExpense;
        return playerExpense;
    }
    else{
        alert("Please enter only positive number for Per Player cost.");
    }

}

// Total Expense Calculation
function totalBudget(){
    const playerExpense = playerBudget();
    const mangerBudget = inputBudgetAmount('manager-budget');
    const coachBudget = inputBudgetAmount('coach-budget');
    if(((playerExpense === 'number') && (mangerBudget === "number") && (coachBudget === "number")) || ((playerExpense >= 0) && (mangerBudget >= 0) && (coachBudget >=0))){
        const totalExpenseAmount = playerExpense + mangerBudget + coachBudget;
    
        const totalExpense = document.getElementById('total-expense');
        totalExpense.innerText  = totalExpenseAmount;
    }
    else{
        alert("Please enter only positive number as input");
    }
}