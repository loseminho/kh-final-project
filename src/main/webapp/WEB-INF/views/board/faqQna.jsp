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
							<li>애견 용품 나눔</li>
							<li>입양</li>
							<li>회원관련</li>
							<li>기타</li>
						</ul>
					</div>
					<div class="faqList">
						<div class="faq-box">
							<div class="faq-wrap">
								<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">첫번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>첫번째 답변</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">두번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>두번째 답변</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">여덟번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>여덟번째 답변</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">아홉번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>아홉번째 답변</span>
									</a>
								</div>
								<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">열번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>열번째 답변</span>
									</a>
								</div>
									<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">열한번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>열한번째 답변</span>
									</a>
								</div>
									<div class="question walk-question">
									<a> <span class="category-walk">우리동네 산책찾기</span> <span
										class="question-title">열두번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>열두번째 답변</span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question sharing-question">
									<a> <span class="category-sharing">애견용품 나눔</span> <span
										class="question-title">세번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>세번째 답변</span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question adoption-question">
									<a> <span class="category-adoption">입양</span> <span
										class="question-title">네번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>네번째 답변</span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question member-question">
									<a> <span class="category-member">회원</span> <span
										class="question-title">다섯번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>다섯번째 답변</span>
									</a>
								</div>
							</div>
							<div class="faq-wrap">
								<div class="question etc-question">
									<a> <span class="category-etc">기타</span> <span
										class="question-title">여섯번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>여섯번째 답변</span>
									</a>
								</div>
								<div class="question etc-question">
									<a> <span class="category-etc">기타</span> <span
										class="question-title">일곱번째 질문</span> <span
										class="material-symbols-outlined">expand_more</span>
									</a>
								</div>
								<div class="answer">
									<a> <span>일곱번째 답변</span>
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