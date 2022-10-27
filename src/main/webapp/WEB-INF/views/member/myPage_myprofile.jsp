<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<h1>내 정보</h1>
<div id="photo-section">
    <form action="">
        <div class="photo-box">
        	<c:choose>
	    		<c:when test="${sessionScope.m.memberPhoto == null}">
		            <img src="/resources/img/default_profile.png">
				</c:when>
				<c:otherwise>
			        <img src="/resources/img/dogfoot.png">
				</c:otherwise>
			</c:choose>
        </div>
        <input type="hidden" name="memberId" value="${sessionScope.m.memberId }">
        <input type="submit" id="photoBtn" value="변경하기">
    </form>
</div>
<form>
	<div id="info-section">
	    <div class="box">
	        <label for="memberId"><span>*</span>아이디(이메일)</label>
	        <input type="text" name="memberId" id="memberId" class="input" value="${sessionScope.m.memberId }" readonly>
	    </div>
	    <div class="box">
	        <label for="memberNickname"><span>*</span>닉네임</label>
	        <input type="text" name="memberNickname" id="memberNickname" class="input" value="${sessionScope.m.memberNickname }">
	    </div>
	    <div class="box">
	        <label for="memberPhone"><span>*</span>전화번호</label>
	        <input type="text" name="memberPhone" id="memberPhone" class="input shortInput" placeholder="010-0000-0000 형식" value="${sessionScope.m.memberPhone}" readonly>
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
	        <input type="text" name="memberCity" id="memberCity" class="input" readonly>
	        <button type="button" id="addr-btn" onclick="searchAddr();">주소찾기</button>
	    </div>
	</div>
	<div id="last-section">
	    <div class="intro-box">
	        <label for="memberIntro">자기소개</label>
	        <textarea name="memberIntro" id="memberIntro" placeholder="1000자 이하로 입력해주세요" maxlength="1000"></textarea>
	    </div>
	    <div class="btn-box">
	        <button type="button" class="btn">정보수정</button>
	    </div>
	    <div class="link-box">
	    	<c:choose>
	    		<c:when test="${sessionScope.m.joinType eq '카카오'}">
					<a href="/kakaoUnlink.do">탈퇴하기</a>
				</c:when>
				<c:otherwise>
			        <a href="">탈퇴하기</a>
				</c:otherwise>
			</c:choose>
	    </div>
	</div>
</form>