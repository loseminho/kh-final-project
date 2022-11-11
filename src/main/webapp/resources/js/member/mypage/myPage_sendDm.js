function sendDm() {
	$("#sendDmTable>tbody>tr").remove();
	
	$.ajax({
        url  : '/selectAllSendDm.do',
        type : 'post',
        success : function(data){
        	if(data != "") {
	        	for(let i=0; i<data.length; i++) {
	        		const tr = $("<tr>");
	        		const noTd = $("<td>");
	        		const cateTd = $("<td>");
	        		const contentTd = $("<td>");
	        		const contentDiv = $("<div class='contentDiv'>");
	        		const receiverTd = $("<td>");
	        		const receiverDiv = $("<div class='receiverDiv'>");
	        		const sendDateTd = $("<td>");
	        		const readCheckTd = $("<td>");
	        		
	        		noTd.text(data[i].dmNo);
	        		
	        		if(data[i].dmCate == "0") {
		        		cateTd.text("입양문의");
	        		} else {
		        		cateTd.text("친구해요");
	        		}
	        		
	        		const aTag = $("<a onclick='sendDmModal("+data[i].dmNo+");'></a>");
	        		aTag.text(data[i].dmContent);
	        		contentDiv.append(aTag);
	        		contentTd.append(contentDiv);
	        		
	        		receiverDiv.text(data[i].receiverName + "(" + data[i].receiverId + ")");
	        		receiverTd.append(receiverDiv);
	        		
	        		sendDateTd.text(data[i].dmDate);
	        		
	        		if(data[i].readCheck == "0") {
		        		readCheckTd.text("읽지않음");
	        		} else {
		        		readCheckTd.text("읽음");
	        		}
	        		
	        		tr.append(noTd).append(cateTd).append(contentTd).append(receiverTd).append(sendDateTd).append(readCheckTd);
	        		$("#sendDmTable>tbody").append(tr);
	        	}
        	} else {
        		const tr = $("<tr>");
	        	const td = $("<td colspan='6'>");
	        	td.text("보낸 쪽지가 없습니다.");
	        	tr.append(td);
	        	$("#sendDmTable>tbody").append(tr);
        	}
        }
    });
}

function sendDmModal(dmNo) {
	$.ajax({
        url  : '/selectOneSendDm.do',
        type : 'post',
        data : {dmNo : dmNo},
        success : function(data){
			$("#sendDm-modal").css("display", "flex");
			
			if(data.dmCate == "0") {
        		$(".dmCate").text("[입양문의]");
    		} else {
        		$(".dmCate").text("[친구해요]");
    		}

			$(".receiver").text(data.receiverName + "(" + data.receiverId + ")");
			$(".dmContent").text(data.dmContent);
			$(".dmDate").text(data.dmDate);
			
			if(data.readCheck == "0") {
        		$(".dmReadCheck").text("읽지않음");
    		} else {
        		$(".dmReadCheck").text("읽음");
    		}
        }
	});
}

function closeSendDmModal() {
	$("#sendDm-modal").hide();
}