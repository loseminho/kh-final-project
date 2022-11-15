package kr.or.admin.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminReport {
	private int reportNo;
	private int reportMemberNo;
	private String reportMemberNickname;
	private int reportedMemberNo;
	private String reportedMemberNickname;
	private int reportType;
	private String reportContent;
	private String reportDate;
	private int reportStatus;
	//신고 횟수 
	private int reportCount;
	//select 값 
	private int optionVal;
}
