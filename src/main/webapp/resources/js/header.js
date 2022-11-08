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


/*채팅시작*/

$(".chat-icon").on("click",function(){
	$("#chat-board").toggle(400);
});
$(".chat-list").on("click",function(){
	$(".chat-list").css("display","none");
	$(".chat-form").css("display","block");
});

$(".back-btn").on("click",function(){
	$(".chat-list").css("display","block");
	$(".chat-form").css("display","none");
});


let ws;
let memberId;
let boardNo;
let boardTitle
function initChat(param){
	boardNo = $("[name=boardNo]").val();
	boardTitle = $("[name=boardTitle]").val();
	console.log("boardTitle ::: "+boardTitle);
	console.log("boardNo ::: "+boardNo);
	memberId = param;
	ws = new WebSocket("ws://192.168.10.33/chat.do");
	ws.onopen = startChat;
	ws.onmessage = receiveMsg;
	ws.onclose = endChat;
	
	let index = $(".chat-list").index(this);


	
	function startChat(){
		console.log("웹소켓 연결  완료");
		const data={type:"enter",memberId:memberId,boardNo:boardNo,boardTitle:boardTitle};
		ws.send(JSON.stringify(data));
	}
	function receiveMsg(param){
		appendChat(param.data);
	}
	function sendMsg(){
		console.log("채팅이되나요");
		const msg = $("#send-msg").val();
		if(msg != ''){
			const data = {type:"chat",msg:msg,boardNo:boardNo,memberId:memberId};
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
		}
	});
}