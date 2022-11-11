package kr.or.admin.model.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.admin.model.vo.AdminQna;

@Repository
public class AdminDao {
	@Autowired
	private SqlSessionTemplate sqlSession;

	//관리자 문의내역 총 게시물 수  
	public int adminQnaCount() {
		int totalCount = sqlSession.selectOne("admin.adminQnaCount");
		return totalCount;
	}
	//관리자 문의내역 더보기 버튼
	public ArrayList<AdminQna> moreAdminQna(HashMap<String, Object> map) {
		List list = sqlSession.selectList("admin.moreAdminQna",map);
		return (ArrayList<AdminQna>)list;
	}
	
}
