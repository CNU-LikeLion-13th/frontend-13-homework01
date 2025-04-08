const bill = document.querySelector(".input-icon1");
const people = document.querySelector(".input-icon2");
const tipBtn = document.querySelectorAll(".middle__item");
const tipWrite = document.querySelector(".middle__value");
const outAmount = document.querySelector(".price1 p");
const outTotal = document.querySelector(".price2 p");
const resetBtn = document.querySelector(".layout__button button");

let tipValue = 0; 
let tipAmount = 0;
let total = 0;


//인풋박스 유효성체크
function bill2peoplecheck() {
    const billValue = Number(bill.value);
    const peopleValue = Number(people.value);

    if (peopleValue <= 0) {
        people.style.border = "2px solid red";
      } else {
        people.style.border = "2px solid var(--Strong-cyan)";
        bill.style.border = "2px solid var(--Strong-cyan)";
    }
    tipCalculation();  
}
bill.addEventListener('input', bill2peoplecheck);
people.addEventListener('input', bill2peoplecheck);

//tip값 가져오기
function getTip(event) {
    tipWrite.value = "";
    if(tipWrite.value !==""){
        tipValue = Number(tipWrite.value);    
    } else{
        const clickedButton = event.target; 
        const text = clickedButton.textContent; 
        const percent = parseFloat(text.replace('%', '')); 
        tipValue =  percent;
    }   
    tipCalculation(); 
}
tipBtn.forEach(button => {
  button.addEventListener("click",getTip);
});

//최종 계산 및 출력
function tipCalculation() {
    const billValue = Number(bill.value);
    const peopleValue = Number(people.value);

    const tipAmount = (billValue * tipValue) / 100 / peopleValue;
    const totalPerPerson = (billValue / peopleValue) + tipAmount; 
    
    outAmount.textContent = `$${tipAmount.toFixed(2)}`;
    outTotal.textContent = `$${totalPerPerson.toFixed(2)}`;
}

function reset() {
    bill.value = "";
    people.value = "";s
    tipWrite.value = "";
    tipValue = 0; 
    tipAmount = 0;
    total = 0;
    outAmount.textContent = `$${tipAmount.toFixed(2)}`;
    outTotal.textContent = `$${total.toFixed(2)}`;
}

resetBtn.addEventListener("click", reset);
