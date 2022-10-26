<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/member/myPage.css">
<script src="https://code.jquery.com/jquery-3.6.1.js"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="myPageTitle">마이페이지</div>
		<div class="myPageTab"></div>
		<div class="myPageWrap">
			<div id="rowSession1">
				<ul>
					<li>내 정보/프로필</li>
					<li>반려견 프로필</li>
					<li>산책 메이트 리스트</li>
					<li>신고</li>
					<li>쪽지(?)</li>
				</ul>			
			</div>
			<div id="rowSession2">
				
			</div>
		</div>
</body>
</html>