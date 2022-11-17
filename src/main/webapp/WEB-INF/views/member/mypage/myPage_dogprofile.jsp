<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/resources/css/member/mypage/myPage_dogprofile.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

<h1>반려견 정보</h1>
<p class="addLink"><a id="addDog">반려견 추가</a></p>
<div id="dog-wrap">
	<c:choose>
		<c:when test="${sessionScope.m.dogList[0] ne null}">
			<c:forEach items="${sessionScope.m.dogList }" var="myDog">
			    <div class="box">
			        <a onclick="dogModal('${myDog.dogNo}');">
			            <div class="photo">
				            <c:choose>
				            	<c:when test="${myDog.dogPhoto eq null}">
					                <img src="/resources/img/default_dog.png">
				            	</c:when>
				            	<c:otherwise>
					                <img src="/resources/upload/dog/${myDog.dogPhoto }">
				            	</c:otherwise>
				            </c:choose>	
			            </div>
			            <h3>${myDog.dogName }</h3>
			        </a>
			    </div>
			</c:forEach>
	    </c:when>
		<c:otherwise>
			<br>
			<p>등록된 반려견이 없습니다.</p>
		</c:otherwise>
    </c:choose>
</div>

<!-- 강아지 모달 -->
<div id="dog-modal" class="modal-wrapper">
    <div class="modal">
        <div class="modal-header">				
            <button id="closeModalBtn" onclick="closeDogModal();">
            	<i class="fa-solid fa-xmark"></i>
            </button>
            <h3>반려견 상세 정보</h3>
        </div>
        <div class="modal-content">
        	<form action="" id="dogProfileForm" method="post" autocomplete="off" enctype="multipart/form-data">
        		<input type="hidden" id="dogNo">
	            <div class="dog-info">
	        		<input type="hidden" name="memberNo" value="${sessionScope.m.memberNo }">
	            	<div id="photo-section">
				        <div class="photo-box">
				        	<img id="dogPreview" src="/resources/img/default_dog.png">					
				        </div>
				        <input type="file" name="" id="dogPhoto" style="display:none;" accept="image/*">
				        <button type="button" id="dogPhotoBtn" onclick="addDogFile();">파일 선택</button>	
					</div>
	            </div>
	            <div id="info-section">
	            	<p id="updateMent" style="font-size:14px; color:#ccc;"><span style="color:#1abc9c;">*</span> : 수정 가능한 정보</p>
				    <div class="info-box">
				        <label for="dogName">이름</label>
				        <input type="text" name="dogName" id="dogName" class="input" maxlength="10">
				    </div>
				    <div class="info-box">
				        <label for="dogType">품종</label>
				        <input type="text" name="" id="dogType1" class="input">
				        <select id="dogType2" name="" style="display:none;">
				        </select>
				        <select id="typeSize" name="" style="display:none;">
				        	<option value="0">소형견</option>
				        	<option value="1">중형견</option>
				        	<option value="2">대형견</option>
				        </select>
				    </div>
				    <div class="info-box">
				        <label for="dogAge"><span>*</span>나이</label>
				        <input type="text" name="dogAge" id="dogAge" class="input shortInput">살
				    </div>
				    <div class="info-box">
				        <label for="dogGender"><span>*</span>성별</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="남아"> 남아</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="여아"> 여아</label>
				    </div>
				    <div class="info-box">
				        <label for="dogWeight"><span>*</span>몸무게 (소수점X)</label>
				        <input type="text" name="dogWeight" id="dogWeight" class="input shortInput">KG
				    </div>
				    <div class="info-box">
				        <label for="dogNeutral"><span>*</span>중성화 여부</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="O"> 했어요</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="X"> 안 했어요</label>
				    </div>
				    <div class="info-box" id="mbti-box">
				        <label for="dogMbti">멍BTI</label>
				        <input type="text" name="dogMbti" id="dogMbti" class="input" readonly>
				        <button type="button" id="mbtiBtn" onclick="goToMbti();">검사하러가기</button>
				    </div>
				    <div class="info-box">
				        <label for="dogVacc"><span>*</span>예방접종 여부</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="O"> 했어요</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="X"> 안 했어요</label>
				    </div>
				    <div class="btn-box">
				        <button type="button" class="btn" id="dogBtn"></button>
				        <button type="button" class="btn" id="deleteDogBtn" style="background-color:white; color:red; border:1px solid red;">삭제하기</button>
				    </div>
				</div>
			</form>
        </div>
    </div>
</div>


<script src="/resources/js/member/mypage/myPage_dogprofile.js"></script>