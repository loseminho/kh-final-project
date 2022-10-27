<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<h1>내 정보</h1>
<div id="photo-section">
    <form action="">
        <div class="photo-box">
            <img src="/resources/img/default_profile.png">
        </div>
        <input type="hidden" name="memberId" value="">
        <input type="submit" id="photoBtn" value="변경하기">
    </form>
</div>
<div id="info-section">
    <div class="box">
        <label for="memberId">아이디(이메일)</label>
        <input type="text" name="memberId" id="memberId" class="input" readonly>
    </div>
    <div class="box">
        <label for="memberNickname">닉네임</label>
        <input type="text" name="memberNickname" id="memberNickname" class="input">
    </div>
    <div class="box">
        <label for="memberPhone">전화번호</label>
        <input type="text" name="memberPhone" id="memberPhone" class="input shortInput" placeholder="010-0000-0000 형식">
        <input type="hidden" id="verifyChk" value="false">
        <button type="button" id="changeBtn">변경하기</button>
        <button type="button" id="sendBtn" style="display:none;">인증번호발송</button>
    </div>
    <div class="verifyBox" style="display:none;">
        <input type="text" class="verifyInput" placeholder="인증번호 입력">
        <span id="timeZone"></span>
        <button type="button" id="verifyBtn">인증하기</button>
           <span class="verifyMsg"></span>
    </div>
    <div class="box">
        <label for="memberCity">활동지역</label>
        <input type="text" name="memberCity" id="memberCity" class="input">
        <button type="button" id="addr-btn" onclick="searchAddr();">주소찾기</button>
    </div>
</div>
<div id="last-section">
    <div class="intro-box">
        <label for="memberIntro">자기소개</label>
        <textarea name="memberIntro" id="memberIntro" placeholder=" 1000자 이하"></textarea>
    </div>
    <div class="btn-box">
        <button type="button" class="btn">정보수정</button>
    </div>
    <div class="link-box">
        <a href="">탈퇴하기</a>
    </div>
</div>