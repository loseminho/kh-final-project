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
    <!-- 쇼핑 modal -->
    <link rel="stylesheet" href="/resources/css/shop/productModal.css">
    <!-- 결제api -->
    <script src="https://js.tosspayments.com/v1/payment"></script>
    <!--fonts-->
    <link rel="stylesheet" href="/resources/css/gmarket.css">
    <!--css-->
    <link rel="stylesheet" href="/resources/css/market/dogMarket.css">
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
                            <li><h1><a>물품거래</a></h1></li>
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
	                            <div class="market-list-title">
	                       			<div>분양 리스트</div>
	                       			<c:choose>
	                       			<c:when test="${not empty sessionScope.m }">
	                       			<button onclick="location.href='writeFrm.do'">분양관리</button>
	                       			</c:when>
	                       			</c:choose>
	                       		</div>
                                <div class="sale-wrap" id="walk-question">
                                	<!-- 분양목록 -->
                            	</div>
                            <div class="add-btn">
                                <button style="cursor:pointer;">더보기</button>
                            </div>
                        </div>
                    </div><!--faq-content 끝-->
                </div><!--faq-box 끝-->
                <div class="saleDog-box">
                    <div class="saleDog-content">
                    	<div class="test">
                        	<div class="getDog-header slide_box">
	                            <p>뭐 사러 왔어?</p>
	                            <p>아, 뭐가 필요한지 모르겠다구?</p>
	                            <p>나랑 손 잡고 골라볼까?</p>
	                            <p>뭐가 필요할지 같이 고민해보자^^</p>
	                            <p>그리구 우리 뭉치랑 같이 산책도 하구</p>
	                            <p>아참, 혹시 간식사려구 하는데..</p>
	                            <p>우리 뭉치 간식 주러 갈래?</p>
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
                            </div>
                            <div class="sale-box">
                            </div>
					<jsp:include page="/WEB-INF/views/shop/shopList.jsp"/>
                    </div>
                </div><!--qna-box 끝-->
            </div><!--faqqna-content 끝-->
        </div><!--faqqna-wrap 끝-->
    </content><!--컨텐츠 끝-->
    <!-- 모달시작 -->
    <jsp:include page="/WEB-INF/views/shop/productModal.jsp"/>
	<jsp:include page="/WEB-INF/views/market/modal.jsp"/>
	<script src="/resources/js/market/saleDog.js"></script>
	<script src="/resources/js/dm/sendDm.js"></script>
    <script>
    </script>
</body>
</html>