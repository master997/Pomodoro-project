"use strict";

// variables for dom manipulation
const timer = document.querySelector(".numtimer");
const startBtn = document.querySelector(".starting");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const workDurInput = document.querySelector(".work-duration");
const breakDurInput = document.querySelector(".break-duration");

// Event listeners
startBtn.addEventListener("click", function () {
  console.log("start button is clicked");
});

pauseBtn.addEventListener("click", function () {
  console.log("Pause button is clicked");
});

resetBtn.addEventListener("click", function () {
  console.log("Reset button is clicked");
});
