package kr.or.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.shop.model.service.ShopService;

@Controller
public class ShopController {
	@Autowired
	private ShopService service;
	
	@RequestMapping(value="/insertShopFrm.do")
	public String insertShop() {
		return "shop/writeFrm";
	}
}
