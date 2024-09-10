"use strict";

// variables for DOM manipulation
const timer = document.querySelector(".numtimer");
const startBtn = document.querySelector(".starting");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const workDurInput = document.querySelector(".work-duration");
const breakDurInput = document.querySelector(".break-duration");

// Timer control variables
let timerId = null; // Stores the ID of setInterval, helps control the timer
let minToSecs = null; // Stores total time left in seconds
let isWorkingSession = true; // Tracks if it's a work or break session

// Function to stop the timer
const stopTimer = function () {
  clearInterval(timerId);
  timerId = null;
};

// Event listener for the Start button
startBtn.addEventListener("click", function () {
  // Prevent multiple timers from running simultaneously
  if (timerId) {
    return; // Exit if the timer is already running
  }

  // Initialize the timer only if it's the first time or after a reset
  if (minToSecs === null) {
    if (isWorkingSession) {
      let workDurValue = Number(workDurInput.value);

      // Default to 25 minutes if input is invalid or 0
      if (isNaN(workDurValue) || workDurValue === 0) {
        workDurValue = 25;
      }

      // Convert minutes to seconds for the work session
      minToSecs = workDurValue * 60;
    } else {
      let breakDurValue = Number(breakDurInput.value);

      // Default to 5 minutes if input is invalid or 0
      if (isNaN(breakDurValue) || breakDurValue === 0) {
        breakDurValue = 5;
      }

      // Convert minutes to seconds for the break session
      minToSecs = breakDurValue * 60;
    }
  }

  // Start the timer
  timerId = setInterval(() => {
    minToSecs--; // Decrease time by 1 second

    // Calculate minutes and seconds from total seconds
    let newTimeMins = Math.floor(minToSecs / 60);
    let newTimeSecs = minToSecs % 60;

    // Format seconds to always show two digits (e.g., "09" instead of "9")
    if (newTimeSecs < 10) {
      newTimeSecs = `0${newTimeSecs}`;
    }

    // Stop the timer when it reaches 0
    if (minToSecs <= 0) {
      stopTimer();
      timer.textContent = "00:00";

      // Switch between work and break sessions
      if (isWorkingSession === true) {
        // Work session is over, switch to break session
        isWorkingSession = false;
        minToSecs = null; // Reset minToSecs for the break session
        document.querySelector("header").style.backgroundColor = "#ADD8E6";
        document.querySelector("footer").style.backgroundColor = "#ADD8E6";
      } else {
        // Break session is over, reset to work session
        isWorkingSession = true;
        minToSecs = null;
      }
    } else {
      // Update the displayed time
      timer.textContent = `${newTimeMins}:${newTimeSecs}`;
    }
  }, 1000);
});

// Event listener for the Pause button
pauseBtn.addEventListener("click", function () {
  stopTimer();
});

// Event listener for the Reset button
resetBtn.addEventListener("click", function () {
  stopTimer(); // Stop the timer
  minToSecs = null; // Reset the time so it can be re-initialized from input or default
  timer.textContent = "25:00"; // Reset the display to default 25:00
  isWorkingSession = true; // Reset to work session
});
