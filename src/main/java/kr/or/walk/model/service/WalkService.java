package kr.or.walk.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.walk.model.dao.WalkDao;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkFile;
import kr.or.walk.model.vo.WalkMateComment;
import kr.or.walk.model.vo.WmApply;

@Service
public class WalkService {
	@Autowired
	private WalkDao dao;
	
	//전체 산책 메이트 조회 및 각 연결된 회원 정보 조회
	public ArrayList<Walk> allWalkList() {
		ArrayList<Walk> list = dao.allWalkList();
		return list;
	}

	public Walk selectContentBox(int wmNo) {
		return dao.selectContentBox(wmNo);
	}
	
	public int inputWalk(Walk w) {
		dao.inputWalk(w);
		int wmNo = dao.selectWmNo();
		ArrayList<WalkFile> wf = new ArrayList<WalkFile>();
		wf = w.getFileList();
	
		if(!wf.isEmpty()) {
			for(int i=0; i<wf.size(); i++) {
				wf.get(i).setWmNo(wmNo);
				dao.inputWalkFile(wf.get(i));
			}
			return 0;			
		}else {
			return 0;
		}
	}

	public int inputWmApply(WmApply wa) {
		int result = dao.inputWmApply(wa);
		return result;
	}

	public int insertMainComment(WalkMateComment wmc) {
		return dao.insertMainComment(wmc);
	}

	public int insertSubComment(WalkMateComment wmc) {
		int result = dao.insertSubComment(wmc);
		return result;
	}

	public int deleteMainComment(WalkMateComment wmc) {
		int result = dao.deleteMainComment(wmc);
		return result;
	}

	public int deleteSubComment(WalkMateComment wmc) {
		int result = dao.deleteSubComment(wmc);
		return result;
	}

	public ArrayList<Walk> selectCategoryList(Walk w) {
		ArrayList<Walk> list = dao.selectCategoryList(w);
		return list;
	}

	public int getAmount(int memberNo) {
		return dao.getAmount(memberNo);
	}

	public int deleteWmNo(Walk w) {
		return dao.deleteWmNo(w);
	}
	
//	//댓글 작성
//	public Walk writeReply(WalkMateComment wmc) {
//		return dao.writeReply(wmc);
//	}
//	// 대댓글 작성
//	public WalkMateComment writeReReply(WalkMateComment wmc) {
//		return dao.writeReReply(wmc);
//	}
//	//댓글 리스트
//	public ArrayList<WalkMateComment> replyList(WalkMateComment wmc) {
//		ArrayList<WalkMateComment> list = dao.replyList(wmc);
//		return list;
//	}
//	//댓글 삭제
//	public WalkMateComment deleteReply(WalkMateComment wmc) {
//		return dao.deleteReply(wmc);
//	}
//	//대댓글 작성
//	public WalkMateComment deleteReReply(WalkMateComment wmc) {
//		return dao.deleteReReply(wmc);
//	}
//
//	public Walk pictureWriteReReply(WalkMateComment result) {
//		// TODO Auto-generated method stub
//		return null;
//	}

	
}
