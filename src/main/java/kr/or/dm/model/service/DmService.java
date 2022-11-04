package kr.or.dm.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.dm.model.dao.DmDao;
import kr.or.dm.model.vo.DirectMessage;

@Service
public class DmService {
	@Autowired
	private DmDao dao;

	public int sendDm(DirectMessage dm) {
		return dao.sendDm(dm);
	}

	public ArrayList<DirectMessage> selectAllList(DirectMessage dm) {
		return dao.selectAllList(dm);
	}
}
