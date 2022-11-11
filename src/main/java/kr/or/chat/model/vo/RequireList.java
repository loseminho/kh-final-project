package kr.or.chat.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequireList {
	private int wmLeader;
	private int boardNo;
	private String memberId;
	private String writer;
	private int status;
	private String boardTitle;
}
