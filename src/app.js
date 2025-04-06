let personNumber = 1;
let price = 0;
let tipPrice = 0;
let totalPrice = 0;
let tipRatio = 0;

const tipButtons = document.querySelectorAll(".calculator__tip-button");
const billInput = document.querySelector("#bill");
const personInput = document.querySelector("#people");

const tipPriceOutput = document.querySelector("#tip_price");
const totalPriceOutput = document.querySelector("#total_price");

function calculatePrice() {
    tipPrice = Number(price * tipRatio);
    totalPrice = Number(price) + Number(tipPrice);
    tipPriceOutput.textContent = "$" + (tipPrice / personNumber).toFixed(2);
    totalPriceOutput.textContent = "$" + (totalPrice / personNumber).toFixed(2);
}

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tipRatio = Number(button.textContent.replace("%", "") / 100);
        calculatePrice();
    });
});

billInput.addEventListener("input", () => {
    price = Number(billInput.value);
    calculatePrice();
});

personInput.addEventListener("input", () => {
    personNumber = Number(personInput.value);
    calculatePrice();
});
