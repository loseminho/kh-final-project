package kr.or.board.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QnaComment {
	private int qcommentNo;
	private String qcommentWriter;
	private int qnaNo;
	private String qcommentContent;
	private String qcommentTime;
	private int qcommentRef;
}
