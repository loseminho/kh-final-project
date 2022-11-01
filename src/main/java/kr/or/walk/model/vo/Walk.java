package kr.or.walk.model.vo;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Walk {
	private int wmNo;						// 게시물 번호
	private String wmLeader;				// 모임 장
	private String wmTitle;					// 게시물 제목
	private String wmSubTitle;				// 게시물 부제목
	private String wmType;					// 산책갈개 분류 (산책갈개, 강아지 자랑)
	private String wmMeetStart; 			// 산책 시작 시간 
	private String wmMeetEnd; 				// 산책 끝 시간
	private String wmAddr; 					// 산책 만남 장소
	private String wmRangeDog;				// 1인 반려견 최대 수
	private String wmRangeMember;			// 산책갈개 모임 최대 인원
	private String wmContent;				// 산책갈개 내용
	private int wmView;						// 산책갈개 조회수
	private String wmDate;					// 산책갈개 작성일
	private String wmStat;					// 산책갈개 종료 유무
	private String rnum;
	private String tag1;
	private String tag2;
	private String tag3;
	private String tag4;
	private String tag5;
	private String tag6;
	private ArrayList<WalkFile> fileList;	// 산책갈개 게시물 업로드 파일
	
	// 화면 - 
	// (게시물보기-글쓴이)수정 버튼 추가, (글쓰기)모임 최대 인원 작성 칸 ,
	// (글쓰기)파일 업로드 칸 생성, (글보기)분류 칸 생성 

}
