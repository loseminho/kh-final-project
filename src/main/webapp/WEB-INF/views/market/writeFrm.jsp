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
		<select id="select-box">
		</select>
		<input type="file" name="photo">
		<input type="submit" value="전송">
	</form>
</body>
<script>
	$(document).ready(function(){
		$.ajax({
			url:"/selectTypeList.do",
			success:function(data){
				$.each(data,function(idx,value){
					var option = "<option>"+value.typeName+"</option>";
					option += "<input type='hidden' name=typeCode value="+value.typeCode+">";
					$("#select-box").append(option);
				});
			}
		});
	});
</script>
</html>