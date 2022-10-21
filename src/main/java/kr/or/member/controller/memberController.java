package kr.or.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import kr.or.member.model.service.MemberService;

@Controller
public class memberController {
	@Autowired
	private MemberService service;
}