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
		String pageNavi = "<nav aria-label='Page navigation example'>";
		pageNavi += "<ul class='pagination'>";
		if (pageNo != 1) {
			pageNavi += "<li class='page-item'><a class='page-link' href='/noticeList.do?reqPage=" + (pageNo - 1)
					+ "'>Previous</a></li>";
		}
		for (int i = 0; i < pageNaviSize; i++) {
			if (pageNo == reqPage) {
				pageNavi += "<li class='page-item active' aria-current='page'><a class='page-link' href='/noticeList.do?reqPage="
						+ pageNo + "'>" + pageNo + "</a></li>";
			} else {
				pageNavi += "<li class='page-item'><a class='page-link' href='/noticeList.do?reqPage=" + pageNo + "'>"
						+ pageNo + "</a></li>";
			}
			pageNo++;
			if (pageNo > totalPage) {
				break;
			}
		}

		if (pageNo <= totalPage) {
			pageNavi += "<li class='page-item'><a class='page-link' href='/noticeList.do?reqPage=" + pageNo
					+ "'>Next</a></li>";
		}
		pageNavi += "</ul>";
		pageNavi += "</nav>";
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
	
	//공지사항 수정 
	public int updateNotice(Notice n, int[] fileNoList) {
		//공지사항 수정 
		int result = dao.updateNotice(n);
		if(result>0) {
			//새로운 첨부파일이 있으면 insert
			for(NoticeFile nf : n.getFileList()) {
				nf.setNoticeNo(n.getNoticeNo());
				result += dao.insertFile(nf);
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

}
