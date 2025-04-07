const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.querySelector('.custom-tip');
const tipAmountEl = document.getElementById('tip-amount');
const totalAmountEl = document.getElementById('total-amount');
const resetBtn = document.getElementById('resetBtn');

let billValue = 0;
let tipPercent = 0;
let peopleCount = 0;

function init() {
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';
  tipButtons.forEach(btn => btn.classList.remove('active'));

  billValue = 0;
  tipPercent = 0;
  peopleCount = 0;
  updateDisplay(0, 0);
  checkResetButton();
}

function compute() {
  if (billValue > 0 && peopleCount > 0 && tipPercent >= 0) {
    const totalTip = billValue * (tipPercent / 100);
    const tipPerPerson = totalTip / peopleCount;
    const totalPerPerson = (billValue / peopleCount) + tipPerPerson;
    updateDisplay(tipPerPerson, totalPerPerson);
  } 
  else {
    updateDisplay(0, 0);
  }
  checkResetButton();
}

function updateDisplay(tipP, totalP) {
  tipAmountEl.textContent = `$${tipP.toFixed(2)}`;
  totalAmountEl.textContent = `$${totalP.toFixed(2)}`;
}

function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  compute();
}
function handlePeopleInput() {
    peopleCount = parseInt(peopleInput.value, 10) || 1;
    compute();
  }
function handleTipButton(e) {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  customTipInput.value = '';

  e.target.classList.add('active');
  tipPercent = parseFloat(e.target.dataset.tip) || 0;
  compute();
}
function handleCustomTip() {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipPercent = parseFloat(customTipInput.value) || 0;
  compute();
}
function handleReset() {
  init();
}

function checkResetButton() {
  if (billValue > 0 || tipPercent > 0 || peopleCount > 0) {
    resetBtn.disabled = false;
  } 
  else {
    resetBtn.disabled = true;
  }
}

billInput.addEventListener('input', handleBillInput);
peopleInput.addEventListener('input', handlePeopleInput);
tipButtons.forEach(btn => btn.addEventListener('click', handleTipButton));
customTipInput.addEventListener('input', handleCustomTip);
resetBtn.addEventListener('click', handleReset);
init();