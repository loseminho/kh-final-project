$("#mateList").on("click", function(){
	$.ajax({
		url: "/selectAllMateList.do",
		dataType:"json",
		success: function(list){
			const table = $(".all-meet>table");
			
			for(let i=0; i<list.length; i++){
				const tr = $("<tr>");
				tr.append("<td>" + "<a href='/walkMetePage.do?wmNo=' + list[i].wmNo + '&index=0'>" + list[i].wmTitle + "</a>" + "</td>");
				tr.append("<td>" + list[i].wmMeetStart + "</td>");
				tr.append("<td>" + "금천구" + "</td>");
				tr.append("<td>" + "대기" + "</td>");
				table.append(tr);
			}
		}
	});
});