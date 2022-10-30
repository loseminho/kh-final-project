<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>kdf</h1>
	<h3>파일 input test</h3>
	<form action="/inputMarket.do" method="post" enctype="multipart/form-data">
		<span>
		
		</span>
		<input type="hidden" name="marketNo" value="2">
		<input type="file" name="photo">
		<input type="submit" value="전송">
	</form>
</body>
</html>