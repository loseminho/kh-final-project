package kr.or.board.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QnaFile {
	private int fileNo;
	private int qnaNo;
	private String filename;
	private String filepath;
}
