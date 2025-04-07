const billInput = document.querySelector('input[name="bill"]');
const peopleInput = document.querySelector('input[name="people"]');
const tip = document.querySelectorAll('#Select_Tip label');
const custom_tip_input = document.querySelector('input[name="tip_custom"]');
const tipOutput = document.querySelector('output[name="tip-result"]');
const totalOutput = document.querySelector('output[name="total-result"]');
const reset = document.querySelector('#reset-button');

let selectedTip = 0;

tip.forEach((label) => {
    label.addEventListener('click', () => {
        // 모든 라벨에서 selected 제거
        tip.forEach(label => label.classList.remove('selected'));
        custom_tip_input.value = '';

        // 클릭한 라벨에 selected 추가
        label.classList.add('selected');

        const tipNum = label.textContent.replace('%', '');
        selectedTip = parseInt(tipNum);
        calculate();
    })
})

billInput.addEventListener('input', calculate);
peopleInput.addEventListener('input', calculate);
custom_tip_input.addEventListener('input', () => {
    selectedTip = 0;
    tip.forEach(label => label.classList.remove("selected"));
    calculate();
});

function calculate() {
    const bill = parseFloat(billInput.value) || 0;
    const people = parseInt(peopleInput.value) || 1;

    if (bill > 0 && people > 0 && (selectedTip > 0 || custom_tip_input.value > 0)) {
        const tipPerPerson = selectedTip > 0 ? bill * (selectedTip / 100) / people : bill * (custom_tip_input.value / 100) / people;
        const totalPerPerson = bill / people + tipPerPerson;

        tipOutput.textContent = "$" + String(Math.floor(tipPerPerson * 100) / 100);
        totalOutput.textContent = "$" + String(totalPerPerson.toFixed(2));
    }
}

reset.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    tipOutput.value = '';
    totalOutput.value = '';
    custom_tip_input.value = '';
    selectedTip = 0;

    tip.forEach(label => label.classList.remove("selected"))
});