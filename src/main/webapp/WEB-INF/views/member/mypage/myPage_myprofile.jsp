<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/resources/css/member/mypage/myPage_myprofile.css">
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<h1>내 정보</h1>
<form action="/updateMember.do" id="updateMemberForm" method="post" autocomplete="off" enctype="multipart/form-data">
	<div id="photo-section">
	        <div class="photo-box">
	        	<c:choose>
		    		<c:when test="${sessionScope.m.memberPhoto eq null}">
					    <img id="preview" src="/resources/img/default_profile.png">						
					</c:when>
					<c:otherwise>
					    <img id="preview" src="/resources/upload/member/${sessionScope.m.memberPhoto }">						
					</c:otherwise>
				</c:choose>
	        </div>
	        <input type="file" name="" id="memberPhoto" style="display:none;" accept="image/*">
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
	        <span class="comment" id="nameComment"></span>
	    </div>
	    <div class="box">
	        <label for="memberPhone"><span>*</span>전화번호</label>
	        <input type="text" name="" id="memberPhone" class="input shortInput" placeholder="010-0000-0000 형식" value="${sessionScope.m.memberPhone}" readonly>
	        <input type="hidden" id="verifyChk" value="false">
	        <button type="button" id="changeBtn">변경하기</button>
	    </div>
	    <div class="box">
	        <label for="memberCity">활동지역</label>
	        <input type="text" name="memberCity" id="memberCity" class="input" value="${sessionScope.m.memberCity }" readonly>
	        <button type="button" id="addr-btn" onclick="searchAddr();">주소찾기</button>
	    </div>
	</div>
	<div id="last-section">
	    <div class="intro-box">
	        <label for="memberIntro">자기소개</label>
	        <textarea name="memberIntro" id="memberIntro" placeholder="1000자 이하로 입력해주세요" maxlength="1000" value="${sessionScope.m.memberIntro }">${sessionScope.m.memberIntro }</textarea>
	    </div>
	    <div class="btn-box">
	        <button type="button" class="btn" id="updateBtn">정보수정</button>
	    </div>
	    <div class="link-box">
	    	<c:choose>
	    		<c:when test="${sessionScope.m.joinType eq '카카오'}">
					<a onclick="deleteKakao();">탈퇴하기</a>
				</c:when>
				<c:otherwise>
					<a href="/currentPw.do">비밀번호 변경</a>
					<span> / </span>
			        <a onclick="deleteMember('${sessionScope.m.memberId }');">탈퇴하기</a>
				</c:otherwise>
			</c:choose>
	    </div>
	</div>
</form>



<!-- 전화번호 인증 모달 -->
<div id="phone-modal" class="modal-wrapper">
	<div class="modal">
		<div class="modal-header">				
			<button id="closeModalBtn" onclick="closePhoneModal();">
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
		<div class="modal-content">
			<div class="verifyBox">
				<input type="text" name="newPhone" id="newPhone" class="input shortInput" placeholder="010-0000-0000 형식">
				<button type="button" id="sendBtn">인증번호발송</button>
        		<span class="comment" id="phoneComment"></span>
        		<div>
        			<input type="text" class="verifyInput" placeholder="인증번호 입력" style="display:none;">
	        		<span id="timeZone" style="display:none;"></span>
	        		<button type="button" id="verifyBtn" style="display:none;">인증하기</button>
        		</div>
		        <span class="verifyMsg"></span>
	        	<button id="changePhoneBtn" type="button" style="display:none;">번호 변경</button>
       		</div>
		</div>
	</div>
</div>

<script src="/resources/js/member/mypage/myPage_myprofile.js"></script>