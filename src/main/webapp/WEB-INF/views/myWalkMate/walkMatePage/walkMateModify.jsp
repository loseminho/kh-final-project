<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMateModify.css">

<div class="wm-modify-wrap">
	<div class="wm-modify-header">
		<h1>모임 정보 수정</h1>
	</div>
	
	<div class="wm-modify-body">
		<div class="wm-modify-box1">
			<div class="wm-title-modify">
				<label for="input-wm-title">제목</label>
				<input type="text" id="input-wm-title" value="${w.wmTitle }" disabled>
			</div>
			
			<div class="wm-sub-title-modify">
				<label for="input-wm-sub-title">부제목</label>
				<input type="text" id="input-wm-sub-title" value="${w.wmSubTitle }">
			</div>
		</div>
		
		<div class="wm-modify-box2">
			<div class="wm-range-member-modify">
				<label for="input-wm-range-member">모임 인원</label>
				<input type="text" id="input-wm-range-member" value=${w.wmRangeMember } disabled>
			</div>
			
			<div class="wm-date-modify">
				<label for="input-wm-date">모임 날짜</label>
				<input type="date" id="input-wm-date" value=${fn:substring(w.wmMeetTime, 0, 10) }>
			</div>
			
			<div class="wm-time-modify">
				<label for="input-wm-time">모임 시간</label>
				<input type="time" id="input-wm-time" value=${fn:substring(w.wmMeetTime, 11, 16) }>
			</div>
			
			<div class="wm-addr-modify">
				<label for="input-wm-addr">모임 장소</label>
				<input type="text" id="input-wm-addr" value="${w.wmAddr }" readonly>
				<button type="button" id="wm-addr-modify-btn">주소 찾기</button>
			</div>
			
			<div class="wm-tag-modify">
				<label>태그</label>
				<input type="radio" id="공원&산책로" name="wmTag" value="공원&산책로"><label for="공원&산책로">공원&산책로</label>
	            <input type="radio" id="둘레길&등산" name="wmTag" value="둘레길&등산"><label for="둘레길&등산">둘레길&등산</label>
	            <input type="radio" id="여행" name="wmTag" value="여행"><label for="여행">여행</label>
	            <input type="radio" id="운동" name="wmTag" value="운동"><label for="운동">운동</label>
	            <input type="radio" id="페스티벌" name="wmTag" value="페스티벌"><label for="페스티벌">페스티벌</label>
			</div>
		</div>
		
		<div class="wm-content-modify">
			<textarea id="input-wm-content">${w.wmContent }</textarea>
		</div>
	</div>
	
	<div class="wm-modify-footer">
		<button type="button" id="wm-modify-btn" onclick="modifyWalkMate()">수정하기</button>
		<button type="button" id="wm-delete-btn" onclick="deleteWalkMate()">삭제하기</button>
	</div>
</div>

<script>
	const wmNo = ${w.wmNo };
	let wmTag = "${w.wmTag }";
	$(".wm-tag-modify>input[value='" + wmTag + "']").prop('checked', true);
</script>
<script src="/resources/js/myWalkMate/walkMatePage/walkMateModify.js"></script>