
let totalList; // 해당 카테고리의 리스트 전체 개수
let totalCnt =6; // 화면에 보여줄 리스트의 개수

//여기여기
//첫 로딩 화면
$(document).ready(function(){
	var loginLevel = document.getElementById('login-level').value;
	if(loginLevel != 3){
		allList();	
	}else{
		alert("블랙리스트 된 회원입니다. 메이페이지와 문의페이지를 확인하세요!");
		$(location).attr('href', '/')
	}
});

function allList(){
	    $.ajax({
	        url : "/allWalkListAjax.do",
	        type : "post",
	        success : function(data){
	            var html = "";
	            totalList = data.length;
	            
				html += "<div class='write-new-content-btn'>";
				const loginId = document.getElementById('login-memberId').value;
				if(loginId.length >= 1 ){
					html += "<button type='button' onclick='modalWrites();'>모임 만들기</button>";						
				}else{
					html += "<button style='visibility:hidden;' type='button' onclick='modalWrites();'>모임 만들기</button>";
				}
				html += "</div>";
				
				   
				
				if(totalCnt >= data.length){
	            	//만약 게시물의 수가 6보다 작다면
		            	for(let i=0; i<data.length; i++){
						html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
						html += "<div class='content-box-list img'>";
						
						if(data[i].fileList.length != 0){
							html += "<img src='/resources/upload/walkmate/"+data[i].fileList[0].filepath+"'>";
						}else{
							html += "<img src='/resources/img/walkmate/walkMateImg1.webp'>";
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
									html += "<img src='/resources/upload/member/";
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
								html += "해당 모임은 마감되었어요ㅠ";
							}
						}
						html += "</ul>";
						html += "</div>";
						html += "</div>";
		            }//END FOR문
		            	
	            }else{
	            	//만약 게시물의 수가 6보다 크면 (더 보여줄 컨텐츠가 있다면)
	            	for(let i=0; i<totalCnt; i++){
						html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
						html += "<div class='content-box-list img'>";
						
						if(data[i].fileList.length != 0){
							html += "<img src='/resources/upload/walkmate/"+data[i].fileList[0].filepath+"'>";
						}else{
							html += "<img src='/resources/img/walkmate/walkMateImg1.webp'>";
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
									html += "<img src='/resources/upload/member/";
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
								html += "해당 모임은 마감되었어요ㅠ";
							}
						}
						html += "</ul>";
						html += "</div>";
						html += "</div>";
		            }//END FOR문
		            
	            }//END ELSE문
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
	    });
};

$(document).on("click",".add-btn",function(){
	console.log("totalList : " +totalList);
	console.log("totalCnt : " +totalCnt);
	//더보기 버튼을 눌렀을 때, 화면에 보여줄 리스트 갯수 늘려주는 코드
 		for(let i=0;i<4;i++){
 			if(totalCnt == totalList){
 				$(".add-btn").text("더 이상 목록이 없습니다.");
 				break;
 				allList();
 			}else{
 				$(".add-btn").text("목록 더 보기 (+)");
				totalCnt ++;
				allList();
 			}
		};
	});


let dogAmount = 0;
function modalViews(e){
	const loginNo1 = document.getElementById('login-memberNo').value;
	if(loginNo1 != null){
		$.ajax({
			url:"/getAmount.do",
			data:{memberNo:loginNo1},
			success:function(data){
				dogAmount = data;
			}
		});	
	}
	$.ajax({
	url : "/selectContentBox.do",
	data: {wmNo : e},
	success : function(data){
		
		console.log(data);
		$(".up-btn").trigger("click");
		$(".modal-writer-profil img").attr('src',"/resources/upload/member/"+data.leaderPhoto).attr("id","view-section1");
		//로그인한 유저의 세션값
		const loginId = document.getElementById('login-memberId').value;
		const loginNo = document.getElementById('login-memberNo').value;
		const memberPhoto = document.getElementById('login-memberPhoto').value;
		const memberNickname = document.getElementById('login-memberNickname').value;
		
		
		//댓글달기 wmNo 주기
		let inputWmNo = "<input type='hidden' name='wmNo' id='input-wmNo' value='"+data.wmNo+"'>";
		$(".write_reply").after(inputWmNo);
		
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
						html4 += "<div class='member-info-profil'><img src='/resources/upload/member/";
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
		html5 += "<li><span class='material-symbols-outlined'>groups</span> 모임 최대 인원 : "+data.wmRangeMember+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>event_available</span> 모임 시간 : "+data.wmMeetTime+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>map</span> 모임 장소 : "+data.wmAddr+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>person</span> 현재 인원 : "+ApplyMemberNum+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>person</span> 대기 인원 : "+NoApplyMemberNum+"</li>";
		html5 += "<li id='m_reply"+data.wmNo+"'><span class='material-symbols-outlined'>map</span> 댓글수 : ";
		if(data.wmcList.length!=0){
			html5 += data.wmcList.length
			html5 += "</li>";
		}else{
			html5 += "현재 작성된 댓글이 없습니다!";
			html5 += "</li>";
		}
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
		
		
		var memberDogCount = loginMemberDog(loginNo);
		
		function loginMemberDog(e){
			
		}
		
		//산책메이트 신청 버튼 기능들
		if(ApplyMemberNum ==data.wmRangeMember){
			// 인원이 가득 찼을 때,
			if(loginNo == data.wmLeader){
				//만약 로그인한 회원이 모임장 일 때,
				$("#view-section6").attr("disabled",false).attr("onclick", "location.href='/walkMatePage.do?wmNo="+data.wmNo+"'").text('모임관리').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
				$("#deleteWm").text('모임 삭제 >>').attr("onclick", "deleteWmMSG();").css("color","#ff4c4c").css("border","2px solid #ff4c4c");
				$("#thankMainWmNo").attr('value','+data.wmNo+');
			}else{
				$("#view-section6").attr("disabled",true).text('모임 마감').css("backgroundColor","#9d9d9d").css("border","2px solid #9c9c9c").css("display","block");
				$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
			}
		}else{
			if(loginId.length >= 1 ){
					//현재 로그인 상태라면 신청 가능,
					if(loginNo == data.wmLeader){
						//만약 로그인한 회원이 모임장 일 때,
						$("#view-section6").attr("disabled",false).attr("onclick", "location.href='/walkMatePage.do?wmNo="+data.wmNo+"'").text('모임관리').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
						$("#deleteWm").text('모임 삭제 >>').attr("onclick", "deleteWmMSG();").css("color","#ff4c4c").css("border","2px solid #ff4c4c").css("display","block");
						$("#thankMainWmNo").attr('value',data.wmNo);
					}else{
						if(dogAmount > 0){
							//개가 잇을ㄸ쨰
							let checkk=0;
							for(let x=0; x<data.wList.length; x++){
								if(memberNickname == data.wList[x].memberNickname){
									checkk = 3;
									break;
								}else{
									checkk=0;
								}
							}
							if(checkk > 0){
								//이미 신청한 유저인지
								$("#view-section6").attr("disabled",true).attr("onclick", "modalApplyView();").text('신청이 완료된 유저입니다.').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
								$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
							}else{
								//신청 안했던
								$("#view-section6").attr("disabled",false).attr("onclick", "modalApplyView();").text('신청하기').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
								$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
							}
						}else{
							//개 없을때 
							$("#view-section6").attr("disabled",true).text('등록된 강아지가 없습니다.').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
							$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
						}
					}
			}else{
				//로그인을 안했을때, 신청을 못함
					$("#view-section6").attr("disabled",true).text('로그인을 해야 참여가 가능합니다.').css("backgroundColor","#1abc9c").css("border","2px solid #1abc9c");
					$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
			}
		}
		
		
		
		
		
		$(".comment-list-box").addClass('reply-list');
		
		let listHtml = "";
		let listInputHtml = "";
		if(data.wmcList.length ==0){
			//해당 게시물에 작성된 댓글이 없다면.
		}else{
			//해당 게시물에 작성된 댓글이 있다면
			for(let q=0; q<data.wmcList.length; q++){

				//작성된 댓글의 길이만큼 반복한다.
				if(data.wmcList[q].wmcClass ==0 ){
					//해당 댓글이 일반 댓글인 경우
						//유저 사진이 없으면
						if(data.wmcList[q].memberPhoto === undefined){
							data.wmcList[q].memberPhoto = "default_profile.png"; 
							}
						listHtml += "<div class='input-comment-box-view views-list'>";
						listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+data.wmcList[q].memberPhoto+"'></div>";
						listHtml += "<div class='give-wmcGroup' style='display:none;'>"+data.wmcList[q].wmcGroup+"</div>";
						listHtml +=	"<div class='comment-member-view'>";
						listHtml +=  "<span>"+data.wmcList[q].memberNickname+"</span>";
						listHtml += "<p>"+data.wmcList[q].wmcContent+"</p>";
						
						if(loginId.length >= 1 ){
							//현재 로그인 상태이고,
							if(data.wmcList[q].memberNo == loginNo){
								//현재 사용자가 이 댓글의 작성자 일때 삭제 버튼 생성
								listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" · <div class='recomment-input'>댓글달기</div><div class='delete-inputs-comment'>삭제하기</div><div class='show-recomments'>덮기</div>";
								listHtml += "</div>";
								listHtml += "<input type='hidden' name='wmcGroup' class='helpWmcGroup' value='"+data.wmcList[q].wmcGroup+"'>"
								listHtml += "<input type='hidden' class='helpWmcGroup' value='"+data.wmcList[q].wmcGroup+"'>";														
								listHtml += "<input type='hidden' class='helpWmNo' name='wmNo' value='"+data.wmNo+"'>"
							}else{
								// 댓글 작성 div를 작동 시키기 위해서는  게시글 번호(wmNo), 댓글번호(wmcNo), 댓글 작성자(memberNo)를 인자로 담아서 넘겨주어야함.							
								listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" · <div class='recomment-input'>댓글달기</div><div class='show-recomments'>덮기</div></div>";
								listHtml += "<input type='hidden' value='"+data.wmcList[q].wmcGroup+"'>"
							}
						}else{
							listHtml += "<div class='view-sub clear-comments'><span class='material-symbols-outlined'>map</span>"+data.wmcList[q].wmcDate+" <div class='show-recomments'>덮기</div></div>";
						}
						listHtml += "</div>";
						listHtml += "</div>" ;
				}else{
					//해당 댓글이 대댓글인 경우
					if(data.wmcList[q].memberPhoto === undefined){
							data.wmcList[q].memberPhoto = "default_profile.png"; 
							}
					listHtml += "<div class='input-comment-box-view reviews'>";
					listHtml += "<div class='input-comment-writer-profil'><img src='/resources/upload/member/"+data.wmcList[q].memberPhoto+"'></div>";
					listHtml +=	"<div class='comment-member-view reviews-sub'>";
					listHtml +=  "<span>"+data.wmcList[q].memberNickname+"</span>";
					listHtml += data.wmcList[q].wmcContent;
					if(loginId.length >= 1 ){
							//현재 로그인 상태이고,
							if(data.wmcList[q].memberNo == loginNo){
								//현재 사용자가 이 대댓글의 작성자 일때 대댓글 삭제 버튼 생성
								listHtml += "<form action='/deleteSubComment.do' method='post'>";								
								listHtml += "<div class='view-sub'>"+data.wmcList[q].wmcDate+"<div class='delete-inputs-sub-comment'>삭제하기</div></div>";
								listHtml += "<input type='hidden' name='wmcNo' class='helpSubWmNo' value='"+data.wmcList[q].wmcNo+"'>";
								listHtml += "<input type='submit' class='deleteSubCommentBtn'>";
								listHtml += "</form>";
								
								
								
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
		
		
		
		listInputHtml += "<form action='/insertSubComment.do' method='post'>";
		listInputHtml += "<div class='input-comment-box-view reviews'>";
		listInputHtml += "<div class='input-comment-writer-profil'><img src='"+memberPhoto+"'></div>";
		listInputHtml += "<div class='comment-member-view reviews-sub rereviews'>";
		listInputHtml += "<span>"+memberNickname+"</span>";
		//wmNo번호
		listInputHtml += "<input type='hidden' name='wmNo' id='input-wmNo' value='"+data.wmNo+"'>";
		//memberNo
		listInputHtml += "<input type='hidden' name='memberNo' value='"+loginNo+"'>";
		//wmcGroup
		listInputHtml += "<input type='hidden' name='wmcGroup' id='input-wmcGroup'>";
		//wmcContent
		listInputHtml += "<input type='text' name='wmcContent' class='reviews-input' placeholder='대댓글 달기...' maxlength='55'>";
		listInputHtml += "</div>";
		listInputHtml += "<button type='submit' class='rereviews-btn'>등록</button>";
		listInputHtml += "</div>";
		listInputHtml += "</form>";
		
		//댓글에 대댓글 달때
		$(".recomment-input").one("click",function(){
			//댓글에 심어둔 그룹번호 조회
			//console.log($(this).parent().next().val());
			
			//대댓글 input 생성
			$(this).parent().parent().parent().after(listInputHtml);
			//대댓글 input에 댓글의 그룹번호 전송
			//요기요기
			const commentWmcGroup = $(this).parent().next().val();
			$("#input-wmcGroup").val(commentWmcGroup);
			
			//대댓글 등록 시 공백잇으면 전송 x
			$(".rereviews-btn").click(function(){
				if($('.reviews-input').val().trim() ==''){
					alert('댓글 내용은 필수 입력입니다.');
					$('.reviews-input').val('');
			        $('.reviews-input').focus();
			        return false;
				}
			});
		});
		
		//모임 이미지 리스트
		var htmlImg = "";
		for(let t=0; t<data.fileList.length; t++){
			htmlImg += "<div class='wm-img-preview-box'>";
			htmlImg += "<img class='wm-img-preview-img' src='/resources/upload/walkmate/"+data.fileList[t].filename+"'>";
			htmlImg += "</div>";
		}
		$(".wm-img-wrapper").html(htmlImg);
		
		var imgClick = document.getElementsByClassName('wm-img-preview-img');
		for(var v=0; v< imgClick.length; v++){
			imgClick.item(v).onclick=function(){fnImgPop(this.src)};
		}
		//이미지 팝업으로 띄우기 펑션
		function fnImgPop(url){
		  var img=new Image();
		  img.src=url;
		  var img_width=img.width;
		  var win_width=img.width+25;
		  var img_height=img.height;
		  var win=img.height+30;
		  var OpenWindow=window.open('','_blank', 'width='+img_width+', height='+img_height+', menubars=no, scrollbars=auto');
		  OpenWindow.document.write("<style>body{margin:0px;}</style><img src='"+url+"' width='"+win_width+"'>");
		 }
		
		
		
		//댓글 삭제
		$(".delete-inputs-comment").on("click",function(){
			
			 const wmcGroups = $(this).parent().siblings(".helpWmcGroup").val();
			 const wmNos = $(this).parent().siblings(".helpWmNo").val();
			 $("#thankWmcGroup").val(wmcGroups);
			 $("#thankWmNo").val(wmNos);
			 deleteCommentMSG();
		});
		//대댓글 삭제
		$(".delete-inputs-sub-comment").on("click",function(){
			const subWmNo = $(this).parent().siblings(".helpSubWmNo").val();
			$("#thankSubWmNo").val(subWmNo);
			deleteSubCommentMSG();
		});
		// 대댓글 보이기 숨기기
		$(".show-recomments").on("click",function(){
			if($(this).parents(".views-list").nextUntil(".views-list").css('display') ==='none'){
				$(this).parents(".views-list").nextUntil(".views-list").slideDown();
				$(this).text('덮기');
			}else{
				$(this).parents(".views-list").nextUntil(".views-list").slideUp();
				$(this).text('펼치기');
			}
		});
		
		
		
		
		
		// 화면 호출
		modalView();
	}
	})
};

//신청 작성 확인
function inputMainBtn() {
	Swal.fire({
        title: '신청 등록',
        text: "모임 신청을 하겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '신청하기',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			$(".input-main-inputs").trigger("click");
        }
    })
}
//댓글 삭제 확인 메세지
function deleteCommentMSG() {
	Swal.fire({
        title: '댓글 삭제',
        text: "댓글을 삭제 하겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '삭제하기',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			$(".thankBtn").trigger("click");
        }
    })
}
//대댓글 삭제 확인 메세지
function deleteSubCommentMSG() {
	Swal.fire({
        title: '대댓글 삭제',
        text: "대댓글을 삭제 하겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '삭제하기',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			$(".thankSubBtn").trigger("click");
        }
    })
}
//모임 삭제 메세지
function deleteWmMSG() {
	Swal.fire({
        title: '모임 삭제',
        text: "모임글을 없애겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '없애기',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			$(".thankMainBtn").trigger("click");
        }
    })
}


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
	$(".up-btn").trigger("click");
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
	const applySection = document.getElementById("applySection");
	applySection.style.display = "none";
	
	$(".modal-writer-content-box").html('');
	const loginNickname = document.getElementById('login-memberNickname').value;
	const loginPhoto = document.getElementById('login-memberPhoto').value;
	
	var html1 = "";
		html1 += "<img src='"+loginPhoto+"'>";
		$(".modal-writer-profil").html(html1);
	$("#deleteWm").text('창닫기 >> ').attr("onclick", "modalOff();").css("color","#1abc9c").css("border","2px solid #1abc9c");
    var html = "";
		html += "<div class='writer-id'>"+loginNickname+"</div>";
		html += "<h2 id='view-section2' style='display:none;'></h2>";
		html += "<input type='text' name='wmTitle' id='write-section1' placeholder='제목을 입력해주세요'style='display:block;' maxlength='25' required>";
		html += "<input type='text' name='wmSubTitle' id='write-section6' placeholder='모임을 위한 한줄평을 작성하세요!'style='display:block;' maxlength='20' required>";
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
            $("#hideWriteTitle2").val(data.sido + " " + data.sigungu);
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



/*
/*
const WriteReReply = function(wmNo,wmcNo){

	
	
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



//esc 누를 시 modal 창 닫힘
$(document).keyup(function(e) {
   if ( e.keyCode == 27) {
       modalOff();
   };
});



//카테고리 클릭 시 화면
$(".category-li").on('click',function(){
	totalCnt = 6;
	console.log("totalCnt"+totalCnt);
	console.log("totalList"+totalList);
	$(this).css('background-color', '#1abc9c').css('color', 'white');
	$(".category-li").not($(this)).css('background-color', 'white').css('color', '#000000');
    var cate = $(this).text();
    $.ajax({
        url : "/categoryList.do",
        type : "post",
        data : {
             wmTag : cate
        },
        success : function(data){
				            var html = "";
	            totalList = data.length;
				if($(".footer-title").is(":visible")){
					
				}
	            console.log("totalCnt"+totalCnt);
				console.log("totalList"+totalList);
	            
				html += "<div class='write-new-content-btn'>";
				const loginId = document.getElementById('login-memberId').value;
				if(loginId.length >= 1 ){
					html += "<button type='button' onclick='modalWrites();'>모임 만들기</button>";						
				}else{
					html += "<button style='visibility:hidden;' type='button' onclick='modalWrites();'>모임 만들기</button>";
				}
				html += "</div>";
				
				   
				
				if(totalCnt >= data.length){
	            	//만약 게시물의 수가 6보다 작다면
	            	$(".add-btn").text("더 이상 목록이 없습니다.");
		            	for(let i=0; i<data.length; i++){
						html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
						html += "<div class='content-box-list img'>";
						
						if(data[i].fileList.length != 0){
							html += "<img src='/resources/upload/walkmate/"+data[i].fileList[0].filepath+"'>";
						}else{
							html += "<img src='/resources/img/walkmate/walkMateImg1.webp'>";
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
									html += "<img src='/resources/upload/member/";
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
								html += "해당 모임은 마감되었어요ㅠ";
							}
						}
						html += "</ul>";
						html += "</div>";
						html += "</div>";
		            }//END FOR문
		            	
	            }else{
	            	//만약 게시물의 수가 6보다 크면 (더 보여줄 컨텐츠가 있다면)
	            	$(".add-btn").text("목록 더 보기 (+)");
	            	for(let i=0; i<totalCnt; i++){
						html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
						html += "<div class='content-box-list img'>";
						
						if(data[i].fileList.length != 0){
							html += "<img src='/resources/upload/walkmate/"+data[i].fileList[0].filepath+"'>";
						}else{
							html += "<img src='/resources/img/walkmate/walkMateImg1.webp'>";
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
									html += "<img src='/resources/upload/member/";
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
								html += "해당 모임은 마감되었어요ㅠ";
							}
						}
						html += "</ul>";
						html += "</div>";
						html += "</div>";
		            }//END FOR문
		            
	            }//END ELSE문
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
                
			
        },
        error : function(data){
            alert('error');
        }//error
    })//ajax
});




