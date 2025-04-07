const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');

let tipPercent = 0;

tipButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tipButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    customTipInput.value = '';
    
    tipPercent = parseFloat(btn.textContent) / 100;
    calculate();
  });
});

customTipInput.addEventListener('input', () => {
  tipButtons.forEach(b => b.classList.remove('active'));
  tipPercent = parseFloat(customTipInput.value) / 100;
  calculate();
});

[billInput, peopleInput].forEach(input => {
  input.addEventListener('input', calculate);
});

function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0 || isNaN(tipPercent)) {
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  }

  const tipAmount = (bill * tipPercent) / people;
  const totalAmount = (bill * (1 + tipPercent)) / people;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

resetButton.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  tipButtons.forEach(b => b.classList.remove('active'));
  tipPercent = 0;
});
