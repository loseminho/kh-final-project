let page = 0;
const tabs = $(".dogMarket-tab>li");

tabs.on("click",function(){
    const index = $(this).index();
    if(index-page<1){
        tabs.eq(0).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(1).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".saleDog-content").hide();
        $(".getDog-content").show();
    }else{
        tabs.eq(1).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".getDog-content").hide();
        $(".saleDog-content").show();
    }
});


let question = $(".question");
question.on("click", function(){
    const questionIndex = question.index(this);
    $(this).toggleClass("active");
    $(this).next().slideToggle();
});

$(".dogMarket-tab>li").eq(1).click();

/*
for(let i = 6; i<11; i++){
    question.eq(i).hide();
    $(".add-btn>button").show();
}

$(".add-btn>button").on("click",function(){
    for(let i = 6; i<11; i++){
        question.eq(i).show();
    }
    $(this).hide();
});
*/

   	const addBtn = $(".add-btn").children();
    let totalList;//카테고리에 해당하는 리스트의 전체 갯수
    let totalCnt; //화면에 보여줄 리스트 갯수
    
    //입양 페이지 들어왔을 때, 전체 목록 출력
    $(document).ready(function(){
    	category.eq(0).trigger("click");
    	//화면에 출력 할 갯수
    });		
    const category = $(".getDog-category>li");
    category.on("click",function(){
		var button = "<button style='cursor:pointer;'>더보기</button>";
    	$(".add-btn").html(button);
    	totalCnt = 9;
        let categoryIndex = category.index(this); //카테고리 선택
        	
        typeSize = categoryIndex-1; //해당 카테고리의 리스트 갯수 가져오기 위한 변수
        	$.ajax({
        		url : "/marketListCnt.do",
        		data: {typeSize:typeSize},
        		success: function(result){
        			totalList = result;
        		}
        	});
        if(categoryIndex == 0){
        	$.ajax({
        		url: "/selectFilterList.do",
        		data: {typeSize : -1},
        		success:function(data){
        			var html = "";
        		if(totalCnt >= data.length){
        			for(let i=0;i<data.length;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        				$(".add-btn").text("더 이상 목록이 없습니다.");
	        			};
        			}else{
	        			for(let i=0;i<totalCnt;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        			};
        			}
        			$(".sale-wrap").html(html);
        		},
        	});
        }else if(categoryIndex == 1){
        	$.ajax({
        		url: "/selectFilterList.do",
        		data: {typeSize : 0},
        		success:function(data){
        			var html = "";
        		if(totalCnt >= data.length){
        			for(let i=0;i<data.length;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        				$(".add-btn").text("더 이상 목록이 없습니다.");
	        			};
        			}else{
	        			for(let i=0;i<totalCnt;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        			};
        			}
        			$(".sale-wrap").html(html);
        		},
        	});
        }else if(categoryIndex == 2){
        	$.ajax({
        		url: "/selectFilterList.do",
        		data: {typeSize : 1},
        		success:function(data){
        			var html = "";
        		if(totalCnt >= data.length){
        			for(let i=0;i<data.length;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        				$(".add-btn").text("더 이상 목록이 없습니다.");
	        			};
        			}else{
	        			for(let i=0;i<totalCnt;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        			};
        			}
        			$(".sale-wrap").html(html);
        		},
        	});
        }else if(categoryIndex == 3){
        	$.ajax({
        		url: "/selectFilterList.do",
        		data: {typeSize : 2},
        		success:function(data){
        			var html = "";
        		if(totalCnt >= data.length){
        			for(let i=0;i<data.length;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        				$(".add-btn").text("더 이상 목록이 없습니다.");
	        			};
	        			
        			}else{
	        			for(let i=0;i<totalCnt;i++){
	        				html += "<div class='sale'>";
	        				html += "<div class='photo-session'>";
	        				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
	        				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
	        				html += "</div>";
	        				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
	        				html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
	        				html += "<li>책임비 : "+data[i].price+"원</li>";
	        				html += "</div>";
	        			};
        			}
        			$(".sale-wrap").html(html);
        		},
        	});
        }else if(categoryIndex == 4){
        
        }
            category.css({
                "background-color":"#fff",
                "color":"black"
            });
            category.eq(categoryIndex).css({
                "background-color":"#1abc9c",
                "color":"#fff"
            });
    }); 
	$(document).on("click",".add-btn>button",function(){
    	$.ajax({
    		url: "/selectFilterList.do",
    		data: {typeSize:typeSize},
    		success:function(data){
    			var html = "";
    			for(let i=0;i<totalCnt;i++){
    				html += "<div class='sale'>";
    				html += "<div class='photo-session'>";
    				html += "<img class='previewImg' src='/resources/upload/market/"+data[i].fileList[0].filePath+"'>";
    				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
    				html += "</div>";
    				html += "<span class='list-sub-title'>견종 : "+data[i].typeName+"</span>";
					html += "<span class='list-sub-title'>이름 : "+data[i].callName+"</span>";
    				html += "<li>책임비 : "+data[i].price+"원</li>";
    				html += "</div>";
    			};
    			$(".sale-wrap").html(html);
    		},
    	});
    	//더보기 버튼을 눌렀을 때, 화면에 보여줄 리스트 갯수 늘려주는 코드
	 		for(let i=0;i<3;i++){
	 			if(totalCnt == totalList){
	 				$(".add-btn").text("더 이상 목록이 없습니다.");
	 				break;
	 			}else{
					totalCnt ++;;
	 			}
			};
		});
    	$(document).on("click",".sale",function(){
    		const detailImg = $(".detail-image");
    		const marketNo = $("[name=marketNo]");
   	 		const sale = $(".sale");
   	 		const sessionMemberNo = $("#sessionMemberNo").val();
   	 		const sessionMember = $("#sessionMember").val();
    		$("#modal-wrap").fadeIn(300);
    		$(".modal-content").scrollTop(0);
    		$("body").css("overflow","hidden");
    		let idx = sale.index(this);
    		let data = marketNo.eq(idx).val();
    		$.ajax({
    			url: "/searchOneInfo.do",
    			data: {marketNo:data},
    			success : function(data){
    			$("#receiverNickname").val(data.memberNickname);
    			$("#receiverMemberId").val(data.memberId);
    			$("#detailMemberNo").val(data.memberNo);
    			var text = ""+data.memberNickname+"("+data.memberId+")";
    			$(".receiver").text(text);
    			
    			if(sessionMember==''){
    				var html = "";
    				html += "<button id='loginFrm'>로그인</button>";	
    				html += "<button id='close-modal'>닫기</button>";
    				$(".require-btn").html(html);			
    			}else if(sessionMemberNo == data.memberNo){
    				var html = "";
    				html += "<button id='myMarketList'>관리</button>";
    				html += "<button id='close-modal'>닫기</button>";
    				$(".require-btn").html(html);
    			}else if(sessionMemberNo != data.memberNo){
    				var html = "";
    				html += "<button onclick='dmModalOn();'>쪽지보내기</button>";
    				html += "<button id='close-modal'>닫기</button>";
    				$(".require-btn").html(html);
    			}
    			
    				if(data.fileList.length == 1){
    					detailImg.eq(0).attr("src","/resources/upload/market/"+data.fileList[0].filePath+"");
    				}else if(data.fileList.length == 2){
    					detailImg.eq(0).attr("src","/resources/upload/market/"+data.fileList[0].filePath+"");
    					detailImg.eq(1).attr("src","/resources/upload/market/"+data.fileList[1].filePath+"");
    				}else if(data.fileList.length == 3){
    					detailImg.eq(0).attr("src","/resources/upload/market/"+data.fileList[1].filePath+"");
    					detailImg.eq(1).attr("src","/resources/upload/market/"+data.fileList[2].filePath+"");
    				}
    				$(".sale-info").text(data.saleInfo);
    				$(".detail-box-title").text(data.typeName);
    				var html = "";
    				html += "<tr>";
    				html += "<th>이름</th>";
    				html += "<td>"+data.callName+"</td>";
    				html += "<th>성별</th>";
    				html += "<td>"+data.gender+"</td>";
    				html += "</tr>";
    				html += "<tr>";
    				html += "<th>나이</th>";
    				html += "<td>"+data.age+"개월</td>";
    				html += "<th>책임비</th>";
    				html += "<td>"+data.price+"원</td>";
    				html += "</tr>";
    				html += "<tr>";
    				html += "<th>품종명</th>";
    				html += "<td>"+data.typeName+"</td>";
    				html += "<th>접종</th>";
    				html += "<td>1차</td>";
    				html += "</tr>";
    				$(".detail-info-table").html(html);
    			}
    		});
    	});
    	
    	$(document).on("click","#close-modal",function(){
    		$("#modal-wrap").css("display","none");
    		$("body").css("overflow","inherit");
    	});
    	
 function dmModalOn(){
 };
 
 $(document).on("click","#loginFrm",function(){
 	window.location.href="/loginFrm.do";
 });
 $(document).on("click","#myMarketList",function(){
 	window.location.href="/myMarketList.do";
 });