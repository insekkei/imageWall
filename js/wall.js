$(document).ready(function(){
	$(".shuffle-me").shuffleImages({
		trigger: "imageMouseMove",
		mouseMoveTrigger: 250, 
		target: ".images > img"
	});
	//高度
	var height=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	height = height - 154;
	$('.container').height(height);
	
	//放大图片
	$('.info').click(function(e){
		e.preventDefault();
		$('#cover').fadeIn();
		var $thisInfo = $(this),
		             navHtml  = ' ',
				conHtml = ' ';
		$thisInfo.next('.images').children('img').each(function(i,e){
			var $thisImg = $(this);
			var src = $thisImg.attr('src');
			navHtml += '<li><a href="#a'+i+'" ></a></li>'
			conHtml += '<img src="'+src+'" id="a'+i+'">'; 
		});
		$('.slider-nav').html(navHtml);
		$('.slider-con').html(conHtml);
	});
	//关闭相册
	$('.close').click(function(e){
		e.preventDefault();
		$('#cover').fadeOut();
	});
	//设置墙的长度
	var length = 0;
	$('.shuffle-group').each(function(e){
		$this = $(this);
		//不同样式下group的宽度设置。
		var size = $this.find('.shuffle-me').length;
		switch(size)
		{
		case 1:
		  var imgHeight = height+'px';
		  $this.width('800'+'px');
		  $this.find('.shuffle-me').width('800px');
		  $this.find('.images').height( imgHeight).width('800'+'px');
		  $this.find('.images').children('img').height(imgHeight).css('clip','rect(0 800px '+imgHeight+' 0) ');
		  break;
		case 2:
		  var imgHeight = (height/2-2.5)+'px';
		  $this.width('500'+'px');
		  $this.find('.shuffle-me').width('500px');
		  $this.find('.images').height( imgHeight).width('500'+'px');
		  $this.find('.images').find('img').css('clip','rect(0 500px '+imgHeight+' 0) ');
		  break;
		default:
		  var imgHeight = height+'px';
		  $this.width('800'+'px');
		  $this.find('.shuffle-me').width('800px');
		  $this.find('.images').height( imgHeight).width('800'+'px');
		  $this.find('.images').find('img').css('clip','rect(0 800px '+imgHeight+' 0) ');
		  break;
		}
		length += $this.width()+15;
	});
	$('body').width(length+'px');
});
