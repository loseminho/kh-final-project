function modifyQnaComment(obj,qnaCommentNo,qnaNo){
   
   
    $(obj).parent().prev().show();
			$(obj).parent().prev().prev().hide(); //입력칸 보여짐 
			$(".comment-info").hide();
			$(obj).next().next().hide();
			$(obj).text("수정");
			$(obj).next().text("취소");
			$(obj).attr("onclick","modifyComplete(this,"+qc.qcommentNo+","+qb.qnaNo+")");
			$(obj).next().attr("onclick","modifyCancle(this,"+qc.qcommentNo+","+qb.qnaNo+")");
			
}
		//수정 취소
		function modifyCancle(obj,qcommentNo,qnaNo){
			$(obj).parent().prev().hide(); //입력칸 숨겨짐  
			$(obj).parent().prev().prev().show(); //원래의 댓글창  
			
			$(obj).prev().text("수정");
			$(obj).prev().attr("onclick","modifyQnaComment(this,"+qc.qcommentNo+","+qb.qnaNo+")");
			$(obj).text("삭제");
			$(obj).attr("onclick","deleteComment(this,"+qc.qcommentNo+","+qb.qnaNo+")");
		}
		
		//수정완료  
		function modifyComplete(obj,qcommentNo,qnaNo){
			const form = $("<form action='/updateQnaComment.do' method='post'></form>");
			const qcommentInput = $("<input type ='text' name='qcommentNo'>");
			qcommentInput.val(qc.qcommentNo);
			form.append(qcommentInput);
			const qnaBoardInput = $("<input type='text' name='qnaNo'>");
			qnaBoardInput.val(qb.qnaNo);
			form.append(qnaBoardInput);
			const qcommentContent = $(obj).parent().prev(); // 수정입력칸  
			form.append(qcommentContent);
			$("body").append(form);
			form.submit();
		}