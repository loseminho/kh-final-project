package kr.or.shop.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ShopDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public int insertShop(String shopName) {
		return 0;
	}

}
