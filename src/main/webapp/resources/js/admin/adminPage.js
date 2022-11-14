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
        $(".admin-qna-row").remove();
        $(".admin-report-row").remove();
        
        
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
        $(".admin-report-row").remove();
        $("#adminQnaAjax-btn").attr("value","1");
        $("#adminQnaAjax-btn").attr("currentCount","0");
        $("#adminQnaAjax-btn").attr("disabled",false);
		$("#adminQnaAjax-btn").css ("cursor","pointer");
        $("#adminQnaAjax-btn").text("더보기");
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
        $(".admin-qna-row").remove();
        $("#adminReportAjax-btn").attr("value","1");
        $("#adminReportAjax-btn").attr("currentCount","0");
        $("#adminReportAjax-btn").attr("disabled",false);
		$("#adminReportAjax-btn").css ("cursor","pointer");
        $("#adminReportAjax-btn").text("더보기");
        $("#adminReportAjax-btn").trigger("click");
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
			const table = $(".adminPageQna-table");
			const titleTr = $(".admin-qna-tr");
			for(let i=0; i<data.length; i++){
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
                
                if(data[i].qnaStatus == 0) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              	}
              	if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변완료"+"</td>");
              	}
              	tr.append("<td>"+"<button class='answer-btn'>"+"답변하기"+"</button>"+"</td>");
              	
              	table.append(tr);
			}
			$(".adminQnaAjaxResult").html(table);
			
			//value 증가 
			$("#adminQnaAjax-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#adminQnaAjax-btn").attr("currentCount"))+data.length;
			$("#adminQnaAjax-btn").attr("currentCount",currentCount);
			const totalCount = $("#adminQnaAjax-btn").attr("totalCount");
			if(totalCount == currentCount){
				$("#adminQnaAjax-btn").attr("disabled",true);
				$("#adminQnaAjax-btn").css ("cursor","not-allowed");
				$("#adminQnaAjax-btn").text("마지막 게시물입니다 ");
			}
		},
		error : function() {
			console.log("에러발생");
		}
		
	}); //ajax 
});

// 답변하기 버튼 

$(document).on("click",".answer-btn",function(){
	const btn = $(".answer-btn");
	var index = btn.index(this);
	console.log(index);
	let qnaNo = btn.eq(index).parent().siblings().first().text();
	$("#qnaBoardNo").val(btn.eq(index).parent().siblings().first().text());
	$("#qnaViewFrm").submit();
});

//관리자 문의내역 검색 ajax

$("#searchQnaStatusAjax").on("click",function(){

	const searchType = $("#searchType").val();
	const keyword = $("#keyword").val();
	
	if(searchType != 0 ){

	$.ajax({
		url : "/searchAdminQna.do?searchType="+searchType+"&keyword="+keyword,
        type : "post",
        success : function(data){
        //테이블 초기화 
        console.log(data);
        $(".admin-qna-row").remove();
        if(data.length>=1){
        
         	const table = $(".adminPageQna-table");
            const titleTr = $(".admin-qna-tr");

            for(let i=0; i<data.length; i++){
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
              
              if(data[i].qnaStatus == 0) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              }
              if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              }
              tr.append("<td>"+"<button class='answer-btn'>"+"답변하기"+"</button>"+"</td>");
              table.append(tr);
              
                
            }
            $(".adminQnaAjaxResult").html(table);
        }
        }
	});
	
	} else {
		alert(" 문의유형을 선택하고 검색어를 입력하세요  ");
	}
});


//관리자 신고내역 리스트 + 더보기 
$("#adminReportAjax-btn").on("click",function(){
	let amount = 7;
	let start = $(this).val();
	$.ajax({
		url : "/adminReportAjax.do",
		type: "post",
		data: {start : start, amount :amount},
		success : function(data){
			console.log(data);
			const table = $(".admin-report-table");
			const titleTr = $(".admin-report-tr");
			for(let i=0; i<data.length; i++){
				const tr = $("<tr>");
				tr.attr('class','admin-report-row');
				tr.append("<td>"+data[i].reportNo+"</td>");
				if(data[i].reportType == 1) {
              	tr.append("<td>"+"언어폭력"+"</td>"); 
              	}
              	if(data[i].reportType == 2) {
              	tr.append("<td>"+"성희롱"+"</td>"); 
              	}
              	if(data[i].reportType == 3) {
              	tr.append("<td>"+"목적 외 이용"+"</td>"); 
              	}
              	if(data[i].reportType == 4) {
              	tr.append("<td>"+"신뢰훼손"+"</td>"); 
              	}
              	if(data[i].reportType == 5) {
              	tr.append("<td>"+"기타"+"</td>"); 
              	}
                tr.append("<td>"+data[i].reportMemberNickname+"</td>");
                tr.append("<td>"+data[i].reportContent+"</td>");
                tr.append("<td>"+data[i].reportedMemberNickname+"</td>");
                tr.append("<td>"+data[i].reportCount+"</td>");
                tr.append("<td>"+data[i].reportDate+"</td>");
                
              	tr.append("<td>"+"<select class='report-select'>"+
				"<option value='1'>"+"선택하세요"+"</option>"+
				"<option value='2'>"+"접근제한"+"</option>"+
				"<option value='3'>"+"탈퇴"+"</option>"+
              	+"</select>"+"</td>");
                tr.append("<input type='hidden' class='reportedMemberNo' value="+data[i].reportedMemberNo+">");				
				tr.append("<td>"+"<button class='adminAnswer'>"+"변경"+"</button>"+"</td>");
              	table.append(tr);
              	
              	
			}
			$(".reportPageAjax-result").html(table);
			
			//value 증가 
			$("#adminReportAjax-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#adminReportAjax-btn").attr("currentCount"))+data.length;
			$("#adminReportAjax-btn").attr("currentCount",currentCount);
			const totalCount = $("#adminReportAjax-btn").attr("totalCount");
			if(totalCount == currentCount){
				$("#adminReportAjax-btn").attr("disabled",true);
				$("#adminReportAjax-btn").css ("cursor","not-allowed");
				$("#adminReportAjax-btn").text("마지막 게시물입니다 ");
			}
		},
		error : function() {
			console.log("에러발생");
		}
		
	}); //ajax 신고내역 더보기 끝 
});

//신고 
$(document).on("click",".adminAnswer",function(){
	const index = $(".adminAnswer").index(this);
	const reportedMemberNo = $(".reportedMemberNo").eq(index).val();
	console.log(reportedMemberNo);
	location.href="/reportMember.do?reportMemberNo=reportMemberNo";
});