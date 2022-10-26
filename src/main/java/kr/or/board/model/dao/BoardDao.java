package kr.or.board.model.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.board.model.vo.QnaBoard;

@Repository
public class BoardDao {
	@Autowired
	private SqlSessionTemplate sqlsession;

	public ArrayList<QnaBoard> allQnaBoard() {
		List list = sqlsession.selectList("qnaboard.allQnaBoard");
		return (ArrayList<QnaBoard>)list;
		}
}
