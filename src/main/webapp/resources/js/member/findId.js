
function findId() {
	const nameVal = $("#memberNickname").val();
	const phoneVal = $("#memberPhone").val();
	const resultDiv = $(".resultDiv");
	resultDiv.html("");
	const p = $("<p>");
	$.ajax({
        url  : '/findId.do',
        type : 'post',
        data : {memberNickname : nameVal, memberPhone : phoneVal},
        success : function(data){
        	if(data.includes("/")) {
        		const result = data.split("/");
        		p.append("회원님의 아이디는 [ ");
        		p.append("<span class='resultSpan'>" + result[0] + "</span> ] 이며,<br>[ ");
        		p.append("<span class='resultSpan'>" + result[1] + "</span> ](으)로 가입하셨습니다.");
        		resultDiv.append(p);
        	} else {
        		p.append(data);
        		resultDiv.append(p);
        	}
        }
    });
}


$("#memberNickname").focusin(function() {
	$(this).css("border-color", "#1abc9c");
    $(this).prev().prev().addClass("afterColor");
})
 
$("#memberNickname").focusout(function() {
	const nameVal = $("#memberNickname").val();
	
	if(nameVal == "") {
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

//휴대전화 정규식
const phoneReg = /^010-\d{4}-\d{4}$/;

$(".btn").on("click", function(){
	const nameVal = $("#memberNickname").val();
	const phoneVal = $("#memberPhone").val();
	const nameComment = $("#memberNickname").prev().children();
	const phoneComment = $("#memberPhone").prev().children();
	
	nameComment.text("");
	phoneComment.text("");
	
	if(nameVal == "") {
		nameComment.text("이름을 입력해주세요.");
	}
    
	if (phoneVal == "") {
		phoneComment.text("전화번호를 입력해주세요.");
	} else if (!phoneReg.test(phoneVal)) { // 정규표현식을 만족하지 않는다면
        phoneComment.text("전화번호 형식으로 입력해주세요.");
    }
	
	if(phoneReg.test(phoneVal) && (nameVal != "")) {
		findId();
	}
});
