package kr.or.walk.model.vo;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WalkPageData<T> {
	private ArrayList<T> list;
	private String pageNavi;
}
