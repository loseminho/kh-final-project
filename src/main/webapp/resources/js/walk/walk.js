$(document).ready(function(){
    $.ajax({
        url : "/allWalkListAjax.do",
        type : "post",
        success : function(data){
            console.log(data)
            var html = "";
			html += "<div class='write-new-content-btn'>";
			html += "<button onclick='modalWrite();'>모임 만들기</button>";
			html += "</div>";            
            for(let i=0; i<data.length; i++){
				html += "<div class='content-box' onclick='modalViews("+data[i].wmNo+");'>";
				html += "<div class='content-box-list img'>";
				html += "<img src=''>";
				html += "</div>";
				html += "<div class='content-box-list titles'>";
				html += "<a href=''>"+data[i].wmTag+"</a>";
				html += "<h2>"+data[i].wmTitle+"</h2>";
				html += "<div class='titles-sub'>"+data[i].wmSubTitle+"</div>";
				html += "<div class='titles-info'><span class='material-symbols-outlined'>map</span> 종로구 · 8.28(일) 오전 11:10  <span class='material-symbols-outlined'>group</span>5/"+data[i].wmRangeMember+"</div>";
				html += "<ul class='user-profil'>";
				if(data[i].wList.length == 0){
				 html += "등록된 회원이 없습니다.ㅜㅜ  모임에 참기 해주세요!";
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
	console.log(e);
	$.ajax({
	url : "/selectContentBox.do",
	data: {wmNo : e},
	success : function(data){
		var html1 = "";
		console.log(`${JSON.stringify(data)}`);
		html1 += "<div class='writer-id'>"+data.leaderNickname+"</div>";
		html1 += "<h2 id='view-section2'>"+data.wmTitle+"</h2>";
		html1 += "<input type='text' id='write-section1' placeholder='제목을 입력해주세요.' style='display:none;'>";
		$(".modal-writer-content-box").html(html1);
		
		var html2 = "";
		html2 += "<span class='material-symbols-outlined'>map</span>종로구 · "+data.wmMeetTime+"<span class='material-symbols-outlined'>group</span>5/"+data.wmRangeMember;
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
		}
		$(".member-info-ul").html(html4);
		
		var html5 = "";
		html5 += "<li><span class='material-symbols-outlined'>groups</span> 총 인원 :"+data.wmRangeMember+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>person</span> 현재 인원 :"+data.wmRangeMember+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>event_available</span> 모임 시간 :"+data.wmMeetTime+"</li>";
		html5 += "<li><span class='material-symbols-outlined'>map</span> 모임 장소 : 서울시 종로구</li>";
		
		$(".mate-info-list").html(html5);
		modalView();
	}
	})
	};
	
	
	

