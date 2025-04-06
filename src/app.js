let personNumber = 1;
let price = 0;
let tipPrice = 0;
let totalPrice = 0;
let tipRatio = 0;

const tipButtons = document.querySelectorAll(".calculator__tip-button");
const resetButton = document.querySelector(".calculator__reset-button");

const billInput = document.querySelector("#bill");
const personInput = document.querySelector("#people");

const tipPriceOutput = document.querySelector("#tip_price");
const totalPriceOutput = document.querySelector("#total_price");

var selectedTipButton = null;

function reset() {
    personNumber = 1;
    price = 0;
    tipPrice = 0;
    totalPrice = 0;
    tipRatio = 0;

    billInput.value = "";
    personInput.value = "";
    tipPriceOutput.textContent = "$0.00";
    totalPriceOutput.textContent = "$0.00";
    if (selectedTipButton != null)
        selectedTipButton.setAttribute("class", "calculator__tip-button");
}

function calculatePrice() {
    tipPrice = Number(price * tipRatio);
    totalPrice = Number(price) + Number(tipPrice);
    tipPriceOutput.textContent = "$" + (tipPrice / personNumber).toFixed(2);
    totalPriceOutput.textContent = "$" + (totalPrice / personNumber).toFixed(2);
}

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (selectedTipButton != null)
            selectedTipButton.setAttribute("class", "calculator__tip-button");

        if (selectedTipButton === button) {
            tipRatio = 0;
            selectedTipButton = null;
        } else {
            selectedTipButton = button;
            selectedTipButton.setAttribute(
                "class",
                "calculator__tip-button--selected"
            );
            tipRatio = Number(button.textContent.replace("%", "") / 100);
        }

        calculatePrice();
    });
});

resetButton.addEventListener("click", reset);
billInput.addEventListener("input", () => {
    price = Number(billInput.value);
    calculatePrice();
});

personInput.addEventListener("input", () => {
    personNumber = Number(personInput.value);
    calculatePrice();
});
