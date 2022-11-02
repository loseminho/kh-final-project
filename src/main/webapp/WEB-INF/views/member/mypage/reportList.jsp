<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="/resources/css/member/mypage/reportList.css">

<div class="report-list-header">
	<h1>신고 내역</h1>
</div>

<!-- 메뉴 -->
<div class="report-list-menu">
	<ul>
		<li><span class="report-select">전체</span></li>
		<li><span class="report-select">대기</span></li>
		<li><span class="report-select">완료</span></li>
	</ul>
</div>

<!-- 내역 테이블 -->
<div class="report-list-table">
	<table>
		<tr>
			<th>신고 대상</th>
			<th>신고 유형</th>
			<th>신고 상세 이유</th>
			<th>신고 상태</th>
			<th>신고 날짜</th>
		</tr>
	</table>	
	
	<!-- 전체 -->
	<div class="report-list">
		<table>
			<tr>
				<td>개좋아1</td>
				<td>언어 폭력</td>
				<td>개좋아1 님이 모임에서 저에게 막말을 했어요.</td>
				<td>대기</td>
				<td>2022-11-02</td>
			</tr>
			<tr>
				<td>개좋아2</td>
				<td>언어 폭력</td>
				<td>개좋아2 님이 모임에서 저에게 막말을 했어요.</td>
				<td>완료</td>
				<td>2022-11-02</td>
			</tr>
		</table>
	</div>
	
	<!-- 대기 -->
	<div class="report-list">
		<table>
			<tr>
				<td>개좋아1</td>
				<td>언어 폭력</td>
				<td>개좋아1 님이 모임에서 저에게 막말을 했어요.</td>
				<td>대기</td>
				<td>2022-11-02</td>
			</tr>
		</table>
	</div>
	
	<!-- 완료 -->
	<div class="report-list">
		<table>
			<tr>
				<td>개좋아2</td>
				<td>언어 폭력</td>
				<td>개좋아2 님이 모임에서 저에게 막말을 했어요.</td>
				<td>완료</td>
				<td>2022-11-02</td>
			</tr>
		</table>
	</div>
</div>

<!-- 페이징 -->
<div class="report-list-paging">
	
</div>

<script src="/resources/js/member/mypage/reportList.js"></script>