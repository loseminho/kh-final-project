package kr.or.board.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import kr.or.board.model.dao.BoardDao;
import kr.or.board.model.vo.QnaBoard;
import kr.or.board.model.vo.QnaComment;
import kr.or.board.model.vo.QnaFile;

@Service
public class BoardService {
	@Autowired
	private BoardDao dao;
	
	//문의게시판 list
	public ArrayList<QnaBoard> allQnaBoard() {
		return dao.allQnaBoard();
	}
	

	//문의게시판 insert(file,qna)
	public int insertQnaBoard(QnaBoard q) {
		System.out.println("dao 전 :" +q.getQnaNo());
		int result = dao.insertQnaBoard(q);
		System.out.println("dao 전 :" +q.getQnaNo());
		if(result>0) {
			//insert 된 qnaboard no 조회 
			int qnaNo = dao.selectQnaBoardNo();
			//file_tbl insert 
			for(QnaFile qf : q.getFileList()) {
				qf.setQnaNo(qnaNo);
				result += dao.insertFile(qf);
			}
		}
		return result;
	}

	/* 문의게시판 view */ 
	public QnaBoard selectOneQna(int qnaNo) {
		dao.updateHit(qnaNo);
		return dao.selectOneQna(qnaNo);
	}

	//문의게시판 삭제  
	public ArrayList<QnaFile> qnaBoardDelete(int qnaNo) {
		//file_tbl에서 해당되는 파일 삭제 
		ArrayList<QnaFile> fileList = dao.selectFileList(qnaNo);
		System.out.println(fileList);
		//board 테이블에서 삭제
		int result = dao.qnaBoardDelete(qnaNo);
		System.out.println(result);
		if(result >0) {
			return fileList;
		} else {
			return null;
		}
	}

	//댓글 insert
	public int insertQnaComment(QnaComment qc) {
		return dao.insertQnaComment(qc);
	}
	//댓글 delete 
	public int deleteQnaComment(QnaComment qc) {
		return dao.deleteQnaComment(qc);
	}
	//댓글 update 
	public int updateQnaComment(QnaComment qc) {
		return dao.updateQnaComment(qc);
	}
	
	//댓글 list 조회 
	public ArrayList<QnaComment> commentListView(int qnaNo) {
		return dao.commentListView(qnaNo);
	}

	//문의내역 수정  
	public int updateQnaBoard(QnaBoard q, int[] fileNoList) {
		//board 수정 
		int result = dao.updateQnaBoard(q);
		if(result>0) {
			//새로운 첨부파일이 있으면 insert
			for(QnaFile qf : q.getFileList()) {
				qf.setQnaNo(q.getQnaNo());
				result += dao.insertFile(qf);
			}
			//삭제한 첨부파일이 있으면 delete
			if(fileNoList != null) {
				for(int fileNo : fileNoList) {
					result += dao.deleteFile(fileNo);
				}
			}
		}
		return result;
	}

	//문의내역 검색 
	public ArrayList<QnaBoard> searchQnaBoard(QnaBoard q) {
		return dao.searchQnaBoard(q);
	}

}
