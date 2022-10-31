$("#addDog").on("click", function(){
	$("#dog-modal").css("display", "flex");
	$("#dogProfileForm").attr("action", "/insertMyDog.do");
	$("#dogBtn").text("추가하기");
	$("#dogType1").css("display", "none");
	$("#dogType2").css("display", "block");
	
	$("#dogNo").val("");
	$("#dogName").prop("readonly", false);
	$("#dogName").val("");
	$("#dogType1").val("");
	$("#dogType1").prop("readonly", false);
	$("#dogAge").val("");
	$("#dogWeight").val("");
	$("#dogPreview").attr("src", "/resources/img/default_dog.png");
	$("input:radio[name=dogGender]").prop("checked", false);
	$("input:radio[name=dogNeutral]").prop("checked", false);
	$("input:radio[name=dogVacc]").prop("checked", false);
	
	$.ajax({
        url  : '/selectAllDogType.do',
        type : 'post',
        success : function(data){
        	for(let i=0; i<data.length; i++) {
        		const option = $("<option>");
        		option.val(data[i].typeCode);
        		option.text(data[i].typeName);
        		$("#dogType2").append(option);
        	}
        }
    });
});

function dogModal(dogNo) {
	$("#dog-modal").css("display", "flex");
	$("#dogProfileForm").attr("action", "/updateMyDog.do");
	$("#dogType1").css("display", "block");
	$("#dogType2").css("display", "none");
	$.ajax({
        url  : '/selectMyOneDog.do',
        data : {dogNo : dogNo},
        type : 'post',
        success : function(data){
        	//console.log(data);
			$("#dogNo").val(data.dogNo);
        	$("#dogName").val(data.dogName);
        	$("#dogName").prop("readonly", true);
        	$("#dogType1").val(data.dogType);
        	$("#dogType1").prop("readonly", true);
        	$("#dogAge").val(data.dogAge);
        	$("#dogWeight").val(data.dogWeight);
        	$("#dogBtn").text("수정하기");
        	
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