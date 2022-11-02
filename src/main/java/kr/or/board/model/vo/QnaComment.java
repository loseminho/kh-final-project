package kr.or.board.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QnaComment {
	private int qCommentNo;
	private String qCommentWriter;
	private int qnaNo;
	private String qCommentContent;
	private String qCommentTime;
	private int qCommentRef;
}
