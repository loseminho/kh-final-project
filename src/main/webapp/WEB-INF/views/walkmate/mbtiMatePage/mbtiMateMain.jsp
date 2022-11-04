<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>메이트 찾기</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="/resources/css/walkmate/mbtiMatePage/mbtiMate.css">
    <link rel="styleSheet" href="/resources/css/gmarket.css">
    <link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
    <!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	
	<!-- Wrapper -->
    <div class="page-content">

        <!-- content -->
        <div class="walk-mate-content">
        
            <section id="content-top">
                <div class="content-top-button">
                    <div class="content-top-button-left">산책 찾기</div>
                    <div class="content-top-button-right">💖메이트 찾기</div>
                </div>
            </section>

            <!-- content-midle section -->
            <section id="content-middle">
                <div class="content-middle-title">반려견 성격 유형 테스트</div>
            </section>
            
            <!-- content-bottom section -->
            <section id="content-bottom">
            	<div id="content-box">
            		<c:choose>
            			<c:when test="${sessionScope.m eq null }">
            				<div id="noLogin">
            					<h1>로그인이 필요한 기능입니다.</h1>
            				</div>
            			</c:when>
            			<c:otherwise>
           					<div id="mbtiMainPhoto">
            					<img src="/resources/img/walktogether.png">
           					</div>
           					<div id="chooseDog">
           						<c:choose>
		           					<c:when test="${sessionScope.m.dogList[0] ne null}">
		           						<h3>반려견을 선택해주세요.</h3><br><br>
		           						<c:forEach items="${sessionScope.m.dogList }" var="myDog">
		           							<div class="box">
										        <a onclick="mbtiStart('${myDog.dogName}');">
										            <div class="photo">
											            <c:choose>
											            	<c:when test="${myDog.dogPhoto eq null}">
												                <img src="/resources/img/default_dog.png">
											            	</c:when>
											            	<c:otherwise>
												                <img src="/resources/upload/dog/${myDog.dogPhoto }">
											            	</c:otherwise>
											            </c:choose>	
										            </div>
										            <h3>${myDog.dogName }</h3>
										        </a>
										    </div>
		           						</c:forEach>
		           					</c:when>
									<c:otherwise>
										<br>
										<p>등록된 반려견이 없습니다.</p>
									</c:otherwise>
								</c:choose>
           					</div>
           					<div id="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q1</h3>
           						<p id="mbti-count">1 / 10</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/1.png">
           						</div>
           						<h3 id="mbti-que">
	           						<span class="mbti-nickname">[${sessionScope.m.memberNickname }]</span>와(과) 산책을 나갔을 때<br>
	           						반려견의 행동은?
           						</h3>
           						<button type="button" class="mbti-btn">
           							너무 신나서 <span class="mbti-nickname">[${sessionScope.m.memberNickname }]</span>을(를) 끌고 다닌다.
           						</button>
           						<button type="button" class="mbti-btn">
           							자연에 취해 냄새 맡으며,<br>
           							<span class="mbti-nickname">[${sessionScope.m.memberNickname }]</span>와(과) 함께 나란히 걷는다.
           						</button>
           						<button type="button" class="mbti-btn">
           							<span class="mbti-nickname">[${sessionScope.m.memberNickname }]</span> 뒤를 졸졸 따라다닌다.
           						</button>
           					</div>
            			</c:otherwise>
            		</c:choose>
            	</div>
            </section>
            <!-- End content-bottom section -->
            
        </div>
        <!-- End content -->
    </div>
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    <script src="/resources/js/walkmate/mbtiMatePage/mbtiMate.js"></script>
</body>
</html>