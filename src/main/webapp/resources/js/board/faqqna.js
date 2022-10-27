let page = 0;
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
    }else{
        tabs.eq(1).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".faq-content").hide();
        $(".qna-content").show();
    }
});

const category = $(".faq-category>li");
category.on("click",function(){
    const categoryIndex = category.index(this);
    console.log(categoryIndex);
    if(categoryIndex - page <6){
        if(categoryIndex == 0){
            $(".faq-wrap").show();
            $(".answer").hide();
        }else{
            $(".faq-wrap").hide();
            $(".answer").hide();
            $(".faq-wrap").eq(categoryIndex-1).show();
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
    }
});

let question = $(".question");
question.on("click", function(){
    const questionIndex = question.index(this);
    console.log(questionIndex);
    $(this).toggleClass("active");
    $(this).next().slideToggle();
});

$(".faqqna-tab>li").eq(0).click();

/* qna ajax */

$("#allQnaAjax").on("click",function(){
    $.ajax({
        url : "/allQnaAjax.do?reqPage=1",
        type : "post",
        success : function(data){
        console.log(data);
            const table = $("<table>");
            table.attr('class','qna-table');
            const titleTr = $("<tr>");
            titleTr.html("<th>글번호</th><th>문의유형</th><th>제목</th><th>작성자</th><th>처리상태</th><th>문의날짜</th><th>조회수</th>");
            titleTr.attr('class','qna-tr');
            titleTr.attr("scope","col");
            table.append(titleTr);
            for(let i=0; i<data.length; i++){
                const tr = $("<tr>");
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
                tr.append("<td>"+data[i].qnaCateNo+"</td>");     
                tr.append("<td>"+data[i].qnaTitle+"</td>");
                tr.append("<td>"+data[i].qnaWriter+"</td>");
              
              if(data[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              }
              if(data[i].qnaStatus == 2) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              }
                tr.append("<td>"+data[i].qnaStatus+"</td>");
                tr.append("<td>"+data[i].qnaDate+"</td>");
                tr.append("<td>"+data[i].qnaViews+"</td>");
                table.append(tr);
                
                
            }
            console.log(data);
            $("#qnaAjaxResult").html(table);
        }
    });
});


/* write 폼 이동  */

$("#writeQna").on("click",function(){
	location.href="/writeQnaFrm.do"
});