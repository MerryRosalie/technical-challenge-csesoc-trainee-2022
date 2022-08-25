window.onload = () => {
	setTimeout(() => {
		$('.loading-wrapper').fadeOut("slow", () => $('.loading-wrapper').remove());
		$('.main-content').fadeIn("slow", () => $('.main-content').css("display", "block"))
	}, 5000);
	$('.progress').css("animation", "load 5s linear");

	$('#bongo-cat').on('mousedown', pawsDown);
	$('#bongo-cat').on('mouseup', pawsUp);
	$('#bongo-cat').on('touchstart', pawsDown);
	$('#bongo-cat').on('touchend', pawsUp);

	setInterval(() => {
		let src = $('.avatar').attr("src");
		let dict = {
			'../static/front.png': '../static/right.png',
			'../static/right.png': '../static/back.png',
			'../static/back.png': '../static/left.png',
			'../static/left.png': '../static/front.png',
		}
		$('.avatar').attr("src", dict[src]);
	}, 1500);
};

function pawsDown() {
	$('.funni-bongo-cat').addClass('paws-down');
	$('.funni-bongo-cat').removeClass('paws-up');
};

function pawsUp() {
	$('.funni-bongo-cat').addClass('paws-up');
	$('.funni-bongo-cat').removeClass('paws-down');
};