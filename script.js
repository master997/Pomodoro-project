"use strict";

// starter variables
let numTimer = document.querySelector(".numtimer");
let startBtn = document.querySelector(".starting");
let pauseBtn = document.querySelector(".pause");
let restBtn = document.querySelector(".reset");
let workDurationInput = document.querySelector(".work-duration");
let breakDurationInput = document.querySelector(".break-duration");

let intervalId;
let remainingTime;
let isRunning = false;
let isWorkSession = true;
let workDuration = 1500;
let breakDuration = 300;

const displayTimer = function () {
  remainingTime = numTimer.textContent;
};

workDurationInput.addEventListener("change", function () {
  let workDurationValue = workDurationInput.value;
  let workNumValue = Number(workDurationValue) * 60;
  workDuration = workNumValue;
  if (isWorkSession === true) {
    remainingTime = workDuration;
    displayTimer();
  }
});
breakDurationInput.addEventListener("change", function () {
  let breakDurationValue = breakDurationInput.value;
  let breakNumValue = Number(breakDurationValue) * 60;
  breakDuration = breakNumValue;
  if (isWorkSession === false) {
    remainingTime = breakDuration;
    displayTimer();
  }
});
