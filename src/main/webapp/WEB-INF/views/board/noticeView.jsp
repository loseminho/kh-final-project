<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항 상세보기 </title>
<!--css-->
<link rel="stylesheet" href="/resources/css/board/noticeView.css">
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
                    <h1>${n.noticeTitle}</h1>
                    <ul>
                        <!--관리자에게만 보임-->
                        <c:if test="${sessionScope.m.memberLevel == 2 }">
                        <li><a href="#">수정하기</a></li>
                        <li><a href="/noticeDelete.do?noticeNo=${n.noticeNo }">삭제하기</a></li>
                        </c:if>
                    </ul>
                </div>
                <div class="noticeView-content">
                    <table class="notice-table">
                        <tr>
                            <th>작성일</th>
                            <th>${n.noticeDate}</th>
                            <th>조회수</th>
                            <th>${n.noticeViews}</th>
                        </tr>
                        <tr>
                            <td>${n.noticeContent}</td>
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