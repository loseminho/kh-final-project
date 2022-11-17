function updateApplyStat(wmApplyNo, applyStat, obj){
	let check;
	
	if(applyStat == 0){
		check = confirm("수락하시겠습니까?");
	}else if(applyStat == 2){
		check = confirm("거절하시겠습니까?");
	}
	
	if(!check){
		return;
	}

	$.ajax({
		url: "/updateApplyStat.do",
		data: { 
			wmApplyNo : wmApplyNo,
			applyStat : applyStat 
		},
		success: function(result){
			if(result > 0){
				$(obj).closest("tr").remove();
				
				const content = $(".wm-apply-meangement-content");
				const trCount = content.find("tr").length;
				
				if(trCount == 1){
					content.find("table").remove();
					content.append("<p>" + "신청 대기 중인 사람이 없습니다." + "</p>");
				}
			
				if(applyStat == 0){
					alert("수락하였습니다.");
				}else if(applyStat == 2){
					alert("거절하였습니다.");
				}
			}else{
				alert("문제가 발생하였습니다. 관리자에게 문의해주세요.");
			}
		}
	});
}