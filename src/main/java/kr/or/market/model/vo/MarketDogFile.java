package kr.or.market.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarketDogFile {
	private int marketNo;
	private int fileNo;
	private String filePath;
	private String fileName; 
	private int fileProcedure;
}
