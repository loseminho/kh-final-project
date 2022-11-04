let dog; // 사용자가 선택한 강아지 이름을 저장할 변수
let answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 사용자가 선택한 답변을 저장하기 위한 배열

function mbtiStart(dogName) {
	$("#mbti-box").show();
	$("#mbtiMainPhoto").hide();
	$("#chooseDog").hide();
	dog = dogName;
	
//	$.ajax({
//        url  : '/crawling.do',
//        type : 'post',
//        success : function(data){
//        	console.log(data);
//        }
//    });
}

