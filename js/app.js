/* === Common Function Code Start ==== */
// All Input Field Value
function inputBudgetAmount(inputId){
    const inputBudgetField = document.getElementById(inputId);
    const inputBudgetText = inputBudgetField.value;
    const inputBudget = parseFloat(inputBudgetText);
    return inputBudget;        
}
// Player List Length
function playerListLength(elementId){
    const playerList = document.getElementById(elementId);
    const playersOnlist = playerList.getElementsByTagName('li');
    const players = playersOnlist.length;
    return players;
}
/* === Common Function Code End ==== */


/* === Player Selection Button Event Listener === */
function addPlayer(element){
    const players = playerListLength("add-player");
    const playerList = document.getElementById("add-player");
    if(players < 5){
        // Add player on list
        const li = document.createElement('li');
        const playerName = element.parentNode.parentNode.children[0].innerText;
        li.innerText = playerName;
        playerList.appendChild(li);
        element.disabled = "true";
    } 
    else{
        // Error msg for more than five player
        alert("You can't added more than Five player");
    }
}


/** === Player Expense Calculation Button Event Listener === **/
function playerBudget(){
    const perPlayerBudget = inputBudgetAmount('per-player-budget');
    if((perPlayerBudget === 'number')||(perPlayerBudget >= 0) ){
        // Check Input validation if condition is true
        const players = playerListLength("add-player");
        const playerExpense = players * perPlayerBudget;

        const playerExpenseText = document.getElementById('players-expense');
        playerExpenseText.innerText = playerExpense;
        return playerExpense;
    }
    else{ 
        // Error message for wrong Input value in Player Expense input field
        alert("Please enter only positive number for Per Player cost.");
    }
}

/* === Total Expense Calculation Button Event listener **/

function totalBudget(){
    const playerExpenseText = document.getElementById('players-expense');
    const playerExpense =  parseFloat(playerExpenseText.innerText);
    const mangerBudget = inputBudgetAmount('manager-budget');
    const coachBudget = inputBudgetAmount('coach-budget');
    if(((playerExpense === 'number') && (mangerBudget === "number") && (coachBudget === "number")) || ((playerExpense >= 0) && (mangerBudget >= 0) && (coachBudget >=0))){ 
        // Check Input validation if condition is true
        const totalExpenseAmount = playerExpense + mangerBudget + coachBudget;
    
        const totalExpense = document.getElementById('total-expense');
        totalExpense.innerText  = totalExpenseAmount;
    }
    else{
        // Error message for wrong Input value in all input field
        alert("Please enter only positive number as your input");
    }
}