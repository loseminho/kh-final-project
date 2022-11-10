package kr.or.walk.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.walk.model.service.WalkService;
import kr.or.walk.model.vo.Walk;

@Controller
public class WalkController {
	@Autowired
	private WalkService service;
	
	@RequestMapping(value="/walkMateFrm.do")
	public String walkMate() {
		return "walkmate/walkMateFrm";
	}
	// WalkMate ajax 시작
	// WalkMate 모든 게시물 띄우기..
	// WalkMate 모든 게시물 참여하는 유저 프로필
	@ResponseBody
	@RequestMapping(value="/selectContentBox.do", produces="application/json;charset=utf-8")
	public String selectContentBox(int wmNo) {
		Walk w = service.selectContentBox(wmNo);
		return new Gson().toJson(w);
	}
	@ResponseBody
	@RequestMapping(value="/allWalkListAjax.do", produces="application/json;charset=utf-8")
	public String allWalkListAjax() {
		ArrayList<Walk> list = service.allWalkList();
		return new Gson().toJson(list);
	}
}