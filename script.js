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
