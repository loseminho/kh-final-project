function leaveWalkMate(memberNo){
	const check = confirm("산책 모임에서 나가겠습니까?");

	if(!check){
		return;
	}

	$.ajax({
		url: "/leaveWalkMate.do",
		data: {
			memberNo : memberNo
		},
		success: function(result){
			if(result > 0){
				$(location).attr("href", "/myWalkMateList.do");
			}else{
				alert("산책 모임에서 나가지 못하였습니다. 관리자에게 문의하세요.");
			}
		}
	});
}