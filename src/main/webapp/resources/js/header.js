$(function(){
	$("#chat-board").draggable();
});

$(".managerMenu").on("mouseover",function(){
	$(".managerMenu").children().css("display","block");
});    
$(".managerMenu").on("mouseout",function(){
	const subMenu = $(".managerMenu").children();
	subMenu.not(subMenu.eq(0)).css("display","none");
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
let memberNickname;
/*채팅시작*/
$(".init-chat").on("click",function(){
	const chatIdx = $(".init-chat").index(this);
	console.log("asdf:"+chatIdx);
	boardNo = $(".boardNo").eq(chatIdx).val();
	console.log("bbbb :"+boardNo)
	boardTitle = $(".boardTitle").eq(chatIdx).val();
	memberId = $("#chatMemberId").val();
	memberNickname = $("#chatMemberNickname").val();
	console.log(boardNo);

	
	initChat(boardNo,boardTitle,memberId,memberNickname);
});


$(".chat-icon").on("click",function(){
	$("#chat-board").toggle(400);
});
$(".chat-list").on("click",function(){
	$(".chat-list").css("display","none");
	$(".chat-form").css("display","block");
});

let ws;
let chatIndex;
function initChat(boardNo, boardTitle, memberId,memberNickname){
	console.log("initChat : " + boardNo);
	ws = new WebSocket("ws://192.168.10.33/chat.do");
	ws.onopen = startChat;
	ws.onmessage = receiveMsg;
	
	let index = $(".chat-list").index(this);
	$(".chat-name").text(boardTitle+"방입니다.");
	
	
	
}
function startChat(){
	console.log("웹소켓 연결  완료 : "+boardNo);
	const data={type:"enter",memberId:memberNickname,boardNo:boardNo,boardTitle:boardTitle};
	ws.send(JSON.stringify(data));
}
function receiveMsg(param){
	appendChat(param.data);
}
function sendMsg(){
	const msg = $("#send-msg").val();
	if(msg != ''){
		const data = {type:"chat",msg:msg,boardNo:boardNo,memberId:memberNickname};
		ws.send(JSON.stringify(data));
		appendChat("<div class='chat right'>"+msg+"</div>");
	}
}
function endChat(){
	console.log("웹소캣종료");
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

$(".back-btn").on("click",function(e){
	e.stopPropagation(); 
	/*
	console.log("back-btn-click:::"+boardNo);
	const data = {type:"end",boardNo:boardNo,memberId:memberNickname};
	ws.send(JSON.stringify(data));
	*/
	ws.close();
	$(".chat-list").css("display","block");
	$(".chat-form").css("display","none");
	$(".chat-content").empty();
});