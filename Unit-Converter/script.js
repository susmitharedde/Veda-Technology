const value = document.getElementById("value");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

function convert() {
    const input = parseFloat(value.value);

    if (isNaN(input)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;

    // Same unit
    if (from === to) {
        result.textContent = `${input} ${from} = ${input.toFixed(2)} ${to}`;
        return;
    }

    let output;

    // -------- LENGTH CONVERSIONS --------

    // Meter
    if (from === "meter" && to === "kilometer")
        output = input / 1000;
    else if (from === "meter" && to === "feet")
        output = input * 3.28084;
    else if (from === "meter" && to === "inch")
        output = input * 39.3701;

    // Kilometer
    else if (from === "kilometer" && to === "meter")
        output = input * 1000;
    else if (from === "kilometer" && to === "feet")
        output = input * 3280.84;
    else if (from === "kilometer" && to === "inch")
        output = input * 39370.1;

    // Feet
    else if (from === "feet" && to === "meter")
        output = input / 3.28084;
    else if (from === "feet" && to === "kilometer")
        output = input / 3280.84;
    else if (from === "feet" && to === "inch")
        output = input * 12;

    // Inch
    else if (from === "inch" && to === "meter")
        output = input / 39.3701;
    else if (from === "inch" && to === "kilometer")
        output = input / 39370.1;
    else if (from === "inch" && to === "feet")
        output = input / 12;

    // -------- WEIGHT CONVERSIONS --------

    // Kilogram
    else if (from === "kilogram" && to === "gram")
        output = input * 1000;
    else if (from === "kilogram" && to === "pound")
        output = input * 2.20462;
    else if (from === "kilogram" && to === "ounce")
        output = input * 35.274;

    // Gram
    else if (from === "gram" && to === "kilogram")
        output = input / 1000;
    else if (from === "gram" && to === "pound")
        output = input / 453.592;
    else if (from === "gram" && to === "ounce")
        output = input / 28.3495;

    // Pound
    else if (from === "pound" && to === "kilogram")
        output = input / 2.20462;
    else if (from === "pound" && to === "gram")
        output = input * 453.592;
    else if (from === "pound" && to === "ounce")
        output = input * 16;

    // Ounce
    else if (from === "ounce" && to === "kilogram")
        output = input / 35.274;
    else if (from === "ounce" && to === "gram")
        output = input * 28.3495;
    else if (from === "ounce" && to === "pound")
        output = input / 16;

    // Invalid conversion
    else {
        result.textContent =
            "❌ Cannot convert between Length and Weight units.";
        return;
    }

    result.textContent = `${input} ${from} = ${output.toFixed(2)} ${to}`;
}

// Button click
convertBtn.addEventListener("click", convert);

// Live conversion
value.addEventListener("input", convert);
fromUnit.addEventListener("change", convert);
toUnit.addEventListener("change", convert);