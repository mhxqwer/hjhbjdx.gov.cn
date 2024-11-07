$("a[href*='http']").on("click",this,function(e){   
		var w_link = $(this).attr("href");
		if(w_link != "" && w_link.indexOf("javascript") == -1 && w_link.indexOf(".gov.cn") == -1){
			if(self.frameElement && self.frameElement.tagName == "IFRAME") {
				window.parent.open(w_link);
			}else{
				if($("#w_warning").length < 1 ){
					$("body").append(f_html(w_link));
				}else{
					$("#continue a").attr("href",w_link);
				}
				f_kg();
			}
			return false;
		}
	});





function f_html(w_link){
    var w_html = ''; 
        w_html += '<div class="alert-warning" id="w_warning" >';
        w_html += '     <div class="alert-delete">';
        w_html += '         <span id="closets"></span>';
        w_html += '     </div>';
        w_html += '     <div class="alert-wzsm">';
        w_html += '         <p>您访问的链接即将离开"北京市大兴区人民政府"门户网站 是否继续？</p>';
        w_html += '     </div>';
        w_html += '     <div class="alert-footer">      ';
        w_html += '         <div class="xuanze">';
        w_html += '             <span class="continue" id="continue"><a href="'+w_link+'" target="_blank">外链</a></span>';   
        w_html += '             <span class="fangqi" id="fangqi">放弃</span>  ';
        w_html += '         </div>';
        w_html += '     </div>';
        w_html += '</div>';
        w_html += '<div class="alert-mengban" id="w_mengban" ></div>';
    return w_html;
}

/*外链打开关闭弹窗*/
function f_kg(){
        $("#w_mengban").fadeIn(200);
        $("#w_warning").delay(100).show().animate({top:"75px"}, 300);
        $("#closets,#fangqi,#w_mengban").click(function() {
            $("#w_warning").animate({top:"-400px"}, 200).hide(200);
            $("#w_mengban").delay(100).fadeOut(200);
        });
        $("#continue").click(function(){            
            $("#w_warning").hide(200);
            $("#w_mengban").delay(100).fadeOut(200);
        })
    
}