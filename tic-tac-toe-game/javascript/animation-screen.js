// Variables
let exPlayer1value = localStorage.getItem("Player1");
let exPlayer2value = localStorage.getItem("Player2");
let mode = localStorage.getItem("mode");
console.log(mode);

console.log(exPlayer1value);
console.log(exPlayer2value);

let player1Name = document.querySelector(".player-1-name");
let player2Name = document.querySelector(".player-2-name");
let welcomeMsg = document.querySelector(".welcome-msg");

// Inserting player names
if (player2Name == null) {
  player1Name.textContent = exPlayer1value + "...";
} else {
  player1Name.textContent = exPlayer1value + "...";
  player2Name.textContent = exPlayer2value + "...";
}

if (mode == "single") {
  welcomeMsg.addEventListener("animationend", function () {
    window.location.href = "./difficulty.html";
  });
} else if (mode == "multiplayer") {
  welcomeMsg.addEventListener("animationend", function () {
    window.location.href = "./mp-mode.html";
  });
}
