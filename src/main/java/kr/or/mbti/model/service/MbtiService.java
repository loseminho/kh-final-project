package kr.or.mbti.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.mbti.model.dao.MbtiDao;

@Service
public class MbtiService {

	@Autowired
	private MbtiDao dao;
}
