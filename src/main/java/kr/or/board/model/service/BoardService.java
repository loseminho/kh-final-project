package kr.or.board.model.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.board.model.dao.BoardDao;
import kr.or.board.model.vo.QnaBoard;

@Service
public class BoardService {
	@Autowired
	private BoardDao dao;

	public ArrayList<QnaBoard> allQnaBoard() {
		return dao.allQnaBoard();
	}

}
