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
    <content>
        <div class="qnaView-wrap">
            <div class="qnaView-box">
                <div class="qnaView-header">
                    <h1>문의내역</h1>
                    <ul>
                        <li><a href="#">삭제하기</a></li>
                        <li><a href="#">수정하기</a></li>
                    </ul>
                </div>
                <table class="qnaView-content">
                        <tr>
                            <th>작성자</th>
                            <td>${qb.qnaNo }</td>
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
                        <td>${qf.filename}</td>
                        </c:forEach>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colspan="9">${qb.qnaContent}</td>
                    </tr>
                </table>
                <!--댓글 등록-->
                <div class="inputComment-box">
                    <form action="#" method="post">
                        <ul class="comment-box">
                            <li><span class="material-symbols-outlined">pets</span></li>
                            <li>
                                <input type="hidden" name="qCommentWriter" value="#멤버아이디">
                                <input type="hidden" name="qnaNo" value="#게시판번호">
                                <input type="hidden" name="qCommentRef" value="0">
                                <textarea class="qCommentContent" name="qCommentContent"></textarea>
                            </li>
                            <li>
                                <button type="submit" class="addComment">댓글쓰기</button>
                            </li>
                        </ul>
                    </form>
                </div><!--inputComment-box 끝-->
                <!--댓글 보기-->
                <div class="inputComment-box view">
                    <ul class="comment-box-view">
                        <li><span class="material-symbols-outlined">pets</span></li>
                        <li>
                            <p class="comment-info">
                                <span>관리자</span><span>댓글 작성날짜</span>
                            </p>
                            <p class="comment-content">댓글내용</p>
                            <!--display none 수정 클릭시에만 보임-->
                            <textarea style="display: none;"></textarea>
                            <p class="comment-link">
                                <!--로그인한사람에게만 수정 부여-->
                                <a href="#">수정</a>
                                <!--관리자에게만 삭제권한 부여-->
                                <a href="#">삭제</a>
                                <a href="#">답글달기</a>
                            </p>
                        </li>
                    </ul>
            </div><!--qnaView-box 끝-->
        </div><!--qnaView-wrap 끝-->
    </content>
</body>
</html>