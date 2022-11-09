package kr.or.chat.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
		System.out.println("list:::"+list);
		return (ArrayList<RequireList>)list;
	}
}
