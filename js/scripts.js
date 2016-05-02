<<<<<<< HEAD
var winners = 
[
	['a1','a2','a3'],
	['b1','b2','b3'],
	['c1','c2','c3'],
	['a1','b1','c1'],
	['a2','b2','c2'],
	['a3','b3','c3'],
	['a1','b2','c3'],
	['c1','b2','a3']
];
var playerOneMarkings = [];
var playerTwoMarkings = [];
var whosTurn = 1;
var gameHeader = document.getElementById('game-header')
var computer;
var playerMode;
var winsPlayerOne;
var winsPlayerTwo;

function onePlayer(){
	computer = true;
	playerMode = 1;
	document.getElementById('game-header').innerHTML = 'Your turn!';
=======
var winners = [
	["a1","a2","a3"],
	["b1","b2","b3"],
	["c1","c2","c3"],
	["a1","b1","c1"],
	["a2","b2","c2"],
	["a3","b3","c3"],
	["a1","b2","c3"],
	["c1","b2","a3"],
];

/*
Javascript example to set height equel to width by looping through the class array when page loads.
var squareWidth = document.getElementById("a1").clientWidth;
console.dir(squareWidth);
var squares = document.getElementsByClassName("square");
for(var i = 0; i < square.length; i++){
	squares[i].style.height = squareWidth + "px";
}
*/
>>>>>>> master

	var buttons = document.getElementsByTagName("button");
	for(i=0; i<buttons.length; i++){
		buttons[i].disabled = false;
	}
}

<<<<<<< HEAD
function twoPlayers(){
	computer = false;
	playerMode = 2;
	document.getElementById('game-header').innerHTML = 'Player 1\'s turn!';
	var buttons = document.getElementsByTagName("button");
	for(i=0; i<buttons.length; i++){
		buttons[i].disabled = false;
	}
}
=======
var playerScoreX = 0;
var playerScoreO = 0;
var playerOneMarkings = [];
var playerTwoMarkings = [];
var computer;
var playerTurn = "X";
>>>>>>> master

function twoPlayers(){
	reloadPage();
	computer=false;
}

<<<<<<< HEAD
function addSymbol(element){
	if(element.innerHTML == ''){
		//Put a symbol in... X or O?
		if(whosTurn == 1){
			//It's X's turn. So, we have an empty square, and it's X's turn. Put an X in.
			element.innerHTML = 'X';
			whosTurn = 2;
			gameHeader.innerHTML = "It is Player 2's turn";
			gameHeader.className = 'player-two';
			//Get rid of class 'empty', and add who took the square
			element.classList.remove('empty');
			element.classList.add('p1');
			playerOneMarkings.push(element.id);
			checkWin();
			//Only run computersTurn, if the user chose 1 player
			if(computer == true){
				// setTimeout(computersTurn, 3000);
				computersTurn();
			}
		}else{
		//Otherwise run players turn.
			//It has to be O's turn. Put an O in.
			element.innerHTML = 'O';
			whosTurn = 1;
			gameHeader.innerHTML = "It is Player 1's turn";
			gameHeader.className = 'player-one';
			element.classList.remove('empty');
			element.classList.add('p2');
			playerTwoMarkings.push(element.id);
			checkWin();
		}
	}else{
		gameHeader.innerHTML = "This box is taken";
		gameHeader.className = 'red';
	}
	checkWin();
}

function computersTurn(){
	//It has to be O's turn. Put an O in.
	// Get a random, empty square.
	var arrayOfEmptySquares = document.getElementsByClassName('empty');
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = 'O';
	whosTurn = 1;
	gameHeader.innerHTML = "It is Player 1's turn";
	gameHeader.className = 'player-one';
	element.classList.remove('empty');
	element.classList.add('p2');
	playerTwoMarkings.push(element.id);	
	checkWin();
}

function checkWin(){
	//Define a variable, and if it gets to 3, then we have a winner. If it doesn't, the row is not complete.
	var rowCount = 0;
	var playerTwoRowCount = 0;
	var thisWinCombination;
	//Loop through all winning possibilities. RowCount needs to restart each time. 
	for(i=0; i<winners.length; i++){
		rowCount = 0;
		playerTwoRowCount = 0;
		thisWinCombination = winners[i];
		//Now, let's check if all the elemtns in the winners array, exist in the current player array (playerOneMarkings or playerTwoMarkings)
		for(j=0; j<thisWinCombination.length; j++){
			//Check if this square of the win combo we are on, is in the player's marking
			if(playerOneMarkings.indexOf(thisWinCombination[j]) > -1){
				//HIT!!!!
				rowCount++;
			}
			if(playerTwoMarkings.indexOf(thisWinCombination[j]) > -1){
				//HIT!!!!
				playerTwoRowCount++;
			}

		}
		if(rowCount === 3){
			//Player 1 won!!!!
			gameOver(thisWinCombination, 1);
			
		}else if(playerTwoRowCount === 3){
			gameOver(thisWinCombination, 2);			
		}
	}
=======
function clickMe(element){
	document.getElementById("errors").style.display = "none";
	if(element.innerHTML == "X" || element.innerHTML == "O")	{
		document.getElementById("errors").style.display = "block";
		return;
	}else{
		element.innerHTML = playerTurn;
	}

	if (playerTurn === "X") {
		playerTurn = "O";
		document.getElementById("status-turn").innerHTML = playerTurn;
	}else{
		playerTurn = "X";
		document.getElementById("status-turn").innerHTML = playerTurn;
	}       

	element.classList.remove('empty');
	element.classList.add('p1');
	playerOneMarkings.push(element.id);

	if (computer===false){
		checkWin();
		return;
	}else{
		setTimeout(computersTurn, 1000);
		setTimeout(clickOn,2000);
	}
	gameOver();
>>>>>>> master
}

function checkWin()	{
	for(var i = 0; i < winners.length; i++)	{
		if((document.getElementById(winners[i][0]).innerHTML) == "X" && (document.getElementById(winners[i][1]).innerHTML == "X") && (document.getElementById(winners[i][2]).innerHTML == "X"))	{
			document.getElementById('errors').style.display	= "block";
			document.getElementById('errors').innerHTML	= "Player X is the winner!";
			document.getElementById(winners[i][0]).classList.add("winner");
			document.getElementById(winners[i][1]).classList.add("winner");
			document.getElementById(winners[i][2]).classList.add("winner");
			playerScoreX++;
			document.getElementById("x-score").innerHTML = playerScoreX;
			gameOver();
			return true;
		}else if((document.getElementById(winners[i][0]).innerHTML) == "O" && (document.getElementById(winners[i][1]).innerHTML == "O") && (document.getElementById(winners[i][2]).innerHTML == "O"))	{
			document.getElementById('errors').style.display	= "block";
			document.getElementById('errors').innerHTML	= "Player O is the winner!";
			document.getElementById(winners[i][0]).classList.add("winner");
			document.getElementById(winners[i][1]).classList.add("winner");
			document.getElementById(winners[i][2]).classList.add("winner");
			playerScoreO++;
			document.getElementById("o-score").innerHTML = playerScoreO;
			gameOver();
			return true;
		}
	}
}

function reloadPage()	{
	for(var i = 0; i < winners.length; i++)	{
		for(var j = 0; j < winners[i].length; j++)	{
	document.getElementById(winners[i][j]).innerHTML = "";
	document.getElementById(winners[i][j]).classList.remove("winner");
		}
	}	
	document.getElementById("errors").style.display = "none";
	var tiles = document.getElementsByClassName("tile");
	var arrayTiles = tiles.length;
	var element = tiles[arrayTiles];
	// element.classList.add("empty");
	console.log(tiles);
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].classList.add('empty');
	}
	playerTurn ="X";
	clickOn();
}

function gameOver()	{
	var tileElements = document.getElementsByClassName('tile');
	for(var i = 0; i < tileElements.length; i++)	{
		tileElements[i].style.pointerEvents = "none";
	}
}

function clickOn()	{
	var tileElements = document.getElementsByClassName('tile');
	for(var i = 0; i < tileElements.length; i++)	{
			tileElements[i].style.pointerEvents = "auto";
	}
}

function computersTurn(){
	//set delay with timeout function
	//disable other player's click function
	gameOver();
	//It has to be O's turn. Put an O in.
	// Get a random, empty square.
	var arrayOfEmptySquares = document.getElementsByClassName('empty');
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = 'O';
	playerTurn = "X";
	document.getElementById("status-turn").innerHTML = "X";
	// document.getElementById("status").className = '';
	element.classList.remove('empty');
	element.classList.add('O');
	playerTwoMarkings.push(element.id);	
	checkWin();
}

function gameOver(combo, playerWhoWon){
	for(i=0; i<combo.length; i++){
		// console.log(combo[i]);
		document.getElementById(combo[i]).classList.add('winner');
	}
	gameHeader.innerHTML = 'Player ' + playerWhoWon + ' , won the game!';

	var buttons = document.getElementsByTagName("button");
	for(i=0; i<buttons.length; i++){
		buttons[i].disabled = true;
	}
	//Give the user a button to click on, to reset the board. When they click on it

	// Update wins counter for the winning playerOneMarkings
	if(playerWhoWon==1){
		winsPlayerOne++;
	}else{
		winsPlayerTwo++;
	}
	document.getElementById('play-again-button').disabled = false;
	document.getElementById('play-again').style.display = 'block';
}

function resetGame(){
	// Clear Player Arrays
	playerOneMarkings = [];
	playerTwoMarkings = [];
	
	var buttons = document.getElementsByClassName("square");
	// Clear innerHTML of squares
	for(i=0; i<buttons.length; i++){
		buttons[i].innerHTML = '' ;
		buttons[i].classList.add('empty');
		buttons[i].classList.remove('winner');
	}
	//Enable the one and two player buttons
	document.getElementById('one-player').disabled = false;
	document.getElementById('two-players').disabled = false;	
	//hide the play again button
	document.getElementById('play-again').style.display = 'none';
}

var squareWidth = document.getElementById('a1').clientWidth;
var squares = document.getElementsByClassName('square');
for(i=0; i<squares.length; i++){
	squares[i].style.height = squareWidth + 'px';
}