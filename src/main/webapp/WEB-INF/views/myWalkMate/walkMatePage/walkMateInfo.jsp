<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMateInfo.css">

<div class="wm-info-content">
	<div class="wm-info-header">
		<h1>모임 정보</h1>
		<h2>${w.wmTitle }</h2>
		<h3>${w.wmTag }</h3>
	</div>

	<div class="wm-info-main">
		<table>
			<tr>
				<th>모임장</th>
				<td>${w.leaderNickname }</td>
			</tr>
			<tr>
				<th>모임 일시</th>
				<td>${w.wmMeetTime }</td>
			</tr>
			<tr>
				<th>모임 장소</th>
				<td>${w.wmAddr }</td>
			</tr>
		</table>
	</div>
	
	<div class="wm-info-text">
		${w.wmContent }
	</div>
</div>