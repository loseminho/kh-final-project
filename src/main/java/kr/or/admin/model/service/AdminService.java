package kr.or.admin.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.admin.model.dao.AdminDao;
import kr.or.admin.model.vo.AdminQna;
import kr.or.admin.model.vo.AdminReport;

@Service
public class AdminService {
	@Autowired
	private AdminDao dao;

	//관리자 문의내역 총 게시물 수 
	public int adminQnaCount() {
		int totalCount = dao.adminQnaCount();
		return totalCount;
	}
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
	/*
	//관리자 신고처리
	public int reportMember(AdminReport ar) {
		int result = dao.reportMember(ar);
		if(result>0) {
			if(ar.getOptionVal()==3) {
		}
		return result;
	}
*/
}
