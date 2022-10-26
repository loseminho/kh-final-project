package kr.or.board.controller;

import java.lang.ProcessBuilder.Redirect;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.board.model.service.BoardService;
import kr.or.board.model.vo.QnaBoard;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	@RequestMapping(value="/faqQnaBoardFrm.do")
	public String faqQnaBoardFrm() {
		return "board/faqQna";
	}
	
	
	
	@ResponseBody
	@RequestMapping(value="/allQnaAjax.do", produces = "application/json;charset=utf-8")
	public String allQnaAjax() {
		ArrayList<QnaBoard> list = service.allQnaBoard();
		Gson gson = new Gson();
		String result = gson.toJson(list);
		System.out.println(result);
		return result;
	}
	

	
	@RequestMapping(value="/writeQnaFrm.do")
	public String writeQnaFrm() {
		return "board/writeQnaFrm";
	}
}
