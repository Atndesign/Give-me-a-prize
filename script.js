"use strict";

let inputDOM = document.getElementById("input");
let inputBtnDOM = document.getElementById("input-btn");
let resultDOM = document.getElementById("result");

let index;
let spaces = 83;
let loop;
let random;
function getPlayers() {
  document.querySelector(".players").style.bottom = -spaces + "px";
  document.querySelector(".players").style.transitionDuration = 0 + "s";

  loop = 0;
  index = 0;
  if (inputDOM.value === "") return;
  else {
    let playerList = inputDOM.value.split(",");
    for (let i = 0; i < 3; i++)
      playerList.forEach((player) => {
        createPlayersElt(player);
      });
    random = Math.floor(
      Math.random() * playerList.length + playerList.length * 2
    );
    setTimeout(() => {
      document.querySelector(".players").style.transitionDuration =
        playerList.length / 10 + "s";
      displayWinner();
    }, 500);
  }
}

function createPlayersElt(currentPlayer) {
  let li = document.createElement("li");
  li.textContent = currentPlayer;
  li.classList.add("player");
  document.querySelector(".players").appendChild(li);
}
function displayWinner() {
  document.querySelector(".players").style.bottom = spaces * random + "px";
}
inputBtnDOM.addEventListener("click", () => {
  getPlayers();
});
