$(function(){
 	$(window).resize(function(){
					var h = $(window).height();
					$('.goTop').css('top',h-60);
					$(window).scroll(function(){				
						var scrollTop = $(document).scrollTop();					  
						$('.goTop').stop(true,true).animate({
							top: h + scrollTop-60
						},300);
					});
	}).resize();


	$('.goTop').click(function(){
		$('body,html').stop().animate({scrollTop:0});
		return false;
	});


});

//无障碍
function wza(str){
  if(self != top){
     top.location.href = str;
  }else{
     window.location.href=str;
  }
}