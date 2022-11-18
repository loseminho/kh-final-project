<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>산책갈개</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="/resources/css/walkmate/walk_mate_content.css">
    <link rel="styleSheet" href="/resources/css/gmarket.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
    
    <!-- 메인댓글용 삭제 -->
    <form action="/deleteMainComment.do" method="post">
    	<input type="hidden" name="wmcGroup" id="thankWmcGroup" value="">
    	<input type="hidden" name="wmNo" id="thankWmNo" value="">
    	<input type="submit" class="thankBtn">
    </form>
    <!-- 대댓글용 삭제 -->
    <form action="/deleteSubComment.do" method="post">
    	<input type="hidden" name="wmcNo" id="thankSubWmNo" value="">
    	<input type="submit" class="thankSubBtn">
    </form>
    <!-- 글삭제 -->
    <form action="/deleteWm.do" method="post">
    	<input type="hidden" name="wmNo" id="thankMainWmNo" value="">
    	<input type="submit" class="thankMainBtn">
    </form>
    
    <input type="hidden" id="login-memberId" value="${sessionScope.m.memberId}">
    <input type="hidden" id="login-memberNo" value="${sessionScope.m.memberNo}">
    <input type="hidden" id="login-memberNickname" value="${sessionScope.m.memberNickname}">
    <input type="hidden" id="login-level" value="${sessionScope.m.memberLevel }">
    <input type="hidden" id="login-memberPhoto" value="
    <c:choose>
   		<c:when test="${sessionScope.m.memberPhoto eq null}">
		    /resources/img/default_profile.png
		</c:when>
		<c:otherwise>
		    /resources/upload/member/${sessionScope.m.memberPhoto }						
		</c:otherwise>
	</c:choose>
	">
    
	<!-- 게시물 글쓰기 form -->
	<form action="/inputWalkmate.do" method="post" enctype="multipart/form-data">
	<!-- Start Content -->
    <!--Content Modal-->
    <div id="modal" class="modal-overlay" >
        <div class="modal-window">
			    <input type="hidden" name="wmLeader" value="${sessionScope.m.memberNo }">
                <div class="modal-window-top">
                    <div class="close-area">창 닫기</div>
                    <img src="/resources/img/walkmate/liry1.jpg" id="view-section1">
                    <img src="" id="write-section4">
                </div>
                <div class="modal-window-middle">
                    <div class="modal-writer-profil">
                        <img src="/resources/img/walkmate/profil.png">
                    </div>
                    <div class="modal-writer-content-box">
                        <div class="writer-id"></div>
                        <h2 id="view-section2"></h2>
                        <input type="text" id="write-section1" placeholder="제목을 입력해주세요." required>
                        <input type="text" id="write-section6" placeholder="모임을 위한 한줄평을 작성하세요!" required>required
                    </div>
                </div>
                <div class="modal-window-bottom" id="info-of-main">
                    <div class="bottom-info" id="view-section3" >ㅇ 종로구 · 8.28(일) 오전 11:10 ㅇ 5/6</div>

                    <div id="write-section2">
                        <div class="bottom-info-inputs" >
                            <div class="write-content-input-box titles">
                                <label for="writeTitle2"><span>*</span>모임 장소</label>
                                <input type="text" name="wmAddr" id="writeTitle2" placeholder="서울시 - 은평구" readonly>
                                <input type="text" id="hideWriteTitle2" required>
                                <button type="button" class="adressBtn" onclick="searchAddr();">주소 찾기</button>
                            </div>
                            <div class="write-content-input-box titles">
                                <label for="writeTitle3"><span>*</span>모임 인원</label>
                                <input type="text" name="wmRangeMember" id="writeTitle3" placeholder="ex) 5" required> 
                            </div>
                            <div class="write-content-input-box titles">
                                <label for="writeDate" id="writeDate-lable"><span>*</span>모임 요일</label>
                                <label for="writeTime" style="display: none;" id="writeTime-lable"><span>*</span>모임 시간</label>
                                <input type="date" name="writeDate" id="writeDate" value="" required>
                                <input type="time" name="writeTime" id="writeTime" style="display: none;" required>
                                <input type="hidden" name="wmMeetTime" id="meetTime" required>
                                <button type="button" class="back-time-btn" onclick="backTime();">뒤로</button> 
                            </div>
                        </div>
                    </div>
                    

                    <!-- modal-contents (글쓴이 작성 글)-->
                    <div class="bottom-content" id="modal-contents">
                        <textarea id="view-section4" disabled>
                        </textarea>
                        
                        <div id="write-section3">
                            <div class="input-img-contents-title">
                                <span>*</span>사진 첨부 (하나씩 넣어주세요)
                            </div>
                            <div class="input-img-contents">
                                <input id="imageFile1"  type="file" class="photo" name="photo" style="display:none;">
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
                                    <div class="input-btn-main">*메인 사진</div>
                                    <img src="" class="preview">
                                </div>
                                <input id="imageFile2"  type="file" class="photo" name="photo" style="display:none;">
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
                                    <img src="" class="preview">
                                </div>
                                <input id="imageFile3" type="file" class="photo" name="photo" style="display:none;">
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
                                    <img src="" class="preview">
                                </div>
                                <input id="imageFile4" type="file" class="photo" name="photo" style="display:none;">
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
                                    <img src="" class="preview">
                                </div>
                            </div>
                            <div class="input-tag-contents">
                                <span>*</span>태그 : 
                                <input type="radio" id="공원&산책로" name="wmTag" value="공원&산책로" checked><label for="공원&산책로">공원&산책로</label>
                                <input type="radio" id="둘레길&등산" name="wmTag" value="둘레길&등산"><label for="둘레길&등산">둘레길&등산</label>
                                <input type="radio" id="여행" name="wmTag" value="여행"><label for="여행">여행</label>
                                <input type="radio" id="운동" name="wmTag" value="운동"><label for="운동">운동</label>
                                <input type="radio" id="페스티벌" name="wmTag" value="페스티벌"><label for="페스티벌">페스티벌</label>
                            </div>
                            <textarea name="wmContent" id="" placeholder="산책 모임에 대해 자세히 설명해주세요." required></textarea>
                        </div>
                 </form>
                 
                    </div>
                    <!-- End modal-contents (글쓴이 작성 글)-->

                    <div class="bottom-content member-info" id="view-section5" >
                        <div class="info-titles">멤버 소개</div>
                        <div class="info-titles sub">우리 반갑게 만나요!</div>
                        <ul class="member-info-ul">
                            <li class="member-info-list">
                                <div class="member-info-profil"><img src="/resources/img/walkmate/liry1.jpg"></div>
                                <div class="member-info-id">
                                    <span>릴리</span>
                                    	즐거운 삶은 스스로 만들어 나가는 것이라고 생각해요.
                                </div>
                            </li>
                        </ul>
                        <div class="info-titles" id="apply-ready1">승인 대기 멤버</div>
                        <div class="info-titles sub"  id="apply-ready2">모임장의 승인을 기다리고 있어요.</div>
                        <ul class="member-info-ready-ul" id="apply-ready3">
                            <li class="member-info-ready-list">
                            <!-- 최대 7명 가능 -->
                            </li>
                            
                        </ul>

                        <div class="info-titles">안내 사항</div>
                        <div class="info-titles sub">자세한 정보를 알려드릴게요.</div>
                        <ul class="mate-info-list">
                            <li>ㅇ : 10명</li>
                            <li>ㅇ 승인제 산책</li>
                            <li>2021. 11. 06 오후 6:50</li>
                            <li>강남구 (서울 강남구 신사동)</li>
                            
                        </ul>
                        <div class="info-titles">커뮤니티</div>
                        <div class="info-titles sub">산책이 궁금하다면 댓글을 남겨보세요.</div>
                        
                        <div class="comment-box-wrapper">
                        	<!-- 댓글 input -->
                        	<!-- 로그인을 해야만 댓글 작성 칸이 나옴 -->
                        	<c:if test="${not empty sessionScope.m }">
	                        	<div class="input-comment-box writers-box">
		                        	<div class="input-comment-writer-profil"><img src="<c:choose>
								   		<c:when test="${sessionScope.m.memberPhoto eq null}">
										    /resources/img/default_profile.png
										</c:when>
										<c:otherwise>
										    /resources/upload/member/${sessionScope.m.memberPhoto }						
										</c:otherwise>
									</c:choose>"></div>
	                        		<form action="/insertMainComment.do" method="post">
			                        	<div class="input-comment-writer-comment">
				                        			<input type="hidden" name="memberNo" value="${sessionScope.m.memberNo }">
					                        		<input type="text" name="wmcContent" class="writer-comment-input"  placeholder="댓글 달기..." maxlength="60">
					                        		<button type="submit" class="write_reply">등록</button>		                        		
			                        	</div>
	                        		</form>
	                        	</div>
                        	</c:if>
                        	
                        	<!-- 댓글 목록이 들어가는 곳 -->
                        	<div class="comment-list-box">                        	
                        	</div>
                        </div>
                        <div class="info-titles">모임 사진</div>
                        <div class="info-titles sub">모임장이 올린 사진입니다! (클릭 시 원본 이미지로 볼 수 있습니다.)</div>
                        <div class="wm-img-wrapper">
                        	<div class="wm-img-preview-box">
                        		<img class="wm-img-preview-img" src="">
                        	</div>
                        	<div class="wm-img-preview-box">
                        		<img class="wm-img-preview-img" src="">
                        	</div>
                        	<div class="wm-img-preview-box">
                        		<img class="wm-img-preview-img" src="">
                        	</div>
                        	<div class="wm-img-preview-box">
                        		<img class="wm-img-preview-img" src="">
                        	</div>
                        </div>
                        
                        
                    </div>
                    <div class="bottom-content-btn">
                        <button type="submit" class="input-main-btn" id="write-section5" onclick="" >작성 완료</button>
                        <button type="button" class="input-main-btn" id="view-section6" onclick="modalApplyView();">신청 하기</button>
                        <button type="button" class="next-btn-member" id="deleteWm" onclick="modalNextContents('');">돌아가기 >> </button>
                        <input type="hidden" id="hiddenDeleteWm">
                    </div>
                </div>
    			
    			
                <!-- 신청자의 신청 메세지 -->
                <!-- 게시물 글쓰기 form -->
			    <form action="/inputWmapply.do" method="post">
			    <input type="hidden" name="wmNo" class="input-apply-wmNo">
			    <input type="hidden" name="memberId" value="${sessionScope.m.memberId}">
			    <input type="hidden" name="applyStat" value="1">
                <div class="modal-window-bottom" id="applySection">
	                <div class="bottom-content member-info">
	                	<div class="info-titles">신청 하기</div>
	                    <div class="info-titles sub">모임장 및 회원들이 볼 수 있는 신청 메세지를 보내보세요!</div>                
	                </div>
                	<div class="bottom-content apply-content-box">                	
	                	<textarea name="applyContent" class="apply-text" placeholder="모임장 및 회원들이 볼 수 있는 신청 메세지를 작성해주세요."></textarea>
                	</div>
	                <div class="bottom-content-btn">
		                <button type="button" class="input-main-btn" id="write-section5" onclick="inputMainBtn();" >신청 작성 완료</button>
		                <input type="submit" class="input-main-inputs" >
		                <button type="button" class="next-btn-member" id="" onclick="modalApplyViewOff();">돌아가기 >> </button>                                
	                </div>
                </div>
                </form>
            </div>
            
    </div>
    <!-- End Content Modal-->

    
    <div id="walk-mate-content">
        <div class="content-top">
            <ul class="walkmate-tab">
                <li><h1><a id="" href="/walkMateFrm.do">산책 메이트</a></h1></li>
                <li><h1><a id="" href="/mbtiMateMain.do" >💖 메이트</a></h1></li>
            </ul>
            <p>우리 동네 산책 메이트는 누가 있을까요?</p>
        </div>

        <div class="content-middle">
            <ul class="walkmate-category">
                <li class="category-li">전체</li>
                <li class="category-li">공원&산책로</li>
                <li class="category-li">둘레길&등산</li>
                <li class="category-li">여행</li>
                <li class="category-li">운동</li>
                <li class="category-li">페스티벌</li>
            </ul>
        </div>

        <div class="content-bottom">
            <div class="write-new-content-btn">
                <button type="button" onclick="modalWrite();">모임 만들기</button>
            </div>

            <!-- 컨텐츠 박스 리스트-->
            <div class="content-box" onclick="modalView();"> 
                <div class="content-box-list img">
                    <img src="/resources/img/walkmate/liry1.jpg">
                </div>
                <div class="content-box-list titles">
                    <a href="">공원&산책로</a>
                    <h2>골든 리트리버 상동 호수공원 같이가요~</h2>
                    <div class="titles-sub">하루 종일 룰루랄라 서핑할 서퍼들! 모여봐요~</div>
                    <div class="titles-info"><span class="material-symbols-outlined">map</span> 종로구 · 8.28(일) 오전 11:10 ㅇ 5/6</div>
                    <ul class="user-profil">
                        <li><img src="/resources/img/walkmate/profil.png"></li>
                        <li><img src="/resources/img/walkmate/liry1.jpg"></li>
                        <li><img src="/resources/img/walkmate/main2.jpg"></li>
                        <li><img src="/resources/img/walkmate/review-icon.png"></li>
                        <li><img src="/resources/img/walkmate/walk-mate-icon.png"></li>
                        <li>+</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div class="add-btn">목록 더 보기 (+)</div>
    </div>
    <!-- End Content -->
    
   	<!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
    
    <!-- 지도 찾기 스크립트 -->
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    <script src="/resources/js/walk/walk.js"></script>
    <script>
    const modal = document.getElementById("modal");
    //게시물 보기
    const modalViewSection1 = document.getElementById("view-section1");
    const modalViewSection2 = document.getElementById("view-section2");
    const modalViewSection3 = document.getElementById("view-section3");
    const modalViewSection4 = document.getElementById("view-section4");
    const modalViewSection5 = document.getElementById("view-section5");
    const modalViewSection6 = document.getElementById("view-section6");

    //글 쓰기
    const modalWriteSection1 = document.getElementById("write-section1");
    const modalWriteSection2 = document.getElementById("write-section2");
    const modalWriteSection3 = document.getElementById("write-section3");
    const modalWriteSection4 = document.getElementById("write-section4");
    const modalWriteSection5 = document.getElementById("write-section5");
    const modalWriteSection6 = document.getElementById("write-section6");
    

    
    
    
    function modalOn(){
        modal.style.display = "flex"
    }
    function isModalOn() {
        return modal.style.display === "flex"
    }
    function modalViewOn() {
        modalViewSection1.style.display = "block";
        modalViewSection2.style.display = "block";
        modalViewSection3.style.display = "block";
        modalViewSection4.style.display = "block";
        modalViewSection5.style.display = "block";
        modalViewSection6.style.display = "block";
    }
    function modalViewOff() {
        modalViewSection1.style.display = "none";
        modalViewSection2.style.display = "none";
        modalViewSection3.style.display = "none";
        modalViewSection4.style.display = "none";
        modalViewSection5.style.display = "none";
        modalViewSection6.style.display = "none";
    }
    function modalWriteOn(){
        modalWriteSection1.style.display = "block";
        modalWriteSection2.style.display = "block";
        modalWriteSection3.style.display = "block";
        modalWriteSection4.style.display = "block";
        modalWriteSection5.style.display = "block";
        modalWriteSection6.style.display = "block";
    }
    function modalWriteOff(){
        modalWriteSection1.style.display = "none";
        modalWriteSection2.style.display = "none";
        modalWriteSection3.style.display = "none";
        modalWriteSection4.style.display = "none";
        modalWriteSection5.style.display = "none";
        modalWriteSection6.style.display = "none";
    }
    function modalOff() {
        modal.style.display = "none";
    }
    //글보기 클릭
    function modalView(){
        modalWriteOff();
        modalOn();
        modalViewOn();
    }
    //모임 찾기 클릭
    function modalWrite(){
        modalOn();
        modalViewOff();
        modalWriteOn();
    }
    const closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
        modalOff();
    })
    function closeBtns(){
        modalOff();
    }
    modalOff();
    </script>
    
</body>
</html>