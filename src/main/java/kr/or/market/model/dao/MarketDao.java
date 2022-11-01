package kr.or.market.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.market.model.vo.DogType;
import kr.or.market.model.vo.MarketDog;
import kr.or.market.model.vo.MarketDogFile;

@Repository
public class MarketDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public MarketDog selectOne(int marketNo) {
		return sqlSession.selectOne("market.selectOne",marketNo);
	}

	public int marketListCnt(MarketDog md) {
		int result = sqlSession.selectOne("market.marketListCnt",md);
		return result;
	}

	public ArrayList<MarketDog> fiterSelect(MarketDog md) {
		List list = sqlSession.selectList("market.filterSelect",md);
		return (ArrayList<MarketDog>)list;
	}

	public int inputMarket(MarketDog md) {
		return sqlSession.insert("market.inputMarket",md);
	}

	public ArrayList<DogType> selectTypeList() {
		List list = sqlSession.selectList("market.selectTypeList");
		return (ArrayList<DogType>)list;
	}

	public void inputMarketFile(MarketDogFile mdf) {
		sqlSession.insert("market.inputFile",mdf);
	}

	public int selectMarketNo() {
		return sqlSession.selectOne("market.selectMaxSeq");
	}

	public ArrayList<MarketDogFile> selectFile() {
		List list = sqlSession.selectList("market.selectFile");
		return (ArrayList<MarketDogFile>)list;
	}
}
