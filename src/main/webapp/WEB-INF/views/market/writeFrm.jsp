<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/market/writeFrmContent.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="#">분양등록</a></li>
	                <li class="section"><a href="#">사진순서바꾸기</a></li>
	                <li class="section"><a href="#">산책 메이트 목록</a></li>
	            </ul>	
			</div>
			<div id="rowSession2">
		<h1>분양글쓰기</h1>
			<div class="photo-box"></div>
			<div class="photo-box"></div>
			<div class="photo-box"></div>
			<input type="file" name="photo" multiple>
		<form action="/inputMarket.do" method="post" enctype="multipart/form-data">
			<div>품종선택</div>
			<select id="select-box" name="typeCode">
			<!-- 강아지 종류 option 넣는 자리 -->
			</select>
			<div>나이</div>
			<input type="text" name="age">
			<div>성별선택</div>
			<input type="radio" name="gender" id="male" value="남자">
			<label for="male">남자</label>
			<input type="radio" name="gender" id="female" value="여자">
			<label for="female">여자</label>
			    <div class="info-box">
			        <label for="dogVacc"><span>*</span>예방접종 여부</label><br>
			        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="O"> 했어요</label>
      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="X"> 안 했어요</label>
			    </div>
			<div>가격입력</div>
			<input type="text" name="price">
			<div>소개</div>
			<textarea name="saleInfo"></textarea>
			<input type="submit" value="전송">
		</form>
		</div>
	</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
<script>
	$(document).ready(function(){
		$.ajax({
			url:"/selectTypeList.do",
			success:function(data){
				$.each(data,function(idx,value){
					var option = "<option value='"+value.typeCode+"'>"+value.typeName+"</option>";
					$("#select-box").append(option);
				});
			}
		});
	});
</script>
</html>