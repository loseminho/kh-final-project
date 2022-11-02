package kr.or.board.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.board.model.vo.QnaBoard;
import kr.or.board.model.vo.QnaComment;
import kr.or.board.model.vo.QnaFile;

@Repository
public class BoardDao {
	@Autowired
	private SqlSessionTemplate sqlsession;
	
	//문의내역 list
	public ArrayList<QnaBoard> allQnaBoard() {
		List list = sqlsession.selectList("qnaboard.allQnaBoard");
		return (ArrayList<QnaBoard>)list;
		}
	//문의내역 insert
	public int insertQnaBoard(QnaBoard q) {
		return sqlsession.insert("qnaboard.insertQnaBoard",q);
	}
	//문의내역 게시판 번호 가져옴 
	public int selectQnaBoardNo() {
		return sqlsession.selectOne("qnaboard.selectQnaBoardNo");
	}
	//문의내역 file insert
	public int insertFile(QnaFile qf) {
		return sqlsession.insert("qnaboard.insertFile",qf);
	}
	//문의내역 view
	public QnaBoard selectOneQna(int qnaNo) {
		return sqlsession.selectOne("qnaboard.selectOneQna",qnaNo);
	}
	public ArrayList<QnaFile> selectFileList(int qnaNo) {
		List list = sqlsession.selectList("qnaboard.selectFileList");
		return (ArrayList<QnaFile>) list;
	}
	//문의내역  삭제 
	public int qnaBoardDelete(int qnaNo) {
		return sqlsession.delete("qnaboard.qnaBoardDelete",qnaNo);
	}
	//문의내역 댓글 insert
	public int insertQnaComment(QnaComment qc) {
		return sqlsession.insert("qnaboard.insertQnaComment",qc);
	}
	//문의내역 댓글 조회 
	public ArrayList<QnaComment> commentListView(int qnaNo) {
		List list = sqlsession.selectList("qnaboard.commentListView",qnaNo);
		return (ArrayList<QnaComment>)list;
	}
	
}
