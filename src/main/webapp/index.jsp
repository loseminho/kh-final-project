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
	<div class="section" id="section3" style="position:relative;">
		<div class="section3-info-wrap">
		<div class="info-card-wrap1">
			<div>
			산책갈개 플러스친구
			</div>
			<div>
				<p>급한 문의가 있다면 카카오톡 플러스를 이용해보세요!</p>
				
			</div>
			<span>
				<img src="/resources/img/dogfoot.png">
			</span>
			<div>
				<img src="/resources/img/qrcode.png">
			</div>
			<div>
			Contect us 산책갈개
			</div>
		</div>
		<div class="info-card-wrap2">
			<div>
			오시는길
			</div>
			<div>
			서울시 영등포구 선유로 57 이레빌딩 19F / A
			</div>
			<div>
			<div>
			지도지도
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.053112767938!2d126.89570580446775!3d37.533821730309754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ec3afcd675b%3A0x1d3b8e50a735e00a!2z7J2066CI67mM65Sp!5e0!3m2!1sko!2skr!4v1668564804018!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
			</iframe>
			</div>
			</div>

		<div class="info-card-wrap3">
			<div>
			조원 소개♥
			</div>
			<div class="team-info-box">
				<div class="yubin-photo-wrap">
					<img src="/resources/img/qrcode.png">
				</div>
				<!-- 
				<div class="dahe-photo-wrap">
					<img src="/resources/img/qrcode.png">
				</div>
				<div class="sy-photo-wrap">
					<img src="/resources/img/qrcode.png">
				</div>
				<div class="minho-photo-wrap">
					<img src="/resources/img/qrcode.png">
				</div>
				<div class="heeok-photo-wrap">
					<img src="/resources/img/qrcode.png">
				</div>
				 -->
			</div>
			<div class="name-box">
				<div class="yubin-info name-title">
				고유빈
				</div>
				<div class="dahe-info name-title">
				신다혜
				</div>
				<div class="sy-info name-title">
				안상영
				</div>
				<div class="minho-info name-title">
				진민호
				</div>
				<div class="heeok-info name-title">
				유희옥
				</div>
			</div>
		</div>
		</div>
	</div>
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