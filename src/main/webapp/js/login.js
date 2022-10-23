
function login() {
	const idVal = $("#memberId").val();
	const pwVal = $("#memberPw").val();
	$.ajax({
        url  : '/login.do',
        type : 'post',
        data : {memberId : idVal, memberPw : pwVal},
        success : function(data){
        	if(data == "success") {
                location.href= "/";                         	        	        		
        	} else if(data == "fail") {
        		alert("아이디와 비밀번호를 확인해주세요.");
        	}
        }
    });
}


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

// 아이디(이메일) 정규표현식
const idReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

$(".btn").on("click", function(){
	const idVal = $("#memberId").val();
	const pwVal = $("#memberPw").val();
	const idComment = $("#memberId").prev().children();
	const pwComment = $("#memberPw").prev().children();
	
	idComment.text("");
	pwComment.text("");
	
	if(idVal == "") {
		idComment.text("이메일을 입력해주세요.");
	} else if (!idReg.test(idVal)) { // 정규표현식을 만족하지 않는다면
        idComment.text("이메일 형식으로 입력해주세요");
    }
    
	if (pwVal == "") {
		pwComment.text("비밀번호를 입력해주세요.");
	} 
	
	if(idReg.test(idVal) && (pwVal != "")) {
		login();
		
	}
});
