// Variables
let mode = localStorage.getItem("mode");
let difficulty = localStorage.getItem("difficulty");
console.log(difficulty);
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

// Logic for the first person to play
let active = ["bot", "player"];
let activePlayer = active[Math.floor(Math.random() * active.length)];
if (activePlayer === "bot") {
  result.innerHTML = `Bot - X <br> <br> Player - O`;
} else {
  result.innerHTML = `Bot - O <br> <br> Player - X`;
}

console.log(activePlayer);

// Active boxes for the game
let activeBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let allBoxes = [...activeBoxes];
let botText = "O";
let playerText = "X";

function activeBoxes2() {
  let activeBoxes2 = [];
  for (let i = 0; i < allBoxes.length; i++) {
    if (allBoxes[i].textContent == "") {
      activeBoxes2.push(allBoxes[i]);
    }
  }
  return activeBoxes2;
}

// to prevent click glitch
if (activePlayer === "bot") {
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.pointerEvents = "none";
  }
}

//To activate the player indicator
oneX.classList.add("active");

// to prevent glitch by bot
let glitch = "";

// start button click event
startBtn.addEventListener("click", function () {
  result.style.display = "none";
  startBtn.style.display = "none";
  playArea.style.visibility = "visible";
  playerIndicator.style.visibility = "visible";

  function botLogic1() {
    console.log(glitch);
    if (activePlayer === "bot" && glitch === "") {
      let randomBox =
        activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

      randomBox.classList.add("red");

      randomBox.textContent = "X";

      botText = "X";
      playerText = "O";

      let index = activeBoxes.indexOf(randomBox);
      activeBoxes.splice(index, 1);

      console.log(activeBoxes);

      console.log(randomBox);
      activePlayer = "player";

      twoO.classList.add("active");
      oneX.classList.remove("active");

      //   to reactivate clickability
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
    }
  }

  setTimeout(botLogic1, 2100);
  console.log(result);
});

// To stop indicator
let indiStop = "";

// To prevent the final whoWonText from changing
let change = "";

// To know if the win pertains to x or o
let winnerText = "";

// To block the winning lines from being read in the minimax
let blocker = "inactive";

// To switch the playing mode of normal mode
let normalRandomizer = "";
console.log(normalRandomizer);

function preventFirstMoveDelay() {
  let piecesOnBoard = allBoxes.filter(
    (square) => square.textContent !== "",
  ).length;
  console.log(piecesOnBoard);
  if (piecesOnBoard === 1) {
    console.log("here");
    // If the human took the center, instantly take a corner
    if (box5.textContent !== "") {
      box1.textContent = botText;
      box1.classList.add("blue");

      // Change the active player
      activePlayer = "player";

      // Reactive pointer activity
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
      return true; // Return top-left corner instantly
    }
    // If the human took anywhere else, instantly take the center
    else {
      console.log("here2");

      box5.textContent = botText;
      box5.classList.add("blue");

      // Change the active player
      activePlayer = "player";

      // Reactive pointer activity
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
      return true; // Return center instantly
    }
  }
}

// Bot Logic
function botLogic() {
  if (difficulty === "hard") {
    if (preventFirstMoveDelay()) return;
    let minimaxVar = minimax(botText, 0)["box"];

    // Minimax does the work of finding the best move so i'm just assigning the text here no big deal
    minimaxVar.textContent = botText;

    // I just need  to know whether its x or O to know the correct class to add
    if (botText == "X") {
      minimaxVar.classList.add("red");
    } else if (botText == "O") {
      minimaxVar.classList.add("blue");
    }

    // Change the active player
    activePlayer = "player";

    // Reactive pointer activity
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].style.pointerEvents = "auto";
    }
  } else if (difficulty === "easy") {
    if (activePlayer === "bot" && botText === "X") {
      let randomBox =
        activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

      randomBox.classList.add("red");

      randomBox.textContent = "X";

      let index = activeBoxes.indexOf(randomBox);
      activeBoxes.splice(index, 1);

      activePlayer = "player";

      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
    } else if (activePlayer === "bot" && botText === "O") {
      let randomBox =
        activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

      randomBox.classList.add("blue");

      randomBox.textContent = "O";

      let index = activeBoxes.indexOf(randomBox);
      activeBoxes.splice(index, 1);

      activePlayer = "player";

      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
    }
  } else if (difficulty === "normal") {
    normalRandomizer = Math.random();
    if (normalRandomizer < 0.65) {
      if (preventFirstMoveDelay()) return;

      console.log(normalRandomizer);
      console.log("Minimax mode is on");
      let minimaxVar = minimax(botText, 0)["box"];

      // Minimax does the work of finding the best move so i'm just assigning the text here no big deal
      minimaxVar.textContent = botText;

      // I just need  to know whether its x or O to know the correct class to add
      if (botText == "X") {
        minimaxVar.classList.add("red");
      } else if (botText == "O") {
        minimaxVar.classList.add("blue");
      }

      // Always remember to splice what you just added from the active boxes
      let index = activeBoxes.indexOf(minimaxVar);
      activeBoxes.splice(index, 1);

      // Change the active player
      activePlayer = "player";

      // Reactive pointer activity
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
    } else {
      console.log(normalRandomizer);
      console.log("Random mode is on");

      if (activePlayer === "bot" && botText === "X") {
        let randomBox =
          activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

        randomBox.classList.add("red");

        randomBox.textContent = "X";

        let index = activeBoxes.indexOf(randomBox);
        activeBoxes.splice(index, 1);

        activePlayer = "player";

        for (let i = 0; i < allBoxes.length; i++) {
          allBoxes[i].style.pointerEvents = "auto";
        }
        normalRandomizer = "minimax-mode";
      } else if (activePlayer === "bot" && botText === "O") {
        let randomBox =
          activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

        randomBox.classList.add("blue");

        randomBox.textContent = "O";

        let index = activeBoxes.indexOf(randomBox);
        activeBoxes.splice(index, 1);

        activePlayer = "player";

        for (let i = 0; i < allBoxes.length; i++) {
          allBoxes[i].style.pointerEvents = "auto";
        }
      }
    }
  }
}

// Game ender logic
function deactivatePointer() {
  playArea.style.pointerEvents = "none";
  indiStop = "stop";
  change = "active";

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
  if (activePlayer == "bot") {
    whoWonText.textContent = "YOU HAVE DEFEATED THE BOT!!!";
  } else if (activePlayer == "player") {
    whoWonText.textContent = "YOU WERE DEFEATED BY THE BOT";
  }

  console.log(activePlayer);
}

// Check logic
function checkLogic() {
  if (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") {
    if (blocker == "inactive") {
      hor1.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box4.innerText == "X" &&
    box5.innerText == "X" &&
    box6.innerText == "X"
  ) {
    if (blocker == "inactive") {
      hor2.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box7.innerText == "X" &&
    box8.innerText == "X" &&
    box9.innerText == "X"
  ) {
    if (blocker == "inactive") {
      hor3.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box1.innerText == "X" &&
    box4.innerText == "X" &&
    box7.innerText == "X"
  ) {
    if (blocker == "inactive") {
      ver1.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box2.innerText == "X" &&
    box5.innerText == "X" &&
    box8.innerText == "X"
  ) {
    if (blocker == "inactive") {
      ver2.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box3.innerText == "X" &&
    box6.innerText == "X" &&
    box9.innerText == "X"
  ) {
    if (blocker == "inactive") {
      ver3.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box1.innerText == "X" &&
    box5.innerText == "X" &&
    box9.innerText == "X"
  ) {
    if (blocker == "inactive") {
      dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  } else if (
    box3.innerText == "X" &&
    box5.innerText == "X" &&
    box7.innerText == "X"
  ) {
    if (blocker == "inactive") {
      dia1.style.transform =
        " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
      deactivatePointer();
    }
    winnerText = "X";
    return true;
  }
  //   For O's
  else if (
    box1.innerText == "O" &&
    box2.innerText == "O" &&
    box3.innerText == "O"
  ) {
    if (blocker == "inactive") {
      hor1.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box4.innerText == "O" &&
    box5.innerText == "O" &&
    box6.innerText == "O"
  ) {
    if (blocker == "inactive") {
      hor2.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box7.innerText == "O" &&
    box8.innerText == "O" &&
    box9.innerText == "O"
  ) {
    if (blocker == "inactive") {
      hor3.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box1.innerText == "O" &&
    box4.innerText == "O" &&
    box7.innerText == "O"
  ) {
    if (blocker == "inactive") {
      ver1.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box2.innerText == "O" &&
    box5.innerText == "O" &&
    box8.innerText == "O"
  ) {
    if (blocker == "inactive") {
      ver2.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box3.innerText == "O" &&
    box6.innerText == "O" &&
    box9.innerText == "O"
  ) {
    if (blocker == "inactive") {
      ver3.style.transform = "scale(1)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box1.innerText == "O" &&
    box5.innerText == "O" &&
    box9.innerText == "O"
  ) {
    if (blocker == "inactive") {
      dia2.style.transform = " translate(1.1em, 1em) rotate(45deg) scale(1.28)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (
    box3.innerText == "O" &&
    box5.innerText == "O" &&
    box7.innerText == "O"
  ) {
    if (blocker == "inactive") {
      dia1.style.transform =
        " translate(-1.1em, 1em) rotate(315deg) scale(1.28)";
      deactivatePointer();
    }
    winnerText = "O";
    return true;
  } else if (activeBoxes2().length === 0) {
    if (blocker == "inactive") {
      deactivatePointer();
    }
    // console.log("draw");
    whoWonText.textContent = "IT'S A DRAW";
  }
}

function minimax(player, depth) {
  blocker = "active";
  let availSpots = activeBoxes2();
  //   console.log(availSpots);

  if (checkLogic() && winnerText == playerText) {
    blocker = "inactive";

    return { score: -10 + depth };
  } else if (checkLogic() && winnerText == botText) {
    blocker = "inactive";

    return { score: 10 - depth };
  } else if (activeBoxes2().length === 0) {
    blocker = "inactive";

    return { score: 0 };
  }

  let moves = [];
  for (let i = 0; i < availSpots.length; i++) {
    let move = {};
    move.box = availSpots[i];
    availSpots[i].textContent = player;

    if (player == botText) {
      let result = minimax(playerText, depth + 1);
      move.score = result["score"];
    } else {
      let result = minimax(botText, depth + 1);
      move.score = result["score"];
    }

    availSpots[i].textContent = "";
    moves.push(move);
  }

  let bestMove;
  if (player === botText) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
}

playArea.addEventListener("click", function (e) {
  // To prevent the phone from registering a move when its not its turn
  if (e.cancelable) {
    e.preventDefault();
  }

  if (activePlayer === "bot") return;

  // to prevent glitch by bot
  glitch = "no-glitch";

  //   Checks for active boxes and assigning a text to a box

  console.log("hi");

  let clickedBox = e.target.closest(".box");

  if (clickedBox.textContent !== "") {
    alert("Choose a different box");
    return;
  } else {
    if (playerText === "O") {
      clickedBox.textContent = "O";
      clickedBox.classList.add("blue");
    } else if (playerText === "X") {
      clickedBox.textContent = "X";
      clickedBox.classList.add("red");
    }
  }

  console.log(clickedBox);
  let index = activeBoxes.indexOf(clickedBox);
  if (index === -1) return;
  console.log(index);

  activeBoxes.splice(index, 1);

  console.log(activeBoxes);

  // Deactivate pointers
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.pointerEvents = "none";
  }

  //   Assigning the active element to bot
  activePlayer = "bot";

  if (e.target.matches(".box")) {
    // Checks for a win
    checkLogic();
  }

  // Logic for active player indicator
  if ((playerText === "X") & (indiStop === "")) {
    twoO.classList.add("active");
    oneX.classList.remove("active");
  } else if ((playerText === "O") & (indiStop === "")) {
    oneX.classList.add("active");
    twoO.classList.remove("active");
  }

  //   Logic for bot indicator
  function indicatorLogic() {
    if (indiStop === "") {
      if (botText === "X") {
        twoO.classList.add("active");
        oneX.classList.remove("active");
        console.log("hello");
      } else if (botText === "O") {
        oneX.classList.add("active");
        twoO.classList.remove("active");
      }
    }
  }

  if (change !== "") return;

  setTimeout(() => {
    botLogic();
    checkLogic();
    indicatorLogic();
  }, 2100);
  //   botLogic();
  //   checkLogic();
});
