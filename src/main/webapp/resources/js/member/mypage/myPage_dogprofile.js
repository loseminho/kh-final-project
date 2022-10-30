function dogModal() {
	$("#dog-modal").css("display", "flex");
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
    
    //console.log(name);
    //console.log(val);
});