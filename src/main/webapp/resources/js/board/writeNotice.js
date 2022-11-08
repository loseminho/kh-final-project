//공지사항 첨부파일 
$("#noticeFile-btn").on("click",function(){
	document.getElementById("noticeFile").click();
});

//공지사항 첨부파일 이름 표시

$("#noticeFile").on("change",function(){
	const files = $("#noticeFile")[0].files;
	console.log(files); 
	for(let i=0; i<files.length; i++){
		const fileName = $(".filename");
		fileName.text(files[i].name);
		console.log(fileName);
		const closeBtn = $("<span>");
        closeBtn.addClass("closeBtn");
        closeBtn.text("X");
        closeBtn.attr("onclick","deleteFile(this)");
		fileName.append(closeBtn);
	}
	
});

//첨부한 파일 취소  
function deleteFile(obj){
	const files = $("#noticeFile")[0].files;
	const deleteFilename = $(obj).prev().text();
	for(let i=0; i<files.length; i++){
		if(files[i].name == deleteFilename){
			files.splice(i,1);
			break;
		}
	}
	
	//파일이 지워진 경우 처음으로 돌려놓기 
	if(files.length == 0){
    $(".filename").show();
    }
    $(obj).parent().remove();
    fileSetting();
}

function fileSetting(){
    //input[type=file] value는 보안상 변경이 불가능
	//input[type=file] 변경용 객체 필요
	const files = $("#noticeFile")[0].files;
	const dataTransfer = new DataTransfer();
	for(let i=0; i<files.length; i++){
		dataTransfer.items.add(files[i]);
	}
    $("input[name=boardFile]").prop("files",dataTransfer.files);
}