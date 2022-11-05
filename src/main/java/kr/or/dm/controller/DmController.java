package kr.or.dm.controller;

import java.util.ArrayList;

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
		System.out.println(dm.getReceiverNo());
		ArrayList<DirectMessage> list = service.selectAllList(dm);
		return new Gson().toJson(list);
	}
}

