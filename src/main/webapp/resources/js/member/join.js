

$(".input").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$(".input").focusout(function() {
	const val = $(this).val();
	
	if(val == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

$(".input").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$(".input").focusout(function() {
	const val = $(this).val();
	
	if(val == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

// 아이디(이메일) 정규표현식
const idReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

//비밀번호 정규식
const pwReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

$("#memberId").on("change", function(){
	const idVal = $("#memberId").val();
	const idComment = $("#memberId").prev().children();
	
	idComment.text("");
	
	if(idVal == "") {
		idComment.text("아이디를 입력해주세요.");
		idComment.css("color", "red");
	} else if (!idReg.test(idVal)) { // 정규표현식을 만족하지 않는다면
        idComment.text("이메일 형식으로 입력해주세요");
        idComment.css("color", "red");
    }
    
    if(idReg.test(idVal)) {
		chkId();
    }
});

function chkId() {
	const idVal = $("#memberId").val();
	const idComment = $("#memberId").prev().children();
	const idChk = $("#idChk");
	idChk.val("false");
	
	$.ajax({
        url  : '/checkId.do',
        type : 'post',
        data : {memberId : idVal},
        success : function(data){
        	if(data == "possible") {
        		idComment.text("사용 가능한 아이디입니다.");  
        		idComment.css("color", "#1abc9c"); 
        		idChk.val("true");     		
        	} else {
        		idComment.text("이미 사용중인 아이디입니다.");  		
        		idComment.css("color", "red"); 
        		idChk.val("false"); 
        	}
        }
    });
}

$("#memberPw").on("change", function(){
	const pwVal = $("#memberPw").val();
	const pwComment = $("#memberPw").prev().children();
	
	pwComment.text("");
	
	if(pwVal == "") {
		pwComment.text("비밀번호를 입력해주세요.");
	} else if (!pwReg.test(pwVal)) { // 정규표현식을 만족하지 않는다면
        pwComment.text("영문, 숫자, 특수문자 포함 8~12자리 입력");
    }
});

$("#memberPwChk").on("change", function(){
	const pwVal = $("#memberPw").val();
	const pwChkVal = $("#memberPwChk").val();
	const pwChkComment = $("#memberPwChk").prev().children();
	
	pwChkComment.text("");
	
	if (pwChkVal == "") {
		pwChkComment.text("비밀번호를 다시 입력해주세요.");
	} else if (pwVal != pwChkVal) { // 정규표현식을 만족하지 않는다면
        pwChkComment.text("비밀번호가 일치하지 않습니다.");
    }
});

$("#memberNickname").on("change", function(){
	const nameVal = $("#memberNickname").val();
	const nameComment = $("#memberNickname").prev().children();
	
	nameComment.text("");
	
	if(nameVal == "") {
		nameComment.text("이름을 입력해주세요.");
	}
});

$("#memberPhone").on("change", function(){
	const phoneVal = $("#memberPhone").val();
	const phoneComment = $("#memberPhone").prev().children();
	
	phoneComment.text("");
	
	if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
});

$(".btn").on("click", function(){
	const idVal = $("#memberId").val();
	const pwVal = $("#memberPw").val();
	const pwChkVal = $("#memberPwChk").val();
	const nameVal = $("#memberNickname").val();
	const phoneVal = $("#memberPhone").val();
	
	const idComment = $("#memberId").prev().children();
	const pwComment = $("#memberPw").prev().children();
	const pwChkComment = $("#memberPwChk").prev().children();
	const nameComment = $("#memberNickname").prev().children();
	const phoneComment = $("#memberPhone").prev().children();
	
	idComment.text("");
	pwComment.text("");
	pwChkComment.text("");
	nameComment.text("");
	phoneComment.text("");
	
	const idChk = $("#idChk").val();
	const verifyChk = $("#verifyChk").val();
	
	if(idVal == "") {
		idComment.text("아이디를 입력해주세요.");
		idComment.css("color", "red");
	} else if (!idReg.test(idVal)) { // 정규표현식을 만족하지 않는다면
        idComment.text("이메일 형식으로 입력해주세요");
        idComment.css("color", "red");
    } else {
	    chkId();    
    }
    
    if(pwVal == "") {
		pwComment.text("비밀번호를 입력해주세요.");
	} else if (!pwReg.test(pwVal)) { // 정규표현식을 만족하지 않는다면
        pwComment.text("영문, 숫자, 특수문자 포함 8~12자리 입력");
    }
    
	if (pwChkVal == "") {
		pwChkComment.text("비밀번호를 다시 입력해주세요.");
	} else if (pwVal != pwChkVal) { // 정규표현식을 만족하지 않는다면
        pwChkComment.text("비밀번호가 일치하지 않습니다.");
    }
    
    if(nameVal == "") {
		nameComment.text("이름을 입력해주세요.");
	}
    
	if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
	
	if(idReg.test(idVal) && pwReg.test(pwVal) && (pwVal == pwChkVal) && (nameVal != "") && phoneReg.test(phoneVal) && (idChk == "true")) {
		if(verifyChk == "true") {
			$("#joinForm").submit();
		} else {
			phoneComment.text("전화번호를 인증해주세요.");
		}
	}
});



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
	if(resultCode != null){
		if(inputValue == resultCode) {
			//$(".verifyMsg").text("인증 성공");
			$(".verifyMsg").append("인증 성공<i class='fa-solid fa-circle-check'></i>");
			$(".verifyMsg").css("color", "#1abc9c");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#verifyChk").val("true");
			$("#memberPhone").attr("readonly", true);
			$("#memberId").attr("readonly", true);
			$("#memberPhone").removeClass("shortInput");
			$(".verifyInput").attr("disabled", true);
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

function sendMsg() {
	const div = $(".verifyBox");
	const phVal = $("#memberPhone").val().replace('-', '');
	$.ajax({
        url  : '/sendMsg.do',
        type : 'post',
        data : {memberPhone : phVal},
        success : function(data){
        	div.show();
			$("#timeZone").show();
			$("#verifyBtn").show();
        	$(".verifyInput").val("");
        	$(".verifyMsg").text("");
        	resultCode = data;
        	verifyCount();
        }
    });
}

$("#sendBtn").on("click", function() {
	const phoneComment = $("#memberPhone").prev().children();
	const phoneVal = $("#memberPhone").val();
	const div = $(".verifyBox");
	div.hide();
	phoneComment.text("");
	
	if ((phoneVal != "") && phoneReg.test(phoneVal)) {
		$.ajax({
	        url: "/checkPhone.do",  
	        type: "POST",
	        data : {memberPhone : phoneVal},
	        success: function(result) {
	            if(result == "possible") {
	            	sendMsg();
	            } else {
	            	phoneComment.text("이미 가입된 번호입니다.");
	            	return;
	            }
	        }
	    });
	} else if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
});