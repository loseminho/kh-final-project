<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>우리 동네 산책 찾기</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <link rel="stylesheet" href="/resources/css/walkmate/walk_mate_content.css">
    <link rel="styleSheet" href="/resources/css/gmarket.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
	<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
    
	<!-- Start Content -->
    <!--Content Modal-->
    <div id="modal" class="modal-overlay" >
        <div class="modal-window">
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
                        <div class="writer-id">user03</div>
                        <h2 id="view-section2">골든 리트리버 상동 호수공원 같이 가요~</h2>
                        <input type="text" id="write-section1" placeholder="제목을 입력해주세요.">
                    </div>
                </div>
                <div class="modal-window-bottom">
                    <div class="bottom-info" id="view-section3" >ㅇ 종로구 · 8.28(일) 오전 11:10 ㅇ 5/6</div>

                    <div id="write-section2">
                        <div class="bottom-info-inputs" >
                            <div class="write-content-input-box titles">
                                <label for="writeTitle2"><span>*</span>모임 장소</label>
                                <input type="text" name="writeTitle2" id="writeTitle2" placeholder="서울시 - 은평구">
                                <button class="adressBtn" value="주소찾기">주소 찾기</button>
                            </div>
                            <div class="write-content-input-box titles">
                                <label for="writeTitle2"><span>*</span>모임 인원</label>
                                <input type="text" name="writeTitle2" id="writeTitle2" placeholder="ex) 5"> 
                            </div>
                            <div class="write-content-input-box titles">
                                <label for="writeDate"><span>*</span>모임 요일</label>
                                <label for="writeDate2" style="display: none;"><span>*</span>모임 시간</label>
                                <input type="date" name="writeDate" id="writeDate" value="none">
                                <input type="time" value="xxx" min="yyy" max="zzz" style="display: none;"> 
                            </div>
                        </div>
                    </div>
                    

                    <!-- modal-contents (글쓴이 작성 글)-->
                    <div class="bottom-content" id="modal-contents">
                        <textarea id="view-section4" disabled>
                            	안녕하세요. 리트리버맘 입니다. :)<br>
                            	골든 리프리버 파티를 구하고 있어요! 주로 호수공원이나 시냇물공원으로 해서 <br>
                            	20:00 ~ 21:00 (2시간) 정도 돌고 있습니다!.<br>
                            <br>
                            	저희 산책파티는 각자 목줄, 배변봉투, 입마개 등 지참해오는 것이니<br>
                           	 이점 명시해서 지원해주세요~<br>
                            
                        </textarea>
                        
                        <div id="write-section3">
                            <div class="input-img-contents-title">
                                <span>*</span>사진 첨부
                            </div>
                            <div class="input-img-contents">
                                <input id="imageFile1"  type="file" class="photo" name="photo" style="display:none;">
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
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
                                <div class="preview-box">
                                    <div class="input-btn">+</div>
                                    <img src="" class="preview">
                                </div>
                            </div>
                            <div class="input-tag-contents">
                                <span>*</span>태그 : 
                                <input type="radio" id="공원" name="tags"><label for="공원">공원&산책로</label>
                                <input type="radio" id="둘레길" name="tags"><label for="둘레길">둘레길&등산</label>
                                <input type="radio" id="여행" name="tags"><label for="여행">여행</label>
                                <input type="radio" id="운동" name="tags"><label for="운동">운동</label>
                                <input type="radio" id="페스티벌" name="tags"><label for="페스티벌">페스티벌</label>
                            </div>
                            <textarea name="" id="" placeholder="산책 모임에 대한 내용을 입력해주세요."></textarea>
                        </div>
                        
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
                    </div>
                    <div class="bottom-content-btn">
                        <button class="input-main-btn" id="view-section6" onclick="">신청 하기</button>
                        <button class="input-main-btn" id="write-section5" onclick="" >작성 완료</button>
                        <button class="next-btn-member" id="" onclick="modalNextContents('');">돌아가기 >> </button>
                    </div>
                </div>
                
            </div>
            
    </div>
    <!-- End Content Modal-->

    
    <div id="walk-mate-content">
        <div class="content-top">
            <ul class="walkmate-tab">
                <li><h1><a id="">산책 메이트</a></h1></li>
                <li><h1><a id="">💖 메이트</a></h1></li>
            </ul>
            <p>우리 동네 산책 메이트는 누가 있을까요?</p>
        </div>

        <div class="content-middle">
            <ul class="walkmate-category">
                <li>전체</li>
                <li class="category-li">공원&산책로</li>
                <li class="category-li">둘레길&등산</li>
                <li class="category-li">여행</li>
                <li class="category-li">운동</li>
                <li class="category-li">페스티벌</li>
            </ul>
        </div>

        <div class="content-bottom">
            <div class="write-new-content-btn">
                <button onclick="modalWrite();">모임 만들기</button>
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
    </div>
    <!-- End Content -->
    
   	<!-- Start footer -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />
    <!-- End footer -->
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
    }
    function modalWriteOff(){
        modalWriteSection1.style.display = "none";
        modalWriteSection2.style.display = "none";
        modalWriteSection3.style.display = "none";
        modalWriteSection4.style.display = "none";
        modalWriteSection5.style.display = "none";
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