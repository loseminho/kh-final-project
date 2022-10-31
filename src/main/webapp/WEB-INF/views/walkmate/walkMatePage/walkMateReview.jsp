<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="/resources/css/walkmate/walkMatePage/walkMateReview.css">

<!-- 후기 목록 -->
<div class="review-list">
	<div class="review-list-header">
		<h1>후기 목록</h1>
	</div>
	
	<div class="review-list-content">
		<table>
			<tr>
				<th>작성자</th>
				<th>제목</th>
				<th>작성일</th>
				<th>조회수</th>
			</tr>
			<!-- 후기 수만큼 출력 -->
			<tr>
				<td><a href="/showProfile.do">닉네임</a></td>		<!-- 해당 닉네임의 프로필로 이동 -->
				<td><a href="#">제목</a></td>						<!-- 해당 후기 내용 보기 -->
				<td>2022-10-31</td>
				<td>10</td>
			</tr>
		</table>
	</div>
</div>

<!-- 후기 쓰기 -->
<!-- 한 번 쓰고 나면 보이지 않음 -->
<div class="review-write-frm">
	<div class="review-write-header">
		<h1>후기 쓰기</h1>
	</div>
	
	<form class="" action="" method="post">
		<!-- 후기 제목 입력 -->
		<div class="review-title">
			<h2>제목</h2>
			<input type="text">
		</div>
		
		<!-- 후기 내용 입력 -->
		<div class="review-content">
			<textarea></textarea>
		</div>
		
		<div class="review-write-btn-box">
			<button type="submit">후기 쓰기</button>
		</div>
	</form>
</div>