$(document).ready(function(){

	$(".shuffle-me").shuffleImages({
		trigger: "documentMouseMove",
		triggerTarget: '.container',
		mouseMoveTrigger: 100, 
		target: ".images > img"
	});
	//高度
	var height=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	height = height - 273;
	$('.container').height(height);
	$('.shuffle-me').css('margin-top',(height-272)/2+'px');
	//设置墙的长度
	var length = $('.shuffle-me').length*510;
	$('body,.container').width(length+'px').mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 40);
		e.preventDefault();
	});	
});


