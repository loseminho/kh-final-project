package kr.or.admin.controller;

import java.util.ArrayList;
import java.util.HashMap;

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
import kr.or.member.model.vo.Member;

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
		list.get(0).setTotalCount(totalCount);
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
		int totalCount = service.adminReportCount();
		ArrayList<AdminReport> list = service.moreAdminReport(start, amount);
		//totalCount 값 전달
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("totalCount", totalCount);
		map.put("list", list);
		Gson gson = new Gson();
		String result = gson.toJson(map);
		return result;
	}

	//신고처리하기 
	@RequestMapping(value="/reportMember.do")
	public String reportMember(AdminReport ar, Model model) {
		int result = service.reportMember(ar);
		if(result>0) {
			model.addAttribute("title", "정보 수정 완료");
			model.addAttribute("msg", "신고처리가 완료되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/adminPageFrm.do");
			return "common/msg";
		} else {
			return null;
		}
	}
	//회원 등급 조회 더보기 
	@ResponseBody
	@RequestMapping(value="/adminMemberList.do", produces = "application/json;charset=utf-8")
	public String adminMemberList(int start, int amount) {
		int totalCount = service.adminMemberList();
		System.out.println("total : "+totalCount);
		ArrayList<Member>list = service.moreAdminMemberList(start,amount);
		//totalCount 값 전달
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("totalCount", totalCount);
		map.put("list", list);
		Gson gson = new Gson();
		String result = gson.toJson(map);
		return result;
	}
	
	//회원 등급 변경 버튼 
	@RequestMapping(value="/changeMemberLevel.do", produces = "application/json;charset=utf-8")
	public String changeMemberLevel(Member m, Model model) {
		System.out.println("컨트롤러2"+m);
		int result = service.changeMemberLevel(m);
		if(result>0) {
			model.addAttribute("title", "정보 수정 완료");
			model.addAttribute("msg", "등급변경이 완료되었습니다.");
			model.addAttribute("icon", "success");
			model.addAttribute("loc", "/adminPageFrm.do");
			return "common/msg";
		} else {
			return null;
		}
		
	}
	
	//회원 등급 리스트 검색 
	@ResponseBody
	@RequestMapping(value="/searchAdminMember.do",produces = "application/json;charset=utf-8")
	public String adminSearchMemberList(Member m, int start, int amount) {
		int totalCount = service.adminMemberList();
		System.out.println("total : "+totalCount);
		ArrayList<Member>list = service.adminSearchMemberList(start,amount,m);
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("totalCount", totalCount);
		map.put("list", list);
		Gson gson = new Gson();
		String result = gson.toJson(map);
		return result;
	}
}
