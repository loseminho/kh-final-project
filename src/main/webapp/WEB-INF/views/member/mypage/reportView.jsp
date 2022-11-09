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
					<td></td>
				</tr>
				
				<!-- 신고 유형 -->
				<tr>
					<th>신고 유형</th>
					<td></td>
				</tr>
				
				<!-- 신고 날짜 -->
				<tr>
					<th>신고 날짜</th>
					<td></td>
				</tr>
			</table>
		</div>
		
		<!-- 신고 상세 이유 -->
		<div class="report-reason-box">
			<p>신고 상세 이유</p>

			<div id="report-reason"></div>
		</div>
		
		<!-- 확인 버튼 -->
		<div class="report-view-close-box">
			<button id="report-view-close" type="button">확인</button>
		</div>
	</div>
</div>