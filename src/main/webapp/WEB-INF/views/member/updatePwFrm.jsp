<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<link rel="stylesheet" href="/resources/css/member/login.css">
<link rel="stylesheet" href="/resources/css/gmarket.css">
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
        <div class="wrap">
            <div class="title">
                <h1>비밀번호 변경</h1>
            </div>
            <div class="content">
                <form action="/updatePw.do" id="updatePwForm" method="post" autocomplete="off">
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="memberPw">비밀번호<span class="comment"></span></label>
                        <input type="password" name="updatePw" id="memberPw" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="memberPwChk">비밀번호 확인<span class="comment"></span></label>
                        <input type="password" name="memberPwChk" id="memberPwChk" class="input">
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn">비밀번호 변경</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	 <script src="/resources/js/member/updatePw.js"></script>
</body>
</html>