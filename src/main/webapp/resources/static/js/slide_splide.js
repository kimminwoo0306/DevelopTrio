document.addEventListener('DOMContentLoaded', async function () {
	

	await $.ajax({
		url: "slide/list",
		method: "get",
		dataType: "json",
		success: function(response) {
			console.log('response : ', response);
			let add_html = '';
			response.forEach(function(img_url){
				add_html +=  "<li class='splide__slide'><img src='"+ img_url + "' alt='슬라이드 1'></li>"
			})
			console.log(add_html);
			$('.splide__list').append(add_html);

		},
		error: function(error) {
		}
	});
	
	
	new Splide('#image-slider', {
	    type       : 'loop',
	    perPage    : 2,
	    autoplay  : true,
		width : '400px',
		height   : '300px',
		pagination : true,
		cover : true,
	  }).mount();
});