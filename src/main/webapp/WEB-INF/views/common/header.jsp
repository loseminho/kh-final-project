<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<link rel="stylesheet" href="/resources/css/header.css">
	<link rel="stylesheet" href="/resources/css/gmarket.css">
	<!-- 드래그 -->
	<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
 	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
	<!-- 이모티콘 --> 	
 	
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
		<div class="manager-subtitle" style="display:none;">
			<div><a href="/notice.do?reqPage=1">공지사항</a></div>
			<div><a href="/faqQnaBoardFrm.do">FAQ/문의하기</a></div>
		</div>		
		</div>
	</div>
	<div class="chat-icon">
		<img src="/resources/img/favicon.ico">
	</div>
	<span class="chat-tooltip">채팅</span>
	<div id="chat-board" style="display:none;">
		<c:choose>
			<c:when test="${empty sessionScope.m }">
				<div class="require-login">
					<div>로그인이필요한 서비스 입니다.</div>
					<a href="/loginFrm.do">로그인</a>
				</div>
			</c:when>
			<c:otherwise>
				<input type="hidden" id="chatMemberId" value="${sessionScope.m.memberId }">
				<input type="hidden" id="chatMemberNo" value="${sessionScope.m.memberNo }">
				<input type="hidden" id="chatMemberNickname" value="${sessionScope.m.memberNickname }">
				<div class="chat-title">안녕하세요<span>"${sessionScope.m.memberNickname }"</span>님!</div>
				<div class="chat-name"></div>
				<div class="chat-list">
				<!-- 
					<li class="init-chat">
						<input type="hidden" class="boardNo" value=1>
						<input type="hidden" class="boardTitle" value="망원동에서 산책하실분?">
						<span>망원동에서 산책하실분?</span>
					</li>
				 -->
				</div>
				<div class="chat-form" style="display:none;">
					<div class="back-btn"><span>뒤로가기</span></div>
					<div class="chat-content">
					</div>
					<div class="chat-input"><input type="text" id="send-msg"><span id="chat-send-btn">보내기</span></div>
				</div>
		</c:otherwise>
		</c:choose>
	</div>
</header>
<script src="/resources/js/header.js"></script>