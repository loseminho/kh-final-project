function receiveDm() {
	$("#receiveDmTable>tbody>tr").remove();
	
	$.ajax({
        url  : '/selectAllReceiveDm.do',
        type : 'post',
        success : function(data){
        	if(data != "") {
	        	for(let i=0; i<data.length; i++) {
	        		const tr = $("<tr>");
	        		const noTd = $("<td>");
	        		const cateTd = $("<td>");
	        		const contentTd = $("<td>");
	        		const contentDiv = $("<div class='contentDiv'>");
	        		const senderTd = $("<td>");
	        		const senderDiv = $("<div class='senderDiv'>");
	        		const sendDateTd = $("<td>");
	        		const readCheckTd = $("<td>");
	        		
	        		noTd.text(data[i].dmNo);
	        		
	        		if(data[i].dmCate == "0") {
		        		cateTd.text("입양문의");
	        		} else {
		        		cateTd.text("친구해요");
	        		}
	        		
	        		const aTag = $("<a onclick='dmModal();'></a>");
	        		aTag.text(data[i].dmContent);
	        		contentDiv.append(aTag);
	        		contentTd.append(contentDiv);
	        		
	        		senderDiv.text(data[i].senderName + "(" + data[i].senderId + ")");
	        		senderTd.append(senderDiv);
	        		
	        		sendDateTd.text(data[i].dmDate);
	        		
	        		if(data[i].readCheck == "0") {
		        		readCheckTd.text("읽지않음");
	        		} else {
		        		readCheckTd.text("읽음");
	        		}
	        		
	        		tr.append(noTd).append(cateTd).append(contentTd).append(senderTd).append(sendDateTd).append(readCheckTd);
	        		$("#receiveDmTable>tbody").append(tr);
	        	}
        	} else {
        		const tr = $("<tr>");
	        	const td = $("<td colspan='6'>");
	        	td.text("보낸 쪽지가 없습니다.");
	        	tr.append(td);
	        	$("#receiveDmTable>tbody").append(tr);
        	}
        }
    });
}