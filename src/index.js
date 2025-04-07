const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("person");
const tipButtons=document.querySelectorAll(".tip-buttons button");
const tipAmountDisplay=document.getElementById("tip-amount");
const totalAmountDisplay = document.getElementById("total-amount");
const resetButton = document.getElementById("reset");

let selectedTip=null;

for(const button of tipButtons){//tipButtons 안에 있는 각 버튼 하나씩 꺼내서 button 변수로 사용
    button.addEventListener("click", function(){

        const value=this.textContent;//button의 글자내용을 value에 저장

        if(value!=="Custom"){
            selectedTip = parseFloat(value.replace("%",""));
            for(const btn of tipButtons){
                btn.classList.remove("active");
            }
            this.classList.add("active");//클릭된 button만 active

            calculate();
        }
        else{
            if(!isNaN(selectedTip)){
                for(const btn of tipButtons){
                    btn.classList.remove("active");
                }
                this.calssList.add("active");
                calculate();
            }
        }
    });
}

function calculate(){
    const bill=parseFloat(billInput.value);
    const people=parseFloat(peopleInput.value);

    if(!bill || !people || people ===0 ||selectedTip===null){
        tipAmountDisplay.textContent="$0.00";
        totalAmountDisplay.textContent="$0.00";
        return;
    }
    const tipAmount=(bill*selectedTip/100)/people;
    const totalAmount=(bill/people)+tipAmount;
    tipAmountDisplay.textContent='$'+tipAmount.toFixed(2);
    totalAmountDisplay.textContent='$'+totalAmount.toFixed(2);
}