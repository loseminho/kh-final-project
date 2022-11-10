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