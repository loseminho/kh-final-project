<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
	<link rel="stylesheet" href="/resources/css/member/myPage.css">
	<link rel="stylesheet" href="/resources/css/member/myReport.css">
	
	<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="#">내 정보</a></li>
	                <li class="section"><a href="#">반려견 정보</a></li>
	                <li class="section"><a href="#">내 일정 보기</a></li>
	                <li>
	                    <a href="#">신고</a>
	                    <ul class="sub-menu">
	                        <li class="section" id="report-list"><a href="#">- 신고 내역</a></li>
	                        <li class="section"><a href="#">- 제재 내역</a></li>
	                    </ul>
	                </li>
	                <li>
	                    <a href="#">쪽지</a>
	                    <ul class="sub-menu">
	                        <li class="section"><a href="#">- 받은 쪽지함</a></li>
	                        <li class="section"><a href="#">- 보낸 쪽지함</a></li>
	                        <li class="section"><a href="#">- 쪽지 쓰기</a></li>
	                    </ul>
	                </li>
	            </ul>		
			</div>
			<div id="rowSession2">
				<!-- 내 정보 -->
				<div class="myprofile">
					<jsp:include page="/WEB-INF/views/member/mypage/myPage_myprofile.jsp"/>
			    </div>
			    
			    <!-- 반려견 정보 -->
			    <div class="dogprofile" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/myPage_dogprofile.jsp"/>
			    </div>

			    <div class="mycalendar" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/myPage_mycalendar.jsp"/>
			    </div>
			    
			    <!-- 신고 내역 -->
			    <div class="reportList" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/reportList.jsp"/>
			    </div>
			    
			    <!-- 제재 내역 -->
			    <div class="penaltyList" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/penaltyList.jsp"/>
			    </div>
			    
			    <!-- 받은 쪽지함 -->
			    <div class="receiveDm" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/myPage_receiveDm.jsp"/>
			    </div>
			    
			    <!-- 보낸 쪽지함 -->
			    <div class="sendDm" style="display: none;">
			        <jsp:include page="/WEB-INF/views/member/mypage/myPage_sendDm.jsp"/>
			    </div>
			</div>
		</div>
		
		<!-- 신고 보기 모달 -->
		<div class="report-view-modal">
			<jsp:include page="/WEB-INF/views/member/mypage/reportView.jsp" />
		</div>
		
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	
	<script>
		const reportMemberNo = ${sessionScope.m.memberNo };
	</script>
	<script src="/resources/js/member/myPage.js"></script>
	<script src="/resources/js/member/mypage/myReport.js"></script>
</body>
</html>