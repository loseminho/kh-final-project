package kr.or.shop.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Shop {
	private int productNo;
	private String productName;
	private String productInfo;
	private String price;
	private int rate;
}
