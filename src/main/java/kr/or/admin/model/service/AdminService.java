package kr.or.admin.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.admin.model.dao.AdminDao;
import kr.or.admin.model.vo.AdminQna;
import kr.or.admin.model.vo.AdminReport;
import kr.or.admin.model.vo.BlackList;
import kr.or.member.model.vo.Member;

@Service
public class AdminService {
	@Autowired
	private AdminDao dao;

	//관리자 문의내역 총 게시물 수 
	public int adminQnaCount() {
		int totalCount = dao.adminQnaCount();
		return totalCount;
	}
	
	public ArrayList<AdminQna> moreAdminQna(int start, int amount, AdminQna q) {
		int end = start+amount -1;
		HashMap<String , Object> map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("amount", amount);
		map.put("end", end);
		map.put("optionVal",q.getOptionVal());
		System.out.println("optionVal:::::"+map.get("optionVal"));
		ArrayList<AdminQna>list = dao.moreAdminQna(map);
		return list;
	}
	/*
	//관리자 문의내역 더보기  
	public ArrayList<AdminQna> moreAdminQna(int start, int amount) {
		int end = start+amount -1;
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("amount", amount);
		map.put("end", end);
		
		
		ArrayList<AdminQna>list = dao.moreAdminQna(map);
		return list;
	}
	*/
	//관리자 문의내역 검색 
	public ArrayList<AdminQna> searchAdminQna(AdminQna aq) {
		return dao.searchAdminQna(aq);
	}
	//관리자 신고내역 리스트 더보기 
	public ArrayList<AdminReport> moreAdminReport(int start, int amount) {
		int end = start+amount -1;
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("amount", amount);
		map.put("end", end);
		
		System.out.println("start"+start);
		System.out.println("amount"+amount);
		System.out.println("end"+end);
		
		ArrayList<AdminReport>list = dao.moreAdminReport(map);
		System.out.println(list);
		
		return list;
	}

	//관리자 신고처리
	public int reportMember(AdminReport ar) {
		int result = dao.reportMember(ar);
		int result2 = 0;
		if(result>0) {
			//업데이트한 것이 있으면
		result2 = dao.changeReportStatus(ar);
		
		}
		return result2;
		
	}
	//관리자 신고물 전체게시물 수 
	public int adminReportCount() {
		int totalCount = dao.adminReportCount();
		return totalCount;
	}
	//관리자 멤버 등급 변경 게시물 수 
	public int adminMemberList() {
		int totalCount = dao.adminMemberList();
		return totalCount;
	}
	//관리자 멤버 등급 변경 더보기 
	public ArrayList<Member> moreAdminMemberList(int start, int amount) {
		int end = start+amount -1;
		HashMap<String, Object>map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("amount", amount);
		map.put("end",end);
		
		System.out.println("start"+start);
		System.out.println("amount"+amount);
		System.out.println("end"+end);
		
		ArrayList<Member>list = dao.moreAdminMemberList(map);
		System.out.println(list);
		return list;
	}
	public int changeMemberLevel(Member m) {
		int result = dao.changeMemberLevel(m);
		return result;
	}
}
