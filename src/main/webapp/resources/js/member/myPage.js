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

$(".report-view-wrap").hide();

$(".report-view-open").on("click", function(){
	$(".report-view-modal").css("width", "100vw");
	$(".report-view-modal").css("height", "100vh");

	$(".report-view-wrap").show();
});

$("#report-view-close").on("click", function(){
	$(".report-view-modal").css("width", "0");
	$(".report-view-modal").css("height", "0");

	$(".report-view-wrap").hide();
});