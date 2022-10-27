package kr.or.walk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.walk.model.service.WalkService;

@Controller
public class WalkController {
	@Autowired
	private WalkService service;
	
	@RequestMapping(value="/walkMateFrm.do")
	public String walkMate() {
		return "walkmate/walkMateFrm";
	}
}
