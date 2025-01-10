

$(document).ready(() => {

	// 드래그 시작
	$("#drop-area").on("dragover", (event) => {
		event.preventDefault();
	});

    // 드래그 끝
    $("#drop-area").on('dragleave', function() {
    });

	// 드랍 이벤트
	$("#drop-area").on('drop', function(event) {
		event.preventDefault();
		const files = event.originalEvent.dataTransfer.files;
		saveFiles(files);
	});
	
	$("#drop-area").on("click", function() {
		// input file 태그 생성하여 파일 선택 팝업 표시
		var inputFile = document.createElement("input")
		inputFile.type="file";
		inputFile.multiple = "multiple";
		
		// file 태그 클릭
		$(inputFile).click();
		
		// 파일을 선택했을 경우 파일 저장 함수 실행
		$(inputFile).on("change", function(event) {
			const files = $(inputFile)[0].files;
			saveFiles(files)
		})
	})
	

})


// 파일 처리 함수
function saveFiles(files) {
	var temp = new DataTransfer();
	var fileList = $("#fileList")[0]
	
	// 기존에 저장된 내용이 있다면 temp 에 대입한다.
	if (fileList.files.length != 0) {
		for (let i  = 0; i < fileList.files.length; i++) {
			temp.items.add(fileList.files[i]);
		}
	}
	
	// 선택된 파일들을 temp 에 추가한다.
	for (let i  = 0; i < files.length; i++) {
		temp.items.add(files[i]);
	}
	
	// temp 의 파일을 fileList에 옮긴다.
	fileList.files = temp.files
	
	// 화면의 리스트에 선택된 파일 리스트를 보여준다.
	showFileList();
}


// 화면에 리스트를 출력할 수 있음
function showFileList() {
	const listArea = $("#showList")
	const files = $("#fileList")[0].files
	
	var innerHtml = "";
	for (let i = 0; i < files.length; i++) {
		innerHtml += `<label>${files[i].name}</label><label onClick="deleteFile(${i})">X</label><br>`
	}
	
	listArea.html(innerHtml);
}


// x버튼을 클릭할 경우 리스트에서 삭제되도록
function deleteFile(index) {
	var temp = new DataTransfer();
	var fileList = $("#fileList")[0]
	
	for (let i = 0; i < fileList.files.length; i++) {
		if (index != i) {
			temp.items.add(fileList.files[i])
		}	
	}
	
	fileList.files = temp.files
	
	showFileList()
}






