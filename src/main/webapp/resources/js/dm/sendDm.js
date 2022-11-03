/**
 * 
 */
$(".send-dm-wrap").fadeOut();
function dmModalOn(){
	$(".require-btn").hide();
	$(".send-dm-wrap").fadeIn(1000);
	
}

$(".cancel").on("click",function(){
	$(".require-btn").fadeIn(400);
	$(".send-dm-wrap").hide();
});

const sendDmFunction = $(".send-dm-btn");

sendDmFunction.on("click",function(){
	var text = $("#send-dm-input").val();
	const receiver = $("#detailMemberNo").val();
	const sender = $("#sessionMemberNo").val();
	if(text == ''){
		alert('뭐라도입력해주세요');
	}else{
		$.ajax({
			url:"/sendDm.do",
			data:{receiver:receiver, dmContent:text, sender:sender},
			success:function(){
				console.log("보내기성공");
				$(".cancel").trigger("click");
				$("#send-dm-input").val('');
			}
		});
		console.log(text);
	}
});