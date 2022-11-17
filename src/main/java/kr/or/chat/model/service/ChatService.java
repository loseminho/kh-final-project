package kr.or.chat.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.chat.model.dao.ChatDao;
import kr.or.chat.model.vo.ChatHistory;
import kr.or.chat.model.vo.RequireList;
import kr.or.member.model.vo.Member;

@Service
public class ChatService {
	@Autowired
	private ChatDao dao;
	
	public int require(RequireList rl) {
		return dao.require(rl);
	}

	public ArrayList<RequireList> requireList(RequireList rl) {
		ArrayList<RequireList> list = dao.requireList(rl); 
		return list;
	}

	public int changeStatus(RequireList rl) {
		return dao.changeStatus(rl);
	}
	
	public void insertRoomList(HashMap<String, Object> roomList) {
		dao.insertRoomList(roomList);
	}

	public ArrayList<RequireList> selectApplyList(Member m) {
		return dao.selectApplyList(m);
	}

	public void saveData(int boardNo, String sendMsg, String memberId, int memberNo) {
		dao.saveData(boardNo, sendMsg,memberId, memberNo);
	}

	public ArrayList<ChatHistory> getLastChat(int boardNo) {
		return dao.getLastChat(boardNo);
	}
}
