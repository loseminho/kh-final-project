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
			}else{
				$(".appliedList-content").append("<h2>" + "참가 신청한 산책 모임이 존재하지 않습니다." + "</h2>");
			}
		}
	});
});
$("#appliedWalkMateList").trigger("click");

$("#attendWalkMateList").one("click", function(){
	$.ajax({
		url: "/selectMyAttendList.do",
		data: {
			memberNo : wmMakerNo,
			memberId : applyId
		},
		dataType:"json",
		success: function(list){
			const now = new Date(); 
			let wmMeetTime;
			
			let scheduledList = new Array();
			let proceededList = new Array();
			
			for(let i=0; i<list.length; i++){
				wmMeetTime = new Date(list[i].wmMeetTime);
				
				if(now < wmMeetTime){
					scheduledList.push(list[i]);
				}else{
					proceededList.push(list[i]);
				}
			}
			
			scheduledList.sort(function(wm1, wm2){
				let wmMeetTime1 =  new Date(wm1.wmMeetTime);
				let wmMeetTime2 =  new Date(wm2.wmMeetTime);
			
				if(wmMeetTime1 > wmMeetTime2){
					return 1;
				}else if(wmMeetTime1 == wmMeetTime2){
					return 0;
				}else{
					return -1;
				}
			});
			
			proceededList.sort(function(wm1, wm2){
				let wmMeetTime1 =  new Date(wm1.wmMeetTime);
				let wmMeetTime2 =  new Date(wm2.wmMeetTime);
			
				if(wmMeetTime1 < wmMeetTime2){
					return 1;
				}else if(wmMeetTime1 == wmMeetTime2){
					return 0;
				}else{
					return -1;
				}
			});
			
			console.log(scheduledList);
			console.log(proceededList);
			
			if(scheduledList.length != 0){
				const table = $("<table>");
				
				const titleTr = $("<tr>");
				titleTr.html(
					"<th>모임 글 제목</th>" + 
					"<th>모임 시작 일시</th>" + 
					"<th>모임 장소</th>"
				);
				table.append(titleTr);
				
				for(let i=0; i<scheduledList.length; i++){
					const tr = $("<tr>");
					
					tr.append("<td>" + scheduledList[i].wmTitle + "</td>");
					tr.append("<td>" + scheduledList[i].wmMeetTime + "</td>");
					tr.append("<td>" + scheduledList[i].wmAddr + "</td>");
					
					table.append(tr);
				}
				
				$("#scheduledList").append(table);
			}else{
				$("#scheduledList").append("<h2>" + "예정된 산책 모임이 존재하지 않습니다." + "</h2>");
			}
			
			if(proceededList.length != 0){
				const table = $("<table>");
				
				const titleTr = $("<tr>");
				titleTr.html(
					"<th>모임 글 제목</th>" + 
					"<th>모임 시작 일시</th>" + 
					"<th>모임 장소</th>"
				);
				table.append(titleTr);
				
				for(let i=0; i<proceededList.length; i++){
					const tr = $("<tr>");
					
					tr.append("<td>" + proceededList[i].wmTitle + "</td>");
					tr.append("<td>" + proceededList[i].wmMeetTime + "</td>");
					tr.append("<td>" + proceededList[i].wmAddr + "</td>");
					
					table.append(tr);
				}
				
				$("#proceededList").append(table);
			}else{
				$("#proceededList").append("<h2>" + "진행된 산책 모임이 존재하지 않습니다." + "</h2>");
			}
		}
	});
});