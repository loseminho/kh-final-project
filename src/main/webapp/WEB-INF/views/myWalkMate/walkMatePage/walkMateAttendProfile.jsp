<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMateAttendProfile.css">

<div class="wm-attend-profile-wrap">
	<div class="wm-attend-profile-header">
		<h1>모임 참가자</h1>
	</div>

	<div class="wm-attend-profile-content">
		<c:if test="${empty attendList}">
			<p>모임 참가자가 존재하지 않습니다.</p>
		</c:if>
	
		<c:forEach items="${attendList}" var="attend" >
			<div class="attend-person-one">
				<div class="attend-profile-top">
					<div class="attend-nicname">
						<p>${attend.memberNickname }</p>
						
						<c:choose>
			        		<c:when test="${attend.memberNo eq w.wmLeader }">
			        			<p>모임장</p>
			        		</c:when>
			        		
			        		<c:when test="${attend.memberNo eq sessionScope.m.memberNo }">
			        			<p>나</p>
			        		</c:when>
						</c:choose>
					</div>
					
					<div class="page-link-box">
			        	<c:if test="${attend.memberNo ne w.wmLeader }">
				        	<c:if test="${attend.memberNo eq sessionScope.m.memberNo }">
				        		<p id="wm-leave"><a href="javascript:void(0);" onclick="leaveWalkMate(${sessionScope.m.memberNo })">모임나가기</a></p>
				        	</c:if>
			        	</c:if>
			        	
						<p id="view-profile"><a href="/selectOneProfile.do?memberNo=${attend.memberNo }">전체 프로필 보기</a></p>
					</div>
				</div>
				
				<div class="attend-profile-main">
					<div class="attend-img-box">
						<c:choose>
			        		<c:when test="${not empty attend.memberPhoto }">
			        			<img src="/resources/upload/member/${attend.memberPhoto }">
			        		</c:when>
			        		
			        		<c:otherwise>
			        			<img src="/resources/img/default_profile.png">
			        		</c:otherwise>
						</c:choose>
					</div>					
				
					<div class="attend-intro">
			        	<c:choose>
			        		<c:when test="${not empty attend.memberIntro }">
			        			${attend.memberIntro }
			        		</c:when>
			        		
			        		<c:otherwise>
			        			입력된 자기소개가 없습니다.
			        		</c:otherwise>
			        	</c:choose>
					</div>
				</div>
			</div>
		</c:forEach>
	</div>
</div>

<script src="/resources/js/myWalkMate/walkMatePage/walkMateAttendProfile.js"></script>