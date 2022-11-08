package kr.or.notice.model.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.or.notice.model.dao.NoticeDao;
import kr.or.notice.model.vo.Notice;
import kr.or.notice.model.vo.NoticeFile;
import kr.or.notice.model.vo.NoticePageData;

@Service
public class NoticeService {
	@Autowired
	private NoticeDao dao;
	
	//공지사항 작성 
	public int insertNotice(Notice n) {
		int result = dao.insertNotice(n);
		if(result>0) {
			int noticeNo = dao.selectNoticeNo();
			for(NoticeFile nf : n.getFileList()) {
				nf.setNoticeNo(noticeNo);
				result += dao.insertFile(nf);
			}
		}
		return result;
	}
	//공지사항 페이지 
	public NoticePageData noticeList(int reqPage) {
		//한페이지당 보여줄 게시물 수 
		int numPerPage = 5;
		int end = reqPage * numPerPage;
		int start = end - numPerPage+1;
		
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("end", end);
		ArrayList<Notice> list = dao.noticeList(map);
		//pageNavi 시작
		//전체 게시물 수 구해오기 
		int totalCount = dao.selectBoardCount();
		//전체 페이지 수 계산
		int totalPage = 0;
		if(totalCount%numPerPage == 0) {
			totalPage = totalCount/numPerPage;
		} else {
			totalPage = totalCount/numPerPage +1;
		}
		
		int pageNaviSize = 5;
		int pageNo = 1;
		if(reqPage>3) {
			pageNo = reqPage -2;
		}
		//pageNavi 생성 
		String pageNavi = "<div class = 'pagination'>";
		if(pageNo != 1) {
			pageNavi += "<a href='/notice.do?reqPage="+(pageNo-1)+"'>[이전]</a>";
			
		}
		//페이지 숫자 생성
		for(int i=0; i<pageNaviSize; i++) {
			if(pageNo == reqPage) {
				pageNavi += "<span>"+pageNo+"</span>";
			} else {
				pageNavi += "<a href='/notice.do?reqPage="+pageNo+"'>"+pageNo+"</a>";
			}
				pageNo++;
				if(pageNo >totalPage) {
					break;
				}
		}
		//다음버튼 생성 
		if(pageNo <= totalPage) {
			pageNavi += "<a href='/notice.do?reqPage="+pageNo+"'>다음</a>";
		}
		NoticePageData npd = new NoticePageData(list, pageNavi, reqPage, numPerPage);
		return npd;
	}
	//공지사항 상세보기 
	public Notice selectOneNotice(int noticeNo) {
		dao.updateHit(noticeNo);
		return dao.selectOneNotice(noticeNo);
	}

	//공지사항 삭제 
	public ArrayList<NoticeFile> deleteNotice(int noticeNo) {
		//해당 파일 삭제 
		ArrayList<NoticeFile>fileList = dao.selectFileList(noticeNo);
		System.out.println(fileList);
		//notice 테이블에서 삭제 
		int result = dao.noticeDelete(noticeNo);
		if(result>0) {
			return fileList;
		} else {
			return null;			
		}
	}

}
