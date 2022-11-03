package kr.or.dm.model.dao;

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
}
