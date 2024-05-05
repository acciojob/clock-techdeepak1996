function updateTimer() {
  const timerElement = document.getElementById('timer');
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  timerElement.textContent = dateTimeString;
}

        // Initial call to display the timer immediately
        updateTimer();

        // Set interval to update the timer every second
        setInterval(updateTimer, 1000);