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
  // puts input into number then checks if input is a number or 0. then changes it to 25
  let workDurValue = Number(workDurInput.value);
  if (isNaN(workDurValue) || workDurValue === 0) {
    workDurValue = 25;
  }
  // converting to seconds is easier in js because its easier to decrease by 1 sec every interval tick
  let minToSecs = Number(workDurValue * 60);
  console.log(minToSecs);
  console.log("start button is clicked");
});

pauseBtn.addEventListener("click", function () {
  console.log("Pause button is clicked");
});

resetBtn.addEventListener("click", function () {
  console.log("Reset button is clicked");
});
