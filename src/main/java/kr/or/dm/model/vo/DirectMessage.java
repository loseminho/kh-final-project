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
	private int sender;
	private int receiver;
	private String dmContent;
	private Date dmDate;
	private int readCheck;
}
