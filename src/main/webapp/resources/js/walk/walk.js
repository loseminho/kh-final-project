$(document).ready(function(){
    $.ajax({
        url : "/allWalkListAjax.do",
        type : "post",
        success : function(data){
            console.log(data)
            var html = "";
            for(let i=0; i<data.length; i++){
                html += "<li>";
                html += "<div class='bottom-list-box' onclick='walkMate("+data[i].wmNo+");'>";
                html += "<div class='box-list-num'>";
                html += i+1;
                html += "</div>";
                html += "<div class='box-list-tag'>";
                html += "<div class='tag-wrapper'>";
                if(data[i].tag1==1){
                	html += "<div class='tag-box' id='tag1'>1:1 산책</div>";                
                }
                if(data[i].tag2==1){
                	html += "<div class='tag-box' id='tag2'>N:N 산책</div>";
                }
                if(data[i].tag3==1){
                	html += "<div class='tag-box' id='tag3'>인증된 모임</div>";
                }
                if(data[i].tag4==1){
                	html += "<div class='tag-box' id='tag4'>산책갈개 문화</div>";
                }
                if(data[i].tag5==1){
                	html += "<div class='tag-box' id='tag5'>산책갈개 문화</div>";
                }
                if(data[i].tag6==1){
                	html += "<div class='tag-box' id='tag6'>산책갈개 문화</div>";                           
                }
                if(data[i].tag1==0 && data[i].tag2==0 && data[i].tag3==0 && data[i].tag4==0 && data[i].tag5==0 && data[i].tag6==0){
                	html += "<div class='no-tag-box'>등록한 태그가 없습니다.</div>";
                }
                
                html += "</div>";
                html += "</div>";
                html += "<div class='box-list-main'>";
                html += "<div class='box-list-main-title'>"+data[i].wmTitle+"</div>";
                html += "<div class='box-list-main-name'>"+data[i].wmSubTitle+"</div>";
                html += "</div>";
                html += "<div class='box-list-limit'>";
                html += "<div class='limit-box'>"+"1"+"/"+data[i].wmRangeMember+"</div>";
                html += "</div>";
                html += "<div class='box-list-stat'>";
                // 만약 테이블 상태가 1 이면 신청 가능, 0이라면 비활성화.
                if(data[i].wmStat==1){
                	html += "<input type='button' id='stat-box' class='stat-box' onclick='walkMyinfo();' value='신청'>";                
                }else if(data[i].wmStat==0){
                	html += "<input type='button' id='stat-box' class='stat-box2' onclick='' value='종료'>";
                }
                html += "</div>";
                html += "</div>";
                html += "</li>";
            }
                $("#content-bottom ul").html(html);
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
			html += data.rnum;
			$("#modal-post-title .box-list-num").html(html);
			
			
			var tag = "";
            tag += "<div class='tag-wrapper'>";
            if(data.tag1==1){
            	tag += "<div class='tag-box' id='tag1'>1:1 산책</div>";                
            }
            if(data.tag2==1){
            	tag += "<div class='tag-box' id='tag2'>N:N 산책</div>";
            }
            if(data.tag3==1){
            	tag += "<div class='tag-box' id='tag3'>인증된 모임</div>";
            }
            if(data.tag4==1){
            	tag += "<div class='tag-box' id='tag4'>산책갈개 문화</div>";
            }
            if(data.tag5==1){
            	tag += "<div class='tag-box' id='tag5'>산책갈개 문화</div>";
            }
            if(data.tag6==1){
            	tag += "<div class='tag-box' id='tag6'>산책갈개 문화</div>";                           
            }
            if(data.tag1==0 && data.tag2==0 && data.tag3==0 && data.tag4==0 && data.tag5==0 && data.tag6==0){
            	tag += "<div class='no-tag-box'>등록한 태그가 없습니다.</div>";
            }
            
            tag += "</div>";
            $("#modal-post-title .box-list-tag").html(tag);
            
            
            walkMates();
		}
		
	});
}