let billInput = document.querySelector("#bill"); // bill의 input
let peopleInput = document.querySelector("#people"); // people의 input
let tipButtons = document.querySelectorAll(".TipBtn"); // tip버튼 각각
let tipPercent = 0; // tip 값을 int로 초기화

let amountTip = document.querySelector(".amountTip"); // 최종 인당 팁
let amountTotal = document.querySelector(".amountTotal"); // 최종 인당 가격

function calculate() {
  let bill = parseFloat(billInput.value); // bill의 input의 값을 저장
  let people = parseInt(peopleInput.value); // people의 input의 값을 저장

  if (isNaN(bill) || isNaN(people) || people === 0) {
    amountTip.textContent = "$0.00";
    amountTotal.textContent = "$0.00";
    return;
  } // bill, people이 NaN의 값을 가지거나 people이 0이면 계산하지 않고 일단 결과를 0으로 만듬.

  let tipPerPerson = (bill * (tipPercent / 100)) / people; // bill에서 팁 금액을 만들고 사람 수로 나누기.
  let totalPerPerson = (bill * (1 + tipPercent / 100)) / people; // 팁을 포함한 전체 금액을 구하고 사람 수로 나누기.

  amountTip.textContent = "$" + tipPerPerson.toFixed(2); // 소수 둘째자리까지 표기하도록 출력
  amountTotal.textContent = "$" + totalPerPerson.toFixed(2); // 소수 둘째자리까지 표기하도록 출력
}

tipButtons.forEach((button) => {
  // 모든 팁 버튼의 이벤트 발생을 체크하기 위해 각각의 버튼을 forEach로 받아온다.
  button.addEventListener("click", function () {
    // 그리고 버튼이 클릭되는 이벤트를 받았다면
    tipPercent = parseInt(this.getAttribute("data-tip")); // 팁 퍼센트에 버튼마다의 data-tip 속성 값을 int로 넣는다.
    calculate(); // 위에서 만든 결과 출력 계산기에 넣는다.
  });
});

billInput.addEventListener("input", calculate); // bill의 input값에 값이 들어가면 calculate함수를 실행한다.
peopleInput.addEventListener("input", calculate); // people의 input값에 값이 들어가면 calculate함수를 실행한다.

document.querySelector("#ResetBtn").addEventListener("click", function () {
  // 리셋 버튼이 눌렸다면 다음과 같은 이벤트를 실행한다.
  billInput.value = ""; // bill의 input 값을 NaN으로 초기화.
  peopleInput.value = ""; // people의 input 값을 NaN으로 초기화.
  tipPercent = 0; // 팁도 0으로 초기화.

  amountTip.textContent = "$0.00"; // 팁 결과값을 0으로 초기화
  amountTotal.textContent = "$0.00"; // 가격 결과값을 0으로 초기화
});
