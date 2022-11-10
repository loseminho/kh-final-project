<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>메이트 찾기</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="/resources/css/walkmate/mbtiMatePage/mbtiMate.css">
    <link rel="styleSheet" href="/resources/css/gmarket.css">
    <link rel="icon" href="/resources/img/favicon.ico" type="image/x-icon" sizes="16x16">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>
<body>
    <!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
	
	<!-- Wrapper -->
    <div class="page-content">

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
                <div class="content-middle-title">멍BTI 테스트</div>
            </section>
            
            <!-- content-bottom section -->
            <section id="content-bottom">
            	<div id="content-box">
            		<div id="mbti-result">
	                    <div class="mbti-result-box">
	                        <h3>우리 강아지는</h3>
						    <h2 class="mbti-result-title">${result.mbtiTitle }</h2>
						    <h2 class="mbti-result-title" style="color:#c77be6;">${result.mbtiResultName }</h2>
	                    </div>
	                    <div class="mbti-result-box">
	                        <div class="mbti-result-img">
	                            <img src="/resources/img/mbti/${result.mbtiResult }.png">
	                        </div>
	                    </div>
	                    <div class="mbti-result-box">
	                        <p><i class="fa-solid fa-check"></i> ${result.mbtiMent1 }</p>
	                        <p><i class="fa-solid fa-check"></i> ${result.mbtiMent2 }</p>
	                        <p><i class="fa-solid fa-check"></i> ${result.mbtiMent3 }</p>
	                        <c:if test="${result.mbtiMent4 ne null}">
		                        <p><i class="fa-solid fa-check"></i> ${result.mbtiMent4 }</p>
	                        </c:if>
	                        <p><i class="fa-solid fa-check"></i> ${result.mbtiStory }</p>
	                    </div>
                     </div>
	                            
                     <div id="mbti-matching">
                         <h3>영혼의 단짝🍀 : <span style="color:#ee862c;">${result.friendTypeName }</span> 타입</h3>
                         <div class="mbti-matching-box">
	                         <c:choose>
	                         	<c:when test="${friend[0] ne null}">
		                         	<c:forEach items="${friend}" var="ft">
			                            <div class="box">
			                                 <a onclick="">
			                                     <div class="photo">
				                                     <c:choose>
										            	<c:when test="${ft.dogPhoto eq null}">
											                <img src="/resources/img/default_dog.png">
										            	</c:when>
										            	<c:otherwise>
											                <img src="/resources/upload/dog/${ft.dogPhoto }">
										            	</c:otherwise>
										            </c:choose>	
			                                     </div>
			                                     <h3>${ft.dogName }</h3>
			                                     <input type="hidden" name="memberNo" value="${ft.memberNo }">
			                                 </a>
			                            </div>
		                            </c:forEach>
	                            </c:when>
	                            <c:otherwise>
	                            	<h2 style="margin:30px 0">해당하는 타입의 반려견이 없습니다.</h2>
	                            </c:otherwise>
	                         </c:choose>
                         </div>

                         <h3>영혼의 파트너💖 : <span style="color:#ee862c;">${result.partnerTypeName }</span> 타입</h3>
                         <div class="mbti-matching-box">
                             <c:choose>
	                         	<c:when test="${partner[0] ne null}">
		                         	<c:forEach items="${partner}" var="pt">
			                            <div class="box">
			                                 <a onclick="">
			                                     <div class="photo">
			                                         <c:choose>
										            	<c:when test="${pt.dogPhoto eq null}">
											                <img src="/resources/img/default_dog.png">
										            	</c:when>
										            	<c:otherwise>
											                <img src="/resources/upload/dog/${pt.dogPhoto }">
										            	</c:otherwise>
										            </c:choose>	
			                                     </div>
			                                     <h3>${pt.dogName }</h3>
			                                     <input type="hidden" name="memberNo" value="${pt.memberNo }">
			                                 </a>
			                            </div>
		                            </c:forEach>
	                            </c:when>
	                            <c:otherwise>
	                            	<h2 style="margin:30px 0">해당하는 타입의 반려견이 없습니다.</h2>
	                            </c:otherwise>
	                         </c:choose>
                         </div>
                     </div>
            	</div>
            </section>
            <!-- End content-bottom section -->
            <a href="/mbtiMateMain.do" class="btn">검사 다시 하기</a>
            <a href="/" class="btn">메인으로 가기</a>
        </div>
        <!-- End content -->
    </div>
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    
    <script type="text/javascript">
    	$(".mbti-dogname").text("${result.dogName}");
    </script>
</body>
</html>