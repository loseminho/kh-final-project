package kr.or.dm.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.dm.model.service.DmService;
import kr.or.dm.model.vo.DirectMessage;

@Controller
public class DmController {
	@Autowired
	private DmService service;
	
	@RequestMapping(value="/sendDmFrm.do")
	public String sendDmFrm() {
		return "dm/dmList";
	}
	@ResponseBody
	@RequestMapping(value="/sendDm.do", produces = "application/json;charset=utf-8")
	public String sendDm(DirectMessage dm) {
		System.out.println(dm);
		int result = service.sendDm(dm);
		return new Gson().toJson(result);
	}
	@ResponseBody
	@RequestMapping(value="/selectDmList.do", produces = "application/json;charset=utf-8")
	public String selectAllList(DirectMessage dm) {
		ArrayList<DirectMessage> list = service.selectAllList(dm);
		return new Gson().toJson(list);
	}
	@ResponseBody
	@RequestMapping(value="/searchDmList.do", produces = "application/json;charset=utf-8" )
	public String searchDmList(String filter, String senderName, int receiverNo) {
		HashMap<String, Object> map = new HashMap<>();
		map.put("filter", filter);
		map.put("senderName", senderName);
		map.put("receiverNo", receiverNo);
		ArrayList<DirectMessage> list = service.searchDmList(map);
		System.out.println(list);
		return new Gson().toJson(list);
	}
}

