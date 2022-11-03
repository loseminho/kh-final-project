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
	const memberId = $("#detailMemberId").val();
	console.log(text);
	if(text == ''){
		console.log('비어있음');
	}else{
		$.ajax({
			url:"/sendDm.do",
			data:{memberId:memberId, text:text},
			success:function(){
				
			}
		});
		console.log(text);
	}
});