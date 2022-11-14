function receiveDm(reqPage) {
	$("#receiveDmTable>tbody>tr").remove();
	const dmCate = $("#receiveDmCate").val();
	
	$.ajax({
        url  : '/selectAllReceiveDm.do',
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
	        		const senderTd = $("<td>");
	        		const senderDiv = $("<div class='senderDiv'>");
	        		const sendDateTd = $("<td>");
	        		const readCheckTd = $("<td>");
	        		
	        		noTd.text(totalCount-(dmList[i].rnum)+1);
	        		
	        		if(dmList[i].dmCate == "0") {
		        		cateTd.text("입양문의");
	        		} else {
		        		cateTd.text("친구해요");
	        		}
	        		
	        		const aTag = $("<a onclick='receiveDmModal("+reqPage+","+dmList[i].dmNo+");'></a>");
	        		aTag.text(dmList[i].dmContent);
	        		contentDiv.append(aTag);
	        		contentTd.append(contentDiv);
	        		
	        		senderDiv.text(dmList[i].senderName + "(" + dmList[i].senderId + ")");
	        		senderTd.append(senderDiv);
	        		
	        		sendDateTd.text(dmList[i].dmDate);
	        		
	        		if(dmList[i].readCheck == "0") {
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
	        	td.text("받은 쪽지가 없습니다.");
	        	tr.append(td);
	        	$("#receiveDmTable>tbody").append(tr);
        	}
        	
        	$(".dmPageNavi").html(pageNavi);
        }
    });
}

function receiveDmModal(reqPage,dmNo) {
	cancelReply();

	$.ajax({
        url  : '/selectOneReceiveDm.do',
        type : 'post',
        data : {dmNo : dmNo},
        success : function(data){
        	receiveDm(reqPage);
			$("#receiveDm-modal").css("display", "flex");
			
			$("#dmCate").val(data.dmCate);
			if(data.dmCate == "0") {
        		$(".dmCate").text("[입양문의]");
    		} else {
        		$(".dmCate").text("[친구해요]");
    		}

			$(".sender").text(data.senderName + "(" + data.senderId + ")");
			$(".dmContent").text(data.dmContent);
			$(".dmDate").text(data.dmDate);
			$("#receiverNo").val(data.senderNo);
			
			if(data.readCheck == "0") {
        		$(".dmReadCheck").text("읽지않음");
    		} else {
        		$(".dmReadCheck").text("읽음");
    		}
        }
	});
}

$("#receiveDmCate").on("change", function(){
	const result = $("#receiveDmCate").val();
	receiveDm(1);
});

function closeReceiveDmModal() {
	$("#receiveDm-modal").hide();
}

function dmReply() {
	$("[name=dmContent]").show();
	$("#dmReplyBtn").text("발송하기");
	$("#dmReplyBtn").attr("onclick", "sendReply();");
	$("#dmReplyCancelBtn").show();
}

function cancelReply() {
	$("[name=dmContent]").val("");
	$("[name=dmContent]").hide();
	$("#dmReplyBtn").text("답장하기");
	$("#dmReplyBtn").attr("onclick", "dmReply();");
	$("#dmReplyCancelBtn").hide();
}

function sendReply() {
	const receiverNo = $("#receiverNo").val();
	const dmContent = $("[name=dmContent]").val();
	const dmCate = $("#dmCate").val();

	$.ajax({
        url  : '/insertReplyDm.do',
        data : {"receiverNo" : receiverNo, "dmContent" : dmContent, "dmCate" : dmCate},
        type : 'post',
        success : function(data){
			cancelReply();
        	Swal.fire({
				text: '쪽지가 발송되었습니다.',
				confirmButtonColor: '#1abc9c'
			})
        }
	});
}
