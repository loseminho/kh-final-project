package kr.or.member.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MyCalendar {
	private int wmNo;
	private String wmTitle;
	private String startdate;
	private String enddate;
}
