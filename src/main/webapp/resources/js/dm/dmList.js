/**
 * 
 */
const sessionMemberNo = $("#sessionMemberNo").val();
const dmList = $(".dm-content span");

dmList.on("click",function(){
	$("#modal-wrap").fadeIn(300);
});

$(".cancel").on("click",function(){
	$("#modal-wrap").fadeOut(300);
});
$(document).ready(function(){
	$.ajax({
		url:"/selectDmList.do",
		data:{receiver:sessionMemberNo},
		success:function(data){
			var html = "";
			$.each(data, function(idx,value){
				html += "<div class='list-one-wrap'>";
				html += "<input type='hidden' value="+value.dmNo+">";
				html += "<span id='category' style='width:10%'>분양문의</span>";
				html += "<span id='dmContent'  style='width:50%'>"+value.dmContent+"</span>";
				html += "<span id='receiveDate' style='width:10%'>"+value.dmDate+"</span>";
				html += "<span id='senderName' style='width:10%'>"+value.memberNickname+"</span>";
				html += "<span style='width:10%'>";
				html += "<button>답장</button>";
				html += "</span>";
				html += "</div>";
			});
			$(".dm-content").html(html);
		}
	});
});