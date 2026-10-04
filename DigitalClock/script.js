// Select the clock element
const clock = document.getElementById("clock");

// Function to update the clock
function updateClock() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Add leading zeros if needed
    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    // Display the time
    clock.textContent = `${hh}:${mm}:${ss}`;
}

// Display time immediately
updateClock();

// Update the time every second
setInterval(updateClock, 1000);