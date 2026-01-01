// Variables
let easy = document.querySelector(".easy-mode");
let normal = document.querySelector(".normal-mode");
let hard = document.querySelector(".hard-mode");

console.log(localStorage.getItem("mode"));

easy.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    e.preventDefault();
    window.location.href = "../html/easy-sp.html";
  }
});
