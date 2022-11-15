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
                
                
                var reviewsInput =$(".reviews-input");
                var rereviewsBtn = $(".rereviews-btn");
                rereviewsBtn.fadeOut(1000); 
                reviewsInput.focus(function(){
        			rereviewsBtn.fadeIn(1000);
                });
                reviewsInput.blur(function(){
        			rereviewsBtn.fadeOut(1000);        	
                });
                
        }
    })
});

function modalViews(e){
	$.ajax({
	url : "/selectContentBox.do",
	data: {wmNo : e},
	success : function(data){
		
		console.log(data);
		
		//로그인한 유저의 세션값
		const loginId = document.getElementById('login-memberId').value;
		const loginNo = document.getElementById('login-memberNo').value;
		const memberPhoto = document.getElementById('login-memberPhoto').value;
		const memberNickname = document.getElementById('login-memberNickname').value;
		
		
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
		html5 += "<li><span class='material-symbols-outlined'>person</span> 현재 인원 :"+ApplyMemberNum+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>event_available</span> 모임 시간 :"+data.wmMeetTime+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>map</span> 모임 장소 : "+data.wmAddr+"</li>";
		html5 += "<li id='m_reply"+data.wmNo+"'><span class='material-symbols-outlined'>map</span> 댓글수 : "+data.wmAddr+"</li>";
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
		
		
		
		
		
		$(".comment-list-box").addClass('reply-list'+data.wmNo);
		console.log(loginId);
		let listHtml = "";
		if(data.wmcList.length ==0){
			//해당 게시물에 작성된 댓글이 없다면.
		}else{
			//해당 게시물에 작성된 댓글이 있다면
			for(let q=0; q<data.wmcList.length; q++){
			
				
				
				//작성된 댓글의 길이만큼 반복한다.
				if(data.wmcList[q].wmcClass ==0 ){
					//해당 댓글이 일반 댓글인 경우
						listHtml += "<div class='input-comment-box-view views-list'>";
						listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+data.wmcList[q].memberPhoto+"'></div>";
						listHtml +=	"<div class='comment-member-view'>";
						listHtml +=  "<span>"+data.wmcList[q].memberNickname+"</span>";
						listHtml += data.wmcList[q].wmcContent;
						if(loginId.length >= 1 ){
							//현재 로그인 상태이고,
							if(data.wmcList[q].memberNo == loginNo){
								//현재 사용자가 이 댓글의 작정자 일때 삭제 버튼 생성
								listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" · <div class='recomment-input'>댓글달기</div><div class='delete-inputs-comment'>삭제하기</div><div class='show-recomments'>대댓글on/off</div></div>";
							}else{
								// 댓글 작성 div를 작동 시키기 위해서는  게시글 번호(wmNo), 댓글번호(wmcNo), 댓글 작성자(memberNo)를 인자로 담아서 넘겨주어야함.							
								listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" · <div class='recomment-input'>댓글달기</div><div class='show-recomments'>대댓글on/off</div></div>";
							}
						}else{
							listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" <div class='show-recomments'>대댓글on/off</div></div>";
						}
						listHtml += "</div>";
						listHtml += "</div>" ;
				}else{
					//해당 댓글이 대댓글인 경우
					listHtml += "<div class='input-comment-box-view reviews recomments"+data.wmcList[q].wmcGroup+"'>";
					listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+data.wmcList[q].memberPhoto+"'></div>";
					listHtml +=	"<div class='comment-member-view reviews-sub'>";
					listHtml +=  "<span>"+data.wmcList[q].memberNickname+"</span>";
					listHtml += data.wmcList[q].wmcContent;
					if(loginId.length >= 1 ){
							//현재 로그인 상태이고,
							if(data.wmcList[q].memberNo == loginNo){
								//현재 사용자가 이 댓글의 작정자 일때 삭제 버튼 생성
								listHtml += "<div class='view-sub'>"+data.wmcList[q].wmcDate+"<div class='delete-inputs-comment'>삭제하기</div></div>";
								}else{
									listHtml += "<div class='view-sub'>"+data.wmcList[q].wmcDate+"</div>";	
								}
						}else{
							//로그인상태가 아닐때,
							listHtml += "<div class='view-sub'>"+data.wmcList[q].wmcDate+"</div>";
						}
					listHtml += "</div>";
					listHtml += "</div>" ;
				}
			} 
		}
		$(".comment-list-box").html(listHtml);
		
		
		
		let listInputHtml = "";
		listInputHtml += "<div class='input-comment-box-view reviews'>";
		listInputHtml += "<div class='input-comment-writer-profil'><img src='"+memberPhoto+"'></div>";
		listInputHtml += "<div class='comment-member-view reviews-sub rereviews'>";
		listInputHtml += "<span>"+memberNickname+"</span>";
		listInputHtml += "<input type='text' name='' class='reviews-input' id='' placeholder='대댓글 달기...'>";
		listInputHtml += "</div>";
		listInputHtml += "<button type='button' name='' class='rereviews-btn' id=''>등록</button>";
		listInputHtml += "</div>";
		$(".recomment-input").one("click",function(){
			$(this).parent().parent().parent().after(listInputHtml);
		});
		$(".rereviews-btn").on("click",function(){
			
		});
		
		
		//몇번째 대댓글on/off인지 index만 세주는거;
		$(".show-recomments").on("click",function(){
			if($(this).parents(".views-list").nextUntil(".views-list").css('display') ==='none'){
				$(this).parents(".views-list").nextUntil(".views-list").slideDown();
			}else{
				$(this).parents(".views-list").nextUntil(".views-list").slideUp();
			}
		});
		
		
		// ${"recomments"+A+"")를 누르면 대댓글 on/off
		
		
		// 화면 호출
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


//댓글 대댓글 호출
/*
function commentLoad(e){
	$.ajax({
		url : "/commentLoad.do",
		type : "get",
		data : {
			wmNo : e
		},
		success : function(data){
			console.log("댓글 리스트 호출 성공");
			console.log(data);
			
			//로그인 유무 파악
			const loginId = document.getElementById('login-memberId').value;
			const loginNo = document.getElementById('login-memberNo').value;
			const memberPhoto = document.getElementById('login-memberPhoto').value;
			
			let listHtml = "";
			for(const i in data){
				let wmcNo = data[i].wmcNo;
				let wmNo = data[i].wmNo;
				let wmcGroup = data[i].wmcGroup;
				let wmcGroupOrder = data[i].wmcGroupOrder;
				let wmcClass = data[i].wmcClass;
				let memberNo = data[i].memberNo;
				let wmcContent = data[i].wmcContent;
				let wmcDate = data[i].wmcDate;
				let wgap = data[i].wgap;
				let profile = data[i].profile;
				
				console.log(wmcClass); // 댓글은 0, 대댓글은 1
				
				if(wmcContent == ""){
					// 컨텐츠가 비었을 때 == 삭제된 댓글일 때
					listHtml += "<div class='input-comment-box-view views-list'>";
					listHtml += "<div class='input-comment-writer-profil'><img src='/resources/img/default_profile.png'></div>";
					listHtml +=	"<div class='comment-member-view'>";
					listHtml +=  "<span>없음</span>";
					listHtml += "(삭제 된 댓글입니다.)";
					listHtml += "<div class='view-sub'><span class='material-symbols-outlined'>map</span>해당 게시물은 삭제 되었습니다.  </div>";
					listHtml += "</div>";
					listHtml += "</div>";
				}else{
					if(wmcClass ==0){
						//댓글일 때
						listHtml += "<div class='input-comment-box-view views-list'>";
						listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+memberPhoto+"'></div>";
						listHtml +=	"<div class='comment-member-view'>";
						listHtml +=  "<span>"+memberNickname+"</span>";
						listHtml += wmcContent;
						listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>[수정된 댓글]"+wmcDate+" · </div>";
						listHtml += "</div>";
						listHtml += "</div>" ;
						if(loginId.length >= 1 ){
							//로그인 상태일 때, 댓글 작성 div 생성
							// 댓글 작성 div를 작동 시키기 위해서는  게시글 번호(wmNo), 댓글번호(wmcNo), 댓글 작성자(memberNo)를 인자로 담아서 넘겨주어야함.
							$(".clear-comments span").after("<div class='recomment-input'>댓글달기</div>");
						}
					}else{
						//대댓글 일 때,
						listHtml += "<div class='input-comment-box-view reviews'>";
						listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+memberPhoto+"'></div>";
						listHtml +=	"<div class='comment-member-view reviews-sub'>";
						listHtml +=  "<span>"+memberNickname+"</span>";
						listHtml += wmcContent;
						listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>[수정된 댓글]"+wmcDate+" · </div>";
						listHtml += "</div>";
						listHtml += "</div>";
						if(loginId.length >= 1){
							//현재 로그인 상태이고,
							if(memberNo == loginNo){
								//현재 사용자가 이 댓글의 작정자 일때 삭제 버튼 생성
								$(".recomment-input").after("<div class='delete-inputs-comment'>삭제하기</div>");
							}
						}
						
						//댓글에 댓글달기를 누르면 대댓글 입력란 형성
						listHtml += "<div class='input-comment-box-view reviews'>";
						listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+memberPhoto+"'></div>";
						listHtml +=	"<div class='comment-member-view reviews-sub rereviews'>";
						listHtml +=  "<span>"+memberNickname+"</span>";
						listHtml += wmcContent;
						listHtml += "<input type='text' name='' class='reviews-input' id='input_rereply"+no+"' placeholder='대댓글 달기...'>";
						listHtml += "</div>";
						listHtml += "<button type='submit' name='' class='rereviews-btn' id='input_rereply"+wmcNo+"' wmcNo='"+wmcNo+"' wmcNo='"+wmcNo+"'>등록</button>";
						listHtml += "</div>";
						// 대댓글을 입력하면 댓글의 번호와 게시물 번호가 함수에 전달.
						// 댓글 번호 (wmcNo), 게시물 번호 (wmNo)
						// ----- 대댓글 입력 끝
					};
					// 댓글 목록이 들어가는 공간에 받아온 댓글 리스트 넣기
					$(".comment-list-box").html(listHtml);
					
					// 댓글을 작성한 후에 등록을 누르면 그 click event를 jquery로 처리
					$("rereviews-btn").on("click",function(){
						console.log('wmcNo',$(this).attr('wmcNo'));
						console.log('wmNo',$(this).attr('wmNo'));
						
						//댓글을 DB에 저장하는 함수 호출, wmcNo와 wmNo를 같이 넘겨주어야 함.
						//여기여기 - 함수 생성해야함
						//WriteReRePly($(this).attr('wmNo'),$(this).attr('wmcNo'));
					});
					// 삭제 버튼을 누른 경우,
					$(".delete-inputs-comment").on("click",function(){
						if($(this).attr('wmcClass') == 0){
							//댓글 삭제일때,
							//여기여기 - 함수 생성해야함
							//DeleteReply($(this).attr('wmcNo'),$(this).attr('wmNo'));
						}else{
							//대댓글 삭제일때,
							//여기여기 - 함수 생성해야함
							//DeleteReply($(this).attr('wmcNo'),$(this).attr('wmNo'),$(this).attr('wmcGroup'));
						}
					
					})											

				}
			
			}
		}
	});
};
*/
/*
/*
const WriteReReply = function(wmNo,wmcNo){
	console.log(wmNo);
	console.log(wmcNo);
	
	console.log($("#input_rereply" + wmcNo).val());
	let wmcContent = $("#input_rereply" + wmcNo).val();
	wmcContent = wmcContent.trim();
	if(wmcContent == ""){
		// 입력 된 값이 없을 떄
		alert("글을 입력하세요!");
	}else{
		//입력 란 비우기
		$("#input_rereply" + wmcNo).val("");
		$.ajax({
			url : 'picture_write_rereply.do',
			type : 'get',
			data : {
				wmcNo : wmcNo,
				wmNO : wmNO,
				wmcContent : wmcContent
			},
			success : function(data){
				let reply = data.reply;
				$("#m_reply"+wmNo).text(reply);
				console.log("답글 작성 성공");
				//게시물 번호에 해당하는 댓글 리스트 새로 받아오기
				commentLoad(wmNo);
			},
			error : function(){
				alert("서버 에러 ");
			}
		});
	};
	const DeleteReply = function(wmcNo, wmNo){
		$.ajax({
			url : '/picture_delete_reply.do',
			type : 'get',
			data : {
				wmcNo : wmcNo,
				wmNo : wmNo
			},
			success : function(data){
				let reply = data.reply;
				$("#m_reply"+wmNo).text(reply);
				cosole.log("댓글 삭제 성공");
				commentLoad(wmNo);
			}
		
		});
	};
	// 대댓글 삭제 일 떄
	const DeleteReReply = function(wmc,No,wmcGroup){
		//대댓글을 삭제한다.
		$.ajax({
			url : 'picture_delete_rereply.do',
			type : 'get',
			data : {
				wmcNo : wmcNo,
				wmNo : wmNo,
				wmcGroup : wmcGroup
			},
			success : function(data){
				console.log("대댓글 삭제 완료!");
				let reply = data.reply;
				$("#m_reply"+wmNo).text(reply);
				commentLoad(wmNo);
			}
		});
	};
}
*/

$(".write_reply").click(function(){
	if($('.writer-comment-input').val().trim() ==''){
		alert('댓글 내용은 필수 입력입니다.');
		$('.writer-comment-input').val('');
        $('.writer-comment-input').focus();
        return false;
	}
});

