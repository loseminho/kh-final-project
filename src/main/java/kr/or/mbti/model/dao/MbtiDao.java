package kr.or.mbti.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.mbti.model.vo.MbtiData;
import kr.or.mbti.model.vo.MbtiResult;
import kr.or.member.model.vo.Member;

@Repository
public class MbtiDao {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public int insertMbtiType(MbtiData md) {
		return sqlSession.insert("mbti.insertMbtiType", md);
	}

	public MbtiResult selectMbtiResult(String answers) {
		return sqlSession.selectOne("mbti.selectMbtiResult", answers);
	}

	public int updateDogMbti(MbtiResult result) {
		return sqlSession.update("mbti.updateDogMbti", result);
	}

	public ArrayList<MbtiResult> selectFriendList(MbtiResult result) {
		List list = sqlSession.selectList("mbti.selectFriendList", result);
		return (ArrayList<MbtiResult>) list;
	}

	public ArrayList<MbtiResult> selectPartnerList(MbtiResult result) {
		List list = sqlSession.selectList("mbti.selectPartnerList", result);
		return (ArrayList<MbtiResult>) list;
	}

	public Member selectDogOwner(int dogNo) {
		return sqlSession.selectOne("mbti.selectDogOwner", dogNo);
	}
}
