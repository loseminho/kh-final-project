package kr.or.mbti.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Mbti {
	private int mbtiNo;
	private int memberNo;
	private int dogNo;
	private String dogMbtiType;
}
