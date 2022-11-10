package kr.or.chat.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.chat.model.service.ChatService;
import kr.or.chat.model.vo.ChatHistory;
import kr.or.chat.model.vo.RequireList;

@Controller
public class ChatController {
	@Autowired
	private ChatService service;
	
	
	@RequestMapping(value="/changeStatus.do")
	public String changeStatus(RequireList rl) {
		int result = service.changeStatus(rl);
		return "board/boardList";
	}
	
	@ResponseBody
	@RequestMapping(value="/requireList.do",produces = "application/json;charset=utf-8")
		public String requireList(RequireList rl) {
		ArrayList<RequireList> list = service.requireList(rl);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	
	@RequestMapping(value = "/insertRequire.do")
	public String require(RequireList rl) {
		int result = service.require(rl);
		return "board/boardView";
	}
	//마이페이지 임시
	@RequestMapping(value="/mypage.do")
	public String mypage() {
		return "member/mypage";
	}
	
	@RequestMapping(value="/joinChatting.do")
	public String joinChattin(RequireList rl,Model model) {
		model.addAttribute("rl",rl);
		return "chat/chatFrm";
	}
	@ResponseBody
	@RequestMapping(value="/selectApplyList.do", produces = "application/json;charset=utf-8")
	public String selectApplyList(String memberId) {
		ArrayList<RequireList> list = service.selectApplyList(memberId);
		return new Gson().toJson(list);
	}
	
	@ResponseBody
	@RequestMapping(value="/getLastChat.do", produces = "application/json;charset=utf-8" )
	public String geetLastChat(int boardNo) {
		ArrayList<ChatHistory>list=service.getLastChat(boardNo);
		return new Gson().toJson(list);
	}
}
