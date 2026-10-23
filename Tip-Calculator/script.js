const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");

function calculateTip() {

    let bill = parseFloat(billInput.value);
    let tip = parseFloat(tipInput.value);
    let people = parseInt(peopleInput.value);

    if (isNaN(bill) || bill <= 0 ||
        isNaN(tip) || tip < 0 ||
        isNaN(people) || people <= 0) {

        tipPerPerson.textContent = "₹0.00";
        totalPerPerson.textContent = "₹0.00";
        return;
    }

    let tipAmount = (bill * tip) / 100;
    let totalAmount = bill + tipAmount;

    let tipEach = tipAmount / people;
    let totalEach = totalAmount / people;

    tipPerPerson.textContent = "₹" + tipEach.toFixed(2);
    totalPerPerson.textContent = "₹" + totalEach.toFixed(2);
}

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);