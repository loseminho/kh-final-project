<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="/resources/css/member/mypage/reportView.css">

<div class="report-view-wrap">
	<div class="report-view-content">
		<div class="report-info">
			<table>
				<!-- 신고 대상 -->
				<tr>
					<th>신고 대상</th>
					<td>일유저</td>
				</tr>
				
				<!-- 신고 유형 -->
				<tr>
					<th>신고 유형</th>
					<td>언어 폭력</td>
				</tr>
				
				<!-- 신고 날짜 -->
				<tr>
					<th>신고 날짜</th>
					<td>2022-11-02</td>
				</tr>
			</table>
		</div>
		
		<!-- 신고 상세 이유 -->
		<div class="report-reason-box">
			<p>신고 상세 이유</p>

			<div class="report-reason">
				일유저 님이 모임에서 저에게 막말을 했어요.
			</div>
		</div>
		
		<!-- 확인 버튼 -->
		<div class="report-view-close-box">
			<button id="report-view-close" type="button">확인</button>
		</div>
	</div>
</div>