package kr.or.common;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

import kr.or.member.model.service.MemberService;

public class AllMemberChat extends TextWebSocketHandler {
	@Autowired
	private MemberService service;
	private ArrayList<WebSocketSession> sessionList;
	private HashMap<String, ArrayList<WebSocketSession>> memberList;

	// 				방번호			 세션			 ID
	public AllMemberChat() {
		super();
		sessionList = new ArrayList<WebSocketSession>();
		memberList = new HashMap<String,ArrayList<WebSocketSession>>();
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("웹소켓연결완료");
		sessionList.add(session);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonParser parser = new JsonParser();
		JsonElement element = parser.parse(message.getPayload());
		String type = element.getAsJsonObject().get("type").getAsString();
		String memberId = element.getAsJsonObject().get("memberId").getAsString();
		String boardNo = element.getAsJsonObject().get("boardNo").getAsString();

		if (type.equals("enter")) {
			ArrayList<WebSocketSession> list = new ArrayList<WebSocketSession>();
			
			if(memberList.get(boardNo)==null) {
				list.add(session);
				memberList.put(boardNo, list);
			}else {
				memberList.get(boardNo).add(session);
			}
			
			for (WebSocketSession s : memberList.get(boardNo)) {
				String sendMsg = "<p>" + memberId + "님이 입장하셨습니다.</p>";
				if (!s.equals(session)) {
					TextMessage tm = new TextMessage(sendMsg);
					s.sendMessage(tm);
				}
			}
		} else if (type.equals("chat")) {
			String msg = element.getAsJsonObject().get("msg").getAsString();
			for (WebSocketSession s : memberList.get(boardNo)) {
				String sendMsg = "<div class='chat left'><span class='chatId'>" + memberId + " : </span>"
						+ msg + "</div>";
				TextMessage tm = new TextMessage(sendMsg);
				if (!s.equals(session)) {
					s.sendMessage(tm);
				}
			}
		}
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessionList.remove(session);
		memberList.remove(session);
	}
}