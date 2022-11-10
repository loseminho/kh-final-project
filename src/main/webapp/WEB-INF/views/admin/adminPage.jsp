<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자페이지 </title>
<!--css-->
<link rel="stylesheet" href="/resources/css/admin/adminPage.css">
<!--fonts-->
<link rel="stylesheet" href="/resources/css/gmarket.css">
<!--jQuery-->
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
<content>
        <div class="adminPage-wrap">
            <div class="adminPage-main">
                <div class="adminPage-main-header">
                    <h1>관리자페이지</h1>
                    <div class="adminPage-link-box">
                        <a href="#">공지사항 글쓰기</a>
                        <a href="#">쪽지함</a>
                    </div>
                    <div class="admin-main-tab">
                        <ul class="admin-tab">
                            <a href="#"><li>회원등급</li></a>
                            <a href="#"><li>문의내역</li></a>
                            <a href="#"><li>신고목록</li></a>
                        </ul>
                    </div>
                </div><!-- adminPage-main-header 끝-->
                <div class="adminPage-content">
                    <div class="adminPageQnaAjax">
                        <table class="adminPageQna-table">
                            <tr>
                                <th scope="col">글번호</th>
                                <th scope="col">문의유형</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">문의날짜</th>
                                <th scope="col">처리상태</th>
                                <th scope="col">
                                </th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>산책메이트</td>
                                <td>제목테스트</td>
                                <td>us**01</td>
                                <td>문의날짜</td>
                                <td>답변 대기중</td>
                                <td><button type="button" class="adminAnswer">답변하기</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </content>
</body>
</html>