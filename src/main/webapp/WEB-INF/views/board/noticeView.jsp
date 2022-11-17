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
                        <li><a href="/noticeUpdateFrm.do?noticeNo=${n.noticeNo }">수정하기</a></li>
                        <li><a href="/noticeDelete.do?noticeNo=${n.noticeNo }">삭제하기</a></li>
                        </c:if>
                    </ul>
                </div>
                <div class="noticeView-content">
                    <table class="notice-table">
                        <tr>
                            <th>작성일</th>
                            <th>${n.noticeDate}</th>
                            <th></th>
                            <th>조회수</th>
                            <th>${n.noticeViews}</th>
                        </tr>
                        <tr>
                        	<th>첨부파일 </th>
                        	<c:forEach items="${n.fileList}" var="nf">
                        	<td>
                        	<img src="/img/file.png" width="16px">
                        	<a href="/noticeFileDown.do?fileNo=${nf.fileNo }">${nf.filename} </a></td>
                        	</c:forEach>
                        </tr>
                        <tr>
                            <td colspan="5">${n.noticeContent}</td>
                        </tr>
                    </table>
                </div>
                <div class="noticeView-footer">
                    <button type="button" class="back-noticeList">목록</button>
                </div><!--noticeView-footer끝-->
            </div><!--noticeView-box 끝-->
        </div>
    </content>
    <!-- footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <script type="text/javascript">
    	$(".back-noticeList").on("click",function(){
    		location.href="/notice.do?reqPage=1";
    	});
    </script>
</body>
</html>