// Declaring all the variables that will be used in the game
let gameEndContainer = document.querySelector(".game-end-display");
let whoWonText = document.querySelector(".who-won-text");
let gedContainer = document.querySelector(".ged-container");
let box = document.querySelectorAll(".box");
let playArea = document.querySelector(".play-area");
let result = document.querySelector(".result");
let startBtn = document.querySelector(".start-btn");
let playerIndicator = document.querySelector(".player-indicator");
let oneX = document.querySelector(".one");
let twoO = document.querySelector(".two");

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

let exPlayer1value = localStorage.getItem("Player1");
let exPlayer2value = localStorage.getItem("Player2");

// Declaring the players and randomly selecting the active player
let players = ["player1", "player2"];
let activePlayer = "player1";

// Showing who gets to be X and O
result.innerHTML = ` ${exPlayer1value} - X <br />
          <br />
          ${exPlayer2value} - O`;

// Active boxes for the game
let activeBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let allBoxes = [...activeBoxes];

//To activate the player indicator
oneX.classList.add("active");

// start button click event
startBtn.addEventListener("click", function () {
  result.style.display = "none";
  startBtn.style.display = "none";
  playArea.style.visibility = "visible";
  playerIndicator.style.visibility = "visible";
});

// To stop indicator
let indiStop = "";

// Game ender logic
function deactivatePointer() {
  playArea.style.pointerEvents = "none";
  indiStop = "stop";

  // Game end display logic
  gameEndContainer.classList.add("end");
  gedContainer.classList.add("end");

  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.pointerEvents = "none";
  }

  // Active player logic
  if (oneX.classList.contains("active")) {
    oneX.classList.remove("active");
  } else {
    twoO.classList.remove("active");
  }

  // Game end text
  if (activePlayer == "player2") {
    whoWonText.textContent = `${exPlayer1value}, you have defeated ${exPlayer2value}`;
  } else if (activePlayer == "player1") {
    whoWonText.textContent = `${exPlayer2value}, you have defeated ${exPlayer1value}`;
  }

  console.log(activePlayer);
}

// Check logic
function checkLogic() {
  if (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") {
    hor1.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box4.innerText == "X" &&
    box5.innerText == "X" &&
    box6.innerText == "X"
  ) {
    hor2.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box7.innerText == "X" &&
    box8.innerText == "X" &&
    box9.innerText == "X"
  ) {
    hor3.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box1.innerText == "X" &&
    box4.innerText == "X" &&
    box7.innerText == "X"
  ) {
    ver1.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box2.innerText == "X" &&
    box5.innerText == "X" &&
    box8.innerText == "X"
  ) {
    ver2.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box3.innerText == "X" &&
    box6.innerText == "X" &&
    box9.innerText == "X"
  ) {
    ver3.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box1.innerText == "X" &&
    box5.innerText == "X" &&
    box9.innerText == "X"
  ) {
    dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box3.innerText == "X" &&
    box5.innerText == "X" &&
    box7.innerText == "X"
  ) {
    dia1.style.transform = " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
    deactivatePointer();
    activePlayer = "none";
  }
  //   For O's
  else if (
    box1.innerText == "O" &&
    box2.innerText == "O" &&
    box3.innerText == "O"
  ) {
    hor1.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box4.innerText == "O" &&
    box5.innerText == "O" &&
    box6.innerText == "O"
  ) {
    hor2.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box7.innerText == "O" &&
    box8.innerText == "O" &&
    box9.innerText == "O"
  ) {
    hor3.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box1.innerText == "O" &&
    box4.innerText == "O" &&
    box7.innerText == "O"
  ) {
    ver1.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box2.innerText == "O" &&
    box5.innerText == "O" &&
    box8.innerText == "O"
  ) {
    ver2.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box3.innerText == "O" &&
    box6.innerText == "O" &&
    box9.innerText == "O"
  ) {
    ver3.style.transform = "scale(1)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box1.innerText == "O" &&
    box5.innerText == "O" &&
    box9.innerText == "O"
  ) {
    dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
    deactivatePointer();
    activePlayer = "none";
  } else if (
    box3.innerText == "O" &&
    box5.innerText == "O" &&
    box7.innerText == "O"
  ) {
    dia1.style.transform = " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
    deactivatePointer();
    activePlayer = "none";
  }
}

// Logic for play area
playArea.addEventListener("click", function (e) {
  let clickedBox = e.target.closest(".box");

  if (clickedBox.textContent !== "") {
    alert("Choose a different box");
    return;
  } else {
    if (activePlayer === "player1") {
      clickedBox.textContent = "X";
      clickedBox.classList.add("red");
      activePlayer = "player2";
    } else if (activePlayer === "player2") {
      clickedBox.textContent = "O";
      clickedBox.classList.add("blue");
      activePlayer = "player1";
    }
  }

  // Logic for active player indicator
  if ((activePlayer === "player2") & (indiStop === "")) {
    twoO.classList.add("active");
    oneX.classList.remove("active");
  } else if ((activePlayer === "player1") & (indiStop === "")) {
    oneX.classList.add("active");
    twoO.classList.remove("active");
  }

  let index = activeBoxes.indexOf(clickedBox);
  if (index === -1) return;

  activeBoxes.splice(index, 1);

  //   Check logic function
  checkLogic();

  // Logic to check if all boxes are filled and no one has won
  if (activeBoxes.length === 0 && activePlayer !== "none") {
    console.log("draw");
    deactivatePointer();
    whoWonText.textContent = "It's a Draw";
  }
});
