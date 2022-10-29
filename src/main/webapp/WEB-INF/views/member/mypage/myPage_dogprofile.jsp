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
        </div>
        <div class="modal-content">
            <div class="dog-info">
                	개정보
            </div>
        </div>
    </div>
</div>
<script src="/resources/js/member/mypage/myPage_dogprofile.js"></script>