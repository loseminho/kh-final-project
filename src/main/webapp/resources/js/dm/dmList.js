/**
 * 
 */
const sessionMemberNo = $("#sessionMemberNo").val();

$(document).on("click",".list-one-wrap",function(){
	var idx = $(".list-one-wrap").index(this);
	$("#modal-wrap").css("display","flex");
	console.log(idx);
	console.log($(".dmNo").eq(idx).val());
		$(".sender-name").text(" "+$(".senderName").eq(idx).text());
		$(".dm-date").text(" "+$(".receiveDate").eq(idx).text());
		$(".receive-content").text(" "+$(".dmContent").eq(idx).text());
		$("#receiverId").val($(".receiver-id").eq(idx).val());
		$("#receiverNo").val($(".sender-no").eq(idx).val());
});

$(".cancel").on("click",function(){
	$("#modal-wrap").fadeOut(300);
});
$(document).ready(function(){
	$.ajax({
		url:"/selectDmList.do",
		data:{receiverNo:sessionMemberNo},
		success:function(data){
		console.log(data);
		if(data.length == 0 ){
			var html = "<div style='width:100%;text-align:center;color:red;'>아이고... 당신은 인기가 없어요..</div>";
			$(".dm-content").append(html);		
		}else{
			var html = "";
			$.each(data, function(idx,value){
				html += "<div class='list-one-wrap'>";
				html += "<input class='sender-no' type='hidden' value="+value.senderNo+">";
				html += "<input class='receiver-id' type='hidden' value="+value.receiverId+">";
				html += "<input class='dmNo' type='hidden' value="+value.dmNo+">";
				html += "<span class='category' style='width:90px;'>분양문의</span>";
				html += "<span class='dmContent'  style='width:500px;'>"+value.dmContent+"</span>";
				html += "<span class='receiveDate' style='width:120px;'>"+value.dmDate+"</span>";
				html += "<span class='senderName' style='width:120px;'>"+value.senderName+"</span>";
				html += "</div>";
			});
			$(".dm-content").append(html);
		}
		}
	});
});

$(".send-dm-btn").on("click",function(){
	const dmContent = $(".redirect-content").val();
	const receiverNo = $("#receiverNo").val();
	const receiverId = $("#receiverId").val();
	const senderId = $("#senderId").val();
	const senderName = $("#senderName").val();
	const senderNo = $("#sessionMemberNo").val();
	if(dmContent == ''){
		alert("입력하세요");
	}else{
		if(confirm("쪽지를보내시겠씁니까?")){
			$.ajax({
				url:"/sendDm.do",
				data:{dmContent:dmContent,
					receiverNo:receiverNo,
					senderId:senderId,
					senderNo:senderNo,
					receiverId:receiverId,
					senderName:senderName},
				success:function(data){
					console.log(1);		
				}
			});
			$(".redirect-content").val('');
			$(".cancel").trigger("click");
		}else{
			alert("쪽지보내기실패");
		}
	}
});

$("#searchList").on("click",function(){
	$(".dm-content").empty();
	const searchKeyword = $("#searchKeyword").val();
	const receiverNo = $("#sessionMemberNo").val();
	const filterSelect = $("#select-box").val();
	$.ajax({
		url:"/searchDmList.do",
		data:{
		filter:filterSelect,
		senderName:searchKeyword,
		receiverNo:receiverNo},
		success:function(data){
		console.log(data);
		if(data.length == 0){
			var html = "<div style='width:100%;text-align:center;color:red;'>아이고... 검색된게 없어요..</div>";
			$(".dm-content").append(html);
		}else{
			var html = "";
			$.each(data, function(idx,value){
				html += "<div class='list-one-wrap'>";
				html += "<input class='sender-no' type='hidden' value="+value.senderNo+">";
				html += "<input class='receiver-id' type='hidden' value="+value.receiverId+">";
				html += "<input class='dmNo' type='hidden' value="+value.dmNo+">";
				html += "<span class='category' style='width:90px;'>분양문의</span>";
				html += "<span class='dmContent'  style='width:500px;'>"+value.dmContent+"</span>";
				html += "<span class='receiveDate' style='width:120px;'>"+value.dmDate+"</span>";
				html += "<span class='senderName' style='width:120px;'>"+value.senderName+"</span>";
				html += "</div>";
			});
			$(".dm-content").append(html);
		}
		}
	});	
	
	
	
});