<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<link rel="stylesheet" href="/resources/css/gmarket.css">
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
<style>
	* {
		font-family : gs-light;
	}
	.page-content {
		width : 1200px;
		margin: 100px auto;
		display: flex;
    	flex-direction: row;
    	justify-content: center;
    	align-items: center;
    	flex-grow: 1; /* 컨텐츠 길이가 짧을 때 남은 공간을 이 요소가 차지하도록 해서 푸터를 아래 붙이기 위해 */
	}
	.wrap {
		width: 500px;
		height: 500px;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	align-items: center;
	}
	.btn {
		display: block;
	    width: 300px;
	    height: 45px;
	    line-height : 45px;
	    margin-top: 50px;
	    border: none;
	    background-color: #1abc9c;
	    border-radius: 5px;
	    color: #fff;
	    cursor: pointer;
	    font-size: 14px;
	    text-align: center;
	    text-decoration : none;
	}
</style>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	<div class="page-content">
		<div class="wrap">
			<h1>회원가입을 축하드립니다.</h1>
			<a href="/loginFrm.do" class="btn">로그인하러 가기</a>		
		</div>
	</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>