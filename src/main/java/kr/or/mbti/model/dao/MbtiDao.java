package kr.or.mbti.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MbtiDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
}
