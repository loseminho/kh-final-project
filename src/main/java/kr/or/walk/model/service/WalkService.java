package kr.or.walk.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.walk.model.dao.WalkDao;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkFile;
import kr.or.walk.model.vo.WmApply;

@Service
public class WalkService {
	@Autowired
	private WalkDao dao;
	
	//전체 산책 메이트 조회 및 각 연결된 회원 정보 조회
	public ArrayList<Walk> allWalkList() {
		ArrayList<Walk> list = dao.allWalkList();
		return list;
	}

	public Walk selectContentBox(int wmNo) {
		return dao.selectContentBox(wmNo);
	}
	
	public int inputWalk(Walk w) {
		dao.inputWalk(w);
		int wmNo = dao.selectWmNo();
		ArrayList<WalkFile> wf = new ArrayList<WalkFile>();
		wf = w.getFileList();
		for(int i=0; i<wf.size(); i++) {
			wf.get(i).setWmNo(wmNo);
			dao.inputWalkFile(wf.get(i));
		}
		return 0;
	}
	
}
