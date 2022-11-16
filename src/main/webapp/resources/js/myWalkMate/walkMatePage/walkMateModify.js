function modifyWalkMate(){
	const wmSubTitle = $("#input-wm-sub-title").val();
	
	const wmDate = $("#input-wm-date").val();
	const wmTime = $("#input-wm-time").val();
	const wmMeetTime = wmDate + " " + wmTime;
	
	wmTag = $("input[name=wmTag]:checked").val();
	const wmContent = $("#input-wm-content").val();
	
	// 조건을 충족하면 수정할 수 있게 해준다.
	
	$.ajax({
		url: "/updateWalkMate.do",
		data: { 
			wmNo : wmNo,
			wmSubTitle : wmSubTitle,
			wmMeetTime : wmMeetTime,
			wmTag : wmTag,
			wmContent : wmContent
		},
		success: function(result){
			if(result > 0){
				alert("수정하였습니다.");
			}else{
				alert("문제가 발생하였습니다. 관리자에게 문의해주세요.");
			}
		}
	});
}

function deleteWalkMate(){
	const check = confirm("산책 모임을 삭제하시겠습니까?");
	
	if(!check){
		return;
	}
	
	$.ajax({
		url: "/deleteWalkMate.do",
		data: {
			wmNo : wmNo
		},
		success: function(result){
			if(result > 0){
				$(location).attr("href", "/myWalkMateList.do");
			}else{
				alert("산책 모임을 삭제하지 못했습니다. 관리자에게 문의하세요.");
			}
		}
	});
}