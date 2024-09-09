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

// Event listener for the Start button
startBtn.addEventListener("click", function () {
  // Prevent multiple timers from running simultaneously
  if (timerId) {
    return; // Exit if the timer is already running
  }

  // Initialize the timer only if it's the first time or after a reset
  if (minToSecs === null) {
    let workDurValue = Number(workDurInput.value);

    // Default to 25 minutes if input is invalid or 0
    if (isNaN(workDurValue) || workDurValue === 0) {
      workDurValue = 25;
    }

    // Convert minutes to seconds
    minToSecs = Number(workDurValue * 60);
    console.log(minToSecs);
  }

  // Start the timer
  timerId = setInterval(() => {
    minToSecs--; // Decrease time by 1 second

    // Calculate minutes and seconds from total seconds
    let newTimeMins = Math.floor(minToSecs / 60);
    let newTimeSecs = Math.floor(minToSecs % 60);

    // Format seconds to always show two digits (e.g., "09" instead of "9")
    if (newTimeSecs < 10) {
      newTimeSecs = `0${newTimeSecs}`;
    }

    // Update the displayed time
    timer.textContent = `${newTimeMins}:${newTimeSecs}`;
  }, 1000);
});

// Event listener for the Pause button
pauseBtn.addEventListener("click", function () {
  clearInterval(timerId); // Stop the timer
  timerId = null; // Allow the timer to be restarted
});

// Event listener for the Reset button
resetBtn.addEventListener("click", function () {
  console.log("Reset button is clicked");
  // Reset functionality will be implemented later
});
