"use strict";

// variables for dom manipulation
const timer = document.querySelector(".numtimer");
const startBtn = document.querySelector(".starting");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const workDurInput = document.querySelector(".work-duration");
const breakDurInput = document.querySelector(".break-duration");

//this stores the ID of set interval. give u control on when to start,pause or reset
let timerId;

// Event listeners
startBtn.addEventListener("click", function () {
  // ensures that the timer is only started once. not more than one timer running at the same time
  if (timerId) {
    return;
  }
  // puts input into number then checks if input is a number or 0. then changes it to 25
  let workDurValue = Number(workDurInput.value);
  if (isNaN(workDurValue) || workDurValue === 0) {
    workDurValue = 25;
  }
  // converting to seconds is easier in js because its easier to decrease by 1 sec every interval tick
  let minToSecs = Number(workDurValue * 60);
  console.log(minToSecs);

  timerId = setInterval(() => {
    minToSecs--;
    let newTimeMins = Math.floor(minToSecs / 60);
    let newTimeSecs = Math.floor(minToSecs % 60);

    if (newTimeSecs < 10) {
      newTimeSecs = `0${newTimeSecs}`;
    }
    timer.textContent = `${newTimeMins}:${newTimeSecs}`;
  }, 1000);
});

pauseBtn.addEventListener("click", function () {
  console.log("Pause button is clicked");
});

resetBtn.addEventListener("click", function () {
  console.log("Reset button is clicked");
});
