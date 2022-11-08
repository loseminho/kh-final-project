<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>프로필</title>
	<link rel="stylesheet" href="/resources/css/member/profile.css">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>

	<div class="profile-content-wrap">
		<div class="profile-left"></div>
	
		<div class="profile-content">
	        <!-- 사람 프로필 -->
	        <div class="person-profile">
	        	<div class="profile-header">
	        		<h1>${m.memberNickname }</h1>
	        		<p id="report-modal-open">신고</p>
	        	</div>
	            
		        <div class="profile-photo-box">
		        	<img class="profile-photo" src="/resources/img/member/사람 임시 프로필.png">
		        </div>
		        
		        <div class="person-introduce">
		           	${m.memberIntro }
		        </div>  
	        </div>
	        
	        <!-- 반려견 프로필 -->
	        <c:forEach items="${m.dogList }" var="dog">
		        <div class="dog-profile">
		            <h1>${dog.dogName }</h1>
		
		            <!-- 반려견 프로필 사진 -->
		            <div class="profile-photo-box">
		            	<c:choose>
		            		<c:when test="${not empty dog.dogPhoto}">
		            			<img class="profile-photo" src="/resources/upload/dog/${dog.dogPhoto }">
		            		</c:when>
		            		<c:otherwise>
		            			<img class="profile-photo" src="/resources/img/member/반려견 임시 프로필.png">
		            		</c:otherwise>
		            	</c:choose>
		            </div>
		            
		            <!-- 반려견 정보 -->
		            <div class="dog-info">
		            	<table>
		            		<tr>
		            			<th>크기</th>
		            			<td>${dog.dogSize }</td>
		            		</tr>
		            		<tr>
		            			<th>품종</th>
		            			<td>${dog.dogType }</td>
		            		</tr>
		            		<tr>
		            			<th>성별</th>
		            			<td>${dog.dogGender }</td>
		            		</tr>
		            		<tr>
		            			<th>중성화 여부</th>
		            			<td>${dog.dogNeutral }</td>
		            		</tr>
		            		<tr>
		            			<th>예방접종 여부</th>
		            			<td>${dog.dogVacc }</td>
		            		</tr>
		            		<tr>
		            			<th>나이</th>
		            			<td>${dog.dogAge }살</td>
		            		</tr>
		            		<tr>
		            			<th>몸무게</th>
		            			<td>약 ${dog.dogWeight }kg</td>
		            		</tr>
		            	</table>
		            </div>	
		        </div>	
	        </c:forEach>
	        
	        <div class="before-link-box">
	        	<a class="before-link" href="#">이전으로</a>
	        </div>
		</div>
		
		<div class="profile-right">
			<!-- 반려견 리스트 -->
			<div class="dog-list">
				<table>
					<tr>
						<th>반려견 선택</th>
					</tr>
					<c:forEach items="${m.dogList }" var="dog">
						<tr>
							<td class="dog-name"><a href="#">${dog.dogName }</a></td>
						</tr>
					</c:forEach>
				</table>
			</div>	
		</div>
	</div>	

	<!-- 신고 모달 -->
	<div class="report-modal">
		<jsp:include page="/WEB-INF/views/member/report.jsp" />
	</div>

	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	
	<script src="/resources/js/member/profile.js"></script>
</body>
</html>