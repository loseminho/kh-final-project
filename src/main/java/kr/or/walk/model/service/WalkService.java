package kr.or.walk.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.walk.model.dao.WalkDao;

@Service
public class WalkService {
	@Autowired
	private WalkDao dao;
}
