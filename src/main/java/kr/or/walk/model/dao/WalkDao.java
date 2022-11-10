package kr.or.walk.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.member.model.vo.Member;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkFile;
import kr.or.walk.model.vo.WmApply;

@Repository
public class WalkDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public ArrayList<Walk> allWalkList() {
		List list = sqlSession.selectList("walkmate.allWalkList");
		return (ArrayList<Walk>)list;
	}
	
	public Walk selectContentBox(int wmNo) {
		return sqlSession.selectOne("walkmate.selectContentBox",wmNo);
	}

	public int inputWalk(Walk w) {
		return sqlSession.insert("walkmate.inputWalk",w);
	}

	public int selectWmNo() {
		return sqlSession.selectOne("walkmate.selectMaxSeq");
	}
	public void inputWalkFile(WalkFile wf) {
		sqlSession.insert("walkmate.inputWalkFile",wf);
	}


}
