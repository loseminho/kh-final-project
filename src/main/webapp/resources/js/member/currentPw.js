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

//비밀번호 정규식
const pwReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

$(".btn").on("click", function(){
	const pwVal = $("#memberPw").val();
	const pwComment = $("#memberPw").prev().children();
	
	pwComment.text("");
    
	if (pwVal == "") {
		pwComment.text("비밀번호를 입력해주세요.");
	} else if (!pwReg.test(pwVal)) { // 정규표현식을 만족하지 않는다면
        pwComment.text("영문, 숫자, 특수문자 포함 8~12자리 입력");
    }
	
	if(pwReg.test(pwVal)) {
		$("#checkPwForm").submit();
	}
});
