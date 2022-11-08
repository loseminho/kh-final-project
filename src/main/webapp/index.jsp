<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link rel="stylesheet" href="/resources/css/main.css">
<link rel="styleSheet" href="/resources/css/gmarket.css">
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body id="body">
	<!-- header -->
	<header>
		<div class="header-wrap">
			<div class="header">
				<div id="logo-wrap">
					<a href="/">
						<i class="fa-solid fa-paw"></i>산책갈개
					</a>
				</div>
				<div id="menu-wrap">
					<ul>
						<div>
							<li><a href="/walkMateFrm.do">메이트 찾기</a></li>
						</div>
					</ul>
					<ul>
						<div>
							<li><a href="/saleDogList.do">입양받기</a></li>
						</div>
					</ul>
					<ul>
					<div class="managerMenu">
						<li><a href= "/faqQnaBoardFrm.do" style="width:120px;">고객서비스</a></li>
						<li><a href="#" style="width:150px !important">공지사항</a></li>
						<li><a href="#" style="width:150px">FAQ/문의하기</a></li>
					</div>
					</ul>
					<c:if test="${not empty sessionScope.m }">
					<ul>
					<div>
						<li><a href= "/myWalkMate.do">내 산책 메이트</a></li>
					</div>
					</ul>
					<ul>
						<div>
							<li><a href= "/myPage.do">마이페이지</a></li>
						</div>
					</ul>
					</c:if>
					<ul>
						<div class="signwrap">
							<c:choose>
								<c:when test="${empty sessionScope.m}">
									<a href="/loginFrm.do">로그인</a>
								</c:when>
								<c:otherwise>
									<c:if test="${sessionScope.m.joinType eq '카카오'}">
										<a href="https://kauth.kakao.com/oauth/logout?client_id=e400fe38f12604a2937ea759fe0166f7&logout_redirect_uri=http://localhost/logout.do">로그아웃</a>
									</c:if>
									<c:if test="${sessionScope.m.joinType eq '일반가입'}">
										<a onclick="logout();">로그아웃</a>
									</c:if>
								</c:otherwise>
							</c:choose>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</header>
	
	<div class="section" id="section1">
		<div class="mainTitle">
			<a href="/joinChatting.do">산책 메이트를 만들고 싶어?</a>
		</div>
	</div>
	<div class="section" id="section2">
		<div class="section2Content">
			<div>
				<h1 class="mbtiTitle" style="font-size:40px; color: #DE4B3F; padding-top:20px;">반려견 메이트 찾기</h1>
				<p class="mbtiTitle">내 강아지는 어떤 성격일까?</p>
				<p class="mbtiTitle">어떤 유형의 강아지와<br>
				좋은 친구가 될 수 있을까?</p>
				<a href="/mbtiMateMain.do" id="mbtiBtn">테스트 하러가기</a>
			</div>
		</div>
	</div>
	<div class="section" id="section3">
		<div class="section3Content"> 
			<div>
				<ul>
					<li>
					고객센터
					</li>
					<li>
					010-1111-1111
					</li>
				</ul>
			</div>
		</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	</div>
<script>
$(".managerMenu").on("mouseover",function(){
	$(".managerMenu").children().css("display","block");
});
$(".managerMenu").on("mouseout",function(){
	const subMenu = $(".managerMenu").children();
	subMenu.not(subMenu.eq(0)).css("display","none");
});
</script>

<script src="/resources/js/main.js"></script>
</body>
</html>