package kr.or.walk.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WalkFile {
	private int fileNo;
	private int wmNo;
	private String filename;
	private String filepath;
}
