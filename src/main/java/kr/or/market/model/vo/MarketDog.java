package kr.or.market.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MarketDog {
	private int marketNo;
	private int age;
	private int size;
	private int typeCode;
	private String saleInfo;
	private String gender;
	private int price;
}
 