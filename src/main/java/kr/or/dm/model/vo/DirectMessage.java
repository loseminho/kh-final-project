package kr.or.dm.model.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DirectMessage {
	private int dmNo;
	private int senderNo;
	private String senderName;
	private String senderId;
	private int receiverNo;
	private String receiverName;
	private String receiverId;
	private String dmContent;
	private String dmDate;
	private int readCheck;
	private String dmCate;
	private int rnum;
}
