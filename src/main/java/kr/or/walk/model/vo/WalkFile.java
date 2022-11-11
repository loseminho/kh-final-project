package kr.or.walk.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WalkFile {
	private int wmNo;
	private int fileNo;
	private String filename;
	private String filepath;
}
