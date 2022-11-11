package kr.or.admin.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminQna {
	private int qnaNo;
	private String qnaWriter;
	private String qnaTitle;
	private String qnaContent;
	private int qnaViews;
	private String qnaDate;
	private int qnaCateNo;
	private int qnaStatus;
	
	//검색필터
	private String searchType;
	private String keyword;
	
	//총게시물 수 
	private int totalCount;
}
