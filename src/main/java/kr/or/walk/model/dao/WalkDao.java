package kr.or.walk.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.walk.model.vo.Walk;

@Repository
public class WalkDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public ArrayList<Walk> allWalkList() {
		List list = sqlSession.selectList("walkmate.allWalkList");
		return (ArrayList<Walk>)list;
	}

	public Walk selectWalkListAjax(int wmNo) {
		return sqlSession.selectOne("walkmate.selectWalkListOne",wmNo);
	}
}
