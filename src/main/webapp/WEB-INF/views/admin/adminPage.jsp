<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<!--css-->
<link rel="stylesheet" href="/resources/css/admin/adminPage.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
	<div class="adminPage-wrap">
		<div class="adminPage-main">
			<div class="adminPage-main-header">
				<h1>관리자페이지</h1>
				<div class="adminPage-link-box">
					<a href="/writeNoticeFrm.do">공지사항 글쓰기</a> <a href="#">쪽지함</a>
				</div>
				<div class="admin-main-tab">
					<ul class="admin-tab">
						<a href="#"><li>회원등급</li></a>
						<a href="#" id="adminPageQnaAjax"><li>문의내역</li></a>
						<a href="#" id="reportPageAjax"><li>신고목록</li></a>
					</ul>
				</div>
			</div>
			<!-- adminPage-main-header 끝-->
			<div class="adminPage-content">
				<div class="search-box">
					<select name="searchType" id="searchType"
						class="search-qnaStatus-form">
						<option value="nonAnswer" selected="selected">답변대기중</option>
						<option value="answer">답변완료</option>
						<option value="qnaType">문의유형</option>
						<option value="qnaWriter">작성자</option>
					</select> <input type="text" class="adminQna-input" name="keyword"
						id="keyword">
					<button type="button" class="search-qnaStatus-btn"
						id="searchQnaStatusAjax">검색</button>
				</div>
				<!-- 상세보기 이동 form -->
				<form action="/qnaView.do" method="post" id="qnaViewFrm">
					<input type="hidden" id="qnaBoardNo" type="text" name=qnaNo
						value="">
				</form>
				<div class="adminQnaAjaxResult">
					<table class="adminPageQna-table">
						<tr class="admin-qna-tr">
							<th>글번호</th>
							<th>문의유형</th>
							<th>제목</th>
							<th>작성자</th>
							<th>문의날짜</th>
							<th>처리상태</th>
							<th></th>
						</tr>
					</table>
				</div>
				<!--ajax 결과 페이지 끝  -->
				<div class="adminQna-add-btn">
					<button id="adminQnaAjax-btn" totalCount="${totalCount }"
						currentCount="0" value="1">더보기</button>
				</div>
			</div>
			<!-- 관리자페이지 메인 문의내역 끝  -->
			<div class="reportPage-content">
				<div class="reportPageAjax-result">
					<table class="admin-report-table">
						<tr class="admin-report-tr">
							<th>신고번호</th>
							<th>신고유형</th>
							<th>신고자</th>
							<th>신고내용</th>
							<th>신고된 사람</th>
							<th>신고된 횟수</th>
							<th>신고날짜</th>
							<th>처리하기</th>
							<th></th>
						</tr>
					</table>
				</div>
				<!-- 신고내역 ajax 끝 -->
				<div class="admin-report-add">
					<button id="adminReportAjax-btn" totalCount="${totalCount }"
						currentCount="0" value="1">더보기</button>
				</div>
			</div>
			<!-- 신고내역 content 끝 -->
			<div class="userLevel-content">
				<div class="search-box">
					<form action="#">
						<select name="searchType" id="searchType" class="search-qna-form">
							<option value="0" selected="selected"></option>
							<option value="title">제목</option>
							<option value="content">내용</option>
							<option value="writer">작성자</option>
						</select> <input type="text" class="search-input" name="keyword"
							id="keyword">
						<button type="button" class="search-btn" id="searchQnaAjax">검색</button>
					</form>
				</div>
				<div class="userLevelAjax-result">
					<table class="adminPage-userLevel-table">
						<tr>
							<th scope="col">회원번호</th>
							<th scope="col">아이디</th>
							<th scope="col">닉네임</th>
							<th scope="col">가입날짜</th>
							<th scope="col">신고 누적횟수</th>
							<th scope="col"></th>
						</tr>
						<tr>
							<td>1</td>
							<td>아이디 값</td>
							<td>닉네임 값</td>
							<td>가입날짜</td>
							<td>신고 누적횟수</td>
							<td><button type="button" class="adminAnswer">등급변경</button></td>
						</tr>
					</table>
				</div>
				<!--회원등급 ajax 불러오기 끝-->
			</div>
			<!--회원 등급 불러오기-->
		</div>
	</div>
	</content>
	<!-- footer -->
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/admin/adminPage.js"></script>
</body>
</html>