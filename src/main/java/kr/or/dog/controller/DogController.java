package kr.or.dog.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.google.gson.Gson;

import kr.or.dog.model.service.DogService;
import kr.or.dog.model.vo.Dog;
import kr.or.member.model.vo.Member;

@Controller
public class DogController {

	@Autowired
	private DogService service;
	
	@RequestMapping(value="/selectMyDogList.do")
	public String selectMyDogList(@SessionAttribute Member m, HttpSession session) {
		int memberNo = m.getMemberNo();
		ArrayList<Dog> list = service.selectMyDogList(memberNo);
		session.setAttribute("myDogList", list);
		return "member/myPage";
	}
	
	@ResponseBody
	@RequestMapping(value="/selectMyOneDog.do", produces="application/json;charset=utf-8")
	public String selectMyOneDog(int dogNo) {
		Dog dog = service.SelectMyOneDog(dogNo);
		if(dog != null) {
			return new Gson().toJson(dog);
		} else {
			return "null";
		}
	} 
	
}
