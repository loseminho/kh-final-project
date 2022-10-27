package kr.or.market.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.market.model.vo.MarketDog;

@Repository
public class MarketDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public MarketDog selectOne(int marketNo) {
		return sqlSession.selectOne("market.selectOne",marketNo);
	}
}
