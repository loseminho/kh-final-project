<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ</title>
    <!--fonts-->
    <link rel="stylesheet" href="/resources/css/gmarket.css">
    <!--css-->
    <link rel="stylesheet" href="/resources/css/board/dogMarket.css">
    <!--jQuery-->       
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!--구글 아이콘-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<!-- 헤더  -->
<jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <content>
        <div class="dogMarket-wrap">
            <div class="dogMarket-content">
                <div class=faq-box>
                    <div class="tab-header">
                        <ul class="dogMarket-tab">
                            <li><h1>입양받기</h1></li>
                            <li><h1><a>입양보내기</a></h1></li>
                        </ul>
                    </div>
                    <div class="faq-content">
                        <div class="dogMarket-header">
                            <p>-너 나랑 같이 살래?-</p>
                            <ul class="dogMarket-category">
                                <li>전체</li>
                                <li>우리동네 산책 찾기</li>
                                <li>애견 용품 나눔</li>
                                <li>입양</li>
                                <li>회원관련</li>
                                <li>기타</li>
                            </ul>
                        </div>
                        <div class="faqList">
                            <div class="faq-box">
                                <div class="faq-wrap" id="walk-question">

                                <div class="add-btn">
                                    <button>더보기</button>
                                </div>
                            </div>
                        </div>
                    </div><!--faq-content 끝-->
                </div><!--faq-box 끝-->
                <div class="saleDog-box">
                    <div class="saleDog-content">
                        <div class="dogMarket-header">
                            <p>-너 나랑 같이 살래?-</p>
                            <p>-너 나랑 같이 살래?-</p>
                            <p>-너 나랑 같이 살래?-</p>
                            <div class="write-btn-box">
                                <button> 1:1 문의 신청</button>
                            </div>
                        </div>
                        <div class="saleDog-board">
                            <table class="saleDog-table">
                                <tr>
                                    <th>글번호</th>
                                    <th>문의유형</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>처리상태</th>
                                    <th>문의날짜</th>
                                    <th>조회수</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div><!--qna-box 끝-->
            </div><!--faqqna-content 끝-->
        </div><!--faqqna-wrap 끝-->
    </content><!--컨텐츠 끝-->
    <script src="/resources/js/board/saleDog.js"></script>
</body>
</html>