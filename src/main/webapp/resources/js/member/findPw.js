
// 아이디(이메일) 정규표현식
const idReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

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
        		location.href="/updatePwFrm.do";
        	} else if(data == "kakao") {
        		p.append("카카오로 가입하셨습니다. (비밀번호 찾기 불가)");
        		resultDiv.append(p);
        	} else {
        		p.append(data);
        		resultDiv.append(p);
        	}
        }
    });
}

let intervalId;
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
			$("#timeZone").hide();
			$("#verifyBtn").hide();
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
		
$("#verifyBtn").on("click", function(){
	const inputValue = $(".verifyInput").val();
	$(".verifyMsg").text("");
	// console.log(inputValue);
	if(resultCode != null){
		if(inputValue == resultCode) {
			$(".verifyMsg").append("인증 성공<i class='fa-solid fa-circle-check'></i>");
			$(".verifyMsg").css("color", "#1abc9c");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#verifyChk").val("true");
			$("#memberPhone").attr("readonly", true);
			$("#memberId").attr("readonly", true);
			$("#memberPhone").removeClass("shortInput");
			$(".verifyInput").hide();
			$("#timeZone").hide();
			$("#verifyBtn").hide;
			$("#sendBtn").hide();
			$(this).hide();
		} else {
			//$(".verifyMsg").text("인증 실패");
			$(".verifyMsg").append("인증 실패<i class='fa-solid fa-circle-xmark'></i>");
			$(".verifyMsg").css("color", "red");
		}
	}
})

$("#sendBtn").on("click", function() {
	const phoneComment = $("#memberPhone").prev().children();
	const phoneVal = $("#memberPhone").val();
	const div = $(".verifyBox");
	div.hide();
	phoneComment.text("");
	
	if ((phoneVal != "") && phoneReg.test(phoneVal)) {
		const phVal = $("#memberPhone").val().replace('-', '');
		$.ajax({
	        url  : '/sendMsg.do',
	        type : 'post',
	        data : {memberPhone : phVal},
	        success : function(data){
	        	div.show();
	        	if(intervalId != undefined) {
		        	clearInterval(intervalId);
	        	}
				$("#timeZone").show();
				$("#verifyBtn").show();
	        	$(".verifyInput").val("");
	        	$(".verifyMsg").text("");
	        	resultCode = data;
	        	console.log(resultCode);
	        	verifyCount();
	        }
	    });
	} else if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
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

$(".btn").on("click", function(){
	const idVal = $("#memberId").val();
	const phoneVal = $("#memberPhone").val();
	const idComment = $("#memberId").prev().children();
	const phoneComment = $("#memberPhone").prev().children();
	const verifyChk = $("#verifyChk").val();
	
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
		if(verifyChk == "true") {
			findPw();
		} else {
			phoneComment.text("전화번호를 인증해주세요.");
		}
	}
});
