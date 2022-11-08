package kr.or.notice.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoticeFile {
	private int fileNo;
	private int noticeNo;
	private String filename;
	private String filepath;
}
