package kr.or.chat.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.chat.model.dao.ChatDao;
import kr.or.chat.model.vo.RequireList;

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
}
