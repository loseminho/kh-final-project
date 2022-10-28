<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/resources/css/member/myPage_myprofile.css">
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<h1>내 정보</h1>
<form action="/updateMember.do" method="post" autocomplete="off">
	<div id="photo-section">
	        <div class="photo-box">
			    <img id="preview" src="/resources/img/default_profile.png">
	        </div>
	        <input type="hidden" name="memberId" value="${sessionScope.m.memberId }">
	        <input type="file" name="memberPhoto" id="memberPhoto" style="display:none;" accept="image/*">
	        <button type="button" id="photoBtn" onclick="addFile();">파일 선택</button>
	</div>
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
					<a href="">비밀번호 변경</a>
			        <a href="">탈퇴하기</a>
				</c:otherwise>
			</c:choose>
	    </div>
	</div>
</form>



<!-- 전화번호 인증 모달 -->
<div id="phone-modal" class="modal-wrapper">
	<div class="modal">
		<div class="modal-header">				
			<button id="closeModalBtn" onclick="closeModal();">닫기</button>
		</div>
		<div class="modal-content">
			<div class="verifyBox">
				<input type="text" name="newPhone" id="newPhone" class="input shortInput" placeholder="010-0000-0000 형식">
				<button type="button" id="sendBtn">인증번호발송</button>
        		<span class="comment" id="phoneComment"></span>
	        	<input type="text" class="verifyInput" placeholder="인증번호 입력" style="display:none;">
	        	<span id="timeZone" style="display:none;"></span>
	        	<button type="button" id="verifyBtn" style="display:none;">인증하기</button>
	        	<span class="verifyMsg"></span>
	        	<button id="changePhoneBtn" type="button" style="display:none;">번호 변경</button>
       		</div>
		</div>
	</div>
</div>