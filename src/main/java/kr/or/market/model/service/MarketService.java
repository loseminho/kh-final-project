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

	public int marketListCnt(MarketDog md) {
		return dao.marketListCnt(md);
	}

	public ArrayList<MarketDog> filterSelect(MarketDog md) {
		return dao.fiterSelect(md);
	}
}
