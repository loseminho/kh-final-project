package kr.or.chat.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.chat.model.vo.ChatHistory;
import kr.or.chat.model.vo.RequireList;

@Repository
public class ChatDao {
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public int require(RequireList rl) {
		return sqlSession.insert("chat.require",rl);	
	}

	public ArrayList<RequireList> requireList(RequireList rl) {
		List list = sqlSession.selectList("chat.requireList",rl);
		return (ArrayList<RequireList>)list;
	}

	public int changeStatus(RequireList rl) {
		return sqlSession.update("chat.changeStatus",rl);
	}
	public void insertRoomList(HashMap<String, Object> roomList) {
		sqlSession.insert("chat.insertRoomList",roomList);
	}

	public ArrayList<RequireList> selectApplyList(String memberId) {
		List list = sqlSession.selectList("chat.selectApplyList",memberId);
		return (ArrayList<RequireList>)list;
	}

	public void saveData(int boardNo, String sendMsg, String memberId, int memberNo) {
		HashMap<String,Object> map = new HashMap<>();
		map.put("boardNo", boardNo);
		map.put("sendMsg", sendMsg);
		map.put("memberId", memberId);
		map.put("memberNo", memberNo);
		sqlSession.insert("chat.saveData",map);
		
	}

	public ArrayList<ChatHistory> getLastChat(int boardNo) {
		List list = sqlSession.selectList("chat.getLastChat",boardNo);
		return (ArrayList<ChatHistory>)list;
	}
}
