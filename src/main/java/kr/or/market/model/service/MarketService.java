package kr.or.market.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.market.model.dao.MarketDao;
import kr.or.market.model.vo.MarketDog;

@Service
public class MarketService {
	@Autowired
	private MarketDao dao;

	public MarketDog selectOne(int marketNo) {
		return dao.selectOne(marketNo);
	}

	public ArrayList<MarketDog> saleDogList() {
		// TODO Auto-generated method stub
		return dao.saleDogList();
	}

	public int marketListCnt(int typeSize) {
		System.out.println("서비스typeSizeCnt"+typeSize);
		return dao.marketListCnt(typeSize);
	}

	public ArrayList<MarketDog> filterSelect(int typeSize) {
		return dao.fiterSelect(typeSize);
	}
}
