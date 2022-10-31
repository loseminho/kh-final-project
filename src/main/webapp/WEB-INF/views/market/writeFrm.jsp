<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<h1>분양글쓰기</h1>
	<form action="/inputMarket.do" method="post" enctype="multipart/form-data">
		<div>품종선택</div>
		<select id="select-box">
		<!-- 강아지 종류 option 넣는 자리 -->
		</select>
		<div>나이</div>
		<input type="text" name="age">
		<div>성별선택</div>
		<input type="radio" name="gender" id="male" value="남자">
		<label for="male">남자</label>
		<input type="radio" name="gender" id="female" value="여자">
		<label for="female">여자</label>
		<div>예방접주차시선택</div>
		<select>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
		</select>
		<div>가격입력</div>
		<input type="text" name="price">
		<div>소개</div>
		<textarea name="saleInfo"></textarea>
		<div>강아지프사선택</div>
		<input type="file" name="photo" multiple>
		<input type="submit" value="전송">
	</form>
</body>
<script>
	$(document).ready(function(){
		$.ajax({
			url:"/selectTypeList.do",
			success:function(data){
				$.each(data,function(idx,value){
					var option = "<option value="+value.typeCode+">"+value.typeName+"</option>";
					$("#select-box").append(option);
				});
			}
		});
	});
</script>
</html>