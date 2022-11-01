package kr.or.walk.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.walk.model.dao.WalkDao;
import kr.or.walk.model.vo.Walk;

@Service
public class WalkService {
	@Autowired
	private WalkDao dao;

	public ArrayList<Walk> allWalkList() {
		return dao.allWalkList();
	}

	public Walk selectWalkListAjax(int wmNo) {
		return dao.selectWalkListAjax(wmNo);
	}
	
	
}
