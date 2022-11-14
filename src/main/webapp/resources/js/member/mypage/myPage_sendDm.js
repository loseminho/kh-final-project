function sendDm(reqPage) {
	$("#sendDmTable>tbody>tr").remove();
	const dmCate = $("#sendDmCate").val();
	
	$.ajax({
        url  : '/selectAllSendDm.do',
        type : 'post',
        data : {"reqPage" : reqPage, "dmCate" : dmCate},
        success : function(data){
        	const dmList = data.list;
        	const pageNavi = data.pageNavi;
        	const totalCount = data.totalCount;
        	
        	if(dmList != "") {
	        	for(let i=0; i<dmList.length; i++) {
	        		const tr = $("<tr>");
	        		const noTd = $("<td>");
	        		const cateTd = $("<td>");
	        		const contentTd = $("<td>");
	        		const contentDiv = $("<div class='contentDiv'>");
	        		const receiverTd = $("<td>");
	        		const receiverDiv = $("<div class='receiverDiv'>");
	        		const sendDateTd = $("<td>");
	        		const readCheckTd = $("<td>");
	        		
	        		noTd.text(totalCount-(dmList[i].rnum)+1);
	        		
	        		if(dmList[i].dmCate == "0") {
		        		cateTd.text("입양문의");
	        		} else {
		        		cateTd.text("친구해요");
	        		}
	        		
	        		const aTag = $("<a onclick='sendDmModal("+dmList[i].dmNo+");'></a>");
	        		aTag.text(dmList[i].dmContent);
	        		contentDiv.append(aTag);
	        		contentTd.append(contentDiv);
	        		
	        		receiverDiv.text(dmList[i].receiverName + "(" + dmList[i].receiverId + ")");
	        		receiverTd.append(receiverDiv);
	        		
	        		sendDateTd.text(dmList[i].dmDate);
	        		
	        		if(dmList[i].readCheck == "0") {
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
        	
        	$(".dmPageNavi").html(pageNavi);
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

$("#sendDmCate").on("change", function(){
	const result = $("#sendDmCate").val();
	sendDm(1);
});

function closeSendDmModal() {
	$("#sendDm-modal").hide();
}