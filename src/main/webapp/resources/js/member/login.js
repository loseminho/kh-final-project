
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
        		Swal.fire({
					text: '아이디와 비밀번호를 확인해주세요.',
					confirmButtonColor: '#1abc9c'
				})
        	} else {
        		Swal.fire({
					text: '관리자에 의해 사이트 접속이 불가능합니다.',
					confirmButtonColor: '#1abc9c'
				}).then((result) => {
					location.href= "/logout.do";
			    })
        	}
        }
    });
}

$("#memberId").keydown(function(keyNum){
	if(keyNum.keyCode == 13) {
		$("#loginBtn").click();
	}
});

$("#memberPw").keydown(function(keyNum){
	if(keyNum.keyCode == 13) {
		$("#loginBtn").click();
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

//비밀번호 정규식
const pwReg = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/;

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
	} else if (!pwReg.test(pwVal)) { // 정규표현식을 만족하지 않는다면
        pwComment.text("영문, 숫자, 특수문자 포함 8~12자리 입력");
    }
	
	if(idReg.test(idVal) && pwReg.test(pwVal)) {
		login();
	}
});





// 회원가입 고르는 모달창
function joinModal() {
	$("#join-modal").css("display", "flex");
}

function closeModal() {
	$("#join-modal").hide();
}

$(".joinBtn").on("click", function(){
	location.href="/joinFrm.do";
});