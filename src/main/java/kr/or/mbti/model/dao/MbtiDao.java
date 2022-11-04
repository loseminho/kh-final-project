package kr.or.mbti.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.mbti.model.vo.MbtiData;

@Repository
public class MbtiDao {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public int insertMbtiType(MbtiData md) {
		return sqlSession.insert("mbti.insertMbtiType", md);
	}
	
}
