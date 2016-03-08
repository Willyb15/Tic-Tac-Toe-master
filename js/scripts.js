
var winners = [
	["a1", "a2", "a3"],
	["c1","c2", "c3"],
	["b1", "b2", "b3"],
	["a1","b1", "c1"],
	["a2","b2","c3"],
	["a3","b3","c3"],
	["a1","b2","c3"]
	];
var whosTurn = 1;
var playerOneMarkings = [];
var playerTwoMarkings = [];

function addSymbol(element){
	var status = document.getElementById("status");
	if(element.innerHTML == ""){
		status.className = "";
		if(whosTurn ==1) {
			element.innerHTML = "X"
			whosTurn = 2; 
			status.innerHTML = "It's O's turn";
			status.className = "green";
			// element.classList.remove('empty');
			// element.classList.add = ("p1");
			playerOneMarkings.push(element.id);
		} else{
			element.innerHTML = "O"
			whosTurn = 1;
			status.innerHTML = "It's X's turn";
			status.className = "pink";
			// element.classList.remove('empty');
			// element.classList.add("p2");
			playerTwoMarkings.push(element.id);
			}
		} else{
			var status = document.getElementById("status");
			status.innerHTML = "This box is taken";
		// status.style.backgroundColor = "red";
			status.className = "red";
	}
	checkWin();
}

function checkWin(){
	console.log(playerTwoMarkings);
	console.log(playerOneMarkings);
	//Define a variable, and if it gets to 3, then we have a winner. If it doesn't, the row is not complete
	var rowCount = 0;
	var thisWinCombination;
	//Loop through all winning possibilities. Rowcount needs to restart each time.
	for(i=0; i<winners.length; i++){
		rowCount=0;
		thisWinCombination = winners[i];
	//Now, let's check if all the elements in the winners array, exists in the current player and
		for(j=0; j<thisWinCombination.length; j++){
			//Check if this square of the win combo we are on, is in the players marking.
			if(playerOneMarkings.indexOf(thisWinCombination[j]) > -1){
				//Hit
				//rowCount = rowCount + 1;
				rowCount++;
			}
		}
		if(rowCount===3){
			//Sombody won!!!
			gameOver(thisWinCombination);
		}
	}
}


function gameOver(combo){
	var comboString;
	var status = document.getElementById("status");
	for(i=0; i<combo.length; i++){
		comboString += combo[i];
		document.getElementById(combo[i]).classList.add("winner");

	}
	status.innerHTML ="Player 1 won the game with: " + comboString;
}











// console.log(winners[0],[0]);
// console.log(winners[0][0]);

var squareWidth = document.getElementById("a1").clientWidth;
// console.log(squareWidth);
var squares = document.getElementsByClassName("square");
// console.dir(squares);

for(i=0; i<squares.length;i++){
	squares[i].style.height = squareWidth + "px";	
}

// console.log(squares[i]);
// console.log(squares[i].style.height);


