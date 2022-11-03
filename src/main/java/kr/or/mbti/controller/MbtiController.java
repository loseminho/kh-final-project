package kr.or.mbti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.mbti.model.service.MbtiService;

@Controller
public class MbtiController {

	@Autowired
	private MbtiService service;
	
	@RequestMapping(value="/mbtiMateMain.do")
	public String mbtiMateMain() {
		return "walkmate/mbtiMatePage/mbtiMateMain";
	}
}
