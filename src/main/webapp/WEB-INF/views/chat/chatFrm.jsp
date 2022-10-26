<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
<style>
.chatting {
	width: 500px;
	display : none;
}

.messageArea {
	overflow-y: auto;
	border: 1px solid black;
	height: 500px;
	display: flex;
	flex-direction: column;
	background-color: #b2c7d9;
}

.messageArea>p {
	text-align: center;
	width: 100%;
}

#sendMsg {
	width: 75%;
}

#sendBtn {
	width: 20%;
}

.chat {
	margin-bottom: 10px;
	padding: 8px;
	border-radius: 3px;
}

.left {
	position: relative;
	max-width: 300px;
	align-self: flex-start;
	background-color: #fff;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
	margin-left: 16px;
	padding: 15px;
}

.left:after {
	content: '';
	position: absolute;
	border-style: solid;
	border-width: 15px 15px 15px 0;
	border-color: transparent #fff; display : block;
	width: 0;
	z-index: 1;
	left: -15px;
	top: 12px;
	display: block;
}
.right:after {
	content: '';
	position: absolute;
	border-style: solid;
	border-width: 15px 0 15px 15px;
	border-color: transparent #ffeb33; 
	display : block;
	width: 0;
	z-index: 1;
	right: -15px;
	top: 12px;
	display: block;
}

.right {
	position: relative;
	max-width: 300px;
	align-self: flex-end;
	background-color: #ffeb33;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	border-radius: 10px;
	margin-right: 16px;
	padding: 15px;
}
</style>
</head>
<body>
	<input type="hidden" name = "boardNo" value=${rl.boardNo }>
	<input type="hidden" name = "boardTitle" value=${rl.boardTitle }>
	<h1>전체채팅</h1>
	<hr>
	<button onclick="initChat('${sessionScope.m.memberId}');">채팅시작하기</button>
	<div class="chatting">
		<div class="messageArea"></div>
		<div class="sendBox">
			<input type="text" id="sendMsg">
			<button id="sendBtn">전송</button>
		</div>
	</div>
	<script>
	let ws;
	let memberId;
	let boardNo;
	let boardTitle
	function initChat(param){
		boardNo = $("[name=boardNo]").val();
		boardTitle = $("[name=boardTitle]").val();
		console.log(boardTitle);
		memberId = param;
		ws = new WebSocket("ws://192.168.10.33/chat.do");
		ws.onopen = startChat;
		ws.onmessage = receiveMsg;
		ws.onclose = endChat;
		$(".chatting").slideDown();
		
		function startChat(){
			const data={type:"enter",memberId:memberId,boardNo:boardNo,boardTitle:boardTitle};
			ws.send(JSON.stringify(data));
		}
		function receiveMsg(param){
			appendChat(param.data);
		}
		function sendMsg(){
			const msg = $("#sendMsg").val();
			if(msg != ''){
				const data = {type:"chat",msg:msg,boardNo:boardNo,memberId:memberId};
				ws.send(JSON.stringify(data));
				appendChat("<div class='chat right'>"+msg+"</div>");
			}
		}
		function endChat(){
			
		}
		function appendChat(msg){
			$(".messageArea").append(msg);
			$(".messageArea").scrollTop($(".messageArea")[0].scrollHeight);
		}
		$("#sendMsg").on("keyup",function(key){
			if(key.keyCode == 13){
				sendMsg();
			}
		});
	}
	</script>
</body>
</html>