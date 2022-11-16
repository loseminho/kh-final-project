let page = 0;
//처음페이지 셋팅 
$(document).ready(function(){
	$(".faqqna-tab>li").eq(0).click();
	category.on("click", function(){
		var $index = category.index(this);
		if($index == 0){
			
		}
	});
	
});

// 더보기 구현
//전체 문의사항 질문 개수 
let qnaTotal = $(".question").length;

$(".add-btn>button").on("click",function(){
	for(let i=6; i<qnaTotal; i++){
		$(".question").eq(i).show();
		$(this).text("마지막 게시물 입니다 ");
	}
});


//faq, qna 이동 

const tabs = $(".faqqna-tab>li");

tabs.on("click",function(){
    const index = $(this).index();
    if(index-page<1){
        tabs.eq(0).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(1).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".qna-content").hide();
        $(".faq-content").show();
         $(".qna-row").remove();

        
    }else{
        tabs.eq(1).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".faq-content").hide();
        $(".qna-content").show();
        $("#qnaAjaxAdd-btn").attr("value","1");
        $("#qnaAjaxAdd-btn").attr("currentCount","0");
        $("#qnaAjaxAdd-btn").attr("disabled",false);
		$("#qnaAjaxAdd-btn").css ("cursor","pointer");
		$("#qnaAjaxAdd-btn").text("더보기");
        $("#qnaAjaxAdd-btn").trigger("click");

    }
});



//카테고리별 이동 
let category = $(".faq-category>li");
category.on("click",function(){
    const categoryIndex = category.index(this); //클릭한 카테고리 
	console.log(categoryIndex);
        if(categoryIndex == 0){ //전체카테고리 
            $(".answer").hide();
            $(".question").hide();
        	for(let i=0; i<6; i++){
            $(".question").eq(i).show(); 
            $(".add-btn>button").show();
            $(".add-btn>button").text("더보기");       		
        	};
  

        }else{
        	
            const categoryPage = $(".faq-wrap").eq(categoryIndex-1); //카테고리페이지 
			const categoryQ = categoryPage.children(); //카테고리페이지 질문
			console.log(categoryQ); 
            $(".faq-wrap").hide();
            $(".answer").hide();
            $(".faq-wrap").eq(categoryIndex-1).show();
            if(categoryIndex-1>0){
            	for(let i=0; i<6; i++){
            		categoryQ.eq(i).show();
            	$(".add-btn>button").show();
            	}
            }
            $(".add-btn>button").hide();
        }
        
        category.css({
            "background-color":"#fff",
            "color":"black"
        });
        category.eq(categoryIndex).css({
            "background-color":"#1abc9c",
            "color":"#fff"
        });
});

//질문 클릭시 답변 나옴 
let question = $(".question");
question.on("click", function(){
    const questionIndex = question.index(this);
    console.log(questionIndex);
    $(this).toggleClass("active");
    $(this).next().slideToggle();
});


/* write 폼 이동  */

$("#writeQna").on("click",function(){
	location.href="/writeQnaFrm.do"
});

/* qnaview  폼 이동 */
$(document).on("click",".qna-row",function(){
	const tr = $(".qna-row");
	var idx = tr.index(this);
	console.log(idx);
	console.log(tr.eq(idx).children().first().text());
	$("#qnaBoardNo").val(tr.eq(idx).children().first().text());
	$("#qnaViewFrm").submit();
});


/* qna search Ajax */

$("#searchQnaAjax").on("click",function(){

	const searchType = $("#searchType").val();
	const keyword = $("#keyword").val();
	
	if(searchType != 0 ){

	$.ajax({
		url : "/searchQnaAjax.do?searchType="+searchType+"&keyword="+keyword,
        type : "post",
        success : function(data){
        	console.log(data);
        //테이블 초기화 
        $(".qna-table").empty();
        if(data.length>=1){
        
         const table = $("<table>");
            table.attr('class','qna-table');
            const titleTr = $("<tr>");
            titleTr.html("<th>글번호</th><th>문의유형</th><th>제목</th><th>작성자</th><th>처리상태</th><th>문의날짜</th><th>조회수</th>");
            titleTr.attr('class','qna-tr');
            titleTr.attr("scope","col");
            table.append(titleTr);
            for(let i=0; i<data.length; i++){
                const tr = $("<tr>");
                tr.attr('class','qna-row');
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
              if(data[i].qnaSecret == 2){
                tr.append("<td>"+data[i].qnaTitle+"</td>");
              }
             	tr.append("<td>"+비밀글입니다+"</td>");
                tr.append("<td>"+data[i].qnaWriter+"</td>");
              
              if(data[i].qnaStatus == 0) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              }
              if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              }
                tr.append("<td>"+data[i].qnaDate+"</td>");
                tr.append("<td>"+data[i].qnaViews+"</td>");
                table.append(tr);
                
                
            }
            $("#qnaAjaxResult").html(table);
        }
        }
	});
	
	} else {
		alert(" 문의유형을 선택하고 검색어를 입력하세요  ");
	}
});



//문의사항 더보기
$("#qnaAjaxAdd-btn").on("click",function(){
	let amount = 7;
	let start = $(this).val();
	
	$.ajax({
		url: "/moreQna.do",
		type: "post",
		data: {start : start, amount : amount},
		success : function(data){

			const table = $(".qna-table");
            const titleTr = $(".qna-tr");
            
			for(let i=0; i<data.length; i++){
				 const tr = $("<tr>");
                tr.attr('class','qna-row');
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
              
              if(data[i].qnaStatus == 0) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              }
              if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              }
                tr.append("<td>"+data[i].qnaDate+"</td>");
                tr.append("<td>"+data[i].qnaViews+"</td>");
                table.append(tr);
                
			}
			$("#qnaAjaxResult").html(table);
			
			//value 증가 
			$("#qnaAjaxAdd-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#qnaAjaxAdd-btn").attr("currentCount"))+data.length;
			$("#qnaAjaxAdd-btn").attr("currentCount",currentCount);
			const totalCount = $("#qnaAjaxAdd-btn").attr("totalCount");
			console.log(totalCount, currentCount);
			if(totalCount == currentCount){
				$("#qnaAjaxAdd-btn").attr("disabled",true);
				$("#qnaAjaxAdd-btn").css ("cursor","not-allowed");
				$("#qnaAjaxAdd-btn").text("마지막 게시물 입니다 ");
			}
		},
		error : function(){
			console.log("에러발생");
		}
	}); //ajax 끝 
});

