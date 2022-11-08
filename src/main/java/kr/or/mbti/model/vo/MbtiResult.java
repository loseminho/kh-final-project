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
	private String partnerType;
	private String answers;
	private String dogName;
	private int dogNo;
}
