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

var playerTurn = "X";
var playerScoreX = 0;
var playerScoreO = 0;
var playerOneMarkings = [];
var playerTwoMarkings = [];


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

	if (checkWin()) {
		return;
	} else {
		setTimeout(computersTurn, 2000);
		setTimeout(clickOn,2000);
	}
	gameOver();
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



