const billInput = document.querySelector('#Bill');
const tipCustomInput = document.querySelector('#custom-box');
const peopleInput = document.querySelector('#people-number');

const peopleInputError = document.querySelector('.error-message');

const tipAmount = document.querySelector('#tip-amount');
const totalAmount = document.querySelector('#total-amount');

const tipButtons = document.querySelectorAll('.tip-buttons button');
const resetButton = document.querySelector('.output-section button');

let bill = 0;
let tip = 0;
let people = 0;

peopleInput.addEventListener('input', function() {
    validatePeopleInput();
});

function validatePeopleInput() {
    if (/^0+$/.test(peopleInput.value)) {
        peopleInputError.style.display = 'block';
        peopleInput.classList.add('error-border');
        return false;
    } else {
        peopleInputError.style.display = 'none';
        peopleInput.classList.remove('error-border');
        return true;
    }
}

function conditionOfCalculation() {
    return bill > 0 && tip > 0 && validatePeopleInput() === true;
}

function conditionOfPrint(tipResult, totalResult) {
    return (!Number.isNaN(tipResult) && !Number.isNaN(totalResult)) && (Number.isFinite(tipResult) && Number.isFinite(totalResult));
}

function calculate() {
    if (conditionOfCalculation()) {
        const tipResult = bill*(tip/100)/people;
        const totalResult = (tipResult + bill/people);

        if (conditionOfPrint(tipResult, totalResult)) {
            tipAmount.textContent = "$" + tipResult.toFixed(2);
            totalAmount.textContent = "$" + totalResult.toFixed(2);
        }
    }
}

billInput.addEventListener('input', function() {
    bill = parseFloat(this.value);

    calculate();
});

tipCustomInput.addEventListener('input', function() {
    tipButtons.forEach(button => {
        button.classList.remove('active')
    });
    tip = parseFloat(this.value);

    calculate();
});

peopleInput.addEventListener('input', function() {
    people = parseFloat(this.value);
    calculate();
});

tipButtons.forEach(button => {
    button.addEventListener('click', function() {
        tipButtons.forEach(button => button.classList.remove('active'));
        this.classList.add('active');

        tip = parseFloat(this.textContent.replace(/%$/, ''));

        calculate();
    })
});

resetButton.addEventListener('click', function() {
    billInput.value = null;
    tipButtons.forEach(button => {
        button.classList.remove('active')
    });
    tipCustomInput.value = null;
    peopleInput.value = null;
    tipAmount.textContent ="$0.0";
    totalAmount.textContent = "$0.0";
})