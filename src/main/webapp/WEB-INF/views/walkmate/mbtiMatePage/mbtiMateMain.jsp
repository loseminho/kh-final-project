<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>메이트 찾기</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="/resources/css/walkmate/mbtiMatePage/mbtiMate.css">
    <link rel="styleSheet" href="/resources/css/gmarket.css">
</head>
<body>
    <!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	
	<!-- Wrapper -->
    <div class="wrapper">

        <!-- content -->
        <div class="walk-mate-content">
            <section id="content-top">
                <div class="content-top-button">
                    <div class="content-top-button-left">산책 찾기</div>
                    <div class="content-top-button-right">💖메이트 찾기</div>
                </div>
            </section>

            <!-- content-midle section -->
            <section id="content-middle">
                <div class="content-middle-title">반려견 성격 유형 테스트</div>
            </section>
            
        </div>
        <!-- End content -->
    </div>
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    <script src="/resources/js/walkmate/mbtiMatePage/mbtiMate.js"></script>
</body>
</html>