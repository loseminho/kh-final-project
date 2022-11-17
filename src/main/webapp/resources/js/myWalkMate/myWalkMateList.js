$(".sub-menu").prev().append("<span class='more down'><i class='fa-solid fa-caret-down'></i></span>");
$(".more").on("click", function(event){
    if($(this).hasClass("down")) {
        $(this).removeClass("down");
        $(this).addClass("up");
        $(this).html("<i class='fa-solid fa-caret-up'></i>");
    } else if($(this).hasClass("up")) {
        $(this).removeClass("up");
        $(this).addClass("down");
        $(this).html("<i class='fa-solid fa-caret-down'></i>");
    }
    $(this).parent().next().slideToggle();
    event.stopPropagation();
});

$(".more").parent().on("click", function(){
    $(this).children().click();
});

$(".section").on("click", function(){
    $("#rowSession2").children().hide();
	const idx = $(".section").index(this);
    $("#rowSession2").children().eq(idx).show();
});

$(document).ready(function(){
	$.ajax({
		url: "/selectMyApplyList.do",
		data: { 
			memberId : applyId,
			reqPage : 1
		},
		dataType:"json",
		success: function(wpd){
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
					
					tr.append("<td>" + "<a href='/walkMatePage.do?wmNo=" + wpd.list[i].wmNo + "'>" + wpd.list[i].wmTitle + "</a>" + "</td>");
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
				$(".appliedList-content").append("<p>" + "참가 신청한 산책 모임이 존재하지 않습니다." + "</p>");
			}
		}
	});
});

$("#myAttendList").one("click", function(){
	$.ajax({
		url: "/selectMyAttendList.do",
		data: {
			memberNo : wmMakerNo
		},
		dataType:"json",
		success: function(list){
			const data = showAttendList(list);
			$("#myAttendListJsp>.scheduledList").append(data[0]);
			$("#myAttendListJsp>.proceededList").append(data[1]);
		}
	});
});

$("#otherAttendList").one("click", function(){
	$.ajax({
		url: "/selectOtherAttendList.do",
		data: {
			memberId : applyId
		},
		dataType:"json",
		success: function(list){
			const data = showAttendList(list);
			$("#otherAttendListJsp>.scheduledList").append(data[0]);
			$("#otherAttendListJsp>.proceededList").append(data[1]);
		}
	});
});

function showAttendList(list){
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
	
	const data1 = showScheduledList(scheduledList);
	const data2 = showProceededList(proceededList);	
	
	return new Array(data1, data2);
}

function showScheduledList(scheduledList){
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
			
			tr.append(
				"<td>" + 
					"<a href='/walkMatePage.do?wmNo=" + scheduledList[i].wmNo + "'>" + 
						scheduledList[i].wmTitle + 
					"</a>" + 
				"</td>"
			);

			tr.append("<td>" + scheduledList[i].wmMeetTime + "</td>");
			tr.append("<td>" + scheduledList[i].wmAddr + "</td>");
			
			table.append(tr);
		}
		
		return table;
	}else{
		return "<p>" + "예정된 산책 모임이 존재하지 않습니다." + "</p>";
	}
}

function showProceededList(proceededList){
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
			
			tr.append(
				"<td>" + 
					"<a href='/walkMatePage.do?wmNo=" + proceededList[i].wmNo + "'>" + 
						proceededList[i].wmTitle + 
					"</a>" + 
				"</td>"
			);
			
			tr.append("<td>" + proceededList[i].wmMeetTime + "</td>");
			tr.append("<td>" + proceededList[i].wmAddr + "</td>");
			
			table.append(tr);
		}
		
		return table;
	}else{
		return "<p>" + "진행된 산책 모임이 존재하지 않습니다." + "</p>";
	}
}