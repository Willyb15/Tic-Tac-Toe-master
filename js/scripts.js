var winners =[
	["a1", "a2", "a3"],
	["c1","c2", "c3"],
	["b1", "b2", "b3"],
	["a1","b1", "c1"],
	["a2","b2","c3"],
	["a3","b3","c3"],
	["a1","b2","c3"]
];
var whosTurn = 1;

function addSymbol(element){
	var status = document.getElementById("status");
	if(element.innerHTML == ""){
		status.className = "";
		if(whosTurn ==1) {
			element.innerHTML = "X"
			whosTurn = 2; 
			status.innerHTML = "It's O's turn";
			status.className = "green";
		} else{
			element.innerHTML = "O"
			whosTurn = 1;
			status.innerHTML = "It's X's turn";
			status.className = "pink";
		}
		} else{
			var status = document.getElementById("status");
			status.innerHTML = "This box is taken";
		// status.style.backgroundColor = "red";
			status.className = "red";
	}
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


