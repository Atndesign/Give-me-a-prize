"use strict";

let inputDOM = document.getElementById("input");
let inputBtnDOM = document.getElementById("input-btn");
let resultDOM = document.getElementById("result");

let time;
let index;

function getPlayers() {
  resultDOM.classList.remove("animated", "jackInTheBox");
  time = 100;
  index = 0;
  if (inputDOM.value === "") return;
  else {
    let playerList = inputDOM.value.split(",");
    displayPlayers(playerList);
  }
}

function displayPlayers(players) {
  if (index >= players.length) index = 0;
  if (time !== 0) {
    resultDOM.innerHTML = players[index];
    let timeout = setTimeout(() => {
      displayPlayers(players);
      time -= 1;
      index += 1;
    }, time);
  } else {
    resultDOM.classList.add("animated", "jackInTheBox");
    resultDOM.innerHTML = players[Math.floor(Math.random() * players.length)];
  }
}

function getWinner() {}

inputBtnDOM.addEventListener("click", () => {
  getPlayers();
});
