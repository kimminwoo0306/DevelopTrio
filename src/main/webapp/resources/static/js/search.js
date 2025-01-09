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
      },
      error: function(error) {
         console.log(error)
      }
   })
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