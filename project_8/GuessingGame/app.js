let button = document.querySelector("button");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let boxes = document.querySelectorAll(".item");
let winnerNumber = Math.floor(Math.random() * 3);
let status1 = document.querySelector(".status");
let gameIsOver = false;

console.log(winnerNumber);
console.log(boxes);

function checkWin(ev) {
  console.log(ev.target.id);
  if (ev.target.id == winnerNumber) {
    // innerText
    status1.innerText = "You Win!!!";
    console.log("you win!");
    ev.target.classList.add("green");
  } else {
    status1.innerText = "nope try again!";
    console.log("you lose!");
    ev.target.classList.add("red");
  }
}

function removeColors() {
  box1.classList.remove("red");
  box1.classList.remove("green");

  box2.classList.remove("red");
  box2.classList.remove("green");

  box3.classList.remove("red");
  box3.classList.remove("green");
}

//function gameEnds() {
//if (ev.target.id == winnerNumber) {
// gameIsOver = true;
// }
//}

box1.addEventListener("click", checkWin);
box2.addEventListener("click", checkWin);
box3.addEventListener("click", checkWin);

//function initGame() {
//boxes.forEach((cell) => cell.addEventListener("click", cellClicked));
//running = true;
//guessRed();
//}

function youWinText() {
  boxes.innerHTML = "You win!";
}

function myFunction2() {
  box2.innerHTML = "You win2!";
}

function myFunction3() {
  box3.innerHTML = "You win3!";
}

function guessRed() {
  if (random_Box === cellclicked) {
    box2.style.backgroundColor = "red";
  }
}

function makeRed() {
  random_Box().style.backgroundColor = "red";
}

/*let randomIndex = (document.getElementById("demo").innerHTML = Math.floor(
  Math.random() * 3
));*/

var boxArr = [box1, box2, box3];

function random_Box() {
  return boxArr[Math.floor(Math.random() * boxArr.length)];
}

console.log(random_Box(boxArr));

/*function guessRed() {
  if (random_Box() === click()) {
    console.log("You Win!");
  }
}        */

function reset() {
  box1.innerHTML = " ";
  box2.innerHTML = " ";
  box3.innerHTML = " ";

  status1.innerText = " ";
  removeColors();
  gameIsOver = false;

  box1.style.backgroundColor = "";
  box2.style.backgroundColor = "";
  box3.style.backgroundColor = "";
  winnerNumber = Math.floor(Math.random() * 3);
}

button.addEventListener("click", reset);
