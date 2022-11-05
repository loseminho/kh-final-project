/**
 * 
 */
const sessionMemberNo = $("#sessionMemberNo").val();
const dmList = $(".list-one-wrap");

$(document).on("click",dmList,function(){
	$("#modal-wrap").css("display","flex");
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
			var html = "";
			$.each(data, function(idx,value){
				html += "<input type='hidden' value="+value.dmNo+">";
				html += "<div class='list-one-wrap'>";
				html += "<span id='category' style='width:90px;'>분양문의</span>";
				html += "<span id='dmContent'  style='width:500px;'>"+value.dmContent+"</span>";
				html += "<span id='receiveDate' style='width:120px;'>"+value.dmDate+"</span>";
				html += "<span id='senderName' style='width:120px;'>"+value.senderName+"</span>";
				html += "</div>";
			});
			$(".dm-content").append(html);
		}
	});
});

