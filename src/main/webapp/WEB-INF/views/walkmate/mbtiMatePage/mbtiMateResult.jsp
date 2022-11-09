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
                <div class="content-middle-title">반려견 성격 유형 테스트</div>
            </section>
            
            <!-- content-bottom section -->
            <section id="content-bottom">
            	<div id="content-box">
            		<div id="mbti-result">
	                    <div class="mbti-result-box">
	                        <h3>우리 강아지는</h3>
						    <h2 class="mbti-result-title">'나만의 예술을 할 거야...'</h2>
						    <h2 class="mbti-result-title">${result.mbtiResultName }</h2>
	                    </div>
	                    <div class="mbti-result-box">
	                        <div class="mbti-result-img">
	                            <img src="/resources/img/mbti/${result.mbtiResult }.png">
	                        </div>
	                    </div>
	                    <div class="mbti-result-box">
	                        <p><i class="fa-solid fa-check"></i> 공상에 빠져있는 몽상가. 교실 한 구석에서 자신만의 작품 구상 중</p>
	                        <p><i class="fa-solid fa-check"></i> 소리 없이 등장하고, 말 시키면 3초 늦게 속삭이듯이 대답함</p>
	                        <p><i class="fa-solid fa-check"></i> 차분한 반항아. 얌전하고 조용한데 잘 보면 교복, 머리, 숙제 뭐 하나 규정에 맞는 게 없음</p>
	                        <p><i class="fa-solid fa-check"></i> 차분한 반항아. 얌전하고 조용한데 잘 보면 교복, 머리, 숙제 뭐 하나 규정에 맞는 게 없음</p>
	                        <p><i class="fa-solid fa-check"></i> 학교에 다녔다면 남들과는 다른 길을 갔을 <span class="mbti-dogname">${result.dogName }</span>, 평소에도 별난 강아지가 아닌가요? 차분한 성격이지만 가족들은 모르는 자신만의 세계에 빠져있습니다. 훈련을 시키다 현타가 온 경험이 있다고요? 뭐든지 한 발씩 늦고, 익숙한 곳이 아니면 움츠러드는 소극적인 강아지 <span class="mbti-dogname">${result.dogName }</span>. 아직 <span class="mbti-dogname">${result.dogName }</span>에게는 세상이 무섭고 이해할 수 없는 것이 많은 곳이에요. 참을성과 자비로움을 갖고 <span>${result.dogName }</span>의 세상 적응기를 도와줄 가이드, 바로 당신이 필요하답니다.</p>
	                    </div>
                     </div>
	                            
                     <div id="mbti-matching">
                         <h3>영혼의 단짝🍀 : <span>어느 날 사라지는 자퇴생</span> 타입</h3>
                         <div class="mbti-matching-box">
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                         </div>

                         <h3>영혼의 파트너💖 : <span>선생님들의 원픽, 사기캐 반장</span> 타입</h3>
                         <div class="mbti-matching-box">
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                             <div class="box">
                                 <a onclick="">
                                     <div class="photo">
                                         <img src="/resources/img/default_dog.png">
                                     </div>
                                     <h3>봉구</h3>
                                 </a>
                             </div>
                         </div>
                     </div>
            	</div>
            </section>
            <!-- End content-bottom section -->
            
        </div>
        <!-- End content -->
    </div>
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
</body>
</html>