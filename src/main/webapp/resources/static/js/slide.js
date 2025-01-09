let arr = {};

$(document).ready(function(){
	
	    
	
	slideList();	
	
	console.log("arrr  :: ",arr);
	
});
	
	
function slideList(){
	$.ajax({
		url: "slide/list",
		method: "get",
		dataType: "json",
		success: function(response) {
			console.log('response : ', response[0]);
			arr = response;
			$('.slide_banner').css({
       		"background":'url('+response[0]+') no-repeat',
        	'background-size' : 'cover'
   			 })
			
		},
		error: function(error) {
		}
	})
}

// 슬라이드 이동
function slide(o_pos, c_idx, c_pos) {
	btn_init();

	// 내보낼판
	$('.event_inner').eq(event_bang % indi_cnt).animate({
		left: o_pos
	}, int_bn_timer, 'linear')

	// 들어올판
	$('.event_inner').eq(c_idx).css({
		left: c_pos
	}).animate({
		left: 0
	}, int_bn_timer, 'linear')

	event_bang = c_idx
	indi_page()
}