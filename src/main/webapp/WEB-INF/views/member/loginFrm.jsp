<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<link rel="stylesheet" href="/css/login.css">
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
<link rel="icon" href="/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
        <div class="wrap">
            <div class="title">
                <h1>산책갈개 <i class="fa-solid fa-paw"></i></h1>
            </div>
            <div class="content">
                <form action="/login.do" method="post" autocomplete="off">
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-id-card-clip"></i>
                        </span>
                        <label for="id">이메일<span class="comment"></span></label>
                        <input type="text" name="memberId" id="memberId">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="pw">비밀번호<span class="comment"></span></label>
                        <input type="password" name="memberPw" id="memberPw">
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn">로그인</button>
                        <div class="link-box">
                            <a href="/findId.do">아이디(이메일) 찾기</a>
                            <a href="/findPw.do">비밀번호 찾기</a>
                            <a href="/joinFrm.do">회원가입</a>
                        </div>
                    </div>
                    <div class="hrDiv">
                        <hr><span id="easyLogin">간편 로그인</span><hr>
                    </div>
                    <a href="https://kauth.kakao.com/oauth/authorize?client_id=e400fe38f12604a2937ea759fe0166f7&redirect_uri=http://localhost/kakaoLogin.do&response_type=code">
                        <img src="/img/kakao_login_medium_wide.png">
                    </a>
                </form>
            </div>
        </div>
    </div>

    <script src="/js/login.js"></script>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>