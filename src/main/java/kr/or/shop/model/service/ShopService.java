package kr.or.shop.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.shop.model.dao.ShopDao;

@Service
public class ShopService {
	@Autowired
	private ShopDao dao;

	public int insertShop(String shopName) {
		int result = dao.insertShop(shopName);
		return 0;
	}

}
