<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="/resources/css/member/report.css">

<div class="report-wrap">
    <span class="material-icons close-icon" id="report-modal-close">close</span>

    <div class="report-content">
        <h1>신고하기</h1>
       
	    <!-- 신고 유형 -->
	    <div class="report-type">
	        <p>신고 유형</p>
	        <select id="reportType">
	            <option value=1>언어 폭력</option>
	            <option value=2>성희롱</option>
	            <option value=3>목적 외 이용</option>
	            <option value=4>신뢰 훼손</option>
	            <option value=5>기타</option>
	        </select>
	    </div>
	    
	    <!-- 신고 상세 이유 -->
	    <div class="report-reason">
	        <p>신고 상세 이유</p>
	        
	        <!-- 신고 상세 이유 입력 -->
	        <div class="report-input">
	            <textarea id="reportContent"></textarea>
	        </div>
	    </div>
	    
	    <!-- 신고하기 버튼 -->
	    <div class="report-btn-box">
	        <button type="button" onclick="report()">신고 하기</button>
	    </div>
    </div>
</div>
<script>
	const reportMemberNo = ${m.memberNo };
	const reportMemberNickname = "${m.memberNickname }";
	
	const reportedMemberNo = ${other.memberNo };
	const reportedMemberNickname = "${other.memberNickname }";
</script>