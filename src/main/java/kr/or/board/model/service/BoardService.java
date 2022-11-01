package kr.or.board.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.board.model.dao.BoardDao;
import kr.or.board.model.vo.QnaBoard;
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
		QnaBoard qb = dao.selectOneQna(qnaNo);
		return qb;
	}

}
