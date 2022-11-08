<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<!--css-->
<link rel="stylesheet" href="/resources/css/noticeView.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
<!-- 헤더  -->
<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
        <div class="noticeView-wrap">
            <div class="noticeView-box">
                <div class="noticeView-header">
                    <h1>제목값</h1>
                    <ul>
                        <!--관리자에게만 보임-->
                        <li><a>수정하기</a></li>
                        <li><a>삭제하기</a></li>
                    </ul>
                </div>
                <div class="noticeView-content">
                    <table class="notice-table">
                        <tr>
                            <th>작성일</th>
                            <th>작성일 값</th>
                            <th>조회수</th>
                            <th>조회수 값</th>
                        </tr>
                        <tr>
                            <td>내용값</td>
                        </tr>
                    </table>
                </div>
                <div class="noticeView-footer">
                    <button type="button">목록</button>
                </div><!--noticeView-footer끝-->
            </div><!--noticeView-box 끝-->
        </div>
    </content>
    <!-- footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>