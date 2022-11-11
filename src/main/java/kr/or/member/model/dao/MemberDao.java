package kr.or.member.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.dm.model.vo.DirectMessage;
import kr.or.dog.model.vo.Dog;
import kr.or.member.model.vo.Member;
import kr.or.member.model.vo.MyCalendar;
import kr.or.member.model.vo.Report;
import kr.or.walk.model.vo.AppliedWalkInfo;

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
	
	public ArrayList<DirectMessage> selectAllSendDm(int memberNo) {
		List list = sqlSession.selectList("member.selectAllSendDm", memberNo);
		return (ArrayList<DirectMessage>) list;
	}

	public ArrayList<DirectMessage> selectAllReceiveDm(int memberNo) {
		List list = sqlSession.selectList("member.selectAllReceiveDm", memberNo);
		return (ArrayList<DirectMessage>) list;
	}

	public DirectMessage selectOneSendDm(int dmNo) {
		return sqlSession.selectOne("member.selectOneSendDm", dmNo);
	}
	
	/*****************************************************/
	
	public Member selectPersonProfile(int memberNo) {
		return sqlSession.selectOne("member.selectPersonProfile", memberNo);
	}
	
	public ArrayList<Dog> selectDogList(int memberNo) {
		List list = sqlSession.selectList("member.selectDogList", memberNo);
		return (ArrayList<Dog>)list;
	}
	
	/*****************************************************/
	
	public int checkReportAble(Report report) {
		return sqlSession.selectOne("report.checkReportAble", report);
	}
	
	public int insertReport(Report report) {
		return sqlSession.insert("report.insertReport", report);
	}
	
	public ArrayList<Report> selectMyReportList(int reportMemberNo) {
		List list = sqlSession.selectList("report.selectMyReportList", reportMemberNo);
		return (ArrayList<Report>)list;
	}

	/*****************************************************/
	
	public ArrayList<AppliedWalkInfo> selectMyApplyList(String memberId, int start, int end) {
		List list = sqlSession.selectList("member.selectMyApplyList", memberId);
		ArrayList<AppliedWalkInfo> walkList = (ArrayList<AppliedWalkInfo>)list;
		
		ArrayList<AppliedWalkInfo> appliedList = new ArrayList<AppliedWalkInfo>();
		for(int i=start; i<=end; i++) {
			if(i == walkList.size()) {
				break;
			}
			
			appliedList.add(walkList.get(i));
		}
		
		return walkList;
	}

	public int selectMyApplyCount(String memberId) {
		return sqlSession.selectOne("member.selectMyApplyCount", memberId);
	}

}