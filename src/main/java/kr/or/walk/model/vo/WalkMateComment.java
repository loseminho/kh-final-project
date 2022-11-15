package kr.or.walk.model.vo;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WalkMateComment {
	private int wmcNo;						
	private int wmNo;					//댓글이 속한 게시믈 번호
	private int wmcGroup;				//댓글 그룹 번호(댓글과 대댓글 그룹화)
	private int wmcGroupOrder;			//그룹 내 댓글 순서(오래된 글~ 최신글 오름차순)
	private int wmcClass;				//그룹 내 댓글 깊이(댓글인지 대댓글인지)
	private int memberNo;
	private String wmcContent;
	private String wmcDate;
	private String memberNickname;
	private String memberPhoto;
}

