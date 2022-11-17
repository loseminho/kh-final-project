//게시글 삭제 
function check(){
 	Swal.fire({
        title: '게시글 삭제',
        text: "삭제하시겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			location.href="/qnaBoardDelete.do?";
        }
    })
}

//수정버튼 누를때 
function modifyQnaComment(obj,qcommentNo,qnaNo){

	let param1;
	let param2;
	let param3;
	param1 = obj;
	param2 = qcommentNo;
	param3 = qnaNo;
   
    		$(obj).parent().prev().show(); //입력칸 보여짐 
			$(obj).parent().prev().prev().hide(); //기존 댓글 내용 숨겨짐  
			$(".comment-info").hide();
			$(obj).next().next().hide(); //댓글쓴사람, 날짜 숨겨짐  
			$(obj).text("수정");
			$(obj).next().text("취소");
			$(obj).attr("onclick","modifyComplete(this,"+qcommentNo+","+qnaNo+")");
			$(obj).next().attr("onclick","modifyCancle(this,"+qcommentNo+","+qnaNo+")");
			
}
		//수정 취소
		function modifyCancle(obj,qcommentNo,qnaNo){
			$(obj).parent().prev().hide(); //입력칸 숨겨짐  
			$(obj).parent().prev().prev().show(); //원래의 댓글창  
			$(obj).prev().text("수정");
			//원상태 돌려주기  
			$(obj).prev().attr("onclick","modifyQnaComment(this,"+qcommentNo+","+qnaNo+")");
			$(obj).text("삭제");
			$(obj).attr("onclick","deletQnaComment(this,"+qcommentNo+","+qnaNo+")");
		}
		
		//수정완료  
		function modifyComplete(obj,qcommentNo,qnaNo){
			const form = $("<form action='/updateQnaComment.do' method='post'></form>");
			const qcommentInput = $("<input type ='text' name='qcommentNo'>");
			qcommentInput.val(qcommentNo);
			form.append(qcommentInput); //수정완료 버튼에 qcommentNo 값 보내줌  
			const qnaBoardInput = $("<input type='text' name='qnaNo'>");
			qnaBoardInput.val(qnaNo);
			form.append(qnaBoardInput); //수정완료 버튼에 qnaNo 값 보내줌  
			const qcommentContent = $(obj).parent().prev(); // 수정입력칸  
			form.append(qcommentContent); //수정완료 버튼에 수정한 댓글내용 qcommentContent 보내
			$("body").append(form);
			form.submit();
		}
		
//삭제버튼 누를때 
function deleteQnaComment(obj,qcommentNo,qnaNo){
	const result = confirm('삭제하시겠습니까?');
	if(result){
		//yes
	location.href = "/deleteQnaComment.do?qcommentNo="+qcommentNo+"&qnaNo="+qnaNo;		
	} else {
		//no
	}
}

//줄바꿈 부분 
//textarea 엔터 
var str = $('#textarea').val();
str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
$('#textarea').val(str);

var str = $('.#textarea').val();
str = str.split('<br/>').join("\r\n");
$('#textarea').val(str);