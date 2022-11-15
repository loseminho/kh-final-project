<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>    
<link rel="stylesheet" href="/resources/css/main.css">
<link rel="styleSheet" href="/resources/css/gmarket.css">
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body id="body">
	<!-- header -->
	<jsp:include page="/WEB-INF/views/common/mainHeader.jsp" />
	<div class="section" id="section1">
		<div class="mainTitle">
			<a>산책 메이트를 만들고 싶어?</a>
		</div>
	</div>
	<div class="section" id="section2">
		<div class="section2Content">
			<div>
				<h1 class="mbtiTitle" style="font-size:40px; color: #DE4B3F; padding-top:20px;">반려견 메이트 찾기</h1>
				<p class="mbtiTitle">내 반려견은<br>
				멍BTI 16가지 유형 중 어떤 유형일까?</p>
				<p class="mbtiTitle">어떤 유형의 강아지와<br>
				좋은 친구가 될 수 있을까?</p>
				<a href="/mbtiMateMain.do" id="mbtiBtn">테스트 하러가기</a>
			</div>
		</div>
	</div>
	<div class="section" id="section3">
		<div class="section3Content">
		</div>
	</div>
	<!-- <jsp:include page="/WEB-INF/views/common/footer.jsp" /> -->
	<div class="popup-modal" style="display:none;">
			<div class="popup-content">
				<img src="/resources/img/popup/popup.png">
			</div>
			<div class="popup-content">
				<img src="/resources/img/popup/popup2.png">
			</div>
			<div class="popup-content">
				<img src="/resources/img/popup/popup3.png">
			</div>
			<div class="popup-content">
				<img src="/resources/img/popup/popup4.png">
			</div>
		<button class="popup-close">닫기</button>
		<button class="popup-close-day">오늘하루보지않기</button>
		<button class="popup-back">이전</button>
		<button class="popup-next">다음</button>
	</div>
<script src="/resources/js/main.js"></script>
</body>
</html>