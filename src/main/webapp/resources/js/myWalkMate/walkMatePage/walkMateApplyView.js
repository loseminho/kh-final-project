$(".apply-view-wrap").hide();

$(document).on("click", ".apply-view-open", function(){
	$(".wm-apply-view-modal").css("width", "100vw");
	$(".wm-apply-view-modal").css("height", "100vh");

	$(".apply-view-wrap").show();
	
	const index = $(".apply-view-open").index(this) + 1;
	const tableTr = $(".wm-apply-meangement-content Tr").eq(index);
	
	$("#apply-nickname").text(tableTr.children().eq(0).text());
	$(".apply-text").text(tableTr.children().eq(1).text());
	
	const accept = $("#apply-accept>a").attr("onclick");
	const refuse = $("#apply-refuse>a").attr("onclick");
	
	$("#apply-accept-btn").attr("onclick", accept);
	$("#apply-refuse-btn").attr("onclick", refuse);
});

$("#apply-view-close").on("click", function(){
	$(".wm-apply-view-modal").css("width", "0");
	$(".wm-apply-view-modal").css("height", "0");

	$(".apply-view-wrap").hide();
});