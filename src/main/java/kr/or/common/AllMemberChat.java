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
	private HashMap<Object, ArrayList<WebSocketSession>> memberList;
	private ArrayList<String> memberIdList;

	// 				방번호			 세션			 ID
	public AllMemberChat() {
		super();
		sessionList = new ArrayList<WebSocketSession>();
		memberList = new HashMap<Object,ArrayList<WebSocketSession>>();
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
			sessionList.add(session);
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonParser parser = new JsonParser();
		JsonElement element = parser.parse(message.getPayload());
		String type = element.getAsJsonObject().get("type").getAsString();
		String memberId = element.getAsJsonObject().get("memberId").getAsString();
		int boardNo = Integer.parseInt(element.getAsJsonObject().get("boardNo").getAsString());
		System.out.println("type:::"+type);
		
		if (type.equals("enter")) {
			System.out.println("enter**boardNo:::"+boardNo);
			ArrayList<WebSocketSession> list = new ArrayList<WebSocketSession>();
			if(memberList.get(boardNo)==null) {
				list.add(session);
				memberList.put(boardNo, list);
			}else {
				memberList.get(boardNo).add(session);
			}
			System.out.println("들어왔을때 세션 ::: "+session);
			
			
			String sendMsg = "<p>" + memberId + "님이 입장하셨습니다.</p>";
			for (WebSocketSession s : memberList.get(boardNo)) {
				if (!s.equals(session)) {
					TextMessage tm = new TextMessage(sendMsg);
					s.sendMessage(tm);
				}
			}
		} else if (type.equals("chat")) {
			String msg = element.getAsJsonObject().get("msg").getAsString();
			String sendMsg = "<div class='chat left'><span class='chatId'>" + memberId + " : </span>"
					+ msg + "</div>";
			for (WebSocketSession s : memberList.get(boardNo)) {
				TextMessage tm = new TextMessage(sendMsg);
				if (!s.equals(session)) {
					s.sendMessage(tm);
				}
			}
		}
		/*
		else if(type.equals("end")) {
			System.out.println("close**boardNo:::"+boardNo);
			System.out.println("지우는 세션 :::"+session);
			memberList.get(boardNo).remove(session);
			System.out.println(memberList);
			System.out.println(memberList.get(boardNo));
		}
		*/
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("memberList.get():::"+memberList.get(1));
		System.out.println("memberList.get().size():::"+memberList.size());
		System.out.println("새로고침시 닫히는 웹소켓 서버:::"+session);
		for(Object i : memberList.keySet()) {
			System.out.println("for문안에 memberList:::"+memberList.get(i));
			for(WebSocketSession s : memberList.get(i)) {
				if(s.equals(session)){
					memberList.get(i).remove(session);
				}
			}
		}
		sessionList.remove(session);
	}
}