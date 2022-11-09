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
	        	<c:choose>
	        		<c:when test="${not empty other }">
	        			<div class="profile-header">
			        		<h1>${other.memberNickname }</h1>
			        		<p id="report-modal-open">신고</p>
			        	</div>
			            
				        <div class="profile-photo-box">
				        	<c:choose>
				        		<c:when test="${not empty other.memberPhoto }">
				        			<img class="profile-photo" src="/resources/upload/member/${other.memberPhoto }">
				        		</c:when>
				        		
				        		<c:otherwise>
				        			<img class="profile-photo" src="/resources/img/member/사람 임시 프로필.png">
				        		</c:otherwise>
				        	</c:choose>
				        </div>

				        <div class="person-id">
				        	<p><b>아이디</b></p>
				        	<p>${other.memberId }</p>
				        </div>

				        <div class="person-city">
				        	<p><b>활동지역</b></p>
				        	<p>${other.memberCity }</p>
				        </div>
				        
				        <div class="person-intro">
				        	<p><b>자기소개</b></p>
				        	<div>${other.memberIntro }</div>
				        </div> 
	        		</c:when>

	        		<c:otherwise>
	        			<div class="profile-header">
	        				<h1>회원 프로필을 불러 올 수 없습니다.</h1>
	        			</div>
	        		</c:otherwise>
	        	</c:choose>
	        </div>
	        
	        <!-- 반려견 프로필 -->
	        <c:forEach items="${other.dogList }" var="dog">
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
	        	<a class="before-link" href="javascript:history.back();">이전으로</a>
	        </div>
		</div>
		
		<div class="profile-right">
			<!-- 반려견 리스트 -->
			<div class="dog-list">
				<c:if test="${not empty other.dogList }">
					<table>
						<tr>
							<th>반려견 선택</th>
						</tr>
						<c:forEach items="${other.dogList }" var="dog">
							<tr>
								<td class="dog-name"><a href="#">${dog.dogName }</a></td>
							</tr>
						</c:forEach>
					</table>
				</c:if>
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