<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/dm/dmList.css">
<link rel="stylesheet" href="/resources/css/dm/dmModal.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="/writeFrm.do">분양등록</a></li>
	                <li class="section"><a href="/myMarketList.do">분양목록</a></li>
	                <li class="section"><a href="/sendDmFrm.do">분양쪽지함❤</a></li>
	            </ul>	
			</div>
			<div id="rowSession2">
			<h1>분양쪽지함</h1>
			<br>
			<hr>
			<div class="search-wrap">
			<div>
			</div>
			<select id="select-box">
				<option value="dmContent">제목으로 검색</option>
				<option value="senderName">이름으로 검색</option>
			</select>
			<input type="text" id="searchKeyword" value="">
			<input type="submit" id="searchList" value="검색">
			</div>
				<div class="dm-list-wrap">
					<li class="list-title">
						<span style="width:90px;">카테고리</span>
						<span style="width:500px;">제목</span>
						<span style="width:120px;">날짜</span>
						<span style="width:120px;">이름</span>
					</li>
					<div class="dm-content-wrap">
					<input id="senderId" type="hidden" value="${sessionScope.m.memberId }">
					<input id="senderName" type="hidden" value="${sessionScope.m.memberNickname }">
					<input type="hidden" id="sessionMemberNo" value="${sessionScope.m.memberNo }">
						<li class="dm-content">

						</li>
					</div>
				</div>
			</div>
		</div>
	<jsp:include page="/WEB-INF/views/dm/dmModal.jsp" />
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
<script src="/resources/js/dm/dmList.js"></script>
<script>
</script>
</html>