"use strict";

// Selecting DOM elements for timer display and control buttons
let numTimer = document.querySelector(".numtimer");
let startBtn = document.querySelector(".starting");
let pauseBtn = document.querySelector(".pause");
let restBtn = document.querySelector(".reset");
let workDurationInput = document.querySelector(".work-duration");
let breakDurationInput = document.querySelector(".break-duration");

// Variables for managing the timer
let intervalId; // Stores interval ID for the countdown timer
let remainingTime; // Tracks remaining time in seconds
let isRunning = false; // Tracks if the timer is currently running
let isWorkSession = true; // Tracks if it's a work session (true) or break session (false)
let workDuration = 1500; // Default work duration (25 minutes in seconds)
let breakDuration = 300; // Default break duration (5 minutes in seconds)

// Initialize remaining time based on the current session type
remainingTime = isWorkSession ? workDuration : breakDuration;

// Function to update the timer display
const displayTimer = function () {
  let minutes = Math.floor(remainingTime / 60); // Calculate minutes
  let seconds = remainingTime % 60; // Calculate seconds
  let formattedMins = minutes.toString().padStart(2, "0"); // Ensure two digits for minutes
  let formattedSecs = seconds.toString().padStart(2, "0"); // Ensure two digits for seconds
  numTimer.textContent = `${formattedMins}:${formattedSecs}`; // Update the display
};
displayTimer(); // Initial display update when the page loads

// Update work duration and refresh timer display if it's a work session
workDurationInput.addEventListener("change", function () {
  workDuration = Number(workDurationInput.value) * 60; // Convert minutes to seconds
  if (isWorkSession) {
    remainingTime = workDuration;
    displayTimer();
  }
});

// Update break duration and refresh timer display if it's a break session
breakDurationInput.addEventListener("change", function () {
  breakDuration = Number(breakDurationInput.value) * 60; // Convert minutes to seconds
  if (!isWorkSession) {
    remainingTime = breakDuration;
    displayTimer();
  }
});
