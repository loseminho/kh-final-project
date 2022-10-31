<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책 메이트 - 정보</title>
<link rel="stylesheet" href="/resources/css/walkmate/walkMatePage.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="walkMatePage-wrap">
			<div class="walkMatePage-menu">
				<ul>
	                <li><a href="#">정보</a></li>
	                <li><a href="#">채팅</a></li>
	                <li><a href="#">후기</a></li>
	            </ul>		
			</div>
			<div class="walkMatePage-content">
				<div class="walkMateInfo">
					<jsp:include page="/WEB-INF/views/walkmate/walkMatePage/walkMateInfo.jsp"/>
				</div>
			</div>
	</div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>