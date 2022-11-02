package kr.or.dm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.dm.model.service.DmService;

@Controller
public class DmController {
	@Autowired
	private DmService service;
	
	@RequestMapping(value="/sendDmFrm.do")
	public String sendDmFrm() {
		return "dm/sendFrm";
	}
}
