// Variables
let easy = document.querySelector(".easy-mode");
let normal = document.querySelector(".normal-mode");
let hard = document.querySelector(".hard-mode");

console.log(localStorage.getItem("mode"));

easy.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    e.preventDefault();
    window.location.href = "../html/sp-mode.html";
    localStorage.setItem("difficulty", "easy");
  }
});
normal.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    e.preventDefault();
    window.location.href = "../html/sp-mode.html";
    localStorage.setItem("difficulty", "normal");
  }
});
hard.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    e.preventDefault();
    window.location.href = "../html/sp-mode.html";
    localStorage.setItem("difficulty", "hard");
  }
});
