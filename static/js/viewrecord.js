//存储 访问记录
function viewRecordSave(){
        var articleTitle = "";
        var pageName = "";
        var url = jQuery.trim(window.location.href);

        if($("meta[name='ArticleTitle']").length == 1){
	   articleTitle = jQuery.trim($("meta[name='ArticleTitle']").attr("content"));
        }else{
           articleTitle =  document.title;
        }

        if($("meta[name='ColumnName']").length == 1){
	   pageName = jQuery.trim($("meta[name='ColumnName']").attr("content"));
        }else{
           pageName = document.title;
        }

        url = jQuery.trim(window.location.href);

	jQuery.ajax({
		type : "post",
		url : "/eportal/ui?moduleId=54777653863e40259599cdff01f1aa6e&struts.portlet.action=/portlet/viewRecord!save.action",
		dataType : "json",
		timeout : 15000,
		data : {
			"articleTitle" : articleTitle,
			"pageName" : pageName,
			"url" : url
		},
		success : function(msg) {
			//console.log(msg);
		},
		error : function() {
			
		}
	});
}


if($("#eprotalCurrentPageId").val() != "1939228"){
  viewRecordSave();
}