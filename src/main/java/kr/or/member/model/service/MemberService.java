package kr.or.member.model.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.or.dm.model.vo.DirectMessage;
import kr.or.dog.model.vo.Dog;
import kr.or.member.model.dao.MemberDao;
import kr.or.member.model.vo.Member;
import kr.or.member.model.vo.MyCalendar;
import kr.or.member.model.vo.Report;
import kr.or.walk.model.vo.AppliedWalkInfo;
import kr.or.walk.model.vo.Walk;
import kr.or.walk.model.vo.WalkPageData;

@Service
public class MemberService {
	@Autowired
	private MemberDao dao;

//	public Member checkId(String kakao_email) {
//		return dao.checkId(kakao_email);
//	}

	@Transactional
	public int insertKakao(Member m) {
		return dao.insertKakao(m);
	}

	public void kakaoLogout(String access_Token) {
		String reqURL = "https://kapi.kakao.com/v1/user/logout";
	    try {
	        URL url = new URL(reqURL);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Authorization", "Bearer " + access_Token);
	        
	        int responseCode = conn.getResponseCode();
	        System.out.println("responseCode : " + responseCode);
	        
	        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        
	        String result = "";
	        String line = "";
	        
	        while ((line = br.readLine()) != null) {
	            result += line;
	        }
	        System.out.println(result);
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}

	@Transactional
	public int kakaoUnlink(String access_Token, String memberId) {
		String reqURL = "https://kapi.kakao.com/v1/user/unlink";
		int deleteResult = 0;
	    try {
	        URL url = new URL(reqURL);
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Authorization", "Bearer " + access_Token);
	        
	        int responseCode = conn.getResponseCode();
	        System.out.println("responseCode : " + responseCode);
	        
	        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        
	        String result = "";
	        String line = "";
	        
	        while ((line = br.readLine()) != null) {
	            result += line;
	        }
	        System.out.println(result);
	        
	        deleteResult = dao.deleteMember(memberId);
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	    
	    return deleteResult;
	}

	public Member selectOneMemberEnc(Member member) {
		return dao.selectOneMember(member);
	}

	public Member findId(Member member) {
		return dao.findId(member);
	}

	@Transactional
	public int updatePwEnc(Member m) {
		return dao.updatePw(m);
	}

	@Transactional
	public int insertMemberEnc(Member m) {
		return dao.insertMember(m);
	}

	public Member checkPhone(Member m) {
		return dao.checkPhone(m);
	}

	@Transactional
	public int updateMember(Member m) {
		return dao.updateMember(m);
	}

	@Transactional
	public int deleteMember(String memberId) {
		return dao.deleteMember(memberId);
	}

	public ArrayList<MyCalendar> selectMyCalendar(String memberId) {
		return dao.selectMyCalendar(memberId);
	}
	
	public ArrayList<DirectMessage> selectAllSendDm(int memberNo) {
		return dao.selectAllSendDm(memberNo);
	}
	
	public ArrayList<DirectMessage> selectAllReceiveDm(int memberNo) {
		return dao.selectAllReceiveDm(memberNo);
	}
	
	public DirectMessage selectOneSendDm(int dmNo) {
		return dao.selectOneSendDm(dmNo);
	}

	@Transactional
	public DirectMessage selectOneReceiveDm(int dmNo) {
		int result = dao.updateDmReadCheck(dmNo);
		if(result > 0) {
			return dao.selectOneReceiveDm(dmNo);
		} else {
			return null;
		}
	}

	@Transactional
	public int insertReplyDm(DirectMessage dm) {
		return dao.insertReplyDm(dm);
	}
	/*****************************************************/
	
	public Member selectOneProfile(int memberNo) {
		Member other = dao.selectPersonProfile(memberNo);
		
		if(other != null) {
			ArrayList<Dog> dogList = dao.selectDogList(memberNo);
			other.setDogList(dogList);
		}
		
		return other;
	}	
	
	/*****************************************************/
	
	@Transactional
	public int insertReport(Report report) {
		int repoarAble = dao.checkReportAble(report);
		
		if(repoarAble == 0) {
			return dao.insertReport(report);
		}else {
			return -1;
		}
	}
	
	public ArrayList<Report> selectMyReportList(int reportMemberNo) {
		return dao.selectMyReportList(reportMemberNo);
	}

	/*****************************************************/
	
	public WalkPageData<AppliedWalkInfo> selectMyApplyList(String memberId, int reqPage) {
		int numPerPage = 10;
		
		int end = numPerPage * reqPage - 1;
		int start = end - numPerPage + 1;
		
		ArrayList<AppliedWalkInfo> appliedList = dao.selectMyApplyList(memberId, start, end);
		
		int totalCount = dao.selectMyApplyCount(memberId);
		int totalPage = 0;
		if(totalCount % numPerPage == 0) {
			totalPage = totalCount / numPerPage;
		}else {
			totalPage = totalCount / numPerPage + 1;
		}
		
		int pageNaviSize = 5;
		int pageNo = ((reqPage-1) / pageNaviSize) * pageNaviSize + 1;
		
		String pageNavi = "<ul>";
		if(pageNo != 1) {
			pageNavi += "<li>";
			pageNavi += "<a href='/selectMyApplyList.do?memberId=" + memberId + "&reqPage=" + (pageNo-1) + "'>";
			pageNavi += "<span>&lt;</span>";
			pageNavi += "</a></li>";
		}

		for(int i=0; i<pageNaviSize; i++) {
			if(pageNo == reqPage) {
				pageNavi += "<li>";
				pageNavi += "<a href='/selectMyApplyList.do?memberId=" + memberId + "&reqPage=" + pageNo + "'>";
				pageNavi += pageNo;
				pageNavi += "</a></li>";
			}else {
				pageNavi += "<li>";
				pageNavi += "<a href='/selectMyApplyList.do?memberId=" + memberId + "&reqPage=" + pageNo + "'>";
				pageNavi += pageNo;
				pageNavi += "</a></li>";
			}
			pageNo++;
			if(pageNo > totalPage) {
				break;
			}
		}

		if(pageNo <= totalPage) {
			pageNavi += "<li>";
			pageNavi += "<a href='/selectMyApplyList.do?memberId=" + memberId + "&reqPage=" + pageNo + "'>";
			pageNavi += "<span>&gt;</span>";
			pageNavi += "</a></li>";
		}
		pageNavi += "</ul>";
		
		WalkPageData<AppliedWalkInfo> wpd = new WalkPageData<>(appliedList, pageNavi);
		
		return wpd;
	}

	public WalkPageData<Walk> selectMyAttendList(int memberNo, String memberId, int reqPage) {
		//ArrayList<Walk> myMadeList = dao.selectMyMadeList(memberNo);
		
		//ArrayList<Walk> myAppliedList = dao.selectMyAppliedList(memberId);
		
		
		return null;
	}

}
