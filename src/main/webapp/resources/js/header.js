$(function(){
	$("#chat-board").draggable();
});
$(function(){
	$(".popup-modal").draggable();
});

$(".managerMenu").on("mouseenter",function(){
	$(".manager-subtitle").stop().slideDown();
});    
$(".header-wrap").on("mouseleave",function(){
	$(".manager-subtitle").stop().slideUp();
});

function logout() {
	Swal.fire({
        title: '로그아웃',
        text: "로그아웃하시겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '로그아웃',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			location.href="/logout.do";
        }
    })
}

let boardNo;
let boardTitle;
let memberId;
let memberNo;
let memberNickname;
let wmLeader;
/*채팅시작*/
$(document).on("click",".init-chat",function(){
	const chatIdx = $(".init-chat").index(this);
	boardNo = $(".boardNo").eq(chatIdx).val();
	boardTitle = $(".boardTitle").eq(chatIdx).val();
	memberId = $("#chatMemberId").val();
	memberNickname = $("#chatMemberNickname").val();
	memberNo = $("#chatMemberNo").val();
	wmLeader = $(".wmLeader").eq(chatIdx).val();
	
	
	$(".chat-list").css("display","none");
	$(".chat-form").css("display","block");
	
	$.ajax({
		url:"/getLastChat.do",
		data:{boardNo:boardNo},
		success:function(data){
			console.log(data);
			var html = "";
			$.each(data,function(idx,value){
				if(value.memberNo != memberNo){
					html += "<div class='chat left'><span class='chatId'>"+value.memberId+" : </span>"+value.chat+"</div>";
				}else{
					html += "<div class='chat right'><span class='chatId'>"+value.memberId+" : </span>"+value.chat+"</div>";
				}
			});
			$(".chat-content").html(html);
			$(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);
		}
	});
	initChat(boardNo,boardTitle,memberId,memberNickname,wmLeader);
	
});

$(document).ready(function(){
	$(".chat-name").text("채팅목록을 클릭해보세요!!");
	let memberId = $("#chatMemberId").val();
	$.ajax({
		url:"/selectApplyList.do",
		data:{memberId:memberId},
		success:function(data){
			if(data.length==0){
				var html = "";
					html += "<li>채팅가능한산책메이트가없어요ㅠㅠ</li>";
					$(".chat-list").html(html);
			}else{
				var html = "";
				$.each(data,function(idx,value){
					html += "<li class='init-chat'>";
					html += "<input type='hidden' class='wmLeader' value="+value.wmLeader+">";
					html += "<input type='hidden' class='boardNo' value="+value.boardNo+">";
					html += "<input type='hidden' class='boardTitle' value="+value.boardTitle+">";
					html += "<span class='chat-board-title'>"+value.boardTitle+"</span>";
					html += "</li>";
				});
				$(".chat-list").html(html);
			}
		}
	});
});

$(".chat-icon").on("click",function(){
	$("#chat-board").toggle(400);
});
let ws;
let chatIndex;
function initChat(boardNo, boardTitle, memberId,memberNickname, wmLeader){
	console.log(wmLeader);
	ws = new WebSocket("ws://192.168.10.33/chat.do");
	ws.onopen = startChat;
	ws.onmessage = receiveMsg;
	
	let index = $(".chat-list").index(this);
	$(".chat-name").text(boardTitle+"방입니다.");
	
	
	
}
function startChat(){
	const data={type:"enter",memberId:memberNickname,boardNo:boardNo,boardTitle:boardTitle,memberNo:memberNo,wmLeader:wmLeader};
	ws.send(JSON.stringify(data));
}
function receiveMsg(param){
	appendChat(param.data);
}
function sendMsg(){
	const msg = $("#send-msg").val();
	if(msg != ''){
		const data = {type:"chat",msg:msg,boardNo:boardNo,memberId:memberNickname,memberNo:memberNo,wmLeader:wmLeader};
		ws.send(JSON.stringify(data));
		appendChat("<div class='chat right'>"+msg+"</div>");
	}
}
function endChat(){

}
function appendChat(msg){
	$(".chat-content").append(msg);
	$(".chat-content").scrollTop($(".chat-content")[0].scrollHeight);
}
$("#send-msg").on("keyup",function(key){
	if(key.keyCode == 13){
		sendMsg();
		$("#send-msg").val('');
	}
});

$(document).on("click",".back-btn>span",function(){
	console.log(123);
	ws.close();
	$(".chat-list").css("display","block");
	$(".chat-form").css("display","none");
	$(".chat-content").empty();
	$(".chat-name").text("채팅목록을 클릭해보세요!!");	
});
$(".up-btn").on("click",function(){
	$("html,body").animate({scrollTop:0},400);

});

