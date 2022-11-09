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
            		<c:choose>
            			<c:when test="${sessionScope.m eq null }">
            				<div id="noLogin">
            					<h1>로그인이 필요한 기능입니다.</h1>
            				</div>
            			</c:when>
            			<c:otherwise>
           					<div id="mbtiMainPhoto">
            					<img src="/resources/img/mbti/background.png">
           					</div>
           					<div id="chooseDog">
           						<c:choose>
		           					<c:when test="${sessionScope.m.dogList[0] ne null}">
		           						<h3>반려견을 선택해주세요.</h3><br><br>
		           						<c:forEach items="${sessionScope.m.dogList }" var="myDog">
		           							<div class="box">
										        <a onclick="mbtiStart('${myDog.dogNo}', '${myDog.dogName}');">
										            <div class="photo">
											            <c:choose>
											            	<c:when test="${myDog.dogPhoto eq null}">
												                <img src="/resources/img/default_dog.png">
											            	</c:when>
											            	<c:otherwise>
												                <img src="/resources/upload/dog/${myDog.dogPhoto }">
											            	</c:otherwise>
											            </c:choose>	
										            </div>
										            <h3>
										            	${myDog.dogName }
										            </h3>
									            	<span>
									            		<c:choose>
											            	<c:when test="${myDog.dogMbti eq null}">
												                	(검사결과없음)
											            	</c:when>
											            	<c:otherwise>
												                (${myDog.dogMbtiName })
											            	</c:otherwise>
											            </c:choose>	
									            	</span>
										        </a>
										    </div>
		           						</c:forEach>
		           					</c:when>
									<c:otherwise>
										<br>
										<p>등록된 반려견이 없습니다.</p>
									</c:otherwise>
								</c:choose>
           					</div>
           					<div class="mbti-box" style="display:none;">
	           					<input type="hidden" name="dogNo" value="">
           						<h3 id="mbti-title">Q1</h3>
           						<p id="mbti-count">1 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img1.png">
           						</div>
           						<h3 id="mbti-que">
           							<span class="mbti-dogname"></span>를 처음 본<br><span class="mbti-nickname">${sessionScope.m.memberNickname }</span>의 친구는 이렇게 말한다.
           						</h3>
           						<button type="button" class="mbti-btn">
           							얘는 왜 이렇게 사람 같아?
           						</button>
           						<button type="button" class="mbti-btn">
           							어우 야;; 정신없어;;;
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q2</h3>
           						<p id="mbti-count">2 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img2.png">
           						</div>
           						<h3 id="mbti-que">
           							집에 있을 때<br>
           							<span class="mbti-dogname"></span>(은)는 _____이다.
           						</h3>
           						<button type="button" class="mbti-btn">
           							<span class="mbti-nickname">${sessionScope.m.memberNickname }</span> 무릎 위는 <span class="mbti-dogname"></span>의 자리!<br>
           							떨어지지 않는 찰떡
           						</button>
           						<button type="button" class="mbti-btn">
           							<span class="mbti-dogname"></span>만의 스케줄로 바빠!<br>
           							마이웨이
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q3</h3>
           						<p id="mbti-count">3 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img3.png">
           						</div>
           						<h3 id="mbti-que">
           							처음 간 애견카페에서,<br>
           							<span class="mbti-dogname"></span>(은)는 어떤 타입?
           						</h3>
           						<button type="button" class="mbti-btn">
           							새로운 친구들 반가워!<br>
           							동네방네 인사하고 냄새 맡고 다니는 인싸!
           						</button>
           						<button type="button" class="mbti-btn">
           							아이구.. 부담스러워...<br>
           							쭈뼛쭈뼛 주변을 살피는 아싸
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q4</h3>
           						<p id="mbti-count">4 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img4.png">
           						</div>
           						<h3 id="mbti-que">
           							쓰레기통을 엎어버린 <span class="mbti-dogname"></span>에게,<br>
           							'이리와!'라고 호통쳤을 때의 반응은?
           						</h3>
           						<button type="button" class="mbti-btn">
           							본인의 운명을 직감한 <span class="mbti-dogname"></span>.<br>
           							눈치를 보기 시작한다.
           						</button>
           						<button type="button" class="mbti-btn">
           							칠렐레팔렐레~<br>
           							아무것도 모른다는 듯 순진한 얼굴로 뛰어온다.
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q5</h3>
           						<p id="mbti-count">5 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img5.png">
           						</div>
           						<h3 id="mbti-que">
           							'집순이/집돌이'는<br>
           							<span class="mbti-dogname"></span>를 수식하는 말이다.
           						</h3>
           						<button type="button" class="mbti-btn">
           							YES!
           						</button>
           						<button type="button" class="mbti-btn">
           							NO~
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q6</h3>
           						<p id="mbti-count">6 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img6.png">
           						</div>
           						<h3 id="mbti-que">
           							<span class="mbti-dogname"></span>와 산책하는 중.<br>
           							오늘은 새로운 길로 가볼까?<br>
           							처음 보는 루트에 <span class="mbti-dogname"></span>(은)는?
           						</h3>
           						<button type="button" class="mbti-btn">
           							두 눈은 반짝반짝, 입은 활짝.<br>
           							그렇지만 <span class="mbti-nickname">${sessionScope.m.memberNickname }</span> 옆에서 발을 맞춰 걷는다.
           						</button>
           						<button type="button" class="mbti-btn">
           							궁금한 게 너무 많아!<br>
           							달려 나가서 탐색하기 바쁘다. <span class="mbti-dogname"></span>, 목줄 좀 그만 잡아당겨!
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q7</h3>
           						<p id="mbti-count">7 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img7.png">
           						</div>
           						<h3 id="mbti-que">
           							택배가 오면,<br>
           							<span class="mbti-dogname"></span>의 반응은?
           						</h3>
           						<button type="button" class="mbti-btn">
           							택배 아저씨가 아빠인 줄?<br>
           							꼬리 흔들고 애정뿜뿜 난리가 났다.
           						</button>
           						<button type="button" class="mbti-btn">
           							왈왈왈왈와로아로 왈와라랄ㄹ!!
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q8</h3>
           						<p id="mbti-count">8 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img8.png">
           						</div>
           						<h3 id="mbti-que">
           							<span class="mbti-dogname"></span>(은)는 우리 집에서 <br>
           							자기 서열을 이렇게 생각하는 것 같다.
           						</h3>
           						<button type="button" class="mbti-btn">
           							당연히 내가 막내지!<br>
           							나는 우리 집 귀염둥이~
           						</button>
           						<button type="button" class="mbti-btn">
           							당연히 막내 on top이지!<br>
           							집사들이여 간식을 바쳐라!
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q9</h3>
           						<p id="mbti-count">9 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img9.png">
           						</div>
           						<h3 id="mbti-que">
           							등산을 하고 집에 돌아왔다.<br>
           							잔뜩 지친 <span class="mbti-dogname"></span>에게 장난감 공을 던진다면?
           						</h3>
           						<button type="button" class="mbti-btn">
           							대충 관심있는 척하다가 이내 다시 눕는다.
           						</button>
           						<button type="button" class="mbti-btn">
           							눈을 빛내며 벌떡 일어나 공을 쫓는다.
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q10</h3>
           						<p id="mbti-count">10 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img10.png">
           						</div>
           						<h3 id="mbti-que">
           							<span class="mbti-dogname"></span>가 모닝톡을 보낸다면,<br>
           							뭐라고 보냈을까?
           						</h3>
           						<button type="button" class="mbti-btn">
           							얼른 일어나서 나랑 놀아주세요~
           						</button>
           						<button type="button" class="mbti-btn">
           							인간아 일어나라. 간식을 내놔라.
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q11</h3>
           						<p id="mbti-count">11 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img11.png">
           						</div>
           						<h3 id="mbti-que">
           							산책하다 이웃과 마주친 <span class="mbti-dogname"></span>,<br>
           							귀엽다며 손을 뻗는 이웃에게<br>
           							<span class="mbti-nickname">${sessionScope.m.memberNickname }</span>가 할 말은?
           						</h3>
           						<button type="button" class="mbti-btn">
           							우리 <span class="mbti-dogname"></span> 너무 귀엽죠?ㅎㅎ
           						</button>
           						<button type="button" class="mbti-btn">
           							<span class="mbti-dogname"></span>가 무서워해요! 손 내밀지 말아주세요~
           						</button>
           					</div>
           					<div class="mbti-box" style="display:none;">
           						<h3 id="mbti-title">Q12</h3>
           						<p id="mbti-count">12 / 12</p>
           						<div id="mbti-img">
	           						<img src="/resources/img/mbti/img12.png">
           						</div>
           						<h3 id="mbti-que">
           							오늘은 새로운 훈련을 시켜봐야겠다.<br>
           							간식을 들고 '<span class="mbti-dogname"></span>, 앉아!'라고 말하면<br>
           							<span class="mbti-dogname"></span>의 반응은?
           						</h3>
           						<button type="button" class="mbti-btn">
           							두 눈을 반짝이며 앉는다.
           						</button>
           						<button type="button" class="mbti-btn">
           							훈련이고 뭐고, 간식만 보이는 <span class="mbti-dogname"></span>!
           						</button>
           					</div>
            			</c:otherwise>
            		</c:choose>
            	</div>
            </section>
            <!-- End content-bottom section -->
            
        </div>
        <!-- End content -->
    </div>
    
    <!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    <script src="/resources/js/walkmate/mbtiMatePage/mbtiMate.js"></script>
</body>
</html>