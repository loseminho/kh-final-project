package kr.or.board.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.board.model.vo.QnaBoard;
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
	/*문의내역 view
	public QnaBoard selectOneQna(int qnaNo) {
		return sqlsession.selectOne("qnaboard.selectOneQna",qnaNo);
	}
	*/
	
}
