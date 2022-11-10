<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>산책갈개</title>
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
                    <div class="content-top-button-left">산책 메이트</div>
                    <div class="content-top-button-right">💖메이트</div>
                </div>
            </section>

            <!-- content-midle section -->
            
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
                         <h2>영혼의 단짝🍀 : <span style="color:#ee862c;">${result.friendTypeName }</span> 타입</h2>
                         <div class="mbti-matching-box">
	                         <c:choose>
	                         	<c:when test="${friend[0] ne null}">
		                         	<c:forEach items="${friend}" var="ft">
			                            <div class="box">
			                                 <a onclick="dogModal(${ft.dogNo})">
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

                         <h2>영혼의 파트너💖 : <span style="color:#ee862c;">${result.partnerTypeName }</span> 타입</h2>
                         <div class="mbti-matching-box">
                             <c:choose>
	                         	<c:when test="${partner[0] ne null}">
		                         	<c:forEach items="${partner}" var="pt">
			                            <div class="box">
			                                 <a onclick="dogModal(${pt.dogNo})">
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
    
    
    <!-- 강아지 모달 -->
	<div id="dog-modal" class="modal-wrapper">
	    <div class="modal">
	        <div class="modal-header">				
	            <button id="closeModalBtn" onclick="closeDogModal();">
	            	<i class="fa-solid fa-xmark"></i>
	            </button>
	            <h3>반려견 상세 정보</h3>
	        </div>
	        <div class="modal-content">
        		<input type="hidden" id="dogNo">
	            <div class="dog-info">
	        		<input type="hidden" name="memberNo" value="${sessionScope.m.memberNo }">
	            	<div id="photo-section">
				        <div class="photo-box">
				        	<img id="dogPreview" src="/resources/img/default_dog.png">					
				        </div>
					</div>
	            </div>
	            <div id="info-section">
				    <div class="info-box">
				        <label for="dogName"><span>*</span>이름</label>
				        <input type="text" name="dogName" id="dogName" class="input">
				    </div>
				    <div class="info-box">
				        <label for="dogType"><span>*</span>품종</label>
				        <input type="text" name="" id="dogType1" class="input">
				    </div>
				    <div class="info-box">
				        <label for="dogAge"><span>*</span>나이</label>
				        <input type="text" name="dogAge" id="dogAge" class="input shortInput">살
				    </div>
				    <div class="info-box">
				        <label for="dogGender"><span>*</span>성별</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="남아"> 남아</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogGender" value="여아"> 여아</label>
				    </div>
				    <div class="info-box">
				        <label for="dogWeight"><span>*</span>몸무게 (소수점X)</label>
				        <input type="text" name="dogWeight" id="dogWeight" class="input shortInput">KG
				    </div>
				    <div class="info-box">
				        <label for="dogNeutral"><span>*</span>중성화 여부</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="O"> 했어요</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogNeutral" value="X"> 안 했어요</label>
				    </div>
				    <div class="info-box" id="mbti-box">
				        <label for="dogMbti">멍BTI</label>
				        <input type="text" name="dogMbti" id="dogMbti" class="input" readonly>
				    </div>
				    <div class="info-box">
				        <label for="dogVacc"><span>*</span>예방접종 여부</label><br>
				        <label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="O"> 했어요</label>
	      				<label style="font-size: 16px; margin:7px 0;"><input type="radio" name="dogVacc" value="X"> 안 했어요</label>
				    </div>
				    <div class="btn-box">
				        <button type="button" class="btn" id="dogBtn">쪽지보내기</button>
				    </div>
				</div>
	        </div>
	    </div>
	</div>
    
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    <script type="text/javascript">
    	$(".mbti-dogname").text("${result.dogName}");
    </script>
    <script src="/resources/js/walkmate/mbtiMatePage/mbtiResult.js"></script>
</body>
</html>