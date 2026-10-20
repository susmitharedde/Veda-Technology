const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");
const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

let modalClosed = false;

// Show modal after 3 seconds
setTimeout(() => {

    if (!modalClosed) {
        modalOverlay.style.display = "flex";
    }

}, 3000);


// Close Button
closeBtn.addEventListener("click", () => {

    modalOverlay.style.display = "none";
    modalClosed = true;

});


// Click Outside Modal
modalOverlay.addEventListener("click", (event) => {

    if (event.target === modalOverlay) {

        modalOverlay.style.display = "none";
        modalClosed = true;

    }

});


// Subscribe Button
subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        message.textContent = "Please enter your email.";
        message.style.color = "red";
        return;

    }

    if (!emailPattern.test(email)) {

        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;

    }

    message.textContent = "🎉 Thank you for subscribing!";
    message.style.color = "green";

    setTimeout(() => {

        modalOverlay.style.display = "none";
        modalClosed = true;

    }, 1500);

});