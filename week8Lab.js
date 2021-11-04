window.addEventListener("DOMContentLoaded", init());

function init(){
	var computer = "rock";
	var result = document.getElementById("result");
	var userPick = prompt("Please enter rock, paper or scissors: ");
	userPick = userPick.toLowerCase();
	if (userPick === computer){
		result.innerHTML = "Draw!";
		result.style.color = "#aaaaaa";
	}
	else if (userPick === "scissors"){
		result.innerHTML = "Loser!";
		result.style.color = "#ff0000";
	} 
	else if (userPick === "paper"){
		result.innerHTML = "Winner";
		result.style.color = "#00ff00";
	}
	else {
		result.innerHTML = "Invalid input!";
		result.style.color = "#0000ff";
	}
}