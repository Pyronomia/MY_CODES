// Variables
let mode = localStorage.getItem("mode");
console.log(mode);
let box = document.querySelectorAll(".box");
let playArea = document.querySelector(".play-area");

let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");
let box4 = document.querySelector(".box-4");
let box5 = document.querySelector(".box-5");
let box6 = document.querySelector(".box-6");
let box7 = document.querySelector(".box-7");
let box8 = document.querySelector(".box-8");
let box9 = document.querySelector(".box-9");

let hor1 = document.querySelector(".hor1");
let hor2 = document.querySelector(".hor2");
let hor3 = document.querySelector(".hor3");
let ver1 = document.querySelector(".ver1");
let ver2 = document.querySelector(".ver2");
let ver3 = document.querySelector(".ver3");
let dia1 = document.querySelector(".dia1");
let dia2 = document.querySelector(".dia2");
// Logic for the first person to play
let active = ["bot", "player"];
let activePlayer = active[Math.floor(Math.random() * 2)];

console.log(activePlayer);

// Active boxes for the game
let activeBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

console.log(activeBoxes);

playArea.addEventListener("click", function (e) {
  console.log("hi");
  //   Checks for active boxes
  if (e.target.matches(".box")) {
    console.log(e.target);
  }
  if (e.target.matches(".box") || e.target.matches("span")) {
    // Checks for a win
    if (
      box1.innerText == "X" &&
      box2.innerText == "X" &&
      box3.innerText == "X"
    ) {
      hor1.style.transform = "scale(1)";
    } else if (
      box4.innerText == "X" &&
      box5.innerText == "X" &&
      box6.innerText == "X"
    ) {
      hor2.style.transform = "scale(1)";
    } else if (
      box7.innerText == "X" &&
      box8.innerText == "X" &&
      box9.innerText == "X"
    ) {
      hor3.style.transform = "scale(1)";
    } else if (
      box1.innerText == "X" &&
      box4.innerText == "X" &&
      box7.innerText == "X"
    ) {
      ver1.style.transform = "scale(1)";
    } else if (
      box2.innerText == "X" &&
      box5.innerText == "X" &&
      box8.innerText == "X"
    ) {
      ver2.style.transform = "scale(1)";
    } else if (
      box3.innerText == "X" &&
      box6.innerText == "X" &&
      box9.innerText == "X"
    ) {
      ver3.style.transform = "scale(1)";
    } else if (
      box1.innerText == "X" &&
      box5.innerText == "X" &&
      box9.innerText == "X"
    ) {
      dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
    } else if (
      box3.innerText == "X" &&
      box5.innerText == "X" &&
      box7.innerText == "X"
    ) {
      dia1.style.transform =
        " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
    }
    //   For O's
    else if (
      box1.innerText == "O" &&
      box2.innerText == "O" &&
      box3.innerText == "O"
    ) {
      hor1.style.transform = "scale(1)";
    } else if (
      box4.innerText == "O" &&
      box5.innerText == "O" &&
      box6.innerText == "O"
    ) {
      hor2.style.transform = "scale(1)";
    } else if (
      box7.innerText == "O" &&
      box8.innerText == "O" &&
      box9.innerText == "O"
    ) {
      hor3.style.transform = "scale(1)";
    } else if (
      box1.innerText == "O" &&
      box4.innerText == "O" &&
      box7.innerText == "O"
    ) {
      ver1.style.transform = "scale(1)";
    } else if (
      box2.innerText == "O" &&
      box5.innerText == "O" &&
      box8.innerText == "O"
    ) {
      ver2.style.transform = "scale(1)";
    } else if (
      box3.innerText == "O" &&
      box6.innerText == "O" &&
      box9.innerText == "O"
    ) {
      ver3.style.transform = "scale(1)";
    } else if (
      box1.innerText == "O" &&
      box5.innerText == "O" &&
      box9.innerText == "O"
    ) {
      dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
    } else if (
      box3.innerText == "O" &&
      box5.innerText == "O" &&
      box7.innerText == "O"
    ) {
      dia1.style.transform =
        " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
    }
  }
});
