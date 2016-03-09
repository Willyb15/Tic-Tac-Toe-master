
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
	var status = document.getElementById("status");
	if(tile.innerHTML === ""){
		tile.innerHTML = document.turn
		switchTurn();
	} else{
		setStatus("That sqaure is taken!!");
		status.className = "red";
	}
}

function switchTurn(){
	var status = document.getElementById("status");
	if(document.turn === "X"){
		document.turn = "O";
		setStatus("It's " + document.turn + " turn");
		status.className = "white";
	} else {
		document.turn = "X";
		setStatus("It's " + document.turn + " turn");
		status.className = "green";
	}
}

function clearGame(){
	 location.reload();
}



// function addSymbol(element){
// 	var status = document.getElementById("status");
// 	if(element.innerHTML == ""){
// 		status.className = "";
// 		if(whosTurn ==1) {
// 			element.innerHTML = "X"
// 			whosTurn = 2; 
// 			status.innerHTML = "It's O's turn";
// 			status.className = "green";
// 		} else{
// 			element.innerHTML = "O"
// 			whosTurn = 1;
// 			status.innerHTML = "It's X's turn";
// 			status.className = "pink";
// 		}
// 		} else{
// 			var status = document.getElementById("status");
// 			status.innerHTML = "This box is taken";
// 		// status.style.backgroundColor = "red";
// 			status.className = "red";
// 	}
// }













