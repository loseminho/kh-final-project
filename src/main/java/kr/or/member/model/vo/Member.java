package kr.or.member.model.vo;

import java.util.ArrayList;

import kr.or.dog.model.vo.Dog;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
	private int memberNo;
	private String memberId;
	private String memberNickname;
	private String memberPhone;
	private String memberPw;
	private String memberCity;
	private String memberPhoto;
	private String memberIntro;
	private String enrollDate;
	private int memberLevel;
	private String joinType;
	private ArrayList<Dog> dogList;
	
	//select 값 
	private int optionVal;
}