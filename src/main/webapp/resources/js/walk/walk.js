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
				html += "<div class='content-box' onclick='modalView();'>";
				html += "<div class='content-box-list img'>";
				html += "<img src=''>";
				html += "</div>";
				html += "<div class='content-box-list titles'>";
				html += "<a href=''>"+data[i].wmTag+"</a>";
				html += "<h2>"+data[i].wmTitle+"</h2>";
				html += "<div class='titles-sub'>"+data[i].wmSubTitle+"</div>";
				html += "<div class='titles-info'><span class='material-symbols-outlined'>map</span> 종로구 · 8.28(일) 오전 11:10  <span class='material-symbols-outlined'>group</span>5/"+data[i].wmRangeMember+"</div>";
				html += "<ul class='user-profil'>";
				html += "<li></li>";
				html += "</ul>";
				html += "</div>";
				html += "</div>";
				
            }
                $(".content-bottom").html(html);
        }
    })
    
});
function walkMate(e){
	console.log(e);
		$.ajax({
		url : "/selectWalkListAjax.do",
		data:{wmNo:e},
		success:function(data){
			var html = "";
			html += "<div class='box-list-num'>";
			html += data.rnum;
			html += "</div>";
			html += "<div class='box-list-tag'>";
            html += "<div class='tag-wrapper'>";
            if(data.tag1==1){
            	html += "<div class='tag-box' id='tag1'>1:1 산책</div>";                
            }
            if(data.tag2==1){
            	html += "<div class='tag-box' id='tag2'>N:N 산책</div>";
            }
            if(data.tag3==1){
            	html += "<div class='tag-box' id='tag3'>인증된 모임</div>";
            }
            if(data.tag4==1){
            	html += "<div class='tag-box' id='tag4'>산책갈개 문화</div>";
            }
            if(data.tag5==1){
            	html += "<div class='tag-box' id='tag5'>산책갈개 문화</div>";
            }
            if(data.tag6==1){
            	html += "<div class='tag-box' id='tag6'>산책갈개 문화</div>";                           
            }
            if(data.tag1==0 && data.tag2==0 && data.tag3==0 && data.tag4==0 && data.tag5==0 && data.tag6==0){
            	html += "<div class='no-tag-box'>등록한 태그가 없습니다.</div>";
            }
            html += "</div>";
            html += "</div>";
            html += "<div class='box-list-main'>";
            html += "<div class='box-list-main-title'>"+data.wmTitle+"</div>";
            html += "<div class='box-list-main-name'>"+data.wmSubTitle+"</div>";
            html += "</div>";
            html += "<div class='box-list-limit'>";
            html += "<div class='limit-box'>"+"1"+"/"+data.wmRangeMember+"</div>";
            html += "</div>";
            html += "<div class='box-list-stat'>";
            // 만약 테이블 상태가 1 이면 신청 가능, 0이라면 비활성화.
            if(data.wmStat==1){
            	html += "<input type='button' id='stat-box' class='stat-box' onclick='walkMyinfo();' value='신청'>";                
            }else if(data.wmStat==0){
            	html += "<input type='button' id='stat-box' class='stat-box end' onclick='' value='종료'>";
            }
            html += "</div>";
			$("#modal-post-title").html(html);
            
			var modalTagPost = "";
			if(data.tag1==1){
				modalTagPost += "#1:1산책";

			}
			if(data.tag2==1){
				modalTagPost += "#N:N산책     ";		
			}
			if(data.tag3==1){
				modalTagPost += "#인증된 모임     ";		
			}
			if(data.tag4==1){
				modalTagPost += "#산책갈개 문화     ";		
			}
			if(data.tag5==1){
				modalTagPost += "#공원 산책     ";		
			}
			if(data.tag6==1){
				modalTagPost += "#등산 산책     ";		
			}
			$(".modal-tag-post").html(modalTagPost);
            
            walkMates();
		}
		
	});
}