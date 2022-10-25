<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카카오 추가 정보 입력</title>
<link rel="stylesheet" href="/resources/css/member/login.css">
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
<link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	
	<div class="page-content">
        <div class="wrap">
            <div class="title">
                <h1>전화번호 등록</h1>
            </div>
            <div class="content">
                <form action="/selectMyAccessTocken.do" id="kakaoJoinFrm" method="post" autocomplete="off">
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
                        <button type="button" class="btn">전화번호 등록</button>
                    </div>
                </form>
            </div>
            <div class="resultDiv">
            </div>
        </div>
    </div>
	
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/member/kakaoJoin.js"></script>
	
</body>
</html>