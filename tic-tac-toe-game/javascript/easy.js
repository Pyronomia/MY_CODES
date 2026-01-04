// Variables
let mode = localStorage.getItem("mode");
console.log(mode);
let box = document.querySelectorAll(".box");
let playArea = document.querySelector(".play-area");
let result = document.querySelector(".result");
let startBtn = document.querySelector(".start-btn");

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

// console.log(activeBoxes);

// start button click event
startBtn.addEventListener("click", function () {
  result.style.display = "none";
  startBtn.style.display = "none";
  playArea.style.visibility = "visible";

  if (activePlayer === "bot") {
    let randomBox = activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

    randomBox.classList.add("red");

    randomBox.textContent = "X";

    botText = "X";
    playerText = "O";

    let index = activeBoxes.indexOf(randomBox);
    activeBoxes.splice(index, 1);

    console.log(activeBoxes);

    console.log(randomBox);
    activePlayer = "player";
  }
  console.log(result);
});

// Game ender logic
function deactivatePointer() {
  playArea.style.pointerEvents = "none";
  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.pointerEvents = "none";
  }
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

playArea.addEventListener("click", function (e) {
  console.log("hi");
  console.log(activeBoxes);

  //   Checks for active boxes
  if (e.target.matches(".box")) {
    console.log("hi");

    let clickedBox = e.target.closest(".box");

    if (clickedBox.textContent !== "") {
      alert("Choose a different box");
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

    // console.log(activeBoxes);
  }

  for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.pointerEvents = "none";
  }

  activePlayer = "bot";
  console.log(activePlayer);

  if (e.target.matches(".box")) {
    // Checks for a win
    checkLogic();
  }

  function botLogic() {
    if (activePlayer === "bot" && botText === "X") {
      let randomBox =
        activeBoxes[Math.floor(Math.random() * activeBoxes.length)];

      randomBox.classList.add("red");

      randomBox.textContent = "X";

      let index = activeBoxes.indexOf(randomBox);
      activeBoxes.splice(index, 1);

      console.log(activeBoxes);
      console.log(randomBox);

      activePlayer = "player";
      console.log("hello");

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

      console.log(activeBoxes);
      console.log(randomBox);

      activePlayer = "player";
      console.log("hello");

      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.pointerEvents = "auto";
      }
    }
  }
  botLogic();
  checkLogic();
  console.log("hello");
});
