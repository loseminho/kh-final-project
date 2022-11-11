$(window).scrollTop(100);

$(".content-top-button-left").on("click", function(){
	location.href="/walkMateFrm.do";
});

function dogModal(dogNo) {
	$("#dog-modal").css("display", "flex");
	$("#dogType1").css("display", "block");
	$("#dogPhoto").prop("name", "");
	$("#dogPhoto").val("");
	$("#dogPreview").attr("src", "");
	$("#dmBtn").show();
	$("#send-dm-input").val("");
	$(".send-dm-wrap").hide();
	
	$.ajax({
        url  : '/selectMyOneDog.do',
        data : {dogNo : dogNo},
        type : 'post',
        success : function(data){
        	$("#dogName").val(data.dogName);
        	$("#dogName").prop("readonly", true);
        	$("#dogType1").val(data.dogType);
        	$("#dogType1").prop("readonly", true);
        	$("#dogAge").val(data.dogAge);
        	$("#dogWeight").val(data.dogWeight);
        	$("#dogNo").val(data.dogNo); 
        	$("#dogNo").attr("name", "dogNo"); 
        	
        	if(data.dogPhoto != null) {
        		$("#dogPreview").attr("src", "/resources/upload/dog/"+data.dogPhoto);
        	} else{
        		$("#dogPreview").attr("src", "/resources/img/default_dog.png");
        	}
        	
        	if(data.dogGender == "남아") {
        		$("[name=dogGender]").eq(0).prop("checked", true);
        	} else {
        		$("[name=dogGender]").eq(1).prop("checked", true);
        	}
        	
        	if(data.dogNeutral == "O") {
        		$("[name=dogNeutral]").eq(0).prop("checked", true);
        	} else {
        		$("[name=dogNeutral]").eq(1).prop("checked", true);
        	}
        	
        	if(data.dogVacc == "O") {
        		$("[name=dogVacc]").eq(0).prop("checked", true);
        	} else {
        		$("[name=dogVacc]").eq(1).prop("checked", true);
        	}
        	
    		$("#mbti-box").show();
        	if(data.dogMbti != null) {
        		$("#mbtiBtn").hide();
        		$("#dogMbti").show();
        		$("#dogMbti").val(data.dogMbtiName);
        	}
        }
    });
}

function closeDogModal() {
	$("#dog-modal").hide();
}

$("#dmBtn").on("click", function(){
	const dogNo = $("#dogNo").val();
	$(this).hide();
	
	$.ajax({
        url  : '/selectDogOwner.do',
        data : {dogNo : dogNo},
        type : 'post',
        success : function(data){
			$(".send-dm-wrap").show();
			const memberId = data.memberId;
			const memberNickname = data.memberNickname;
			const memberNo = data.memberNo;
			$(".send-dm-title>.receiver").text(memberNickname + "(" + data.memberId + ")");
			$("#receiver").val(memberNo);
        }
	});
});

$(".cancelBtn").on("click", function(){
	$("#send-dm-input").val("");
	$("#dmBtn").show();
	$(".send-dm-wrap").hide();
});

$(".sendBtn").on("click", function(){
	const receiver = $("#receiver").val();
	const dmContent = $("#send-dm-input").val();
	
	const member = $(".receiver").text().split("(");
	const memberNickname = member[0];
	const memberId = member[1].replace(")", "");
	
	$.ajax({
        url  : '/insertMatchingDm.do',
        data : {"receiverNo" : receiver, "dmContent" : dmContent, "receiverId" : memberId, "receiverName" : memberNickname},
        type : 'post',
        success : function(data){
        	console.log(data);
        	
			$("#send-dm-input").val("");
			$("#dmBtn").show();
			$(".send-dm-wrap").hide();
			
        	Swal.fire({
				text: '쪽지가 발송되었습니다.',
				confirmButtonColor: '#1abc9c'
			})
        }
	});
});