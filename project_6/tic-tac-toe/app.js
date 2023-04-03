//gameGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let myForm = document.querySelector("#myForm");
var name1 = document.querySelector("#playerName1");
var name2 = document.querySelector("#playerName2");
var selectPlayer1 = document.querySelector("selectplayer1");
var select1 = document.querySelector("#firstPlayer");
var select2 = document.querySelector("#secondPlayer");
var xo1 = document.querySelector("#options1");
var xo2 = document.querySelector("#options2");

let activeGame = true;
let currentPlayer = name1.value;
let gameState = ["", "", "", "", "", "", "", "", ""];


 const winningStates = [
  //rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];

// Getting the form values

myForm.addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();

  console.log(name1.value);
  console.log(name2.value);
  console.log(select1.value);
  console.log(select2.value);
  console.log(xo1.value);
  console.log(xo2.value);
});




function xWins() {
  if (box1 && box2 && box3 === "X") {
    console.log("you win!");
  }
}

/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `It was a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  onclick = document.getElementById("#cell").value = "";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let gameGrid = document.getElementsByClassName("game-grid");

var box1 = document.querySelector("#cell1");
var box2 = document.querySelector("#cell2");
var box3 = document.querySelector("#cell3");
var box4 = document.querySelector("#cell4");
var box5 = document.querySelector("#cell5");
var box6 = document.querySelector("#cell6");
var box7 = document.querySelector("#cell7");
var box8 = document.querySelector("#cell8");
var box9 = document.querySelector("#cell9");

console.log(box1);
console.log(box2);
console.log(box3);

let rbtn = document.querySelector("#rbtn");

function clearBoxes() {
  rbtn.addEventListener("click", function () {
    gameGrid.clearEvents();
  });
}

/*------------------------
const firstplayer = {
  firstName: name1,
  orderPlayer: selectPlayer1,
  option: options1,
};

console.log(firstplayer);
----------*/

document.getElementById("myBtn").addEventListener("click", function () {
  this.style.backgroundColor = "green";
});

box1.addEventListener("click", function () {
  var x = box1;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box2.addEventListener("click", function () {
  var x = box2;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box3.addEventListener("click", function () {
  var x = box3;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box4.addEventListener("click", function () {
  var x = box4;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box5.addEventListener("click", function () {
  var x = box5;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box6.addEventListener("click", function () {
  var x = box6;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box7.addEventListener("click", function () {
  var x = box7;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box8.addEventListener("click", function () {
  var x = box8;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

box9.addEventListener("click", function () {
  var x = box9;
  if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "X";
  }
});

var restartGame = document.getElementById("rbtn");
var boxes = document.querySelectorAll(".cell");

restartGame.addEventListener("click", removeFunction(){
    

  });

  game.xTurn = true;
  game.xState = [];
  game.oState = [];
});
