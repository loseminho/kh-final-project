package kr.or.dog.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dog {
	private int dogNo;
	private int memberNo;
	private String dogName;
	private int dogTypeNo;
	private String dogType; // 품종 이름 + 품종 사이즈 (소형견, 중형견, 대형견)
	private String dogSize;
	private String dogGender;
	private String dogNeutral;
	private String dogVacc;
	private int dogAge;
	private int dogWeight;
	private String dogPhoto;
}
