// 요소 가져오기
const billEl      = document.getElementById('bill');
const tipBtns     = document.querySelectorAll('.tip-btn');
const customEl    = document.getElementById('custom-tip');
const peopleEl    = document.getElementById('people');
const tipAmtEl    = document.getElementById('tip-amount');
const totalAmtEl  = document.getElementById('total-amount');
const resetBtn    = document.getElementById('reset');

let bill = 0, tip = 0, people = 1;

// 입력 이벤트
billEl.addEventListener('input', () => {
  bill = parseFloat(billEl.value) || 0;
  calculate();
});

peopleEl.addEventListener('input', () => {
  people = parseInt(peopleEl.value) || 1;
  calculate();
});

// 고정 팁 버튼
tipBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tipBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tip = Number(btn.dataset.tip);
    customEl.value = '';
    calculate();
  });
});

// 커스텀 팁 입력
customEl.addEventListener('input', () => {
  tipBtns.forEach(b => b.classList.remove('active'));
  tip = parseFloat(customEl.value) || 0;
  calculate();
});

// 계산 함수
function calculate() {
  if (bill <= 0 || people <= 0) return;
  const totalTip      = bill * (tip / 100);
  const tipPerPerson  = totalTip / people;
  const totalPerPerson= (bill + totalTip) / people;

  tipAmtEl.textContent   = '$' + tipPerPerson.toFixed(2);
  totalAmtEl.textContent = '$' + totalPerPerson.toFixed(2);
}

// 리셋 시 초기화
resetBtn.addEventListener('click', () => {
  billEl.value = '';
  customEl.value = '';
  peopleEl.value = '';
  tipBtns.forEach(b => b.classList.remove('active'));
  tipAmtEl.textContent = '$0.00';
