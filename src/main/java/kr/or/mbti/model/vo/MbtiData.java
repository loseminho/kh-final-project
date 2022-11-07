package kr.or.mbti.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MbtiData {
	private int mbtiTypeNo;
	private String mbtiAnswer;
	private String mbtiType;
}
