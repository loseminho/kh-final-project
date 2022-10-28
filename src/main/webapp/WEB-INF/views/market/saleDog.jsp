<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>산책갈개</title>
    <!-- 결제api -->
    <script src="https://js.tosspayments.com/v1/payment"></script>
    <!--fonts-->
    <link rel="stylesheet" href="/resources/css/gmarket.css">
    <!--css-->
    <link rel="stylesheet" href="/resources/css/board/dogMarket.css">
    <!--jQuery-->       
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!--구글 아이콘-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<!-- 헤더  -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <content>
        <div class="dogMarket-wrap">
            <div class="dogMarket-content">
                <div class=faq-box>
                    <div class="tab-header">
                        <ul class="dogMarket-tab">
                            <li><h1>입양받기</h1></li>
                            <li><h1><a>입양보내기</a></h1></li>
                        </ul>
                    </div>
                    <div class="getDog-content">
                    	<div class="test">
                        	<div class="getDog-header slide_box">
	                            <p>안녕? 반가워^^</p>
	                            <p>너, 참 이쁘다</p>
	                            <p>너 나랑 같이 살래?</p>
	                            <p>내가 책임질게</p>
	                            <p>내꺼하자</p>
	                            <p>산책도 가고</p>
	                            <p>같이 밥도 먹고</p>
	                            <p>우리 행복하게 살자</p>
                            </div>
                        </div>
                            <ul class="getDog-category">
                                <li>전체</li>
                                <li>소형견</li>
                                <li>중형견</li>
                                <li>대형견</li>
                                <li>기타</li>
                            </ul>
                        <div class="saleList">
                            <div class="sale-box">
                       			<div>분양 리스트</div>
                                <div class="sale-wrap" id="walk-question">
                                	<!-- 분양목록 -->
                            	</div>
                            <div class="add-btn">
                                <button>더보기</button>
                            </div>
                        </div>
                    </div><!--faq-content 끝-->
                </div><!--faq-box 끝-->
                <div class="saleDog-box">
                    <div class="saleDog-content">
                        <div class="saleDog-header">
                            <p>-너 나랑 같이 살래?-</p>
                        </div>
                        <div class="saleDog-board">
                            <table class="saleDog-table">
                                <tr>
                                    <th>품종선택</th>
                                    <th>제목</th>
                                    <th>처리상태</th>
                                    <th>문의날짜</th>
                                    <th>조회수</th>
                                </tr>
                                	<tr>
                                		<td>
                                			<select>
                                				<option>1</option>
                                				<option>2</option>
                                				<option>3</option>
                                				<option>4</option>
                                			</select>
                                		</td>
                                		<td>
                                			<input type="text">
                                		</td>
                                		<td>gd</td>
                                	</tr>
                            </table>
                        </div>
                    </div>
                </div><!--qna-box 끝-->
            </div><!--faqqna-content 끝-->
        </div><!--faqqna-wrap 끝-->
    </content><!--컨텐츠 끝-->
    <!-- 모달시작 -->
	<jsp:include page="/WEB-INF/views/market/modal.jsp"/>
	
	
    <script>
    $(document).ready(function(){
    	$.ajax({
    		url: "/selectSaleDogList.do",
    		success:function(data){
    			console.log(data);
    			var html = "";
    			$.each(data,function(idx,value){
    				html += "<div class='sale'>";
    				html += "<div class='photo-session'>";
    				html += "<input type='hidden' name='marketNo' value="+value.marketNo+">";
    				html += "</div>";
    				html += "<span>"+value.typeName+"</span>";
    				html += "<li>분양가격 : "+value.price+"원</li>";
    				html += "</div>";
    			});
    			$(".sale-wrap").html(html);
    		},
    	});
    });

    	$(document).on("click",".sale",function(){
    		const marketNo = $("[name=marketNo]");
    		console.log(marketNo.val());
   	 		const sale = $(".sale");
    		console.log($(".sale-info").text());
    		$("#modal-wrap").css('display','flex');
    		$("body").css("overflow","hidden");
    		let idx = sale.index(this);
    		let data = marketNo.eq(idx).val();
    		$.ajax({
    			url: "/searchOneInfo.do",
    			data: {marketNo:data},
    			success : function(data){
    				console.log(data);
    				$(".sale-info").text(data.saleInfo);
    				$(".detail-box-title").text(data.typeName);
    				var html = "";
    				html += "<tr>";
    				html += "<th>견종</th>";
    				html += "<td>"+data.typeName+"</td>";
    				html += "<th>성별</th>";
    				html += "<td>"+data.gender+"</td>";
    				html += "</tr>";
    				html += "<tr>";
    				html += "<th>나이</th>";
    				html += "<td>"+data.age+"개월</td>";
    				html += "<th>분양가</th>";
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
    	
    	$("#close-modal").on("click",function(){
    		$("#modal-wrap").css("display","none");
    		$("body").css("overflow","inherit");
    	});
    </script>
    <script src="/resources/js/board/saleDog.js"></script>
</body>
</html>