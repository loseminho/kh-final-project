
//비밀번호 정규식
const pwReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

$("#memberPw").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$("#memberPw").focusout(function() {
	const pwVal = $("#memberPw").val();
	
	if(pwVal == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

$("#memberPwChk").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$("#memberPwChk").focusout(function() {
	const pwChkVal = $("#memberPwChk").val();
	
	if(pwChkVal == "") {
		$(this).css("border-color", "#ccc");
    	$(this).prev().prev().removeClass("afterColor");
    }
});

$(".btn").on("click", function(){
	const pwVal = $("#memberPw").val();
	const pwChkVal = $("#memberPwChk").val();
	const pwComment = $("#memberPw").prev().children();
	const pwChkComment = $("#memberPwChk").prev().children();
	
	pwComment.text("");
	pwChkComment.text("");
	
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
	
	if(pwReg.test(pwVal) && (pwVal == pwChkVal)) {
		$("#updatePwForm").submit();
	}
});
