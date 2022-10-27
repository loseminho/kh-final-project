
function addFile() {
	$("#memberPhoto").click();
}

// 선택한 사진 미리보기
$("#memberPhoto").on("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader(); 
    reader.onload = function(e) {
        $("#preview").attr("src", e.target.result);
    }
    reader.readAsDataURL(file);
    //const val = $(this).val();
    //console.log(val);
});
 

// 주소 입력
function searchAddr() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            // console.log(data);
            // $("#postcode").val(data.zonecode);
            $("#memberCity").val(data.sido + " " + data.sigungu);
            // $("#shippingAddr2").focus();
        }
    }).open();
}

//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

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
			// console.log(resultCode);
			//$(".verifyMsg").text("인증 성공");
			$(".verifyMsg").append("인증 성공<i class='fa-solid fa-circle-check'></i>");
			$(".verifyMsg").css("color", "#1abc9c");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#verifyChk").val("true");
			$("#memberPhone").attr("readonly", true);
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

$("#changeBtn").on("click", function(){
	$(this).next().show();
	$(this).prev().prev().attr("disabled", false);
	$(this).prev().prev().val("");
	$(this).hide();
});

function sendMsg() {
	const div = $(".verifyBox");
	const phVal = $("#memberPhone").val().replace('-', '');
	$.ajax({
        url  : '/sendMsg.do',
        type : 'post',
        data : {memberPhone : phVal},
        success : function(data){
        	div.prev().css("margin-bottom", "0");
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
	const phoneComment = $("#phoneComment");
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
