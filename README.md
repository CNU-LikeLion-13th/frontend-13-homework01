# 프론트엔드 멘토(tip-calculator-app-main)

## 인풋박스에 아이콘 넣기
 - inpyt요소도 background-image를 활용해 아이콘 삽입이 가능
 - 이후 padding-위치fh 아이콘과 인풋 텍스트 간 간격을 확보
 - 이때,  background-image: url("icon.svg"); 이렇게 작성한다면 그 크기 만큼 이미지가 반복되어서 채워짐
 - => background-repeat: no-repeat;를 통해 이미지를 1번만 나오도록 
 - [code]
 - background-color: var(--Very-light-grayish-cyan); 
 -  color: var(--Very-dark-cyan);

## 버튼 기반으로 값 선택하여 처리
 - button요소는 textContent, innerText로 값 추출이 가능함
 - e.g. <button class="middle__item" type="button">5%</button>
 - 1. textContent : 요소 내부의 모드 텍스트를 가져옴(공백 none문장 포함)
 - 2. innerText : 딱 눈에 보이는 텍스트만 가져옴(위에 보다 느림림)
 - [code]
 - button.addEventListener("click", function () {
 -  const value = this.textContent.replace('%', '');});
 - //클릭한 버튼의 텍스트를 찾는다. 이후 %문자를 찾아서 ''문자로 체인지
 - => 문자열.replace("A", "B") : 문자열에서 처음 나오는 "A"를 "B"로 체인지함


 ## focus의 겹침
  - :html 요소들이 겹쳐있거나 가까이있을 때 포커스가 다른 요소로 가능 현상
  - [해결법]
  - 1. z-index
  - 2. pointer-events : none로 클릭 무시하기
  - 3. padding and margin 조절로 hitbox 조절
  - 4. position 조절


## position
 - 1. static  
 - 2. relative
 - 3. absolute
 - 4. fixed
 - 5. sticky



