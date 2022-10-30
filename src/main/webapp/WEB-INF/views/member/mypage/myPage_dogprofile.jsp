<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/resources/css/member/mypage/myPage_dogprofile.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

<h1>반려견 정보</h1>
<a href="" id="addDog">반려견 추가</a>
<div class="wrap">
    <div class="box">
        <a onclick="dogModal();">
            <div class="photo">
                <img id="preview" src="/resources/img/default_dog.png">
            </div>
            <h3>정돌이</h3>
        </a>
    </div>
    <div class="box">
        <a onclick="dogModal();">
            <div class="photo">
                <img id="preview" src="/resources/img/default_dog.png">
            </div>
            <h3>정돌이</h3>
        </a>
    </div>
    <div class="box">
        <a onclick="dogModal();">
            <div class="photo">
                <img id="preview" src="/resources/img/default_dog.png">
            </div>
            <h3>정돌이</h3>
        </a>
    </div>
    <div class="box">
        <a onclick="dogModal();">
            <div class="photo">
                <img id="preview" src="/resources/img/default_dog.png">
            </div>
            <h3>정돌이</h3>
        </a>
    </div>
</div>

<!-- 강아지 모달 -->
<div id="dog-modal" class="modal-wrapper">
    <div class="modal">
        <div class="modal-header">				
            <button id="closeModalBtn" onclick="closeDogModal();">닫기</button>
            <h3>반려견 상세 정보</h3>
        </div>
        <div class="modal-content">
            <div class="dog-info">
            	<div id="photo-section">
			        <div class="photo-box">
					    <img id="dogPreview" src="/resources/img/default_dog.png">						
			        </div>
			        <input type="file" name="" id="dogPhoto" style="display:none;" accept="image/*">
			        <button type="button" id="dogPhotoBtn" onclick="addDogFile();">파일 선택</button>	
				</div>
            </div>
            <div id="info-section">
			    <div class="info-box">
			        <label for="dogName"><span>*</span>이름</label>
			        <input type="text" name="dogName" id="dogName" class="input" value="${sessionScope.m.memberId }">
			    </div>
			    <div class="info-box">
			        <label for="dogType"><span>*</span>품종</label>
			        <input type="text" name="dogType" id="dogType" class="input" value="${sessionScope.m.memberNickname }">
			    </div>
			    <div class="info-box">
			        <label for="dogAge"><span>*</span>나이</label>
			        <input type="text" name="dogAge" id="dogAge" class="input shortInput" value="${sessionScope.m.memberPhone}">살
			    </div>
			    <div class="info-box">
			        <label for="dogGender">성별</label><br>
			        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="남아"> 남아</label>
      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="여아"> 여아</label>
			    </div>
			    <div class="info-box">
			        <label for="dogWeight">몸무게</label>
			        <input type="text" name="dogWeight" id="dogWeight" class="input shortInput" value="${sessionScope.m.memberCity }">KG
			    </div>
			    <div class="info-box">
			        <label for="dogNeutral">중성화 여부</label><br>
			        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="O"> 했어요</label>
      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="X"> 안 했어요</label>
			    </div>
			    <div class="info-box">
			        <label for="dogVacc">예방접종 여부</label><br>
			        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="O"> 했어요</label>
      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="X"> 안 했어요</label>
			    </div>
			</div>
        </div>
    </div>
</div>
<script src="/resources/js/member/mypage/myPage_dogprofile.js"></script>