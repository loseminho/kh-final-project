function selectbox(){
	const qnaCateNo = $("#qnaCateNo").val();
	console.log(qnaCateNo);
	$("#qnaCateNo").val(qnaCateNo).attr("selected","selected");
};



const fileZone = $(".fileZone");
const files = new Array();
//드래그 되는 영역에 들어올때 
fileZone.on("dragenter",function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).css("border","1px solid #1abc9c");
});
//드래그 영역에서 나갈때 
fileZone.on("dragenter",function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).css("border","1px solid #5e5e5e");
});
//드래그 영역에 올라와 있을때
fileZone.on("dragover",function(e){
    e.stopPropagation();
    e.preventDefault();
});
//드래그 영역에 내려놓을때 
fileZone.on("drop",function(e){
    e.stopPropagation();
    e.preventDefault();
    //e.originalEvent.dataTransfer.files
		for(let i=0; i<e.originalEvent.dataTransfer.files.length;i++){
			files.push(e.originalEvent.dataTransfer.files[i]);
		}
		//console.log(files.length); 넣은 파일의 수만큼
		/*
		< div class="fileName">
		<span>업로드한 파일명 </span>
		<span class="closeBtn">X</span>
		</div>
		*/
        $(".fileMsg").hide();
        $(this).find(".fileName").remove();
        for(let i=0; i<files.length; i++){
            const fileNameDiv = $("<div>");
            fileNameDiv.addClass("fileName");
            const fileNameSpan = $("<span>");
            fileNameSpan.text(files[i].name);
            const closeBtn = $("<span>");
            closeBtn.addClass("closeBtn");
            closeBtn.text("X");
            closeBtn.attr("onclick","deleteFile(this)");
            fileNameDiv.append(fileNameSpan).append(closeBtn);
            $(this).append(fileNameDiv);
        }
        fileSetting();
        $(".material-symbols-outlined").hide();
    });
function deleteFile(obj,fileNo,filepath){
	const fileNoInput = $("<input>");
	fileNoInput.attr("name","fileNoList");
	fileNoInput.val(fileNo);
	fileNoInput.hide();
	
	const filepathInput = $("<input>");
	filepathInput.attr("name","filepathList");
	filepathInput.val(filepath);
	filepathInput.hide();
    
    $("#updateFrm").append(fileNoInput).append(filepathInput);
			$(obj).parent().remove();
			fileSetting();
		}

function fileSetting(){
    //input[type=file] value는 보안상 변경이 불가능
	//input[type=file] 변경용 객체 필요
	const dataTransfer = new DataTransfer();
	for(let i=0; i<files.length; i++){
		dataTransfer.items.add(files[i]);
	}
    $("input[name=boardFile]").prop("files",dataTransfer.files);
}

//글 등록전 함수호출, 문의유형 선택 
function checkSelect(){
	const check = $("#qnaCateNo").val();
	if(check == 0){
		alert("문의 유형을 선택하세요");
		return false;
	}
}


//취소 버튼 클릭시 
$(".qna-back-btn").on("click",function(){
    location.href="/faqQnaBoardFrm.do"
});

