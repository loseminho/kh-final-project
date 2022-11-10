let answers = ""; // 사용자가 선택한 답변을 저장하기 위한 변수
let dog; // 사용자가 선택한 강아지 이름을 저장할 변수

function mbtiStart(dogNo, dogName) {
	$(window).scrollTop(100);
	$(".mbti-box").eq(0).show();
	$("#mbtiMainPhoto").hide();
	$("#chooseDog").hide();
	dog = dogName;
	$(".mbti-dogname").text(dog);
	$("[name=dogNo]").val(dogNo);
}

$(".mbti-btn").on("click", function(){
	let btnIdx = $(this).parent().find(".mbti-btn").index(this);
	// console.log(btnIdx);
	
	answers += btnIdx;
	// console.log(answers);
	
	$(this).parent().next().show();
	$(this).parent().hide();

	if(answers.length > 11) {
		const dogNo = $("[name=dogNo]").val();
		
		location.href = "/updateMbti.do?answers="+answers+"&dogNo="+dogNo+"&dogName="+dog;
	}
});
