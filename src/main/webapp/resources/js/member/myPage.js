$(".sub-menu").prev().append("<span class='more down'><i class='fa-solid fa-caret-down'></i></span>");
$(".more").on("click", function(event){
    if($(this).hasClass("down")) {
        $(this).removeClass("down");
        $(this).addClass("up");
        $(this).html("<i class='fa-solid fa-caret-up'></i>");
    } else if($(this).hasClass("up")) {
        $(this).removeClass("up");
        $(this).addClass("down");
        $(this).html("<i class='fa-solid fa-caret-down'></i>");
    }
    $(this).parent().next().slideToggle();
    event.stopPropagation();
});

$(".more").parent().on("click", function(){
    $(this).children().click();
});

$(".section").on("click", function(){
    $("#rowSession2").children().hide();
	const idx = $(".section").index(this);
    $("#rowSession2").children().eq(idx).show();
    if(idx == 2) {
    	mycalendar();
    } else if(idx == 5) {
    	$("#receiveDmCate").children().eq(0).prop("selected", true);
    	$("#receiveDmSearch").children().eq(0).prop("selected", true);
    	receiveDm(1);
    } else if(idx == 6) {
    	$("#sendDmCate").children().eq(0).prop("selected", true);
    	$("#sendDmSearch").children().eq(0).prop("selected", true);
    	sendDm(1);
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