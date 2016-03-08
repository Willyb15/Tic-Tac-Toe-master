function startGame(){
	document.turn = "X"
	setStatus(document.turn + " gets to start.");
	}
function setStatus(msg){
	document.getElementById("status").innerHTML = msg;
	}

function nextMove(tile){
	tile.innerHTML = document.turn
	switchTurn();
}

function switchTurn(){
	if(document.turn === "X"){
	document.turn = "O";
	setStatus("It's " + document.turn + " turn");
	} else {
	document.turn = "X";
	setStatus("It's " + document.turn + " turn");
	}
}











