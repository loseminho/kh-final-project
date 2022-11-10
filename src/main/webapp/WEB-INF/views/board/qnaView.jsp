<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상세보기 </title>
<!--fonts-->
    <link rel="stylesheet" href="/resources/css/gmarket.css">
    <!--css-->
    <link rel="stylesheet" href="/resources/css/board/qnaView.css">
    <!--jQuery-->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!--구글아이콘-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<jsp:include page="/WEB-INF/views/common/header.jsp" />
    <content>
        <div class="qnaView-wrap">
            <div class="qnaView-box">
                <div class="qnaView-header">
                    <h1>문의내역</h1>
                    <ul>
                    	<li><a href="/faqQnaBoardFrm.do">뒤로가기 </a></li>
                    <c:if test="${sessionScope.m.memberId eq qb.qnaWriter }">
                        <li><a href="/qnaBoardUpdateFrm.do?qnaNo=${qb.qnaNo }">수정하기</a></li>
                        <li><a href="/qnaBoardDelete.do?qnaNo=${qb.qnaNo }">삭제하기</a></li>
                    </ul>
                    </c:if>
                </div>
                <table class="qnaView-content">
                        <tr>
                            <th>작성자</th>
                            <td>${qb.qnaWriter }</td>
                            <th>작성일</th>
                            <td>${qb.qnaDate }</td>
                            <th>조회수</th>
                            <td>${qb.qnaViews }</td>
                        </tr>
                    <tr>
                        <th>제목</th>
                        <td colspan="9">${qb.qnaTitle }</td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <c:forEach items="${qb.fileList}" var="qf">
                        <td>
                        <img src="/img/file.png" width="16px">
                        <a href="/qnaFileDown.do?qnaNo=${qb.qnaNo }">${qf.filename}</a>
                        </td>
                        </c:forEach>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colspan="9">${qb.qnaContent}</td>
                    </tr>
                </table>
                <!--댓글 등록-->
                <div class="inputComment-box">
                    <form action="/insertQnaComment.do" method="post">
                        <ul class="comment-box">
                            <li><span class="material-symbols-outlined">pets</span></li>
                            <li>
                                <input type="hidden" name="qcommentWriter" value="${sessionScope.m.memberId}">
                                <input type="hidden" name="qnaNo" value="${qb.qnaNo }">
                                <textarea class="qcommentContent" name="qcommentContent"></textarea>
                            </li>
                            <li>
                                <button type="submit" class="addComment">댓글쓰기</button>
                            </li>
                        </ul>
                    </form> 
                </div><!--inputComment-box 끝-->
                <!--댓글 보기-->
                <c:forEach items="${list }" var="qc">
                <input type="hidden" id="test1" value="${qc.qcommentNo }">
                <div class="inputComment-box view" id="qnaCommentList">
                    <ul class="comment-box-view">
                        <li><span class="material-symbols-outlined">pets</span></li>
                        <li>
                            <p class="comment-info">
                                <span>${qc.qcommentWriter}</span><span>${qc.qcommentTime }</span>
                            </p>
                            <p class="comment-content">${qc.qcommentContent }</p>
                            <!--display none 수정 클릭시에만 보임-->
                            <textarea style="display: none;" class="comment-modify" name="qcommentContent"></textarea>
                            <p class="comment-link">
                                <!--로그인한사람에게만 수정 부여-->
                                <c:if test="${sessionScope.m.memberId eq qc.qcommentWriter }">
                                <!-- <a href="/updateQnaComment.do?qcommentNo=${qc.qcommentNo }">수정</a>-->
                                <a href="javascript:void(0)" onclick="modifyQnaComment(this,${qc.qcommentNo }, ${qb.qnaNo });">수정</a>
                                
                                <!--관리자에게만 삭제권한 부여-->
                                <!-- <a href="/deleteQnaComment.do?qcommentNo=${qc.qcommentNo }">삭제</a>-->
                                <a href="javascript:void(0)" onclick="deleteQnaComment(this,${qc.qcommentNo }, ${qb.qnaNo });">삭제</a>
                                </c:if>
                            </p>
                        </li>
                    </ul>
            </div><!--qnaView-box 끝-->
                </c:forEach>
        </div><!--qnaView-wrap 끝-->
    </content>
    <script src="/resources/js/board/qnaView.js"></script>
</body>
</html>