<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항</title>
<!-- 부트스트랩  -->
<link rel="stylesheet" href="/resources/css/board/bootstrap.css"/>
<!--css-->
<link rel="stylesheet" href="/resources/css/board/notice.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
	<div class="notice-wrap">
		<div class="notice-content">
			<div class="notice-header">
				<h1>공지사항</h1>
				<c:if test="${sessionScope.m.memberLevel == 2 }">
					<div class="notice-write-box">
						<button id="writeNotice">글쓰기</button>
					</div>
				</c:if>
			</div>
			<div class="notice-list">
				<table class="notice-table">
					<tr>
						<th>글번호</th>
						<th>제목</th>
						<th>등록일</th>
						<th>조회수</th>
					</tr>
					<c:forEach items="${list }" var="n">
						<tr>
							<td>${n.noticeNo }</td>
							<td><a href="/noticeView.do?noticeNo=${n.noticeNo }">${n.noticeTitle }</a></td>
							<td>${n.noticeDate }</td>
							<td>${n.noticeViews}</td>
						</tr>
					</c:forEach>
				</table>
				<div id="pageNavi">${pageNavi}</div>
			</div>
		</div>
	</div>
	<!--notice-wrap 끝--> </content>
	<!--footer-->
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/board/notice.js"></script>
</body>
</html>