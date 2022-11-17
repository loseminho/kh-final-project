package kr.or.market.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.market.model.vo.DogType;
import kr.or.market.model.vo.MarketDog;
import kr.or.market.model.vo.MarketDogFile;
import kr.or.member.model.vo.Member;

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

	public ArrayList<DogType> selectTypeList(Integer userInput) {
		List list = sqlSession.selectList("market.selectTypeList",userInput);
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

	public ArrayList<MarketDogFile> selectMarketNoFile(int marketNo) {
		List list = sqlSession.selectList("market.selectNoFile",marketNo);
		return (ArrayList<MarketDogFile>)list;
	}

	public ArrayList<MarketDog> myMarketList(Member m) {
		List list = sqlSession.selectList("market.myMarketList",m);
		return (ArrayList<MarketDog>)list;
	}

	public void updateMarket(MarketDog md) {
		sqlSession.update("market.updateMarket",md);
		
	}

	public void deleteMarketFile(int pastFileNo) {
		sqlSession.delete("market.deleteFile",pastFileNo);
	}
	
	public void updateMarketFile(MarketDogFile mdf) {
		sqlSession.insert("market.inputFile",mdf);	
	}

	public int deleteMarket(int marketNo) {
		int result = sqlSession.delete("market.deleteMarket",marketNo);
		return result;
	}

	public ArrayList<MarketDogFile> selectFileName(int marketNo) {
		List list= sqlSession.selectList("market.selectFileName",marketNo);
		return (ArrayList<MarketDogFile>)list;
	}

}
