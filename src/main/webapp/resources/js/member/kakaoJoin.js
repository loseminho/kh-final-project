
//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

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
	if(resultCode != null){
		if(inputValue == resultCode) {
			//$(".verifyMsg").text("인증 성공");
			$(".verifyMsg").append("인증 성공<i class='fa-solid fa-circle-check'></i>");
			$(".verifyMsg").css("color", "#1abc9c");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#verifyChk").val("true");
			$("#memberPhone").attr("readonly", true);
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

function sendMsg() {
	const div = $(".verifyBox");
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
	const phoneVal = $("#memberPhone").val();
	const phoneComment = $("#memberPhone").prev().children();
	const verifyChk = $("#verifyChk").val();
	const form = $("#kakaoJoinFrm");
	
	phoneComment.text("");
    
	if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
	
	if(phoneReg.test(phoneVal)) {
		if(verifyChk == "true") {
			form.submit();
		} else {
			phoneComment.text("전화번호를 인증해주세요.");
		}
	}
});