function modifyWalkMate(){
	const wmSubTitle = $("#input-wm-sub-title").val();
	
	const wmDate = $("#input-wm-date").val();
	const wmTime = $("#input-wm-time").val();
	const wmDateTime = wmDate + " " + wmTime;
	
	wmTag = $("input[name=wmTag]:checked").val();
	const wmContent = $("#input-wm-content").val();
	
	// 조건을 충족하면 수정할 수 있게 해준다.
	now = new Date();
	const newDateTime = new Date(wmDateTime);
	
	if(newDateTime < now){
		alert("이미 지난 날짜/시간입니다. 만날 수 있는 날짜/시간을 선택해주세요.");
		
		$("#input-wm-date").val(oldDate);
		$("#input-wm-time").val(oldTime);
		return;
	}
	
	$.ajax({
		url: "/updateWalkMate.do",
		data: { 
			wmNo : wmNo,
			wmSubTitle : wmSubTitle,
			wmMeetTime : wmDateTime,
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