package kr.or.mbti.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.dm.model.vo.DirectMessage;
import kr.or.mbti.model.dao.MbtiDao;
import kr.or.mbti.model.vo.MbtiData;
import kr.or.mbti.model.vo.MbtiResult;
import kr.or.member.model.vo.Member;

@Service
public class MbtiService {

	@Autowired
	private MbtiDao dao;

	@Transactional
	public int insertMbtiType(MbtiData md) {
		return dao.insertMbtiType(md);
	}

	@Transactional
	public HashMap<String, Object> selectMbtiResult(MbtiResult mr) {
		// 검사한 강아지의 결과 조회
		MbtiResult result = dao.selectMbtiResult(mr.getAnswers());
		result.setDogNo(mr.getDogNo());
		result.setDogName(mr.getDogName());
		result.setMemberNo(mr.getMemberNo());
		
		// 검사한 강아지의 친구 타입인 강아지들을 조회
		ArrayList<MbtiResult> friend = dao.selectFriendList(result);
		
		// 검사한 강아지의 파트너 타입인 강아지들을 조회
		ArrayList<MbtiResult> partner = dao.selectPartnerList(result);
		
		// HashMap에 집어넣기
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		map.put("friend", friend);
		map.put("partner", partner);
		
		// 검사한 강아지 정보에 mbti 결과를 업데이트
		int updateResult = dao.updateDogMbti(result);
		return map;
	}

	public Member selectDogOwner(int dogNo) {
		return dao.selectDogOwner(dogNo);
	}

	@Transactional
	public int insertMatchingDm(DirectMessage dm) {
		return dao.insertMatchingDm(dm);
	}
}
