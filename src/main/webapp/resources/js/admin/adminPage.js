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
        $(".admin-memberList-row").remove();
        $("#adminMemberAjax-btn").attr("value","1");
        $("#adminMemberAjax-btn").attr("currentCount","0");
        $("#adminMemberAjax-btn").attr("disabled",false);
		$("#adminMemberAjax-btn").css ("cursor","pointer");
        $("#adminMemberAjax-btn").text("더보기");
        $("#adminMemberAjax-btn").trigger("click");
        
        
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
        $(".admin-memberList-row").remove();
        $(".admin-qna-row").remove();
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
        $(".admin-memberList-row").remove();
        $(".admin-report-row").remove();
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
              	tr.append("<td>"+"입양"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 3) {
              	tr.append("<td>"+"회원관련"+"</td>"); 
              	}
              	if(data[i].qnaCateNo == 4) {
              	tr.append("<td>"+"사이트이용"+"</td>"); 
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
              	if(data[i].qnaStatus == 0) {
              	tr.append("<td>"+"<button class='answer-btn'>"+"답변하기"+"</button>"+"</td>");
              	}
              	if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"<button class='answer-btn'>"+"완료"+"</button>"+"</td>");
              	}
              	
              	
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


//관리자 신고내역 리스트 + 더보기 
$("#adminReportAjax-btn").on("click",function(){
	let amount = 7;
	let start = $(this).val();
	$.ajax({
		url : "/adminReportAjax.do",
		type: "post",
		data: {start : start, amount :amount},
		success : function(data){
		
			const list = data.list;
			console.log(list);
			const totalCount = data.totalCount;

			const table = $(".admin-report-table");
			const titleTr = $(".admin-report-tr");
			for(let i=0; i<list.length; i++){
				const tr = $("<tr>");
				tr.attr('class','admin-report-row');
				tr.append("<td>"+list[i].reportNo+"</td>");
				if(list[i].reportType == 1) {
              	tr.append("<td>"+"언어폭력"+"</td>"); 
              	}
              	if(list[i].reportType == 2) {
              	tr.append("<td>"+"성희롱"+"</td>"); 
              	}
              	if(list[i].reportType == 3) {
              	tr.append("<td>"+"목적 외 이용"+"</td>"); 
              	}
              	if(list[i].reportType == 4) {
              	tr.append("<td>"+"신뢰훼손"+"</td>"); 
              	}
              	if(list[i].reportType == 5) {
              	tr.append("<td>"+"기타"+"</td>"); 
              	}
                tr.append("<td>"+list[i].reportMemberNickname+"</td>");
                tr.append("<td>"+list[i].reportContent+"</td>");
                tr.append("<td>"+list[i].reportedMemberNickname+"</td>");
                tr.append("<td>"+list[i].reportCount+"</td>");
                tr.append("<td>"+list[i].reportDate+"</td>");
                
              	tr.append("<td>"+"<select class='report-select'>"+
				"<option value='1'>"+"접근제한"+"</option>"+
				"<option value='2'>"+"이용정지"+"</option>"+
              	+"</select>"+"</td>");
              	
                tr.append("<input type='hidden' class='reportedMemberNo' value="+list[i].reportedMemberNo+">");				
                tr.append("<input type='hidden' class='reportMemberNo' value="+list[i].reportMemberNo+">");				
				
				if(list[i].reportStatus == 1){
				tr.append("<td>"+"완료"+"</td>");
				}
				tr.append("<td>"+"<button class='adminAnswer'>"+"변경"+"</button>"+"</td>");
              	table.append(tr);
              	
              	
			}
			$(".reportPageAjax-result").html(table);
			
			//value 증가 
			$("#adminReportAjax-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#adminReportAjax-btn").attr("currentCount"))+list.length;
			$("#adminReportAjax-btn").attr("currentCount",currentCount);
			$("#adminReportAjax-btn").attr("totalCount",totalCount);
			console.log(totalCount);
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


//신고 버튼 
$(document).on("click",".adminAnswer",function(){
	const index = $(".adminAnswer").index(this);
	const reportedMemberNo = $(".reportedMemberNo").eq(index).val();
	const reportMemberNo = $(".reportMemberNo").eq(index).val();
	const optionVal = $(".report-select").eq(index).val();
	console.log(reportedMemberNo);
	console.log(optionVal);
	location.href="/reportMember.do?reportedMemberNo="+reportedMemberNo+"&optionVal="+optionVal+"&reportMemberNo="+reportMemberNo;
});

//회원등급 리스트 등급 + 더보기 
$("#adminMemberAjax-btn").on("click",function(){
	let amount = 7;
	let start = $(this).val();
	$.ajax({
		url: "/adminMemberList.do",
		type: "post",
		data: {start:start, amount:amount},
		success : function(data){
		
			const list = data.list;
			const totalCount = data.totalCount;
			
			const table = $(".adminPage-userLevel-table");
			const titleTr = $(".admin-memberList-tr");
			
			for(let i=0; i<list.length; i++){
				const tr = $("<tr>");
				tr.attr('class','admin-memberList-row');
				tr.append("<td>"+list[i].memberNo+"</td>");
				tr.append("<td>"+list[i].memberId+"</td>");
				tr.append("<td>"+list[i].memberNickname+"</td>");
                tr.append("<td>"+list[i].enrollDate+"</td>");
                if(list[i].memberLevel == 1) {
              	tr.append("<td>"+"회원"+"</td>"); 
              	}
              	if(list[i].memberLevel == 2) {
              	tr.append("<td>"+"관리자"+"</td>"); 
              	}
              	if(list[i].memberLevel == 3) {
              	tr.append("<td>"+"접근제한 회원"+"</td>"); 
              	}
              	if(list[i].memberLevel == 4) {
              	tr.append("<td>"+"이용제한 회원"+"</td>"); 
              	}
              	tr.append("<td>"+"<select class='changeLevel-select'>"+
				"<option value='1'>"+"회원"+"</option>"+
				"<option value='3'>"+"접근제한 회원"+"</option>"+
				"<option value='4'>"+"이용제한 회원"+"</option>"+
              	+"</select>"+"</td>");
              	
                tr.append("<input type='hidden' class='memberNo' value="+list[i].memberNo+">");				
				tr.append("<td>"+"<button class='adminChangeLevel'>"+"변경"+"</button>"+"</td>");
              	table.append(tr);
              	
			}
			$(".userLevelAjax-result").html(table);
			
			//value 증가 
			$("#adminMemberAjax-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#adminMemberAjax-btn").attr("currentCount"))+list.length;
			$("#adminMemberAjax-btn").attr("currentCount",currentCount);
			$("#adminMemberAjax-btn").attr("totalCount",totalCount);
			console.log(totalCount);
			if(totalCount == currentCount){
				$("#adminMemberAjax-btn").attr("disabled",true);
				$("#adminMemberAjax-btn").css ("cursor","not-allowed");
				$("#adminMemberAjax-btn").text("마지막 게시물입니다 ");
				
			}
			
		},
				error : function() {
			console.log("에러발생");
			}
	}); //ajax 회원등급 페이지 끝 
	
});


//회원리스트 등급 변경 버튼 
$(document).on("click",".adminChangeLevel",function(){
	const index = $(".adminChangeLevel").index(this);
	const memberNo = $(".memberNo").eq(index).val();
	const optionVal = $(".changeLevel-select").eq(index).val();
	console.log(memberNo);
	console.log(optionVal);
	location.href="/changeMemberLevel.do?memberNo="+memberNo+"&optionVal="+optionVal;
});

//회원리스트 검색창 
$("#searchMemberAjax").on("click",function(){

	const optionVal = $("#searchType").val();
	const keyword = $("#keyword").val();
	if(keyword == ''){
		alert ("검색어를 입력하세요");
		const table = $(".adminPage-userLevel-table");
		$(".admin-memberList-row").remove();
		var html = "<tr>조회된 데이터가 없습니다.</tr>";
		table.append(html);
		$("#adminMemberAjax-btn").attr("disabled",true);
		$("#adminMemberAjax-btn").css ("cursor","not-allowed");
		$("#adminMemberAjax-btn").text("마지막 게시물입니다 ");
		
	} else{
	
	let amount = 7;
	let start = $(this).val();
		
	$.ajax({
		url : "/searchAdminMember.do",
       data : {optionVal : optionVal, keyword : keyword, start:start, amount:amount},
        type : "post",
        success : function(data){
        //테이블 초기화 
        $(".admin-memberList-row").remove();
        
        const list = data.list;
		const totalCount = data.totalCount;
		
        if(list.length>=1){
        
         	const table = $(".adminPage-userLevel-table");
            const titleTr = $(".admin-memberList-tr");

            for(let i=0; i<list.length; i++){
                const tr = $("<tr>");
				tr.attr('class','admin-memberList-row');
				tr.append("<td>"+list[i].memberNo+"</td>");
				tr.append("<td>"+list[i].memberId+"</td>");
				tr.append("<td>"+list[i].memberNickname+"</td>");
                tr.append("<td>"+list[i].enrollDate+"</td>");
                if(list[i].memberLevel == 1) {
              	tr.append("<td>"+"회원"+"</td>"); 
              	}
              	if(list[i].memberLevel == 2) {
              	tr.append("<td>"+"관리자"+"</td>"); 
              	}
              	if(list[i].memberLevel == 3) {
              	tr.append("<td>"+"접근제한 회원"+"</td>"); 
              	}
              	if(list[i].memberLevel == 4) {
              	tr.append("<td>"+"이용제한 회원"+"</td>"); 
              	}
              	tr.append("<td>"+"<select class='changeLevel-select'>"+
				"<option value='1'>"+"회원"+"</option>"+
				"<option value='3'>"+"접근제한 회원"+"</option>"+
				"<option value='4'>"+"이용제한 회원"+"</option>"+
              	+"</select>"+"</td>");
              	
                tr.append("<input type='hidden' class='memberNo' value="+list[i].memberNo+">");				
				tr.append("<td>"+"<button class='adminChangeLevel'>"+"변경"+"</button>"+"</td>");
              	table.append(tr);
              	
              
                
            }
            $(".userLevelAjax-result").html(table);
				$("#adminMemberAjax-btn").attr("disabled",true);
				$("#adminMemberAjax-btn").css ("cursor","not-allowed");
				$("#adminMemberAjax-btn").text("마지막 게시물입니다 ");
				
				
			}
            
            
        }
        
	});
	}

});