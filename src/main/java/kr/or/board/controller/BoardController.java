package kr.or.board.controller;

import java.lang.ProcessBuilder.Redirect;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.or.board.model.service.BoardService;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	@RequestMapping(value="/faqQnaBoardFrm.do")
	public String faqQnaBoardFrm() {
		return "board/faqQna";
	}
	
}
