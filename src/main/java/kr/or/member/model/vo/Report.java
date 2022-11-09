package kr.or.member.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Report {
	private int reportNo;
	
	private int reportMemberNo;
	private String reportMemberNickname;
	
	private int reportedMemberNo;
	private String reportedMemberNickname;
	
	private int reportType;
	private String reportContent;
	
	private String reportDate;
}
