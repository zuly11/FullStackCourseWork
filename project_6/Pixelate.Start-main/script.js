let table = document.getElementById("parent");
let button = document.getElementById("add-row");
console.log(table);
console.log(button);
button.addEventListener("click", function (ev) {
  ev.preventDefault();
  let newTr = document.createElement("tr");
  table.appendChild(newTr);

  for (let i = 0; i < 20; i++) {
    let newTd = document.createElement("td");
    newTr.appendChild(newTd);
    newTd.classList.toggle("pixel");
  }
});

table.addEventListener("click", colorize);
function colorize(event) {
  if (!event.target.classList.contains("red")) {
    event.target.className = "red";
  } else {
    event.target.className = "";
  }
}

let select = document.querySelector("select");

select.addEventListener("change", function (event) {
  chosenColor = event.target.value;
  //console.log(event.target.value);
});

//let redpixel = document.querySelector("red");
//let blackpixel = document.querySelector("black");
let chosenColor = "red";

function colorize(event) {
  const target = event.target;
  if (target.className.length) {
    target.className = "";
  } else {
    target.className = chosenColor;
  }
}
