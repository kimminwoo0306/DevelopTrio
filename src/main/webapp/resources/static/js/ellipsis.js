$(document).ready(() => {
	let timeoutId;

	$(".texttest").on("mousemove", function(e) {
		var item = $(this)
		clearTimeout(timeoutId);

		timeoutId = setTimeout(function(event) {
			var popup = $('#text_popup');
			popup.text($(item).val())

			popup.css({
				display: 'block',
				position: 'absolute',  // 절대 위치 설정
				left: e.clientX,         // X 좌표
				top: e.clientY          // Y 좌표
			});
		}, 700);  // 1000ms = 1초
	})
	
	$(".texttest, #text_popup").on("mouseleave", function() {
		var popup = $('#text_popup');
		popup.val("")

		// 두 요소에서 마우스가 벗어난 경우에만 #text_popup을 숨김
		if (!$(".texttest:hover").length && !$("#text_popup:hover").length) {
			popup.css({
				display: 'none',
				position: 'absolute',
				left: 0,         // X 좌표
				top: 0           // Y 좌표
			});
		}
		clearTimeout(timeoutId);
	});
})