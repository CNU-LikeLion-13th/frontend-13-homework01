# ✍ JS
### 1. input
input 태그의 name을 querySelector로 가져오기 위해서 `document.querySelector('input[name="이름"]')`

해당 태그를 모두 가져오기 위해서는 `querySelectorAll`

input 이벤트를 위해서는 `addEventListener('input', 함수)`

input 태그에 있는 값은 `input.value`를 이용해 접근할 수 있다.

### 2. 클릭 이벤트
클릭 이벤트는 `addEventListener('click', () {}).`

클릭 시 클래스 명을 추가, 제거할 수 있다. `calssList.remove()`, `classList.add()`;`

### 3. textContent
textContnet의 내용을 변경하기 위해서 `textContent.replace('변경하고 싶은 내용', '변경 후 내용')`

### 4. 소수점
원하는 소수점 자리를 얻기 위해서는 `toFixed(소수점 자리)`를 사용할 수 있다. 여기서는 반올림한다.

`Math.floor()`를 이용해서도 소수점을 버림할 수 있다.

---

# ✍ HTML
적절한 태그가 생각나지 않아 `div`를 넣었다. 혹시 어떤 태그가 좋은지 알려주시면 감사하겠습니다.

Select Tip % 에 `label`로 했는데 `button`으로 하면 더 쉬웠을 듯 하다.

---

# ✍ CSS
### 1. 페이지 중앙 
~~~
display: flex;

fustify-content: center;

align-items: center;
~~~

### 2. 요소 세로 배치
~~~
flex-direction: column;
~~~

### 3. 전체 요소에서 반 만큼 차지하기
~~~
flex: 1;
~~~

### 4. 아이템을 가로로 양옆에 배치하기
~~~
justify-content: space-between;
~~~

### 5. 인풋 안에 이미지 넣기
~~~
// 절대 위치 지정. 부모가 position: relative; 여야 아이콘이 그 안에서 위치함
position: absolute; 

top: 50%; // 부모의 50% 위치까지 내려감

transform: translateY(-50%); // 자기 높이의 50%만큼 위로 이동

top과 transform을 합치면 정확히 세로 가운데 정렬.
~~~

### 6. 클릭하면 색 천천히 변화
~~~
transition: 색깔 sec;
~~~