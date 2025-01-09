console.log('color : ', color.colorList)


const data = {
	"name": "다람쥐", "color": 1,
	"children": [
		{
			"name": "상선",
			"children": [
				{
					"name": "마약졸",
					"children": [
						{
							"name": "상선", "color": 1,
							"children": [
								{ "name": "다람쥐", "color": 1 },
								{ "name": "손현모", "color": 103 }
							]
						},
						{
							"name": "하선",
							"children": [
								{ "name": "이명준", "color": 2 },
								{ "name": "이창수" }
							]
						},
						{
							"name": "공범",
							"children": [
								{ "name": "패배" },
								{ "name": "바텀" }
							]
						}
					]
				}
			]
		},
		{
			"name": "하선",
			"children": [
				{
					"name": "홍길동",
					"children": [
						{
							"name": "상선",
							"children": [
								{ "name": "다람쥐", "color": 1 },
								{ "name": "이명준", "color": 2 }
							]
						},
						{
							"name": "하선",
							"children": [
								{ "name": "홍흉동" },
								{ "name": "홍흉은" }
							]
						},
						{
							"name": "공범",
							"children": [
								{ "name": "홍흉금" },
								{ "name": "김철수" }
							]
						}
					]
				}
			]
		},
		{
			"name": "공범",
			"children": [
				{
					"name": "김영희",
					"children": [
						{
							"name": "상선",
							"children": [
								{ "name": "안영희" },
								{ "name": "박철수" },
								{ "name": "홍철수" },
								{ "name": "최민수" },
							]
						},
						{
							"name": "하선",
							"children": [
								{ "name": "박호식" },
								{ "name": "박두식" },
								{ "name": "다람쥐", "color": 1 },
								{ "name": "핸드폰" },
							]
						},
						{
							"name": "공범",
							"children": [
								{ "name": "에슐리" },
								{ "name": "마약왕" }
							]
						}
					]
				}
			]
		}
	]
};




// SVG 요소 선택
const svg = d3.select("svg");

// 화면 크기 가져오기
const width = +svg.attr("width");
const height = +svg.attr("height");



// 그룹 생성 (좌측 여백)
const g = svg.append("g").attr("transform", `translate(100, 0)`);

let historyStack = [];


function countLeafNodes(root) {
	// descendants()를 사용해 모든 노드를 순회한 뒤, 자식 노드가 없는 노드(리프 노드)만 필터링
	const leafNodes = root.descendants()
		.filter(d => {
			return d.children === undefined || d.children.length === 0
		});
	return leafNodes.length;
}


// 초기 렌더링 함수
function render(data) {

	// 현재 데이터를 히스토리에 저장
	if (historyStack.length === 0 || historyStack[historyStack.length - 1] !== data) {
		historyStack.push(data);
	}

	// 트리 데이터 생성
	const root = d3.hierarchy(data);


	const count = countLeafNodes(root)
	console.log("count : ", count)

	// 트리 레이아웃 설정
	const treeLayout = d3.tree()
		.size([count * 50, width - 200]);
	var svg = document.getElementById("svg")

	svg.setAttribute("width", width);  // 너비 변경
	svg.setAttribute("height", count * 50); // 높이 변경



	treeLayout(root);

	// 링크 업데이트
	const links = g.selectAll(".link").data(root.links(), d => `${d.source.data.name}-${d.target.data.name}`);

	// 기존 링크 제거
	links.exit().remove();

	// 새로운 링크 추가
	links.enter()
		.append("path")
		.attr("class", "link")
		.attr("fill", "none")
		.attr("stroke", "#ccc")
		.merge(links)
		.transition()
		.duration(500)
		.attr("d", d => {
			if (["상선", "하선", "공범"].includes(d.source.data.name)) {
				
				return `M${d.source.y},${d.source.x}
				       C${d.source.y + 100},${d.source.x}
				       ${d.target.y - 100},${d.target.x}
				       ${d.target.y - 40},${d.target.x}`
			}
			
			return `M${d.source.y},${d.source.x}
			       C${d.source.y + 100},${d.source.x}
			       ${d.target.y - 100},${d.target.x}
			       ${d.target.y},${d.target.x}`
		}
		);

	// 노드 업데이트
	const nodes = g.selectAll(".node").data(root.descendants(), d => d.data.name);

	// 기존 노드 제거
	nodes.exit().remove();

	// 새로운 노드 추가
	const nodeEnter = nodes.enter()
		.append("g")
		.attr("class", "node")
		.attr("transform", d => `translate(${d.y},${d.x})`)
		.each(function(d, i) {
			// 홀수번째 노드의 경우 이벤트 제거
			if (["상선", "하선", "공범"].includes(d.data.name)) {
				d3.select(this)
					.on("click", null) // 클릭 이벤트 제거
					.style("cursor", "default"); // 커서 스타일 기본으로 설정
			} else {
				d3.select(this)
					.on("click", (event, d) => showLayerPopup(d))
					.on("mouseover", function() {
						d3.select(this).style("cursor", "pointer");
					})
					.on("mouseout", function() {
						d3.select(this).style("cursor", "default");
					});
			}
		});

	// 노드에 사각형 추가
	nodeEnter.each(function(d) {
		// 조건: 이름이 '상선', '하선', '공범'인 경우 사각형을 사용하고
		// 그 외의 경우에는 원을 사용
		if (["상선", "하선", "공범"].includes(d.data.name)) {
			// 사각형 (rect) 추가
			d3.select(this).append("circle")
				.attr("r", 20)  // 반지름 설정
				.style("fill", "lightgreen")
				.style("stroke", "steelblue")
				.style("stroke-width", 2);
		} else {
			// 원 (circle) 추가
			d3.select(this).append("rect")
				.attr("x", -40)
				.attr("y", -15)
				.attr("width", 80)
				.attr("height", 30)
				.attr("rx", 5)
				.attr("ry", 5)
				.style("fill", test111(d.data.color))
				.style("stroke", "steelblue")
				.style("stroke-width", 2);
		}

		// 텍스트 추가 (두 형태 모두 동일)
		d3.select(this).append("text")
			.attr("dy", 5)
			.attr("text-anchor", "middle")
			.text(d => d.data.name)
			.style("font-size", "12px")
			.style("fill", "black");
	});

	// 병합 노드 위치 애니메이션
	nodes.merge(nodeEnter)
		.transition()
		.duration(500)
		.attr("transform", d => `translate(${d.y},${d.x})`);
}

var colors = [
	"255,0,0", "0, 0, 255"
]

function test111(item) {
	if (item == '' || item == undefined) {
		return "lightblue"
	} else if (item <= 100) {
		return `rgb(${color.colorList[item - 1]})`
	} else {
		return `rgba(${color.colorList[item - 100] + ",0.8"})`
	}
}
let currentPopup = null;

// 레이어 팝업을 생성하여 정보 출력
function showLayerPopup(nodeData) {
	// 기존에 열려 있는 팝업이 있으면 닫기
	if (currentPopup) {
		document.body.removeChild(currentPopup);
		currentPopup = null;
	}

	// 새로운 팝업 생성
	const popup = document.createElement("div");
	popup.className = "popup";
	

	const offsetX = event.clientX + popup.scrollLeft;
	const offsetY = event.clientY + popup.scrollTop;
	
	// 팝업의 위치를 노드 바로 왼쪽으로 설정
	popup.style.position = "absolute";
	popup.style.left = `${offsetX + 70}px`; // 노드의 y 좌표 + 좌측 여백 (조정 가능)
	if (offsetY - 96 < 0) {
		popup.style.top = `0px`; // 노드의 x 좌표 (텍스트 중심에 맞춤)
	} else {
		popup.style.top = `${offsetY - 96}px`; // 노드의 x 좌표 (텍스트 중심에 맞춤)
	}
	popup.style.width = "200px";
	popup.style.height = "150px";
	popup.style.padding = "20px";
	popup.style.border = "1px solid #ccc";
	popup.style.backgroundColor = "white";
	popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
	popup.style.zIndex = 9999;

	console.log("popup : ", popup.offsetHeight)
	// 팝업 내용 설정
	const title = document.createElement("h3");
	title.textContent = nodeData.data.name;
	popup.appendChild(title);

	// 팝업 내용 설정
	const info = document.createElement("p");

	// "정보: " 일반 텍스트 추가
	const prefixText = document.createTextNode("정보: ");
	info.appendChild(prefixText);

	// nodeData.data.name 하이퍼링크로 추가
	const link = document.createElement("span");
	link.textContent = nodeData.data.name;
	link.style.color = "blue";
	link.style.textDecoration = "underline";
	link.style.cursor = "pointer";

	// 하위 노드 렌더링 이벤트
	link.onclick = () => {
		render(nodeData.data); // 클릭된 노드의 데이터로 하위 노드 렌더링
		document.body.removeChild(popup); // 팝업 닫기
		currentPopup = null;
	};

	info.appendChild(link);

	// " 악랄한 사범임" 일반 텍스트 추가
	const suffixText = document.createTextNode(" <= 이새낀 아주 악랄한 사범임.");
	info.appendChild(suffixText);

	popup.appendChild(info);

	// 이전으로 돌아가기 버튼 추가
	const backButton = document.createElement("button");
	backButton.textContent = "이전으로";
	backButton.style.marginTop = "10px";
	backButton.onclick = () => {
		goBack(); // 이전 상태로 복원
		document.body.removeChild(popup);
		currentPopup = null;
	};
	popup.appendChild(backButton);

	// 닫기 버튼 추가
	const closeButton = document.createElement("button");
	closeButton.textContent = "닫기";
	closeButton.onclick = () => {
		document.body.removeChild(popup);
		currentPopup = null;
	};
	popup.appendChild(closeButton);

	// 새로운 팝업을 body에 추가
	document.body.appendChild(popup);

	// 현재 열려 있는 팝업으로 설정
	currentPopup = popup;
}

// 이전 상태로 돌아가기 함수
function goBack() {
	if (historyStack.length > 1) {
		historyStack.pop(); // 현재 상태 제거
		const previousData = historyStack[historyStack.length - 1];
		render(previousData); // 이전 상태 렌더링
	} else {
		alert("더 이상 이전 상태가 없습니다.");
	}
}

// 초기 데이터 렌더링 함수는 이전과 동일
render(data);





function test() {
	$.ajax({
		url: "test",
		method: "get",
		dataType: "json",
		success: function(response) {
			console.log('response : ', response)
		},
		error: function(error) {
			console.log('error : ', error)
		}
	})
}