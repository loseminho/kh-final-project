package kr.or.admin.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import kr.or.admin.model.service.AdminService;
import kr.or.admin.model.vo.AdminQna;
import kr.or.admin.model.vo.AdminReport;

@Controller
public class AdminController {
	@Autowired
	private AdminService service;
	
	//관리자페이지 이동 
	@RequestMapping(value="/adminPageFrm.do")
	public String adminPageFrm (Model model) {
		int totalCount = service.adminQnaCount();
		model.addAttribute("totalCount",totalCount);
		return "admin/adminPage";
	}
	
	//관리자 문의내역 리스트 더보기 
	@ResponseBody
	@RequestMapping(value="/adminQnaAjax.do", produces = "application/json;charset=utf-8")
	public String adminQnaAjax (int start, int amount) {
		int totalCount = service.adminQnaCount();
		ArrayList<AdminQna> list = service.moreAdminQna(start, amount);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	
	//문의내역 검색
	@ResponseBody
	@RequestMapping(value="/searchAdminQna.do",produces = "application/json;charset=utf-8")
	public String searchAdminQna (AdminQna aq) {
		ArrayList<AdminQna> list = service.searchAdminQna(aq);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	
	//신고목록 리스트 더보기 
	@ResponseBody
	@RequestMapping(value="/adminReportAjax.do",produces = "application/json;charset=utf-8")
	public String adminReport(int start, int amount) {
		ArrayList<AdminReport> list = service.moreAdminReport(start, amount);
		Gson gson = new Gson();
		String result = gson.toJson(list);
		return result;
	}
	/*
	//신고처리하기 
	@RequestMapping(value="/reportMember.do")
	public String reportMember(AdminReport ar, Model model) {
		System.out.println(ar);
		int result = service.reportMember(ar);
		
	}
	*/
}
