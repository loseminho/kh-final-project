$(".section").on("click", function(){
    $("#rowSession2").children().hide();
	const idx = $(".section").index(this);
    $("#rowSession2").children().eq(idx).show();
    if(idx == 2) {
    	mycalendar();
    }
});

$(document).ready(function(){
	if($.cookie("tab") != null) {
	    $("#rowSession2").children().hide();
		const index = $.cookie("tab");
		$("#rowSession2").children().eq(index).show();
		$.removeCookie("tab"); 
	}
});