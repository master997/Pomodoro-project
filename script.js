"use strict";

// DOM variables
let timer = document.querySelector(".numtimer");
const startBtn = document.querySelector(".starting");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const workDurInput = document.querySelector(".work-duration");
const breakDurInput = document.querySelector(".break-duration");

// Variables for timer control
let timerId = null;
let minsToSecs = 0; // Initialize minsToSecs to 0 initially
let isWorkingSession = true; // Start with a work session by default

// Default values for work and break sessions
let workDuration = 25;
let breakDuration = 5;

// Start timer function
const startTimer = function () {
  // Prevent starting multiple timers
  if (timerId !== null) {
    return;
  }

  // Only set minsToSecs if the timer is starting for the first time or after a reset
  // This prevents the timer from resetting if it was simply paused
  if (minsToSecs === 0) {
    if (isWorkingSession === true) {
      let workDurValue = Number(workDurInput.value);
      minsToSecs =
        isNaN(workDurValue) || workDurValue === 0
          ? workDuration * 60
          : workDurValue * 60;
    } else {
      let breakDurValue = Number(breakDurInput.value);
      minsToSecs =
        isNaN(breakDurValue) || breakDurValue === 0
          ? breakDuration * 60
          : breakDurValue * 60;
    }
  }

  // Interval timer
  timerId = setInterval(function () {
    minsToSecs--;
    let timerMins = Math.floor(minsToSecs / 60);
    let timerSecs = minsToSecs % 60;

    if (timerSecs < 10) {
      timerSecs = `0${timerSecs}`;
    }

    timer.textContent = `${timerMins}:${timerSecs}`;

    if (minsToSecs <= 0) {
      resetTimer();
    }
  }, 1000);
};

// Stop timer function
const stopTimer = function () {
  clearInterval(timerId);
  timerId = null;
};

// Reset timer function
const resetTimer = function () {
  stopTimer();
  isWorkingSession = true;
  minsToSecs = 0; // Reset minsToSecs to 0 to trigger reset in startTimer
  timer.textContent = `${workDuration}:00`;
};

// Event listeners for start, pause, and reset buttons
startBtn.addEventListener("click", function () {
  startTimer();
});

pauseBtn.addEventListener("click", function () {
  stopTimer();
});

resetBtn.addEventListener("click", function () {
  resetTimer();
});
