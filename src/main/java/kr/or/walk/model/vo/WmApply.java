package kr.or.walk.model.vo;

import java.util.ArrayList;

import kr.or.member.model.vo.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WmApply {
	private int wmApplyNo;
	private int wmNo;
	private String memberId;
	private String applyContent;
	private int applyStat;
	private String memberNickname;
	private String memberPhoto;
	private String memberIntro;
}
