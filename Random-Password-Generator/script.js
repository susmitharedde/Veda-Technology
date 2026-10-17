const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const message = document.getElementById("message");

// Character Sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]<>?/";

// Update slider value
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate Password
generateBtn.addEventListener("click", () => {

    let characters = "";

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    if (characters === "") {
        message.textContent = "Please select at least one character type!";
        message.style.color = "red";
        password.value = "";
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }

    password.value = generatedPassword;

    message.textContent = "Password Generated!";
    message.style.color = "green";
});

// Copy Password
copyBtn.addEventListener("click", () => {

    if (password.value === "") {
        message.textContent = "Generate a password first!";
        message.style.color = "red";
        return;
    }

    navigator.clipboard.writeText(password.value);

    message.textContent = "Password Copied!";
    message.style.color = "blue";
});