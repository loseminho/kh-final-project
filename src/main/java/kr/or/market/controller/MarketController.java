package kr.or.market.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.market.model.service.MarketService;
import kr.or.market.model.vo.MarketDog;

@Controller
public class MarketController {
	@Autowired
	private MarketService service;
	
	@RequestMapping(value="/success.do")
	public String seccess() {
		return "market/paySuccess";
	}
	
	@ResponseBody
	@RequestMapping(value="/searchOneInfo", produces="application/json;charset=utf-8")
	public String selectOneSaleDog(int marketNo) {
		MarketDog md = service.selectOne(marketNo);
		return new Gson().toJson(md);
	}
	
	@RequestMapping(value="/saleDogList.do")
	public String saleDogList() {
		return "market/saleDog";
	}
}
