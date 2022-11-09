package kr.or.mbti.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MbtiResult {
	private int mbtiResultNo;
	private String mbtiResult;
	private String friendType;
	private String friendTypeName;
	private String partnerType;
	private String partnerTypeName;
	private String answers;
	private String dogName;
	private int dogNo;
	private String mbtiResultName;
	private String mbtiTitle;
	private String mbtiMent1;
	private String mbtiMent2;
	private String mbtiMent3;
	private String mbtiMent4;
	private String mbtiStory;
}
