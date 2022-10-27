<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="/resources/css/header.css">
	<link rel="stylesheet" href="/resources/css/gmarket.css">
	<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
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
					<div>
						<li><a href= "/faqQnaBoardFrm.do">고객서비스</a></li>
					</div>
				</ul>
				<c:if test="${not empty sessionScope.m }">
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
									<a href="/logout.do">로그아웃</a>
								</c:if>
							</c:otherwise>
						</c:choose>
					</div>
				</ul>
			</div>
		</div>
	</div>
</header>