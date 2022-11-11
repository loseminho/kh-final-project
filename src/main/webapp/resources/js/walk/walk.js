$(document).ready(function(){
    $.ajax({
        url : "/allWalkListAjax.do",
        type : "post",
        success : function(data){
            var html = "";
			html += "<div class='write-new-content-btn'>";
			const loginId = document.getElementById('login-memberId').value;
			
			if(loginId.length >= 1 ){
				html += "<button type='button' onclick='modalWrites();'>모임 만들기</button>";						
			}else{
				html += "<button style='visibility:hidden;' type='button' onclick='modalWrites();'>모임 만들기</button>";
			}
			html += "</div>";            
            for(let i=0; i<data.length; i++){
				html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
				html += "<div class='content-box-list img'>";
				html += "<img src='/resources/img/walkmate/liry1.jpg'>";
				html += "</div>";
				html += "<div class='content-box-list titles'>";
				html += "<a href=''>"+data[i].wmTag+"</a>";
				html += "<h2>"+data[i].wmTitle+"</h2>";
				html += "<div class='titles-sub'>"+data[i].wmSubTitle+"</div>";
				html += "<div class='titles-info'><span class='material-symbols-outlined'>map</span> "+data[i].wmAddr+" · 8.28(일) 오전 11:10  <span class='material-symbols-outlined'>group</span>5/"+data[i].wmRangeMember+"</div>";
				html += "<ul class='user-profil'>";
				if(data[i].wList.length == 0){
				 html += "등록된 회원이 없습니다.ㅜㅜ  모임에 참가 해주세요!";
				}else{
					for(let j=0; j<data[i].wList.length; j++){
						html += "<li>";
						html += "<img src='/resources/img/member/";
						if(data[i].wList[j].memberPhoto != null){
							html += data[i].wList[j].memberPhoto;
						}else{
							html += "카카오톡기본프로필.png";
							}
						html +="'>";
						html += "</li>";
					}
					html += "<li><span class='material-symbols-outlined'>add</span></li>"
				}
				html += "</ul>";
				html += "</div>";
				html += "</div>";
            }
                $(".content-bottom").html(html);
        }
    })
});

function modalViews(e){
	$.ajax({
	url : "/selectContentBox.do",
	data: {wmNo : e},
	success : function(data){
		var html1 = "";
		html1 += "<div class='writer-id'>"+data.leaderNickname+"</div>";
		html1 += "<h2 id='view-section2'>"+data.wmTitle+"</h2>";
		html1 += "<input type='text' id='write-section1' placeholder='제목을 입력해주세요.' style='display:none;'>";
		$(".modal-writer-content-box").html(html1);
		
		var html2 = "";
		html2 += "<span class='material-symbols-outlined'>map</span>"+data.wmAddr+" · "+data.wmMeetTime+"<span class='material-symbols-outlined'>group</span>5/"+data.wmRangeMember;
		$("#view-section3").html(html2);
		
		var html3 = "";
		html3 += data.wmContent;
		$("#view-section4").html(html3);
		
		var html4 = "";
		if(data.wList.length != 0){
			for(let i=0; i<data.wList.length; i++){
					html4 += "<li class='member-info-list'>";
					html4 += "<div class='member-info-profil'><img src='/resources/img/member/";
					if(data.wList[i].memberPhoto != null){
						html4 += data.wList[i].memberPhoto;
					}else{
						html4 += "카카오톡기본프로필.png";
					}
					html4 += "'></div>";
					html4 += "<div class='member-info-id'>";
					html4 += "<span>"+data.wList[i].memberNickname+"</span>";
					html4 += data.wList[i].applyContent;
					html4 += "</div>";
					html4 += "</li>";
				}
		}else{
			html4 += "<li class='member-info-list'>";
					html4 += "<div class='member-info-profil'><span class='material-symbols-outlined'>add</span></div>";
					html4 += "<div class='member-info-id'>";
					html4 += "<span>참여 유저가 없습니다.</span>";
					html4 += "모임을 신청하여 함께 산책 해보아요!";
					html4 += "</div>";
					html4 += "</li>";
		}
		$(".member-info-ul").html(html4);
		
		var html5 = "";
		html5 += "<li><span class='material-symbols-outlined'>groups</span> 총 인원 :"+data.wmRangeMember+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>person</span> 현재 인원 :"+data.wmRangeMember+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>event_available</span> 모임 시간 :"+data.wmMeetTime+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>map</span> 모임 장소 : "+data.wmAddr+"</li>";
		
		$(".mate-info-list").html(html5);
		modalView();
	}
	})
};

function modalWrites(){
	$(".modal-writer-content-box").html('');
	const loginNickname = document.getElementById('login-memberNickname').value;
	const loginPhoto = document.getElementById('login-memberPhoto').value;
	
	var html1 = "";
		html1 += "<img src='"+loginPhoto+"'>";
		$(".modal-writer-profil").html(html1);
	
    var html = "";
		html += "<div class='writer-id'>"+loginNickname+"</div>";
		html += "<h2 id='view-section2' style='display:none;'></h2>";
		html += "<input type='text' name='wmTitle' id='write-section1' placeholder='제목을 입력해주세요'style='display:block;' maxlength='25' >";
		html += "<input type='text' name='wmSubTitle' id='write-section6' placeholder='모임을 위한 한줄평을 작성하세요!'style='display:block;' maxlength='20' >";
		$(".modal-writer-content-box").html(html);
		modalView();
		modalViewOff();
		modalWriteOn();
}

//모임 인원 숫자 수 제한
$("#writeTitle3").on('keyup', function() {
    if (/\D/.test(this.value)) {
        this.value = this.value.replace(/\D/g, '')
        alert('숫자만 입력가능합니다.');
    }
  if (this.value > 10) {
      this.value = 10;
      alert('모임은 10명 이하만 가능합니다~');
  }
});

$("#writeDate").on("change",function(){
	$("#writeDate").css("display","none");
	$("#writeTime").css("display","inline-flex").css("transition-duration","0.5s");
	$("#back-time-btn").css("display","block").css("transition-duration","0.5s");
	$("#writeDate-lable").css("display","none");
	$("#writeTime-lable").css("display","inline-block").css("transition-duration","0.5s");
	const DateVal = document.querySelector("#writeDate").value;
	const TimeVal = document.querySelector("#writeTime").value;
	const DateTime = DateVal+" "+TimeVal;
	document.querySelector("#meetTime").value = DateTime;
})
$("#writeTime").on("change",function(){
	const DateVal = document.querySelector("#writeDate").value;
	const TimeVal = document.querySelector("#writeTime").value;
	const DateTime = DateVal+" "+TimeVal;
	document.querySelector("#meetTime").value = DateTime;
})


function backTime(){
	$("#writeTime").css("display","none");
	$("#writeDate").css("display","inline-flex").css("transition-duration","0.5s");
	$("#back-time-btn").css("display","block").css("transition-duration","0.5s");
	$("#writeTime-lable").css("display","none");
	$("#writeDate-lable").css("display","inline-block").css("transition-duration","0.5s");
}

//글쓰기 - 주소 찾기
function searchAddr() {
    new daum.Postcode({
        oncomplete: function(data) {
            $("#writeTitle2").val(data.sido + " " + data.sigungu);
        }
    }).open();
}

//파일 첨부
const previewBox= $(".preview-box");
 var reader = new FileReader();
 var fidx =0;
 reader.onload = function(e){
	$(".preview").eq(fidx).attr('src',e.target.result);
	if(fidx == 0){
		$("#write-section4").attr('src',e.target.result);		
	}
}
$(document).ready(function(){
	$(".photo").change(function(){
		fidx = $(".photo").index(this);	
		
		 if (this.files && this.files[0]) {
	 		reader.readAsDataURL(this.files[0]);
	 	}
	});
	previewBox.on("click",function(){
	 	const idx = previewBox.index(this);
		
	 	$(".photo").eq(idx).trigger("click");
 	
 	});
});









