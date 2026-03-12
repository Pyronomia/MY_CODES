// Variables

// Players
let player1 = document.querySelector("#player-1");
let player2 = document.querySelector("#player-2");

// // Name values
// export let player1Name = player1.value;
// export let player2Name = player2.value;

//Forms
let form1 = document.querySelector(".player-1");
let form2 = document.querySelector(".player-2");

//link
let link = document.querySelector(".link-start-game");

if (form2 !== null) {
  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    // no need for checking if player 2 is null because if form 2 is null player 2 is also null

    if (player1.value !== "" && player2.value !== "") {
      window.location.href = "./animation-screen.html";
    } else if (player1.value == "" && player2.value == "") {
      alert("Players please input your names");
    } else {
      if (player1.value == "") {
        alert("Player 1 please input your name");
      } else if (player2.value == "") {
        alert("Player 2 please input your name");
      }
    }

    // Exports
    localStorage.setItem("Player1", player1.value);
    localStorage.setItem("Player2", player2.value);
  });

  form2.addEventListener("submit", function (e) {
    e.preventDefault();

    if (player1.value !== "" && player2.value !== "") {
      window.location.href = "./animation-screen.html";
    } else if (player1.value == "" && player2.value == "") {
      alert("Players please input your names");
    } else {
      if (player1.value == "") {
        alert("Player 1 please input your name");
      } else if (player2.value == "") {
        alert("Player 2 please input your name");
      }
    }

    // Exports
    localStorage.setItem("Player1", player1.value);
    localStorage.setItem("Player2", player2.value);
  });

  link.addEventListener("click", function (e) {
    if (player1.value !== "" && player2.value !== "") {
      window.location.href = "./animation-screen.html";
    } else if (player1.value == "" && player2.value == "") {
      e.preventDefault();
      alert("Players please input your names");
    } else {
      if (player1.value == "") {
        e.preventDefault();
        alert("Player 1 please input your name");
      } else if (player2.value == "") {
        e.preventDefault();
        alert("Player 2 please input your name");
      }
    }

    // Exports
    localStorage.setItem("Player1", player1.value);
    localStorage.setItem("Player2", player2.value);
  });
} else {
  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    // no need for checking if player 2 is null because if form 2 is null player 2 is also null

    if (player1.value !== "") {
      window.location.href = "./animation-screen-sp.html";
    } else if (player1.value == "") {
      alert("Player please input your name");
    }

    // Exports
    localStorage.setItem("Player1", player1.value);
  });

  link.addEventListener("click", function (e) {
    if (player1.value !== "") {
      window.location.href = "./animation-screen-sp.html";
    } else if (player1.value == "") {
      e.preventDefault();
      alert("Player please input your name");
    }

    // Exports
    localStorage.setItem("Player1", player1.value);
  });
}
