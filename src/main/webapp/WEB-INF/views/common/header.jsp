<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="/resources/css/header.css">
	<link rel="stylesheet" href="/resources/css/gmarket.css">
	<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
	
	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
 	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
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
						<li><a href= "/faqQnaBoardFrm.do">고객서비스</a></li>
						<li><a href="/notice.do?reqPage=1">공지사항</a></li>
						<li><a href="/faqQnaBoardFrm.do">FAQ/문의하기</a></li>
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
	<div class="chat-icon">
		<img src="/resources/img/favicon.ico">
	</div>
	<div id="chat-board">
		<div class="chat-title">안녕하세요<span>"${sessionScope.m.memberNickname }"</span>님!</div>
		<div class="chat-name">00방입니다</div>
		<div class="chat-list">
			<li onclick="initChat('${sessionScope.m.memberId}');">
				<input type="hidden" name="boardNo" value=1>
				<input type="hidden" name="boardTitle" value="">
				<span>뭐뭐뭐</span>
			</li>
			<li>뭐뭐뭐</li>
			<li>뭐뭐뭐</li>
			<li>뭐뭐뭐</li>
			<li>뭐뭐뭐</li>
		</div>
		<div class="chat-form" style="display:none;">
			<div class="back-btn">뒤로가기</div>
			<div class="chat-content">
			<div class="chat left">안녕하세요</div>
			<div class="chat right"><span>네 안녕하세요</span></div>
			</div>
			<div class="chat-input"><input type="text" id="send-msg"><span id="chat-send-btn">보내기</span></div>
		</div>
	</div>
</header>
<script src="/resources/js/header.js"></script>