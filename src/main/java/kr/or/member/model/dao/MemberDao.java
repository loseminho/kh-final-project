package kr.or.member.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.member.model.vo.Member;
import kr.or.member.model.vo.MyCalendar;
import kr.or.member.model.vo.Report;
import kr.or.walk.model.vo.Walk;

@Repository
public class MemberDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

//	public Member checkId(String kakao_email) {
//		return sqlSession.selectOne("member.checkId", kakao_email);
//	}

	public int insertKakao(Member m) {
		return sqlSession.insert("member.insertKakao", m);
	}

//	public int deleteKakao(String memberId) {
//		return sqlSession.delete("member.deleteMember", memberId);
//	}

	public Member selectOneMember(Member member) {
		return sqlSession.selectOne("member.selectOneMember", member);
	}
	
	public Member selectOneMember2(String memberId) {
		return sqlSession.selectOne("member.selectOneMember2", memberId);
	}

	public Member findId(Member member) {
		return sqlSession.selectOne("member.findId", member);
	}

	public int updatePw(Member m) {
		return sqlSession.update("member.updatePw", m);
	}

	public int insertMember(Member m) {
		return sqlSession.insert("member.insertMember", m);
	}

	public Member checkPhone(Member m) {
		return sqlSession.selectOne("member.checkPhone", m);
	}

	public int updateMember(Member m) {
		return sqlSession.update("member.updateMember", m);
	}

	public int deleteMember(String memberId) {
		return sqlSession.delete("member.deleteMember", memberId);
	}

	public ArrayList<MyCalendar> selectMyCalendar(String memberId) {
		List list = sqlSession.selectList("member.selectMyCalendar", memberId);
		return (ArrayList<MyCalendar>) list;
	}

	public ArrayList<Report> selectMyReportList(int memberNo) {
		List list = sqlSession.selectList("report.selectMyReportList", memberNo);
		return (ArrayList<Report>) list;
	}
}