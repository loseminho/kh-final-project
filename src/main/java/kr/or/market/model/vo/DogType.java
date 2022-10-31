package kr.or.market.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DogType {
	private int typeCode;
	private String typeName;
	private int typeSize;
}
