// Get HTML elements
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const button = document.getElementById("calculateBtn");
const bmiResult = document.getElementById("bmiResult");
const category = document.getElementById("category");

// Add click event to button
button.addEventListener("click", calculateBMI);

// Function to calculate BMI
function calculateBMI() {

    // Get input values
    let h = parseFloat(height.value);
    let w = parseFloat(weight.value);

    // Validation
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
        bmiResult.innerHTML = "";
        category.innerHTML = "Please enter valid positive numbers.";
        return;
    }

    // Calculate BMI
    let bmi = w / (h * h);

    // Round BMI to 2 decimal places
    bmi = bmi.toFixed(2);

    // Display BMI
    bmiResult.innerHTML = "BMI: " + bmi;

    // Display Category
    if (bmi < 18.5) {
        category.innerHTML = "Category: Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        category.innerHTML = "Category: Normal Weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        category.innerHTML = "Category: Overweight";
    }
    else {
        category.innerHTML = "Category: Obese";
    }
}