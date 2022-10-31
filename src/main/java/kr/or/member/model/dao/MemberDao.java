package kr.or.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.member.model.vo.Member;

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
}