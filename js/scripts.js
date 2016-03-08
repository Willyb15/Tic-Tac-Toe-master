function startGame(){
	document.turn = "X"
	setMessage(document.turn + " gets to start.");
	}
function setMessage(msg){
	document.getElementById("status").innerHTML = msg;
	}

function nextMove(tile){
	tile.innerHTML = document.turn
	switchTurn();
}

function switchTurn(){
	if(document.turn === "X"){
	document.turn = "O";
	setMessage("It's " + document.turn + " turn");
	} else {
	document.turn = "X";
	setMessage("It's " + document.turn + " turn");
	}
}











