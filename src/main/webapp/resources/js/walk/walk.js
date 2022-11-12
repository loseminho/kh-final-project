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
				
				if(data[i].fileList.length != 0){
					html += "<img src='/resources/upload/walkmate/"+data[i].fileList[0].filepath+"'>";
				}else{
					html += "<img src='/resources/img/walkmate/liry1.jpg'>";
				}
				
				html += "</div>";
				html += "<div class='content-box-list titles'>";
				html += "<a href=''>"+data[i].wmTag+"</a>";
				html += "<h2>"+data[i].wmTitle+"</h2>";
				html += "<div class='titles-sub'>"+data[i].wmSubTitle+"</div>";
				let shortDate = data[i].wmMeetTime.slice(5, data[i].wmMeetTime.length);
				let countApply = 0;
				let noCountApply =0;
				for(let q=0; q<data[i].wList.length; q++){
					if(data[i].wList[q].applyStat ==0){
						countApply++
					}else{
						noCountApply++
					}
				}
				
				//승인멤버, 비승인멤버 수 체크
				let ApplyMemberNum = 0;
				let NoApplyMemberNum = 0;
				
				if(data[i].wList.length != 0){
					for(let q=0; q<data[i].wList.length; q++){
								if(data[i].wList[q].applyStat==2){
								
								}else if(data[i].wList[q].applyStat==1){
									NoApplyMemberNum++
								}else if(data[i].wList[q].applyStat==0){
									ApplyMemberNum++
								}
							}
				}
				
				
				html += "<div class='titles-info'><span class='material-symbols-outlined'>map</span> "+data[i].wmAddr+" · "+shortDate+"  <span class='material-symbols-outlined'>group</span>"+countApply+"/"+data[i].wmRangeMember+"</div>";
				html += "<ul class='user-profil'>";
				if(ApplyMemberNum == 0){
				 html += "등록된 회원이 없습니다! 모임에 참가 해주세요~ㅎ";
				}else{
					for(let j=0; j<data[i].wList.length; j++){
						if(data[i].wList[j].applyStat ==0){
							html += "<li>";
							html += "<img src='/resources/img/member/";
							if(data[i].wList[j].memberPhoto != null){
								html += data[i].wList[j].memberPhoto;
								html +="'>";
								html += "</li>";
							}else{
								html += "카카오톡기본프로필.png";
								html +="'>";
								html += "</li>";
								}
						}else{
							/*아직 승인되지 못한 인원 리스트*/
						}
						
					}
					if(ApplyMemberNum != data[i].wmRangeMember){
						html += "<li><span class='material-symbols-outlined'>add</span></li>"					
					}else{
						html += "(임시 메세지)모임 마감!";
					}
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
		console.log(data);
		
		//승인멤버, 비승인멤버 수 체크
		let ApplyMemberNum = 0;
		let NoApplyMemberNum = 0;
		
		if(data.wList.length != 0){
			for(let i=0; i<data.wList.length; i++){
						if(data.wList[i].applyStat==2){
						
						}else if(data.wList[i].applyStat==1){
							NoApplyMemberNum++
						}else if(data.wList[i].applyStat==0){
							ApplyMemberNum++
						}
					}
		}
		
		
		const infoSection = document.getElementById("info-of-main");
		infoSection.style.display = "block";
		
		$(".input-apply-wmNo").attr("value",data.wmNo);
		
		if(data.fileList.length>0){
			$("#view-section1").attr("src","/resources/upload/walkmate/"+data.fileList[0].filepath);		
		}else{
			$("#view-section1").attr("src","/resources/img/walkmate/profil.png");
		}
		
		
		
		
		var html1 = "";
		html1 += "<div class='writer-id'>"+data.leaderNickname+"</div>";
		html1 += "<h2 id='view-section2'>"+data.wmTitle+"</h2>";
		html1 += "<input type='text' id='write-section1' placeholder='제목을 입력해주세요.' style='display:none;'>";
		$(".modal-writer-content-box").html(html1);
		var html2 = "";
		html2 += "<span class='material-symbols-outlined'>map</span>"+data.wmAddr+" · "+data.wmMeetTime+"<span class='material-symbols-outlined'>group</span> "+ApplyMemberNum+"/"+data.wmRangeMember;
		$("#view-section3").html(html2);
		
		var html3 = "";
		html3 += data.wmContent;
		$("#view-section4").html(html3);
		
		var html4 = "";
		if(data.wList.length != 0){
			for(let i=0; i<data.wList.length; i++){
					if(data.wList[i].applyStat==2){
					
					}else if(data.wList[i].applyStat==1){
					
					}else if(data.wList[i].applyStat==0){
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
				}
				if(ApplyMemberNum ==0){
					html4 += "<li class='member-info-list'>";
					html4 += "<div class='member-info-profil'><span class='material-symbols-outlined'>add</span></div>";
					html4 += "<div class='member-info-id'>";
					html4 += "<span>참여 유저가 없습니다.</span>";
					html4 += "모임을 신청하여 함께 산책 해보아요!";
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
		html5 += "<li><span class='material-symbols-outlined'>person</span> 현재 인원 :"+data.wList.length+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>event_available</span> 모임 시간 :"+data.wmMeetTime+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>map</span> 모임 장소 : "+data.wmAddr+"</li>";
		$(".mate-info-list").html(html5);
		
		var html6 = "";
		if(data.wList.length != 0){
			for(let i=0; i<data.wList.length; i++){
						if(data.wList[i].applyStat==1){
							html6 += "<div>";
							html6 += "<div class='member-info-ready-profil'><img src='resources/upload/member/";
								if(data.wList[i].memberPhoto != null){
									html6 += data.wList[i].memberPhoto;
									html6 += "'></div>";
									html6 += "<p class='arrow_box'>";
									html6 += data.wList[i].memberNickname;
									html6 += "님</p>";
									html6 += "</div>";
								}else{
									html6 += "카카오톡기본프로필.png";
									html6 += "'></div>";
									html6 += "<p class='arrow_box'>";
									html6 += data.wList[i].memberNickname;
									html6 += "님</p>";
									html6 += "</div>";
								}
						}
					}
		}
		if(NoApplyMemberNum ==0){
			$("#apply-ready1").attr('style', "display:none;");
			$("#apply-ready2").attr('style', "display:none;");
			$("#apply-ready3").attr('style', "display:none;");
		}else{
			$("#apply-ready1").attr('style', "display:block;");
			$("#apply-ready2").attr('style', "display:block;");
			$("#apply-ready3").attr('style', "display:block;");
		}
		
		$(".member-info-ready-list").html(html6);
		
		const applySection = document.getElementById("applySection");
		applySection.style.display = "none";
		
		if(ApplyMemberNum ==data.wmRangeMember){
			//신청 못하게
			$("#view-section6").attr("disabled",true).text('모임 마감').css("backgroundColor","#9d9d9d").css("border","2px solid #9c9c9c");
		}else{
			//신청 가능하게
			$("#view-section6").attr("disabled",false).attr("onclick", "modalApplyView();").text('신청하기').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
		}
		
		
		modalView();
	}
	})
};
function alertMSG(){
			alert('인원이 가득 차 신청 할 수 없습니다!');
		};
		
function modalApplyView(){
	const applySection = document.getElementById("applySection");
	applySection.style.display = "block";
	$("#applySection").css("transition-duration","0.5s");
	modalView();
	const infoSection = document.getElementById("info-of-main");
	infoSection.style.display = "none";
	window.scrollTo(0,0);
}
function modalApplyViewOff(){
	const applySection = document.getElementById("applySection");
	applySection.style.display = "none";
	modalView();
	const infoSection = document.getElementById("info-of-main");
	infoSection.style.display = "block";
}

function modalWrites(){
	const infoSection = document.getElementById("info-of-main");
	infoSection.style.display = "block"
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









