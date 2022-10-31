<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	<div class="profile-left">
	
	</div>

	<div class="profile-content">
        <!-- 사람 프로필 -->
        <div class="person-profile">
            <h1 class="profile-header">닉네임</h1>
            
	        <div class="profile-photo-box">
	        	<img class="profile-photo" src="/resources/img/member/사람 임시 프로필.png">
	        </div>
	        
	        <div class="person-introduce">
	           	자기 소개
	        </div>  
        </div>
        
        <!-- 반려견 프로필 -->
        <div class="dog-profile">
            <h1 class="profile-header">반려견 이름</h1>

            <!-- 반려견 프로필 사진 -->
            <div class="profile-photo-box">
                <img class="profile-photo" src="/resources/img/member/반려견 임시 프로필.png">
            </div>
            
            <!-- 반려견 정보 -->
            <div class="dog-info">
            	<table>
            		<tr>
            			<th>크기</th>
            			<td>소형</td>
            		</tr>
            		<tr>
            			<th>품종</th>
            			<td>말티즈</td>
            		</tr>
            		<tr>
            			<th>성별</th>
            			<td>남아</td>
            		</tr>
            		<tr>
            			<th>중성화 여부</th>
            			<td>X</td>
            		</tr>
            		<tr>
            			<th>예방접종 여부</th>
            			<td>O</td>
            		</tr>
            		<tr>
            			<th>나이</th>
            			<td>1살</td>
            		</tr>
            		<tr>
            			<th>몸무게</th>
            			<td>약 1kg</td>
            		</tr>
            	</table>
            </div>	
            
            <!-- 반려견 소개 글 -->
            <div class="dog-introduce">
            	반려견 소개
            </div>
        </div>	
        
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
				<tr>
					<td><a href="#">반려견 이름</a></td>
				</tr>
				<tr>
					<td><a href="#">반려견 이름</a></td>
				</tr>
		 		<tr>
					<td><a href="#">반려견 이름</a></td>
				</tr>
				<tr>
					<td><a href="#">반려견 이름</a></td>
				</tr>
				<tr>
					<td><a href="#">반려견 이름</a></td>
				</tr>
			</table>
		</div>	
	</div>
</div>	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>