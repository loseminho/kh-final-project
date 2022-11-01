package kr.or.market.model.vo;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarketDog {
	private int marketNo;
	private int age;
	private String typeName;
	private int typeSize;
	private String saleInfo;
	private String gender;
	private int price;
	private int typeCode;
	private ArrayList<MarketDogFile> fileList;
}
 