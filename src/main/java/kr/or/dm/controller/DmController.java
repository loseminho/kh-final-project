package kr.or.dm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.dm.model.service.DmService;
import kr.or.dm.model.vo.DirectMessage;
import kr.or.market.model.vo.MarketDog;

@Controller
public class DmController {
	@Autowired
	private DmService service;
	
	@RequestMapping(value="/sendDmFrm.do")
	public String sendDmFrm() {
		return "dm/sendFrm";
	}
	@ResponseBody
	@RequestMapping(value="/sendDm.do")
	public String sendDm(DirectMessage dm) {
		System.out.println(dm);
		int result = service.sendDm(dm);
		return new Gson().toJson(result);
	}
}

