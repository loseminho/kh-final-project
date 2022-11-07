// 반려견 프로필
$(".dog-name").on("click", function(){
	$(".dog-profile").hide();
	const index = $(".dog-name").index(this);
	$(".dog-profile").eq(index).show();
});

$(".dog-name").eq(0).trigger("click");

// 신고
$(".report-wrap").hide();

$("#report-modal-open").on("click", function(){
	$(".report-modal").css("width", "100vw");
	$(".report-modal").css("height", "100vh");

	$(".report-wrap").show();
});

$("#report-modal-close").on("click", function(){
	$(".report-modal").css("width", "0");
	$(".report-modal").css("height", "0");

	$(".report-wrap").hide();
});