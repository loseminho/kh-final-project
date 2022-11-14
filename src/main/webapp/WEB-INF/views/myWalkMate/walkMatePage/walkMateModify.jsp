<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMateModify.css">

<div class="">
	<div class="">
		<h1>모임 정보 수정</h1>
	</div>
	
	<div class="">
		<input type="text">
		<input type="text">
	</div>
	
	<div class="">
		<div class="">
			<label>모임 인원</label>
			<input type="text">
		</div>
		
		<div class="">
			<label>모임 날짜</label>
			<input type="date">
		</div>
		
		<div class="">
			<label>모임 시간</label>
			<input type="time">
		</div>
		
		<div class="">
			<label>모임 장소</label>
			<input type="text">
			<button>주소 찾기</button>
		</div>
		
		<div class="">
			<p>태그</p>
			<input type="radio" id="공원&산책로" name="wmTag" value="공원&산책로"><label for="공원&산책로">공원&산책로</label>
            <input type="radio" id="둘레길&등산" name="wmTag" value="둘레길&등산"><label for="둘레길&등산">둘레길&등산</label>
            <input type="radio" id="여행" name="wmTag" value="여행"><label for="여행">여행</label>
            <input type="radio" id="운동" name="wmTag" value="운동"><label for="운동">운동</label>
            <input type="radio" id="페스티벌" name="wmTag" value="페스티벌"><label for="페스티벌">페스티벌</label>
		</div>
	</div>
	
	<div class="">
		기존 글
	</div>
	
	<div class="">
		<button>수정하기</button>
	</div>
</div>