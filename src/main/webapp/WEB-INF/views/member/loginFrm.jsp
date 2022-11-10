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
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
        <div class="wrap">
            <div class="title">
                <h1><i class="fa-solid fa-paw"></i>산책갈개</h1>
            </div>
            <div class="content">
                <form action="/login.do" method="post" autocomplete="off">
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-id-card-clip"></i>
                        </span>
                        <label for="memberId">아이디(이메일)<span class="comment"></span></label>
                        <input type="text" name="memberId" id="memberId" class="input">
                    </div>
                    <div class="box">
                        <span class="icon">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <label for="memberPw">비밀번호<span class="comment"></span></label>
                        <input type="password" name="memberPw" id="memberPw" class="input">
                    </div>
                    <div class="btn-box">
                        <button type="button" class="btn" id="loginBtn">로그인</button>
                        <div class="link-box">
                            <a href="/findIdFrm.do">아이디(이메일) 찾기</a>
                            <a href="/findPwFrm.do">비밀번호 찾기</a>
                            <a onclick="joinModal();">회원가입</a>
                        </div>
                    </div>
                    <div class="hrDiv">
                        <hr><span class="easyLogin">간편 로그인</span><hr>
                    </div>
                    <a href="https://kauth.kakao.com/oauth/authorize?client_id=e400fe38f12604a2937ea759fe0166f7&redirect_uri=http://localhost/kakaoLogin.do&response_type=code">
                        <img src="/resources/img/kakao_login_medium_wide.png">
                    </a>
                </form>
            </div>
        </div>
    </div>
	
	<!-- 회원가입 모달 -->
	<div id="join-modal" class="modal-wrapper">
		<div class="modal">
			<div class="modal-header">				
				<button id="closeModalBtn" onclick="closeModal();">
					<i class="fa-solid fa-xmark"></i>
				</button>
			</div>
			<div class="modal-content">
				<div class="join-select">
					<button type="button" class="joinBtn">회원가입하기</button>
					<div class="hrDiv joinHr">
                        <hr><span class="easyLogin">간편 회원가입</span><hr>
                    </div>
					<a href="https://kauth.kakao.com/oauth/authorize?client_id=e400fe38f12604a2937ea759fe0166f7&redirect_uri=http://localhost/kakaoLogin.do&response_type=code">
                        <img src="/resources/img/kakao_join_medium_wide.png">
                    </a>
				</div>
			</div>
		</div>
	</div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <script src="/resources/js/member/login.js"></script>
</body>
</html>