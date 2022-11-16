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
					
					tr.append("<td>" + list[i].applyContent + "</td>");
					
					tr.append(
						"<td>" + 
							"<span>" + 
								"<a href='javascript:void(0);' onclick='updateApplyStat(" + list[i].wmApplyNo + ", 0, this)'>" +
									"O" + 
								 "</a>" + 
							"</span>" + 
							
							"<span>" + 
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
				$(".wm-apply-meangement-content").append("<h2>" + "신청 대기 중인 사람이 없습니다." + "</h2>");
			}
		}
	});
});