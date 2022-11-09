<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!--css-->
<link rel="stylesheet" href="/resources/css/board/writeNotice.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
<!-- 헤더  -->
<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
        <div class="writeNotice-wrap">
            <div class="writeNotice-box">
                <form action="/writeNotice.do" method="post" enctype="multipart/form-data">
                    <div class="writeNotice-header">
                        <h1>공지사항 작성</h1>
                        <a href="#">공지사항</a>
                        <a href="#">관리자페이지</a>
                    </div>
                    <div class="writeForm-wrap">
                        <div class="writeNotice-content">
                            <div class="notice-input-box">
                                <label for="noticeTitle">제목</label>
                                <input type="text" name="noticeTitle" class="write-notice-form" required>
                            </div>
                            <div class="notice-input-box">
                                <label for="noticeContent">내용</label>
                                <textarea type="text" name="noticeContent" class="write-notice-form" required></textarea>
                            </div>
                            <div class="notice-input-box">
                                <label for="noticeFile">첨부파일</label>
                                <input type="file" name="noticeFile" id="noticeFile" multiple style="display:none;" onchange="loadfile(this);">
                                <input type="hidden" name="noticeWriter" id="noticeWriter" value="${sessionScope.m.memberId }">
                                <button type="button" name="noticeFile-btn" id="noticeFile-btn">첨부하기</button>
                                <div class="fileZone">
                                </div>
                            </div>
                        </div><!--writeNotice-content 끝-->
                        <div class="writeNotice-footer">
                            <div class="notice-submit-btn">
                                <button type="button" class="back-btn">취소 </button>
                                <button type="submit" class="finich-btn">등록</button>
                            </div>
                        </div><!--writeNotice-footer 끝-->
                    </div><!--writeForm-wrap-->
                </form><!--form 끝-->
            </div>
        </div>
    </content>
    <!-- footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <script src="/resources/js/board/writeNotice.js"></script>
</body>
</html>