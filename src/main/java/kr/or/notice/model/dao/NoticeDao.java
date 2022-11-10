package kr.or.notice.model.dao;



import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kr.or.notice.model.vo.Notice;
import kr.or.notice.model.vo.NoticeFile;

@Repository
public class NoticeDao {
	@Autowired
	private SqlSessionTemplate sqlSession;
	//공지사항 등록 
	public int insertNotice(Notice n) {
		return sqlSession.insert("notice.insertNotice",n);
	}
	//공지사항 게시물 번호 조회 
	public int selectNoticeNo() {
		return sqlSession.selectOne("notice.selectNoticeNo");
	}
	//공지사항 file insert 
	public int insertFile(NoticeFile nf) {
		return sqlSession.insert("notice.insertNoticeFile",nf);
	}
	//공지사항 목록 조회 
	public ArrayList<Notice> noticeList(HashMap<String, Object> map) {
		List list = sqlSession.selectList("notice.allnoticeList",map);
		return (ArrayList<Notice>)list;
	}
	//공지사항 상세보기 
	public Notice selectOneNotice(int noticeNo) {
		return sqlSession.selectOne("notice.selectOneNotice",noticeNo);
	}
	//공지사항 조회수 
	public int updateHit(int noticeNo) {
		return sqlSession.update("notice.updateNoticeHit",noticeNo);
	}
	//공지사항 삭제 
	public int noticeDelete(int noticeNo) {
		return sqlSession.delete("notice.noticeDelete",noticeNo);
	}
	//공지사항 파일 목록 불러오기 
	public ArrayList<NoticeFile> selectFileList(int noticeNo) {
		List list = sqlSession.selectList("notice.selectNoticeFileList");
		return (ArrayList<NoticeFile>)list;
	}
	//전체게시물수 
	public int selectBoardCount() {
		int totalCount = sqlSession.selectOne("notice.totalCount");
		return totalCount;
	}
	//공지사항 수정 
	public int updateNotice(Notice n) {
		return sqlSession.update("notice.updateNotice",n);
	}
	//파일 삭제 
	public int deleteFile(int fileNo) {
		return sqlSession.delete("notice.deleteNoticeFile",fileNo);
	}
	

}
