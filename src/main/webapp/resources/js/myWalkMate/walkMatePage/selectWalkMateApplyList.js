$("#wmApplyManagement").one("click", function(){
	$.ajax({
		url: "/selectWalkMateApplyList.do",
		data: {
			wmNo : wmNo,
		},
		dataType:"json",
		success: function(list){
			if(list.length != 0){
				const table = $("<table>");
				
				const titleTr = $("<tr>");
				titleTr.html(
					"<th>닉네임</th>" + 
					"<th>참가 신청 글</th>" + 
					"<th>선택</th>"
				);
				table.append(titleTr);
				
				for(let i=0; i<list.length; i++){
					const tr = $("<tr>");
					
					tr.append(
						"<td>" + 
							"<a href='/selectOneProfile.do?memberNo=" + list[i].memberNo + "'>" +
								list[i].memberNickname +
							"</a>" +
						 "</td>"
					);
					
					tr.append(
						"<td>" + 
							"<a href='#' class='apply-view-open'>" + 
								list[i].applyContent + 
							"</a>" + 
						"</td>");
					
					tr.append(
						"<td>" + 
							"<span id='apply-accept'>" + 
								"<a href='javascript:void(0);' onclick='updateApplyStat(" + list[i].wmApplyNo + ", 0, this)'>" +
									"O" + 
								 "</a>" + 
							"</span>" + 
							
							"<span id='apply-refuse'>" + 
								"<a href='javascript:void(0);' onclick='updateApplyStat(" + list[i].wmApplyNo + ", 2, this)'>" +
									"X" + 
								 "</a>" + 
							"</span>" + 
						"</td>"
					);
					
					table.append(tr);
				}
				$(".wm-apply-meangement-content").append(table);
			}else{
				$(".wm-apply-meangement-content").append("<p>" + "신청 대기 중인 사람이 없습니다." + "</p>");
			}
		}
	});
});