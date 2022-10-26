<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="/resources/css/header.css">
	<link rel="stylesheet" href="/resources/css/gmarket.css">
<header>
	<div class="header-wrap">
		<div class="header">
			<li id="logo-wrap"><a href="/index.jsp"><img
					src="/resources/img/dogfoot.png"></a></li>
			<ul>
				<div>
					<li><a href="#">산책갈개 소개</a></li>
				</div>
			</ul>
			<ul>
				<div>
					<li><a href="/walkMateList.do">산책 메이트 찾기</a></li>
				</div>
			</ul>
			<ul>
				<div>
					<li><a href="#">💖메이트 찾기</li>
				</div>
			</ul>
			<ul>
				<div>
					<div>
						<li><a href="#">분양받기</a></li>
					</div>
				</div>
			</ul>
			<ul>
				<div>
					<div>
						<li><a href="/myPage.do">용품판매</a></li>
					</div>
				</div>
			</ul>
			<ul>
				<div>
					<div>
						<li><a href= "/faqQnaBoardFrm.do ">고객서비스</a></li>
					</div>
				</div>
			</ul>
			<c:if test="${not empty sessionScope.m }">
			<ul>
				<div>
					<div>
						<li><a href= "/myPage.do ">마이페이지</a></li>
					</div>
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
								<a href="https://kauth.kakao.com/oauth/logout?client_id=e400fe38f12604a2937ea759fe0166f7&logout_redirect_uri=http://localhost/logout.do">카카오 로그아웃</a>
								<br>
								<a href="/kakaoUnlink.do">카카오로 회원 탈퇴</a>
							</c:if>
							<c:if test="${sessionScope.m.joinType eq '일반가입'}">
								<a href="/logout.do">일반 로그아웃</a>
							</c:if>
						</c:otherwise>
					</c:choose>
				</div>
			</ul>
		</div>
	</div>
</header>