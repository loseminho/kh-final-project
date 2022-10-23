<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="/css/header.css">
<header>
	<div class="header-wrap">
		<div class="header">
			<li id="logo-wrap"><a href="/index.jsp"><img
					src="/img/dogfoot.png"></a></li>
			<ul>
				<div>
					<li><a href="#">산책갈개 소개</a></li>
				</div>
			</ul>
			<ul>
				<div>
					<li><a href="#">산책 메이트 찾기</a></li>
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
						<li><a href="#">용품판매</a></li>
					</div>
				</div>
			</ul>
			<ul>
				<div class="signwrap">
					<c:choose>
						<c:when test="${empty sessionScope.m}">
							<a href="/loginFrm.do">로그인</a>
						</c:when>
						<c:otherwise>
							<a href="https://kauth.kakao.com/oauth/logout?client_id=e400fe38f12604a2937ea759fe0166f7&logout_redirect_uri=http://localhost/kakaoLogout.do">로그아웃</a>
							<br>
							<a href="/kakaoUnlink.do">카카오로 회원 탈퇴</a>
						</c:otherwise>
					</c:choose>
				</div>
			</ul>
		</div>
	</div>
</header>