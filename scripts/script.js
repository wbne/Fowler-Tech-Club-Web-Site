function openNav() {
	$('#mainSideNav').css("width", "250px");
	$('#mainSideNav').css("opacity", "1");
	$('#content-wrap').css("margin-left", "250px");
}

function closeNav() {
	$("#mainSideNav").css("width", "0px");
	$('#mainSideNav').css("opacity", "0");
	$('#content-wrap').css("margin-left", "0px");
}

$(document).ready(function(){
	$('#playMusic').click(function(){
		$('#music').trigger('play');
		$(this).css('display', 'none');
		$('#pauseMusic').css('display', 'block');
	});

	$('#pauseMusic').click(function(){
		$('#music').trigger('pause');
		$(this).css('display', 'none');
		$('#playMusic').css('display', 'block');
	});
});
