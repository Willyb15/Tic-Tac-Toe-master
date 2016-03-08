function startGame(){
	if(Math.random() < 0.5){
	 	document.turn = "O";
	} else{
		document.turn = "X";
	}
	setStatus(document.turn + " gets to start.");
}

function setStatus(msg){
	document.getElementById("status").innerHTML = msg;
}

function nextMove(tile){
	if(tile.innerHTML === ""){
		tile.innerHTML = document.turn
		switchTurn();
	} else{
		setStatus("That sqaure is taken!!");
	}
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











