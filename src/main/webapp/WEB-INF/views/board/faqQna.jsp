<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>산책갈개</title>
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--css-->
<link rel="stylesheet" href="/resources/css/board/faqqna.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<!--구글 아이콘-->
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<!-- 비밀글 아이콘 -->
<script src="https://kit.fontawesome.com/7b7a761eb5.js" crossorigin="anonymous"></script>
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
	<div class="faqqna-wrap">
		<div class="faqqna-content">
			<div class=faq-bigBox>
				<div class="tab-header">
					<ul class="faqqna-tab">
						<li><h1>FAQ</h1></li>
						<li><h1>
								<a id="allQnaAjax">문의게시판</a>
							</h1></li>
					</ul>
				</div>
				<div class="faq-content">
					<div class="faq-header">
						<p>많이 물어보시는 질문을 모아보세요</p>
						<ul class="faq-category">
							<li>전체</li>
							<li>산책 메이트 찾기</li>
							<li>사이트 이용</li>
							<li>입양</li>
							<li>회원관련</li>
							<li>기타</li>
						</ul>
					</div>
					<div class="faqList">
						<div class="faq-box">
							<div class="faq-wrap">
								<div class="question walk-question">
									<a> <span class="category-walk">산책메이트 찾기</span> <span
										class="question-title">모임관리자는 어떻게 할 수 있나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>메이트 찾기 페이지에서 모임 만들기 버튼을 통해 할 수 있습니다. 누구나 모임 관리자를 할 수 있으나, 회원으로 부터 불편사항 신고 접수시 접근제한 될 수 있습니다.</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">산책메이트 찾기</span> <span
										class="question-title">신청 받고 싶은 참가자만 받을 수 있나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>모임장은 신청한 참가자중 원하는 사람을 수락 할 수 있습니다.</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">산책메이트 찾기</span> <span
										class="question-title">강아지에게 맞는 친구와 산책하고 싶어요</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span> 반려견을 내정보에서 등록 후, 메이트 찾기에 있는 메이트 또는 메인페이지에 있는 MBTI 테스트를 통해 반려견과 잘 맞는 친구를 찾아주세요 ! </span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question sharing-question">
									<a> <span class="category-sharing">사이트 이용</span> <span
										class="question-title">채팅은 어떻게 이용하나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>같은 모임에 참여한 사람들끼리 이용이 가능합니다. </span>
									</a>
								</div>
								<div class="question sharing-question">
									<a> <span class="category-sharing">사이트 이용</span> <span
										class="question-title">쪽지는 어떻게 이용하나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>입양을 원할시에 개인끼리 쪽지를 주고 받을 수 있습니다. </span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question adoption-question">
									<a> <span class="category-adoption">입양</span> <span
										class="question-title">책임비는 어떻게 지불하나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>책임비의 경우 입양 등록자에게 지불해주시면 됩니다. 개인간의 약속이므로 신중히 고민하고 입양해주세요.  </span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question member-question">
									<a> <span class="category-member">회원관련</span> <span
										class="question-title">회원 탈퇴는 어떻게 하나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>회원 탈퇴는 언제든지 요청할 수 있으며, 요청 즉시 탈퇴됩니다. 탈퇴시 이용하신 일부 서비스의 정보는 남아있을 수 있습니다. </span>
									</a>
								</div>
								<div class="question member-question">
									<a> <span class="category-member">회원관련</span> <span
										class="question-title">비밀번호를 잊어버린경우 어떻게 확인하나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>로그인 화면 하단 비밀번호 찾기를 통해 비밀번호를 찾을 수 있습니다.</span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question etc-question">
									<a> <span class="category-etc">기타</span> <span
										class="question-title">회원 신고 후 신고 처리 절차가 궁금합니다.</span><span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>회원 신고 접수 후 신고된 회원의 신고된 횟수를 기준으로 접근제한 또는 이용정지로 처리됩니다. </span>
									</a>
								</div>
								<div class="question etc-question">
									<a> <span class="category-etc">기타</span> <span
										class="question-title">신고는 어떻게 할 수 있나요?</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>내 산책메이트 > 신청내역 또는 참가 내역 > 모임정보 > 모임 글 제목 클릭 > 모임참가자 프로필 보기에서 신고 할 수 있습니다. </span>
									</a>
								</div>
							</div>
							<div class="add-btn">
								<button>더보기</button>
							</div>
						</div>
					</div>
				</div>
				<!--faq-content 끝-->
			</div>
			<!--faq-bigBox 끝-->
			<div class="qna-box">
				<!-- 상세보기 이동 form -->
				<form action="/qnaView.do" method="post" id="qnaViewFrm">
					<input type="hidden" id="qnaBoardNo" type="text" name=qnaNo
						value="">
					<input type="hidden" id="memberNo" type="text" name=memberNo value="${sessionScope.m.memberNo }">
					<input type="hidden" id="memberLevel" type="text" name=memberLevel value="${sessionScope.m.memberLevel }">
					
				</form>
				<div class="qna-content">
					<div class="qna-header">
						<p>문의하신 내용에 대한 답변은 업무일 기준으로 2~3일 정도 소요 될 수 있습니다.</p>
						<c:if test="${not empty sessionScope.m }">
							<div class="write-btn-box">
								<button id="writeQna">1:1 문의 신청</button>
							</div>
						</c:if>
					</div>
					<div class="qna-board">
						<div class="search-box">
							<form action="#">
								<select name="searchType" id="searchType" class="search-qna-form">
									<option value="0" selected="selected">선택하세요 </option>
									<option value="title">제목</option>
									<option value="content">내용 </option>
									<option value="writer">작성자</option>
								</select> <input type="text" class="search-input"
									 name="keyword" id="keyword">
								<button type="button" class="search-btn" id="searchQnaAjax">검색</button>
							</form>
						</div>
						<div id="qnaAjaxResult">
							<table class="qna-table">
								<tr class="qna-tr">
									<th>글번호</th>
									<th>문의유형 </th>
									<th>제목 </th>
									<th>작성자 </th>
									<th>처리상태 </th>
									<th>문의날짜 </th>
									<th>조회수</th>
								</tr>
							</table>
						</div>
						<div class="qna-add-btn">
						<button id="qnaAjaxAdd-btn" totalCount="${totalCount }"currentCount="0" value="1">더보기</button>
						</div>
					</div>
				</div>
			</div>
			<!--qna-box 끝-->
		</div>
		<!--faqqna-content 끝-->
	</div>
	<!--faqqna-wrap 끝--> </content>
	<!--컨텐츠 끝-->

	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/board/faqqna.js"></script>
</body>
</html>