<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link rel="stylesheet" href="/css/member/login.css">
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
<link rel="icon" href="/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
        <div class="wrap">
            <div class="title">
                <h1>회원가입</h1>
            </div>
            <div class="content">
                <form action="/join.do" id="joinForm" method="post" autocomplete="off">
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-id-card-clip"></i>
                        </span>
                        <label for="memberId">아이디(이메일)<span class="comment"></span></label>
                        <input type="text" name="memberId" id="memberId" class="input">
                        <input type="hidden" id="idChk" value="false">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="memberPw">비밀번호<span class="comment"></span></label>
                        <input type="password" name="memberPw" id="memberPw" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="memberPwChk">비밀번호 확인<span class="comment"></span></label>
                        <input type="password" name="memberPwChk" id="memberPwChk" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-user"></i>
                        </span>
                        <label for="memberName">이름<span class="comment"></span></label>
                        <input type="text" name="memberName" id="memberName" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-phone"></i>
                        </span>
                        <label for="memberPhone">전화번호<span class="comment"></span></label>
                        <input type="text" name="memberPhone" id="memberPhone" class="input shortInput" placeholder="010-0000-0000 형식">
                        <input type="hidden" id="verifyChk" value="false">
                        <button type="button" id="sendBtn">인증번호발송</button>
                    </div>
                    <div class="verifyBox" style="display:none;">
                    	<input type="text" class="verifyInput" placeholder="인증번호 입력">
                    	<span id="timeZone"></span>
                    	<button type="button" id="verifyBtn">인증하기</button>
                    	<span class="verifyMsg"></span>
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn">회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <script src="/js/member/join.js"></script>
</body>
</html>