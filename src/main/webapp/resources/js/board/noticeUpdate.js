//공지사항 첨부파일 클릭 
$("#noticeFile-btn").on("click",function(){
	document.getElementById("noticeFile").click();
});

//공지사항 첨부파일 이름표

function loadfile(nf){

	let files = nf.files;
	console.log(files);
	
	for(let i=0;i<files.length;i++){
		console.log(files[i].name);
		const fileNameDiv = $("<div>");
    	fileNameDiv.addClass("fileName");
    	const fileNameSpan = $("<span>");
		fileNameSpan.text(files[i].name);
		const closeBtn = $("<span>");
    	closeBtn.addClass("closeBtn");
    	closeBtn.text("X");
    	closeBtn.attr("onclick","deleteFile(this)");
		fileNameDiv.append(fileNameSpan).append(closeBtn);
    	$(".fileZone").append(fileNameDiv);
	}
	
}

//첨부한 파일 취소  
function deleteFile(obj,fileNo,filepath){

	const deleteFilename = $(obj).parent().parent().parent().find("#noticeFile")[0].files;
	const files = deleteFilename;
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
			fileSetting(files);

}

function fileSetting(files){
    //input[type=file] value는 보안상 변경이 불가능
	//input[type=file] 변경용 객체 필요
	const dataTransfer = new DataTransfer();
	for(let i=0; i<files.length; i++){
		dataTransfer.items.add(files[i]);
	}
    $("#noticeFile").prop("files",dataTransfer.files);
}


//취소버튼 페이지 이동  
$(".notice-back-btn").on("click",function(){
	location.href="/notice.do?reqPage=1"
});

