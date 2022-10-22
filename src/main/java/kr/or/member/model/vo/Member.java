package kr.or.member.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
	private String memberId;
	private String memberName;
	private String memberPhone;
	private String memberPW;
	private String memberCity;
	private String memberPhoto;
	private String memberIntro;
	private String enrollDate;
	private String memberLevel;
	private String joinType;
}