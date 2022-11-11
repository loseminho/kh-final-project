package kr.or.walk.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppliedWalkInfo {
	private String wmTitle;
	private String wmMeetTime;
	private String wmAddr;
	private int applyStat;
}