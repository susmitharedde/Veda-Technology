// Set the target date
const targetDate = new Date("January 1, 2027 00:00:00").getTime();

// Get HTML elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const message = document.getElementById("message");

// Update countdown every second
const countdown = setInterval(function () {

    // Current date and time
    const now = new Date().getTime();

    // Difference between target date and current date
    const distance = targetDate - now;

    // Time calculations
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minute = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const second = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    // Display values with leading zero
    days.textContent = String(day).padStart(2, "0");
    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");

    // Countdown finished
    if (distance < 0) {
        clearInterval(countdown);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        message.textContent = "🎉 Countdown Finished!";
    }

}, 1000);