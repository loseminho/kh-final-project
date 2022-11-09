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

import kr.or.dog.model.vo.Dog;
import kr.or.member.model.dao.MemberDao;
import kr.or.member.model.vo.Member;
import kr.or.member.model.vo.MyCalendar;
import kr.or.member.model.vo.Report;

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

	/*****************************************************/
	
	public Member selectOneProfile(int memberNo) {
		Member other = dao.selectPersonProfile(memberNo);
		
		if(other != null) {
			ArrayList<Dog> dogList = dao.selectDogList(memberNo);
			other.setDogList(dogList);
		}
		
		return other;
	}	
	
	public ArrayList<Report> selectMyReportList(int memberNo) {
		return dao.selectMyReportList(memberNo);
	}
}
