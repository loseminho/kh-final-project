$(".section").on("click", function(){
    $("#rowSession2").children().hide();
	const idx = $(".section").index(this);
    $("#rowSession2").children().eq(idx).show();
});

$("#appliedWalkMateList").one("click", function(){
	$.ajax({
		url: "/selectMyApplyList.do",
		data: { 
			memberId : applyId,
			reqPage : 1
		},
		dataType:"json",
		success: function(wpd){
			console.log(wpd);
			
			if(wpd.list.length != 0){
				const table = $("<table>");
				
				const titleTr = $("<tr>");
				titleTr.html(
					"<th>모임 글 제목</th>" + 
					"<th>모임 시작 일시</th>" + 
					"<th>모임 장소</th>" + 
					"<th>신청 결과</th>"
				);
				table.append(titleTr);
				
				for(let i=0; i<wpd.list.length; i++){
					const tr = $("<tr>");
					
					tr.append("<td>" + wpd.list[i].wmTitle + "</td>");
					tr.append("<td>" + wpd.list[i].wmMeetTime + "</td>");
					tr.append("<td>" + wpd.list[i].wmAddr + "</td>");
					
					switch(wpd.list[i].applyStat){
						case 0:
							tr.append("<td>" + "승인" + "</td>");
							break;
						case 1:
							tr.append("<td>" + "대기" + "</td>");
							break;
						case 2:
							tr.append("<td>" + "거절" + "</td>");
							break;
					}
					
					
					table.append(tr);
				}
				
				$(".appliedList-content").append(table);
			}
		}
	});
});
$("#appliedWalkMateList").trigger("click");

