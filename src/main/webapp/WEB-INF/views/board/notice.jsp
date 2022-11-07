<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>공지사항</title>
<!--css-->
<link rel="stylesheet" href="/resources/css/notice.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	<content>
        <div class="notice-wrap">
            <div class="notice-content">
                <div class="notice-header">
                    <h1>공지사항</h1>
                    <div class="notice-write-box">
                        <button type="button">글쓰기</button>
                    </div>
                </div>
                <div class="notice-list">
                    <table class="notice-table">
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                        <c:forEach items="${list}" vat="n" varStatus="i">
                            <tr>
                                <td>글번호 데이터</td>
                                <td>제목 데이터</td>
                                <td>등록일 데이터</td>
                                <td>조회수 데이터</td>
                            </tr>
                        </c:forEach>
                    </table>
                    <div id="pageNavi">${pageNavi}</div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                </div>
            </div>
        </div><!--notice-wrap 끝-->
    </content>
    <!--footer-->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
</html>