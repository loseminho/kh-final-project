// 신고 내역 불러오기
$("#report-list").on("click", function(){
	$.ajax({
		url: "/selectMyReportList.do",
		data : { memberNo : memberNo }, 
		dataType:"json",
		success: function(list){
			if(list.length != 0){
				const table = $("<table>");
				
				const titleTr = $("<tr>");
				titleTr.html(
					"<th>신고 대상</th>" + 
					"<th>신고 유형</th>" + 
					"<th>신고 상세 이유</th>" + 
					"<th>신고 날짜</th>"
				);
				
				table.append(titleTr);
				
				for(let i=0; i<list.length; i++){
					const tr = $("<tr>");
					
					tr.append(
						"<td>" + 
							"<a href='/selectOneProfile.do?memberNo=" + list[i].reportedMemberNo + "'>" + 
								list[i].reportedMemberNicname + 
							"</a>" + 
						"</td>"
					);
					
					switch(list[i].reportType){
						case 1:
							tr.append("<td>" + "언어 폭력" + "</td>");
							break;
						case 2:
							tr.append("<td>" + "성희롱" + "</td>");
							break;
						case 3:
							tr.append("<td>" + "목적 외 이용" + "</td>");
							break;
						case 4:
							tr.append("<td>" + "신뢰 훼손" + "</td>");
							break;
						case 5:
							tr.append("<td>" + "기타" + "</td>");
							break;
					}
					
					tr.append(
						"<td>" + 
							"<a href='#' class='report-view-open'>" + 
								list[i].reportContent + 
							"</a>" + 
						"</td>"
					);
					
					tr.append("<td>" + list[i].reportDate + "</td>");
					
					table.append(tr);
				}
				
				$(".report-list-table").html(table);
			}else{
				$(".report-list-table").append("<h2>" + "신고 내역이 존재하지 않습니다." + "</h2>");
				$(".report-list-table>h2").css("margin-top", "30px");
				$(".report-list-table>h2").css("font-weight", "normal");
			}
		}
	});
});

// 신고한 내용 보기
$(".report-view-wrap").hide();

$(".report-view-open").on("click", function(){
	console.log(1);
	$(".report-view-modal").css("width", "100vw");
	$(".report-view-modal").css("height", "100vh");

	$(".report-view-wrap").show();
});

$("#report-view-close").on("click", function(){
	$(".report-view-modal").css("width", "0");
	$(".report-view-modal").css("height", "0");

	$(".report-view-wrap").hide();
});