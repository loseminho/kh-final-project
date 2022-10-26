package kr.or.market.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.market.model.dao.MarketDao;

@Service
public class MarketService {
	@Autowired
	private MarketDao dao;
}
