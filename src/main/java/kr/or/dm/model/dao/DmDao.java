package kr.or.dm.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.dm.model.vo.DirectMessage;

@Repository
public class DmDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public int sendDm(DirectMessage dm) {
		return sqlSession.insert("dm.sendDm",dm);
	}

	public ArrayList<DirectMessage> selectAllList(DirectMessage dm) {
		List list = sqlSession.selectList("dm.selectAllList",dm);
		return (ArrayList<DirectMessage>)list;
	}

	public ArrayList<DirectMessage> searchDmList(HashMap<String, Object> map) {
		System.out.println(map);
		List list = sqlSession.selectList("dm.searchDmList",map);
		return (ArrayList<DirectMessage>)list;
	}
}
