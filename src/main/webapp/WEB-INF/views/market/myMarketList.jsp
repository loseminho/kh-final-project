<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/market/myMarketList.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
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
			<h1>분양목록</h1>
			<br>
			<hr>
			<br>
			<div class="sub-title"><span></span>${sessionScope.m.memberNickname }님의 분양 목록입니다</div>
			<div class="row-part" style="height:150px;">
			<c:forEach items="${list }" var="md">
				<div class="preview-box" style="display:inline-block">
					<img src="/resources/upload/market/${md.fileList[0].filePath }" class="preview">
				<div>ㅅ/비ㅏㄹ</div>
				</div>
			</c:forEach>
			</div>
			</div>
		</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
<script src="/resources/js/market/writeFrmContent.js"></script>
<script>
</script>
</html>