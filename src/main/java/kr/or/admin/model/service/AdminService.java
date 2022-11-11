package kr.or.admin.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.admin.model.dao.AdminDao;
import kr.or.admin.model.vo.AdminQna;

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
		
		System.out.println("start"+start);
		System.out.println("amount"+amount);
		System.out.println("end"+end);
		
		ArrayList<AdminQna>list = dao.moreAdminQna(map);
		System.out.println(list);
		return list;
	}
}
