package kr.or.market.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.market.model.vo.MarketDog;

@Repository
public class MarketDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public MarketDog selectOne(int marketNo) {
		System.out.println(marketNo);
		return sqlSession.selectOne("market.selectOne",marketNo);
	}

	public ArrayList<MarketDog> saleDogList() {
		List list = sqlSession.selectList("market.saleDogList"); 
		return (ArrayList<MarketDog>)list;
	}
}
