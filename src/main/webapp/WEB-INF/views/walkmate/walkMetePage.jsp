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
                <li><a class="selected-menu" href="#">정보</a></li>
                <li><a class="selected-menu" href="#">채팅</a></li>
                <li><a class="selected-menu" href="#">후기</a></li>
            </ul>		
		</div>
		<div class="walkMatePage-content">
			<!-- 정보 -->
			<div class="walkMateInfo">
				<jsp:include page="/WEB-INF/views/walkmate/walkMatePage/walkMateInfo.jsp"/>
			</div>
			
			<!-- 채팅 -->
			<div>
				
			</div>
			
			<!-- 후기 목록 및 후기 쓰기 -->
			<div class="walkMateReview">
				<jsp:include page="/WEB-INF/views/walkmate/walkMatePage/walkMateReview.jsp"/>
			</div>
			
			<!-- 후기 보기 -->
			<div class="walkMateReview">
				<jsp:include page="/WEB-INF/views/walkmate/walkMatePage/showOneReview.jsp"/>
			</div>
		</div>
	</div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script>
		const index = ${index};
		$(".walkMatePage-content").children().eq(index).show();
	</script>
	<script src="/resources/js/walkmate/walkMatePage.js"></script>
</body>
</html>