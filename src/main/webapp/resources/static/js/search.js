$(document.ready)

const searchInput = document.getElementById("search-input");
const autocompleteList = document.getElementById("autocomplete-list");

let suggestions = [
    
];

function getSearchList(){
   $.ajax({
      url : 'searchList',
      method: 'get',
      dataType: 'json',
      success: function(data){
         console.log(data)
         suggestions = data;
         createInputFields(data);
      },
      error: function(error) {
         console.log(error)
      }
   })
}

function createInputFields(data) {
   // 데이터를 출력할 부모 요소를 선택 (여기서는 #inputContainer를 가정)
   const container = document.getElementById('inputContainer');

   // 기존 내용을 지우기 (필요 시)
   container.innerHTML = '';

   // 툴팁 요소 생성
   const tooltip = document.createElement('div');
   tooltip.id = 'customTooltip';
   tooltip.style.position = 'absolute';
   tooltip.style.visibility = 'hidden';
   tooltip.style.backgroundColor = '#333';
   tooltip.style.color = '#fff';
   tooltip.style.padding = '5px 10px';
   tooltip.style.borderRadius = '5px';
   tooltip.style.fontSize = '12px';
   tooltip.style.whiteSpace = 'nowrap';
   tooltip.style.zIndex = '1000';
   container.appendChild(tooltip);

   // 데이터를 순회하며 <div> 요소를 생성
   data.forEach((item, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'input-wrapper';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = item;
      input.id = `input-${index}`;
      input.name = `input-${index}`;
      input.readOnly = true;

      // 툴팁 표시 이벤트
      input.addEventListener('mouseenter', function (event) {
         if (this.scrollWidth > this.clientWidth) {
            tooltip.textContent = this.value;
            tooltip.style.visibility = 'visible';
         }
      });

      // 툴팁 위치 업데이트
      input.addEventListener('mousemove', function (event) {
         tooltip.style.top = `${event.clientY + 10}px`; // 마우스 아래
         tooltip.style.left = `${event.clientX + 10}px`; // 마우스 오른쪽
      });

      // 툴팁 숨김
      input.addEventListener('mouseleave', function () {
         tooltip.style.visibility = 'hidden';
      });

      wrapper.appendChild(input);
      container.appendChild(wrapper);
   });
}

getSearchList();
searchInput.addEventListener("input", function() {
    const input = this.value.toLowerCase();
    autocompleteList.innerHTML = "";

    if (!input) return;

    const filteredSuggestions = suggestions.filter(item =>
        item.toLowerCase().includes(input)
    );

    filteredSuggestions.forEach(suggestion => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("autocomplete-item");

        // 입력된 값과 일치하는 부분만 <mark> 태그로 감싸기
        const startIndex = suggestion.toLowerCase().indexOf(input);
        const endIndex = startIndex + input.length;

        const markedText = 
            suggestion.slice(0, startIndex) +
            "<mark>" + suggestion.slice(startIndex, endIndex) + "</mark>" +
            suggestion.slice(endIndex);

        itemDiv.innerHTML = markedText;

        itemDiv.addEventListener("click", function() {
            searchInput.value = suggestion;
            autocompleteList.innerHTML = "";
        });

        autocompleteList.appendChild(itemDiv);
    });
});

document.addEventListener("click", function(e) {
    if (e.target !== searchInput) {
        autocompleteList.innerHTML = "";
    }
});