const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

// Generate a random HEX color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Generate the color palette
function generatePalette() {

    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const color = getRandomColor();

        const card = document.createElement("div");
        card.classList.add("color-card");

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color;

        const hexCode = document.createElement("p");
        hexCode.classList.add("hex-code");
        hexCode.textContent = color;

        // Copy HEX code when card is clicked
        card.addEventListener("click", () => {
            navigator.clipboard.writeText(color);

            message.textContent = `${color} copied!`;

            setTimeout(() => {
                message.textContent = "";
            }, 1500);
        });

        card.appendChild(colorBox);
        card.appendChild(hexCode);

        palette.appendChild(card);
    }
}

// Generate new palette when button is clicked
generateBtn.addEventListener("click", generatePalette);

// Generate palette when page loads
generatePalette();