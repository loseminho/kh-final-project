function dogModal(dogNo) {
	$("#dog-modal").css("display", "flex");
	$.ajax({
        url  : '/selectMyOneDog.do',
        data : {dogNo : dogNo},
        type : 'post',
        success : function(data){
        	console.log(data);
			$("#dogNo").val(data.dogNo);
        	$("#dogName").val(data.dogName);
        	$("#dogType").val(data.dogType);
        	$("#dogAge").val(data.dogAge);
        	$("#dogWeight").val(data.dogWeight);
        	
        	if(data.dogPhoto != null) {
        		$("#dogPreview").attr("src", "/resources/upload/dog/"+data.dogPhoto);
        	}
        	
        	if(data.dogGender == "남아") {
        		$("[name=dogGender]").eq(0).attr("checked", "true");
        	} else {
        		$("[name=dogGender]").eq(1).attr("checked", "true");
        	}
        	
        	if(data.dogNeutral == "O") {
        		$("[name=dogNeutral]").eq(0).attr("checked", "true");
        	} else {
        		$("[name=dogNeutral]").eq(1).attr("checked", "true");
        	}
        	
        	if(data.dogVacc == "O") {
        		$("[name=dogVacc]").eq(0).attr("checked", "true");
        	} else {
        		$("[name=dogVacc]").eq(1).attr("checked", "true");
        	}
        }
    });
}


function closeDogModal() {
	$("#dog-modal").hide();
}


function addDogFile() {
	$("#dogPhoto").click();
}

// 선택한 사진 미리보기
$("#dogPhoto").on("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader(); 
    reader.onload = function(e) {
        $("#dogPreview").attr("src", e.target.result);
    }
    reader.readAsDataURL(file);
    
    const val = $(this).val();
    if(val != null) {
    	$("#dogPhoto").attr("name", "photo2");
    }
    const name = $("#dogPhoto").attr("name");
    
    console.log(name);
    console.log(val);
});