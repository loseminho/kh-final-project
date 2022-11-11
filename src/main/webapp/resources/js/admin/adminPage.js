//처음페이지 셋팅 
$(document).ready(function(){
	$(".admin-tab>a").eq(1).click();
});

// tab 이동
const tabs = $(".admin-tab>a");

tabs.on("click",function(){
    const index = $(this).index();
    if(index == 0){
        tabs.eq(0).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(1).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        tabs.eq(2).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".userLevel-content").show();
        $(".adminPage-content").hide();
        $(".reportPage-content").hide();
        
    } else if(index == 1){
    
    	tabs.eq(1).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        tabs.eq(2).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".userLevel-content").hide();
        $(".adminPage-content").show();
        $(".reportPage-content").hide();
        $("#adminQnaAjax-btn").attr("value","1");
        $("#adminQnaAjax-btn").attr("currentCount","0");
        $("#adminQnaAjax-btn").attr("disabled",false);
		$("#adminQnaAjax-btn").css ("cursor","pointer");
        $("#adminQnaAjax-btn").trigger("click");
        
    } else if(index == 2){
    	tabs.eq(2).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        tabs.eq(1).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".userLevel-content").hide();
        $(".adminPage-content").hide();
        $(".reportPage-content").show();
    }
});

// 문의내역 리스트 + 더보기 
$("#adminQnaAjax-btn").on("click",function(){
	let amount = 7;
	let start = $(this).val();
	$.ajax({
		url : "/adminQnaAjax.do",
		type: "post",
		data: {start : start, amount :amount},
		success : function(data){
			console.log(data);
			const table = $(".adminPageQna-table");
			const titleTr = $(".admin-qna-tr");
			
			for(let i=0; i<data.lenth; i++){
				const tr = $("<tr>");
				tr.attr('class','admin-qna-row');
				tr.append("<td>"+data[i].qnaNo+"</td>");
				if(data[i].qnaCateNo == 1) {
              	tr.append("<td>"+"산책메이트 찾기"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 2) {
              	tr.append("<td>"+"애견용품 나눔"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 3) {
              	tr.append("<td>"+"입양"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 4) {
              	tr.append("<td>"+"회원관련"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 5) {
              	tr.append("<td>"+"기타"+"</td>"); 
              	} 
                tr.append("<td>"+data[i].qnaTitle+"</td>");
                tr.append("<td>"+data[i].qnaWriter+"</td>");
                tr.append("<td>"+data[i].qnaDate+"</td>");
                
                if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              	}
              	if(data[i].qnaStatus == 2) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              	}
              	tr.append("<td>"+"<button>"+"답변하기"+"</button>"+"</td>");
              	
              	table.append(tr);
			}
			$(".adminPageQnaAjax").html(table);
			
			//value 증가 
			$("#adminQnaAjax-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#adminQnaAjax-btn").attr("currentCount"))+data.length;
			$("#adminQnaAjax-btn").attr("currentCount",currentCount);
			const totalCount = $("#adminQnaAjax-btn").attr("totalCount");
			if(totalCount == currentCount){
				$("#adminQnaAjax-btn").attr("disabled",true);
				$("#adminQnaAjax-btn").css ("cursor","not-allowed");
			}
		},
		error : function() {
			console.log("에러발생");
		}
		
	}); //ajax 
});

