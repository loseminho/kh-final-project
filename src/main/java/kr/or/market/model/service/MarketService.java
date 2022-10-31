package kr.or.market.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.market.model.dao.MarketDao;
import kr.or.market.model.vo.DogType;
import kr.or.market.model.vo.MarketDog;
import kr.or.market.model.vo.MarketDogFile;

@Service
public class MarketService {
	@Autowired
	private MarketDao dao;

	public MarketDog selectOne(int marketNo) {
		return dao.selectOne(marketNo);
	}

	public int marketListCnt(MarketDog md) {
		return dao.marketListCnt(md);
	}

	public ArrayList<MarketDog> filterSelect(MarketDog md) {
		return dao.fiterSelect(md);
	}

	public int inputMarket(MarketDogFile mdf) {
		// TODO Auto-generated method stub
		return dao.inputMarket(mdf);
	}

	public ArrayList<DogType> selectTypeList() {
		return dao.selectTypeList();
	}
}
