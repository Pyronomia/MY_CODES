// Variables
let singlePlayer = document.querySelector(".single-mode");
let multiplayerPlayer = document.querySelector(".multiplayer-mode");

singlePlayer.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    localStorage.setItem("mode", "single");
  }
});
multiplayerPlayer.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    localStorage.setItem("mode", "multiplayer");
  }
});
