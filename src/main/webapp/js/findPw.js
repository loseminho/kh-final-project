
function findPw() {
	const idVal = $("#memberId").val();
	const phoneVal = $("#memberPhone").val();
	const resultDiv = $(".resultDiv");
	resultDiv.html("");
	const p = $("<p>");
	$.ajax({
        url  : '/findPw.do',
        type : 'post',
        data : {memberId : idVal, memberPhone : phoneVal},
        success : function(data){
        	if(data == "find") {
        		location.href="/updatePw.do";
        	} else {
        		p.append(data);
        		resultDiv.append(p);
        	}
        }
    });
}

function verifyCount() {
	const span = $("#timeZone");
	span.html("<span id='min'>3</span> : <span id='sec'>00</span>");
	intervalId = window.setInterval(function(){
		timeCount();
	}, 1000); // 1초에 한번씩 timeCount() 함수 동작
}

let resultCode;
function timeCount() {
	const min = Number($("#min").text());
	const sec = $("#sec").text();
	if(sec == "00") {
		if(min == 0) {
			resultCode = null;
			clearInterval(intervalId);
			$(".verifyMsg").text("인증시간만료");
			$(".verifyMsg").css("color", "red");
			$(".verifyBtn").hide();
		} else {
			$("#min").text(min-1);
			$("#sec").text(59);
		}
	} else {
		const newSec = Number(sec) - 1;
		if(newSec < 10) {
			$("#sec").text("0"+newSec);
		} else {
			$("#sec").text(newSec);
		}
	}
}
		
$(".verifyBtn").on("click", function(){
	const inputValue = $(".verifyInput").val();
	if(resultCode != null){
		if(inputValue == resultCode) {
			$(".verifyMsg").text("인증 성공!");
			$(".verifyMsg").css("color", "blue");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#timeZone").hide();
			$("#vefifyChk").val("true");
			$("#memberPhone").attr("readonly", true);
			$(".verifyBtn").attr("disabled", true);
		} else {
			$(".verifyMsg").text("인증 실패.");
			$(".verifyMsg").css("color", "red");
			$(".verifyBtn").hide();
		}
	}
})

$("#sendBtn").on("click", function() {
	const phoneVal = $("#memberPhone").val().replace('-', '');
	const div = $(".verifyBox");
	$.ajax({
        url  : '/sendMsg.do',
        type : 'post',
        data : {memberPhone : phoneVal},
        success : function(data){
        	div.show();
        	resultCode = data;
        	console.log(resultCode);
        	verifyCount();
        }
    });
});



$("#memberId").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$("#memberId").focusout(function() {
	const idVal = $("#memberId").val();
	
	if(idVal == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

$("#memberPhone").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$("#memberPhone").focusout(function() {
	const phoneVal = $("#memberPhone").val();
	
	if(phoneVal == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

// 아이디(이메일) 정규표현식
const idReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

$(".btn").on("click", function(){
	const idVal = $("#memberId").val();
	const phoneVal = $("#memberPhone").val();
	const idComment = $("#memberId").prev().children();
	const phoneComment = $("#memberPhone").prev().children();
	
	idComment.text("");
	phoneComment.text("");
	
	if(idVal == "") {
		idComment.text("아이디를 입력해주세요.");
	} else if (!idReg.test(idVal)) { // 정규표현식을 만족하지 않는다면
        idComment.text("이메일 형식으로 입력해주세요");
    }
    
	if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
	
	if(phoneReg.test(phoneVal) && (idVal != "")) {
		findPw();
	}
});
