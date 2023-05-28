// Timer variables
let timerInterval;
let timerTime;
let timerRunning = false;

// Stopwatch variables
let stopwatchInterval;
let stopwatchTime;
let stopwatchRunning = false;

// Timer functions
function startTimer() {
  if (!timerRunning) {
    const timerInput = document.getElementById('timerInput');
    const timeArray = timerInput.value.split(':');
    const hours = parseInt(timeArray[0]);
    const minutes = parseInt(timeArray[1]);
    const seconds = parseInt(timeArray[2]);

    if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
      timerTime = hours * 3600 + minutes * 60 + seconds;
      timerRunning = true;

      timerInterval = setInterval(updateTimer, 1000);
    } else {
      alert('Invalid time format!');
    }
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById('timerInput').value = '';
  document.getElementById('timerDisplay').textContent = '00:00:00';
}

function updateTimer() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;

  document.getElementById('timerDisplay').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  if (timerTime <= 0) {
    stopTimer();
    alert('Timer finished!');
  }

  timerTime--;
}

// Stopwatch functions
function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchTime = 0;
    stopwatchRunning = true;

    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  document.getElementById('stopwatchDisplay').textContent = '00:00:00';
}

function updateStopwatch() {
  stopwatchTime++;

  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;

  document.getElementById('stopwatchDisplay').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Helper function to format time values with leading zeros
function formatTime(time) {
  return time.toString().padStart(2, '0');
}

// Event listeners for buttons
document.getElementById('timerStartButton').addEventListener('click', startTimer);
document.getElementById('timerStopButton').addEventListener('click', stopTimer);
document.getElementById('timerResetButton').addEventListener('click', resetTimer);

document.getElementById('stopwatchStartButton').addEventListener('click', startStopwatch);
document.getElementById('stopwatchStopButton').addEventListener('click', stopStopwatch);
document.getElementById('stopwatchResetButton').addEventListener('click', resetStopwatch);
