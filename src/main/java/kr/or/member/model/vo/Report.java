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
	private String reportMemberNicname;
	
	private int reportedMemberNo;
	private String reportedMemberNicname;
	
	private int reportType;
	private String reportContent;
	
	private String reportDate;
}
