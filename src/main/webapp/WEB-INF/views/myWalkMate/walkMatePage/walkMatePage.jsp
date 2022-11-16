<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
	<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMatePage.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
		<div id="rowSession1">
			<ul class="main-menu">
                <li class="section"><a href="#">모임 정보</a></li>
                <li class="section"><a href="#">모임 참가자</a></li>
                
                <c:if test="${sessionScope.m.memberNo eq w.wmLeader }">
	                <li>
	                    <a href="#">모임 관리</a>
	                    <ul class="sub-menu">
	                        <li class="section" id="wmApplyManagement"><a href="#">- 모임 신청자 관리</a></li>
	                        <li class="section"><a href="#">- 모임 정보 수정</a></li>
	                    </ul>
	                </li>
                </c:if>
            </ul>		
		</div>
		
		<div id="rowSession2">
			<div class="wm-info">
				<jsp:include page="/WEB-INF/views/myWalkMate/walkMatePage/walkMateInfo.jsp"/>
			</div>
			
			<div class="wm-attend-profile" style="display: none;">
				<jsp:include page="/WEB-INF/views/myWalkMate/walkMatePage/walkMateAttendProfile.jsp"/>
			</div>
			
			<div class="wm-apply-management" style="display: none;">
				<jsp:include page="/WEB-INF/views/myWalkMate/walkMatePage/walkMateApplyManagement.jsp"/>
			</div>
			
			<div class="wm-modify" style="display: none;">
				<jsp:include page="/WEB-INF/views/myWalkMate/walkMatePage/walkMateModify.jsp"/>
			</div>
		</div>
	</div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	
	<script>
		const wmNo = ${w.wmNo };
	</script>
	<script src="/resources/js/myWalkMate/walkMatePage/walkMatePage.js"></script>
</body>
</html>