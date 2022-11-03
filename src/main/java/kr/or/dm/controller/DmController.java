package kr.or.dm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.dm.model.service.DmService;
import kr.or.market.model.vo.MarketDog;

@Controller
public class DmController {
	@Autowired
	private DmService service;
	
	@RequestMapping(value="/sendDmFrm.do")
	public String sendDmFrm() {
		return "dm/sendFrm";
	}
	@RequestMapping(value="/sendDm.do")
	public String sendDm(MarketDog md,String text) {
		System.out.println(md.getMemberId());
		System.out.println(text);
		return null;
	}
}

