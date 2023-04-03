let score = 0;

let hole = document.getElementsByClassName("hole");
let theScore = document.getElementById("score");

//randomizer

setInterval(function () {
  let holeIndex = Math.floor(Math.random() * hole.length);
  //let idx = Math.random() * hole.length;
  hole[holeIndex].classList.toggle("mole");
}, 300);

const gameArea = document.getElementById("whack-a-mole");

gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    score = score + 1;
    theScore.innerText = score;
    //we hit a mole!
  }
});
