<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 찾기</title>
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
                <h1>아이디 찾기</h1>
            </div>
            <div class="content">
                <form action="/findId.do" method="post" autocomplete="off">
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-id-card-clip"></i>
                        </span>
                        <label for="memberName">이름<span class="comment"></span></label>
                        <input type="text" name="memberName" id="memberName" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-phone"></i>
                        </span>
                        <label for="memberPhone">전화번호<span class="comment"></span></label>
                        <input type="text" name="memberPhone" id="memberPhone" class="input" placeholder="010-0000-0000 형식">
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn">아이디 찾기</button>
                    </div>
                </form>
            </div>
            <div class="resultDiv">
            </div>
        </div>
    </div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	 <script src="/resources/js/member/findId.js"></script>
</body>
</html>