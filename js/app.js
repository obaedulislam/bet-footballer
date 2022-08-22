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

