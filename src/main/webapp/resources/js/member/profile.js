// 반려견 프로필
$(".dog-name").on("click", function(){
	$(".dog-profile").hide();
	const index = $(".dog-name").index(this);
	$(".dog-profile").eq(index).show();
});

$(".dog-name").eq(0).trigger("click");

// 신고 모달
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

// 신고하기
function report(){
	// 신고 가능한 조건 : 한 사람에 대해 한 번만 신고 가능

	const reportType = $("#reportType").val();
	const reportContent = $("#reportContent").val();
	
	$.ajax({
		type: "post",
		data: {
			reportMemberNo : reportMemberNo,
			reportMemberNickname : reportMemberNickname,		
				
			reportedMemberNo : reportedMemberNo,
			reportedMemberNickname : reportedMemberNickname,	
					
			reportType : reportType,
			reportContent : reportContent
		},
		url: "/insertReport.do",
		success: function(message){
			$("#reportType").val(1).prop("selected", true);
			$("#reportContent").val("");
		
			alert(message);
			$("#report-modal-close").trigger("click");
		}
	});
}