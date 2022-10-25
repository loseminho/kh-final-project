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

public class AllMemberChat extends TextWebSocketHandler{
	@Autowired
	private MemberService service;
	private ArrayList<WebSocketSession> sessionList;
	private HashMap<WebSocketSession, ArrayList<Object>> memberList;
	private HashMap<String,Object> roomList;
	
	public AllMemberChat() {
		super();
		sessionList = new ArrayList<WebSocketSession>();
		memberList = new HashMap<WebSocketSession, ArrayList<Object>>();
		roomList = new HashMap<String,Object>();
	}
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception{
		sessionList.add(session);
	}
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception{
		JsonParser parser = new JsonParser();
		JsonElement element = parser.parse(message.getPayload());
		String type = element.getAsJsonObject().get("type").getAsString();
		String msg = element.getAsJsonObject().get("msg").getAsString();
		String boardNo = element.getAsJsonObject().get("boardNo").getAsString();
		if(type.equals("enter")) {
			String boardTitle = element.getAsJsonObject().get("boardTitle").getAsString();
			ArrayList<Object> list = new ArrayList<Object>();
			list.add(boardNo);
			list.add(msg);
			list.add(boardTitle);
			memberList.put(session,list);
			String sendMsg ="<p>"+memberList.get(session).get(1)+"님이 "+memberList.get(session).get(0)+"방에 입장하셨습니다.</p>";
			for(WebSocketSession s : memberList.keySet()) {
				if(!s.equals(session) && memberList.get(s).get(0).equals(boardNo)) {
					TextMessage tm = new TextMessage(sendMsg);
					s.sendMessage(tm);
				}
			}
		}else if(type.equals("chat")){
			String memberId = element.getAsJsonObject().get("memberId").getAsString();
			roomList.put("msg", msg);
			//memberList는 들어온사람
			//roomList는 보낸사람
			roomList.put("boardNo", boardNo);
			roomList.put("memberId", memberId);
			//service.insertRoomList(roomList);
				for(WebSocketSession s : memberList.keySet()) {
					String sendMsg = "<div class='chat left'><span class='chatId'>"+roomList.get("memberId")+" : </span>"+msg+"</div>";
					//memberList.get(session).get(0)은 보낸사람
					TextMessage tm = new TextMessage(sendMsg);
					if(!s.equals(session) && memberList.get(s).get(0).equals(boardNo)) {
						s.sendMessage(tm);
					}
				}
			}
		}
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception{
		sessionList.remove(session);
		memberList.remove(session);
	}
}
