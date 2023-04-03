let inputForm = document.querySelector("#inputForm");
let guessDiv = document.querySelector(".guess-div");
let numberInput = document.querySelector("#numberInput");
let myGuess = document.querySelector(".myguess");
let clearValue = document.querySelector("#clear");

let rnd = Math.ceil(Math.random() * 100);

inputForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  let guessDiv = document.createElement("guess-div");
  console.log(numberInput.value);
  myGuess.innerText = numberInput.value;
  if (myGuess.innerText === "") {
    myGuess.innerText = guessNumber;
  }
  guessDiV.appendChild(myGuess);
  numberInput = "";
});

clearValue.addEventListener("click", function (ev) {
  ev.preventDefault();
});
