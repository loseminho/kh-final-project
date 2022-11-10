package kr.or.chat.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatHistory {
	private int boardNo;
	private int memberNo;
	private String memberId;
	private String chat;
	private String sendDate;
}
