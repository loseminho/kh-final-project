package kr.or.walk.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.member.model.vo.Member;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkFile;
import kr.or.walk.model.vo.WalkMateComment;
import kr.or.walk.model.vo.WmApply;

@Repository
public class WalkDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	public ArrayList<Walk> allWalkList() {
		List list = sqlSession.selectList("walkmate.allWalkList");
		return (ArrayList<Walk>)list;
	}
	
	public Walk selectContentBox(int wmNo) {
		return sqlSession.selectOne("walkmate.selectContentBox",wmNo);
	}

	public int inputWalk(Walk w) {
		return sqlSession.insert("walkmate.inputWalk",w);
	}

	public int selectWmNo() {
		return sqlSession.selectOne("walkmate.selectMaxSeq");
	}
	public void inputWalkFile(WalkFile wf) {
		sqlSession.insert("walkmate.inputWalkFile",wf);
	}
	
//	// 댓글 작성
//	public Walk writeReply(WalkMateComment wmc) {
//		//현재 게시물의 번호 wmNo를 받아오기
//		Walk pto = new Walk();
//		pto.setWmNo(wmc.getWmNo());
//		sqlSession.update("picture_reply_up",pto);
//		int wmcGroup = sqlSession.selectOne("p_reply_max_no");
//		//wmcGroup 세팅
//		wmc.setWmcGroup(wmcGroup+1);
//		
//		int result = sqlSession.insert("picture_reply_write",wmc);
//		
//		int check = sqlSession.selectOne("p_reply_max_no");
//		//wmcGroup을 방금 넣은 데이터의 wmcNo 값으로 세팅
//		wmc.setWmcGroup(check);
//		
//		// wmcNo와 wmcGroup이 다르다면 wmcGroup을 wmcNo로 업데이트
//		int check_update = sqlSession.update("picture_reply_check",wmc);
//		
//		if(result == 1) {
//			//wmc_tbl에 새로운 댓글 추가가 성공한다면
//			// 갱신된 댓글 갯수를 가져옴
//			pto = sqlSession.selectOne("picture_reply_count", pto);
//			
//		}
//		return pto;
//	}
//	// 대댓글 작성
//	public WalkMateComment writeReReply(WalkMateComment wmc) {
//		WalkMateComment pto = new WalkMateComment();
//		pto.setWmNo(wmc.getWmNo());
//		sqlSession.update("picture_reply_up",pto);
//		int result = sqlSession.insert("picture_reply_write",wmc);
//		if(result == 1) {
//			//wmc_tbl에 새로운 댓글 추가가 성공한다면
//			// 갱신된 댓글 갯수를 가져옴
//			pto = sqlSession.selectOne("picture_reply_count", pto);
//			
//		}
//		return pto;
//	}
//	// 댓글 리스트
//	public ArrayList<WalkMateComment> replyList(WalkMateComment wmc) {
//		ArrayList<WalkMateComment> replyList = new ArrayList();
//		replyList = (ArrayList)sqlSession.selectList("picutre_replyList",wmc);
//		return replyList;
//	}
//	// 댓글 삭제
//	public WalkMateComment deleteReply(WalkMateComment wmc) {
//		WalkMateComment pto = new WalkMateComment();
//		pto.setWmNo(wmc.getWmNo());
//		
//		//wmcGroup이 wmcNo와 댓글이 몇개인지 카운트 한다. 댓글에 대대댓글이 몇갠지 셈
//		int count_rereply = sqlSession.selectOne("picture_count_rereply",wmc);
//		
//		int result = 0;
//		
//		sqlSession.update("picture_reply_down",wmc);
//		
//		if(count_rereply==0) {
//			//대댓글이 없을떄 == 그냥 삭제
//			// wmc_tbl에서 바로 삭제
//			result = sqlSession.delete("picture_reply_delete", wmc);
//		}else {
//			//답글이 있을 때는 wmcContent 값에 공백을 줌
//			result = sqlSession.delete("picture_reply_not_delete", wmc);
//		}
//		if(result == 1) {
//			pto = sqlSession.selectOne("picture_reply_count",pto);
//			
//		}
//		return pto;
//	}
//	
//	// 대댓글 삭제
//	public WalkMateComment deleteReReply(WalkMateComment wmc) {
//		WalkMateComment pto = new WalkMateComment();
//		pto.setWmNo(wmc.getWmNo());
//		
//		sqlSession.update("picture_reply_down",pto);
//		
//		int result = sqlSession.delete("picture_reply_delete",wmc);
//		int count_rereply = sqlSession.selectOne("picture_count_rereply_fromrereply",wmc);
//		
//		System.out.println("count_rereply = "+ count_rereply);
//		if(count_rereply == 0) {
//			sqlSession.delete("picture_reply_delete_after_rereply_delete",wmc);
//		}
//		if(result ==1) {
//			pto = sqlSession.selectOne("picture_reply_count",pto);
//		}
//		return pto;
//	}


}
