window._bd_share_config = {
	"common": {
		"bdSnsKey": {},
		"bdText": "",
		"bdMini": "2",
		"bdPic": "",
		"bdStyle": "0",
		"bdSize": "16"
	},
	"share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];


var title = "【" + $.trim(document.title) + "】";
var description = $.trim($('meta[name="description"]').attr('content'));
var portalUrl = window.location.href;


/*function generateQRCode(rendermethod, picwidth, picheight, url) {
	$(".qrcode").qrcode({
		render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式
		width: picwidth, //宽度
		height: picheight, //高度
		text: utf16to8(portalUrl), //内容
		typeNumber: -1, //计算模式
		correctLevel: 2, //二维码纠错级别
		background: "#ffffff", //背景颜色
		foreground: "#000000" //二维码颜色
	});
}
canvas_table = !!document.createElement('canvas').getContext ? 'canvas' : 'table';

function init() {
	generateQRCode(canvas_table, 100, 100, window.location.href);
}*/
//中文编码格式转换
function utf16to8(str) {
	var out, i, len, c;
	out = "";
	len = str.length;
	for (i = 0; i < len; i++) {
		c = str.charCodeAt(i);
		if ((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i);
		} else if (c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
			out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		} else {
			out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
			out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		}
	}
	return out;
}




					function showToQzone() {
						var _desc = description;
						var _title = title;
						var _url = portalUrl;
						var _shareUrl = '//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
						_shareUrl += 'url=' + encodeURIComponent(_url);   //参数url设置分享的内容链接|默认当前页location
						_shareUrl += '&title=' + encodeURIComponent(_title);    //参数title设置分享标题，可选参数
						window.open(_shareUrl,'','width=700,height=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=1,location=yes,status=0');
					}

					function showToSina(title, portalUrl, desc) {
						var _desc = desc;
						var _t = title + " " + _desc;
						var _url = portalUrl;
						var _appkey = "2806082167"; //你从微薄获得的appkey
						var _site = ''; //你的网站地址
						var _ralateUid = "";
						var _u = '//service.weibo.com/share/share.php?url=' + _url + '&appkey=' + _appkey + '&title=' + _t + '&ralateUid=' + _ralateUid + '&searchPic=false';
						window.open(_u, '', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no');
					}
				   



//init();
//$(".share-wechat").on("click", function () {
//  $(".bg-code,.qrcode").toggle();
//});
$('.share-qqzone').on('click', function() {
   showToQzone(title, portalUrl, description);
});
$('.share-weibo').on('click', function() {
   showToSina(title, portalUrl, description);
});