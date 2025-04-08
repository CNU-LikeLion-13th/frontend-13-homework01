# index.html

    구조를 시멘틱 코드로 작성하고자 했다.

`header` `section` `aside` 구조로 구성. <br>

```html
<header>
  <img />
</header>
<section>
  <div>
    <article></article>
    <article></article>
    <article></article>
  </div>
  <aside>
    <div></div>
    <div></div>
    <button></button>
  </aside>
</section>
```

# style.css

전체적으로 `flexbox` 레이아웃으로 화면을 구성했다.<br>
`section`에 라운딩이 들어간 흰색 박스를 구현하고 그 안에 `div`와 `aside`가 `2-column`을 이루고 있다.<br>

    flex-direction: column;
    justify-content: space-between;

`flex-direction: column` : 같은 라인의 요소들 방향을 아래로 향하게<br>
`justify-content: space-between` : 다른 라인의 요소들은 좌우로 퍼지도록<br><br>
`input type="number"` 의 단점 : 우측에 숫자를 하나씩 올리고 내리는 화살표가 존재.
<br> 화살표를 떼는 코드<br>

```javascript
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
    }
```

# index.js

```javascript
if (isNaN(bill) || isNaN(people) || people === 0) {
  amountTip.textContent = "$0.00";
  amountTotal.textContent = "$0.00";
  return;
} // bill, people이 NaN의 값을 가지거나 people이 0이면 계산하지 않고 일단 결과를 0으로 만듬.
```

입력이 되지 않은 상태거나 0의 값이 들어왔을 때 계산하지 않고 0으로 초기화 하는 코드<br>

```javascript
button.addEventListener("click", function () {
  // 버튼을 눌렀으면 이전까지의 버튼을 눌렀을 때 색 변화를 모두 없애고 data-clicked 상태로 false로 만든다.
  tipButtons.forEach((btn) => {
    btn.style.backgroundColor = "hsl(183, 100%, 15%)";
    btn.style.color = "hsl(189, 41%, 97%)";
    btn.setAttribute("data-clicked", "false");
  });
  // 버튼을 눌렀을 때의 스타일로 바꿔주고 data-clicked라는 속성을 true로 만든다.
  button.style.backgroundColor = "hsl(172, 67%, 45%)";
  button.style.color = "hsl(183, 100%, 15%)";
  button.setAttribute("data-clicked", "true");
  tipPercent = parseInt(this.getAttribute("data-tip"));
  calculate();
});
```

눌려져 있는 버튼인지 확인하기 위해 `data-clicked` 속성을 추가<br>
다른 버튼을 눌렀을 때 기존의 버튼 스타일 변화를 모두 초기화 하고 누른 버튼의 `data-clicked` 속성을 true로 바꾸고 스타일을 바꿈.

---

```javascript
button.addEventListener("mouseover", function () {
  if (button.getAttribute("data-clicked") !== "true") {
    // 마우스를 올린 버튼이 clicked된 버튼이 아닐 때만 실행
    button.style.backgroundColor = "hsl(185, 41%, 84%)";
    button.style.color = "hsl(183, 100%, 15%)";
  }
});

button.addEventListener("mouseout", function () {
  if (button.getAttribute("data-clicked") !== "true") {
    // 마우스를 올린 버튼이 clicked된 버튼이 아닐 때만 실행
    button.style.backgroundColor = "hsl(183, 100%, 15%)";
    button.style.color = "hsl(189, 41%, 97%)";
  }
});
```

호버링한 버튼이 clicked되었는지 확인하고 false일때만 호버링 이벤트를 수행 <br> (버튼 스타일 변화)
