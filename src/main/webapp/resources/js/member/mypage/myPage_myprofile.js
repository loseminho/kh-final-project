
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
    
    const val = $(this).val();
    if(val != null) {
    	$("#memberPhoto").attr("name", "photo");
    }
    const name = $("#memberPhoto").attr("name");
    
    //console.log(name);
    //console.log(val);
});
 

// 주소 입력
function searchAddr() {
    new daum.Postcode({
        oncomplete: function(data) {
            $("#memberCity").val(data.sido + " " + data.sigungu);
        }
    }).open();
}

// 전화번호 모달창
function phoneModal() {
	$("#newPhone").attr("disabled", false);
	$("#newPhone").val("");
	$("#sendBtn").show();
	$(".verifyInput").attr("disabled", false);
	$(".verifyInput").val("");
	$(".verifyInput").hide();
	$(".verifyMsg").text("");
	$("#changePhoneBtn").hide();
	$("#phone-modal").css("display", "flex");
}

$("#changeBtn").on("click", function(){
	phoneModal();
});

function closePhoneModal() {
	$("#timeZone").html("");
	$("#verifyBtn").hide();
	$("#phone-modal").hide();
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
	if(resultCode != null){
		if(inputValue == resultCode) {
			$(".verifyMsg").append("인증 성공<i class='fa-solid fa-circle-check'></i>");
			$(".verifyMsg").css("color", "#1abc9c");
			clearInterval(intervalId); // 시간 카운트 함수 멈춤
			$("#verifyChk").val("true");
			$("#newPhone").attr("disabled", true);
			$(".verifyInput").hide();
			$("#timeZone").hide();
			$("#verifyBtn").hide();
			$("#sendBtn").hide();
			$("#changePhoneBtn").show();
		} else {
			//$(".verifyMsg").text("인증 실패");
			$(".verifyMsg").append("인증 실패<i class='fa-solid fa-circle-xmark'></i>");
			$(".verifyMsg").css("color", "red");
		}
	}
})

$("#changePhoneBtn").on("click", function(){
	const inputValue = $("#newPhone").val();
	$("#memberPhone").val(inputValue);
	closePhoneModal();
})

function sendMsg() {
	const phVal = $("#newPhone").val().replace('-', '');
	$.ajax({
        url  : '/sendMsg.do',
        type : 'post',
        data : {memberPhone : phVal},
        success : function(data){
			$("#timeZone").show();
			$("#verifyBtn").show();
        	$(".verifyInput").show();
        	$(".verifyInput").val("");
        	$(".verifyMsg").text("");
        	resultCode = data;
        	console.log(resultCode);
        	verifyCount();
        }
    });
}

$("#sendBtn").on("click", function() {
	const phoneComment = $("#phoneComment");
	const phoneVal = $("#newPhone").val();
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

$("#updateBtn").on("click", function(){
	const nameVal = $("#memberNickname").val();
	const nameComment = $("#nameComment");
	const verifyChk = $("#verifyChk");
	nameComment.text("");
	
	if(nameVal == "") {
		nameComment.text("이름을 입력해주세요.");
	} else {
		if(verifyChk.val()) {
			Swal.fire({
	            title: '회원 정보 수정',
	            text: "회원 정보를 수정하시겠습니까?",
	            icon: 'warning',
	            showCancelButton: true,
	            confirmButtonColor: '#1abc9c',
	            cancelButtonColor: '#ccc',
	            confirmButtonText: '수정',
	            cancelButtonText: '취소'
	        }).then((result) => {
	            if (result.isConfirmed) {
	            	$.cookie("tab", 0);
					verifyChk.prev().attr("name", "memberPhone");
					$("#updateMemberForm").submit();
	            }
	        })
		}
	}
});

function deleteMember(memberId) {
	Swal.fire({
        title: '회원 탈퇴',
        text: "탈퇴하시겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '탈퇴',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			location.href="/deleteMember.do?memberId="+memberId;
        }
    })
}

function deleteKakao() {
	Swal.fire({
        title: '회원 탈퇴',
        text: "탈퇴하시겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '탈퇴',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			location.href="/kakaoUnlink.do";
        }
    })
}