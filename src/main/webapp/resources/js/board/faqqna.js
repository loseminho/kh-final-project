let page = 0;
let totalCount = $(".question").length;//전체 게시물갯수
let showCount = 6; //처음보여줄갯수
const tabs = $(".faqqna-tab>li");

const allQuestion = $(".question");
const walkQuestion = $(".walk-question");
const sharingQuestion = $(".sharing-question");
const adoptionQuestion = $(".adoption-question");
const memberQuestion = $(".member-question");
const etcQuestion = $(".etc-question");

//각각 카테고리별로 갯수 구분
let allQuestionCnt = $(".question").length;
let walkQuestionCnt = $(".walk-question").length;
let sharingQuestionCnt = $(".sharing-question").length;
let adoptionQuestionCnt = $(".adoption-question").length;
let memberQuestionCnt = $(".member-question").length;
let etcQuestionCnt = $(".etc-question").length;

//페이지 시작할 때 시작하는 메소드
$(document).ready(function(){
    const question = $(".question");
    $(".faq-category>li").eq(0).trigger("click");
    $(".qna-content").hide();
});

$(".faq-category>li").on("click",function(){
    $(".answer").hide();
    const cateIdx = $(".faq-category>li").index(this);

    $(".faq-category>li").css({
        "background-color":"#fff",
        "color":"black"
    });
    $(".faq-category>li").eq(cateIdx).css({
        "background-color":"#1abc9c",
        "color":"#fff"
    });
    if(cateIdx==0){
        showMenu(allQuestion,allQuestionCnt);
        page = 0;
        showCount = 6;
        totalCount = allQuestionCnt;
        $(".add-btn").css("display","block");
        
    }else if(cateIdx==1){
        showMenu(walkQuestion,walkQuestionCnt);
        page = 1;
        showCount = 6;
        totalCount = walkQuestionCnt;
        $(".add-btn").css("display","block");
    }else if(cateIdx==2){
        showMenu(sharingQuestion,sharingQuestionCnt);
        page = 2;
        showCount = 6;
        totalCount = sharingQuestionCnt;
        $(".add-btn").css("display","block");
    }else if(cateIdx==3){
        showMenu(adoptionQuestion,adoptionQuestionCnt);
        page = 3;
        showCount = 6;
        totalCount = adoptionQuestionCnt;
        $(".add-btn").css("display","block");
    }else if(cateIdx==4){
        showMenu(memberQuestion,memberQuestionCnt);
        page = 4;
        showCount = 6;
        totalCount = memberQuestionCnt;
        $(".add-btn").css("display","block");
    }else if(cateIdx==5){
        showMenu(etcQuestion,etcQuestionCnt);
        page = 5;
        showCount = 6;
        totalCount = etcQuestionCnt;
        $(".add-btn").css("display","block");
    }
});

function showMenu(value, totalCount){
    $(".question").css("display","none");
    for(let i=0;i<showCount;i++){
        value.eq(i).css("display","block");
    }
    if(showCount >= totalCount){
        showCount = 6;
        $(".add-btn").css("display","none");
    }
}

$(".add-btn").on("click",function(){
    showCount += 3;
    if(page==0){
        showMenu(allQuestion,allQuestionCnt);
    }else if(page==1){
        showMenu(walkQuestion,walkQuestionCnt);
    }else if(page==2){
        showMenu(sharingQuestion,sharingQuestionCnt);
    }else if(page==3){
        showMenu(adoptionQuestion,adoptionQuestionCnt);
    }else if(page==4){
        showMenu(memberQuestion,memberQuestionCnt);
    }else if(page==5){
        showMenu(etcQuestion,etcQuestionCnt);
    }

});

tabs.on("click",function(){
    const index = $(this).index();
    if(index == 0){
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
        $(".qna-row").remove();
        $("#qnaAjaxAdd-btn").attr("value","1");
        $("#qnaAjaxAdd-btn").attr("currentCount","0");
        $("#qnaAjaxAdd-btn").attr("disabled",false);
		$("#qnaAjaxAdd-btn").css ("cursor","pointer");
		$("#qnaAjaxAdd-btn").text("더보기");
        $("#qnaAjaxAdd-btn").trigger("click");
    }
});

//답변보이기
let question = $(".question");
question.on("click", function(){
    const questionIndex = question.index(this);
    console.log(questionIndex);
    $(this).toggleClass("active");
    $(this).next().slideToggle();
});

$(".faqqna-tab>li").eq(0).click();

let tr = $(".qna-table>tr").children('tr');
let qnaNo = tr.find('td:eq(0)').val();


/* write 폼 이동  */

$("#writeQna").on("click",function(){
	location.href="/writeQnaFrm.do"
});

/* qnaview  폼 이동 */
$(document).on("click",".qna-row",function(){
	const tr = $(".qna-row");
	var idx = tr.index(this);
	
	//세션
	const memberNo = $("#memberNo").val();
	const memberLevel = $("#memberLevel").val();
	//ajax 
	const sendQnaSecret = $(".sendQnaSecret").eq(idx).val();
	const sendMemberNo = $(".sendMemberNo").eq(idx).val();
	const qnaNo = $(".sendQnaNo").eq(idx).val();
	
	console.log(sendQnaSecret);
	console.log("회원등급"+memberLevel);
	
	if(sendQnaSecret == 1){
		if(memberNo == sendMemberNo || memberLevel == 2){
			location.href="/qnaView.do?qnaNo="+qnaNo;
		} else {
			alert("비밀글은 작성자와 관리자만 볼 수 있습니다.");
		}
	} else{
		location.href="/qnaView.do?qnaNo="+qnaNo;
	}
	
	
});


/* qna search Ajax */

$("#searchQnaAjax").on("click",function(){

   const searchType = $("#searchType").val();
   const keyword = $("#keyword").val();
   if(keyword == ''){
      alert ("검색어를 입력하세요");
      	const table = $(".qna-table");
        $(".qna-row").remove();
        var html = "<tr>조회된데이터가없습니다.</tr>";
        table.append(html);
        $("#qnaAjaxAdd-btn").attr("disabled",true);
        $("#qnaAjaxAdd-btn").css ("cursor","not-allowed");
        $("#qnaAjaxAdd-btn").text("마지막 게시물 입니다 ");
   }else{
        let amount = 7;
        let start = $(this).val();
        if(searchType != 0 ){
        $.ajax({
            url : "/searchQnaAjax.do",
            data : {searchType : searchType, keyword : keyword, start : start, amount : amount },
            type : "post",
            success : function(data){
            //테이블 초기화 
            $(".qna-row").remove();
            const list = data.list;
            const totalCount = data.totalCount;
            const qnaKeyword = data.keyword;
            
            
            if(list.length != 0){
                const table = $(".qna-table");
                const titleTr = $(".qna-tr");
                
                for(let i=0; i<list.length; i++){
                    const tr = $("<tr>");
                    tr.attr('class','qna-row');
                    tr.append("<td>"+list[i].qnaNo+"</td>");
                  if(list[i].qnaCateNo == 1) {
                      tr.append("<td>"+"산책메이트 찾기"+"</td>"); 
                  }
                  if(list[i].qnaCateNo == 2) {
                      tr.append("<td>"+"애견용품 나눔"+"</td>"); 
                  }
                  if(list[i].qnaCateNo == 3) {
                      tr.append("<td>"+"입양"+"</td>"); 
                  }
                  if(list[i].qnaCateNo == 4) {
                      tr.append("<td>"+"회원관련"+"</td>"); 
                  }
                  if(list[i].qnaCateNo == 5) {
                      tr.append("<td>"+"기타"+"</td>"); 
                  } 
                  if(list[i].qnaSecret == 1) {
                    tr.append("<td>"+"<i class='fa-solid fa-lock'></i>비밀글입니다."+"</td>");                 
                  }
                    tr.append("<td>"+list[i].qnaTitle+"</td>");
                    tr.append("<td>"+list[i].qnaWriter+"</td>");
                  
                  if(list[i].qnaStatus == 0) {
                      tr.append("<td>"+"답변대기중"+"</td>"); 
                  }
                  if(list[i].qnaStatus == 1) {
                      tr.append("<td>"+"답변완료"+"</td>"); 
                  }
                    tr.append("<td>"+list[i].qnaDate+"</td>");
                    tr.append("<td>"+list[i].qnaViews+"</td>");
                    tr.append("<input type='hidden' class='sendMemberNo' value="+list[i].memberNo+">");   
                    tr.append("<input type='hidden' class='sendQnaNo' value="+list[i].qnaNo+">");   
                    tr.append("<input type='hidden' class='sendQnaSecret' value="+list[i].qnaSecret+">");
                    table.append(tr);
                    
                    
                }
                $("#qnaAjaxResult").html(table);
                $("#qnaAjaxAdd-btn").attr("disabled",true);
                $("#qnaAjaxAdd-btn").css ("cursor","not-allowed");
                $("#qnaAjaxAdd-btn").text("마지막 게시물 입니다 ");
               
            } 
            }
        });
    }

   
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
			const list = data.list;
			const totalCount = data.totalCount;
			
			const table = $(".qna-table");
            const titleTr = $(".qna-tr");
		
            
			for(let i=0; i<list.length; i++){
				 const tr = $("<tr>");
                tr.attr('class','qna-row');
                tr.append("<td>"+list[i].qnaNo+"</td>");
              if(list[i].qnaCateNo == 1) {
              	tr.append("<td>"+"산책메이트 찾기"+"</td>"); 
              }
              if(list[i].qnaCateNo == 2) {
              	tr.append("<td>"+"애견용품 나눔"+"</td>"); 
              }
              if(list[i].qnaCateNo == 3) {
              	tr.append("<td>"+"입양"+"</td>"); 
              }
              if(list[i].qnaCateNo == 4) {
              	tr.append("<td>"+"회원관련"+"</td>"); 
              }
              if(list[i].qnaCateNo == 5) {
              	tr.append("<td>"+"기타"+"</td>"); 
              } 
              if(list[i].qnaSecret == 1) {
                tr.append("<td>"+"<i class='fa-solid fa-lock'></i>비밀글입니다."+"</td>");              	
              } else {
              	tr.append("<td>"+list[i].qnaTitle+"</td>");              
              }
                tr.append("<td>"+list[i].qnaWriter+"</td>");
              
              if(list[i].qnaStatus == 0) {
              	tr.append("<td>"+"답변대기중"+"</td>"); 
              }
              if(list[i].qnaStatus == 1) {
              	tr.append("<td>"+"답변완료"+"</td>"); 
              }
                tr.append("<td>"+list[i].qnaDate+"</td>");
                tr.append("<td>"+list[i].qnaViews+"</td>");
                tr.append("<input type='hidden' class='sendMemberNo' value="+list[i].memberNo+">");	
                tr.append("<input type='hidden' class='sendQnaNo' value="+list[i].qnaNo+">");	
                tr.append("<input type='hidden' class='sendQnaSecret' value="+list[i].qnaSecret+">");
                table.append(tr);
                
			}
			$("#qnaAjaxResult").html(table);
			
			//value 증가 
			$("#qnaAjaxAdd-btn").val(Number(start)+Number(amount));
			//currentCount 값도 읽어온 만큼 수정
			const currentCount = Number($("#qnaAjaxAdd-btn").attr("currentCount"))+list.length;
			$("#qnaAjaxAdd-btn").attr("currentCount",currentCount);
			const totalCount2 = $("#qnaAjaxAdd-btn").attr("totalCount");
			if(totalCount2 == currentCount){
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

