<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개 </title>
<!--fonts-->
    <link rel="stylesheet" href="/resources/css/gmarket.css">
    <!--css-->
    <link rel="stylesheet" href="/resources/css/board/writeQna.css">
    <!--jQuery-->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!--구글아이콘-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
<!-- 헤더  -->
	<jsp:include page="/WEB-INF/views/common/header.jsp" />
    <content>
        <div class="writeQna-wrap">
            <div class="writeQna-box">
                <div class="writeQna-header">
                    <h1>문의내역 수정하기</h1>
                </div>
                <form action="/qnaUpdate.do" id="updateFrm" method="post" enctype="multipart/form-data" onsubmit ="return checkSelect();">
                    <div class="writeQna-content">
                        <div class="qna-input-box">
                        <label for="qnaCateNo">문의유형</label>
                        <select name="qnaCateNo" id="qnaCateNo" class="write-qna-form" value="${qb.qnaCateNo }">
                            <option value="0">선택해주세요</option>
                            <option value="1">산책메이트 찾기</option>
                            <option value="2">애견용품 나눔</option>
                            <option value="3">입양</option>
                            <option value="4">회원관련</option>
                            <option value="5">기타</option>
                        </select>
                        </div>
                        <div class="qna-input-box">
                            <label for="qnaTitle">제목</label>
                            <input type="text" name="qnaTitle" id="qnaTitle" class="write-qna-form" value="${qb.qnaTitle }" required>
                        </div>
                        <div class="qna-input-box">
                            <label for="qnaContent">내용</label>
                            <textarea name="qnaContent" id="qnaContent" class="write-qna-form" value="${qb.qnaContent }" required>${qb.qnaContent }</textarea>
                        </div>
                        <div class="qna-input-box" id="file-input-box">
                            <label for="qnaFile">파일첨부</label>
                            <div class="fileZone">
                                <span class="material-symbols-outlined">add</span>
                                <c:forEach items="${qb.fileList }" var="qf">
                                    <div class="fileName">
                                        <span>${qf.filename}</span>
                                        <span class="closeBtn" onclick="deleteFile(this,${qf.fileNo},'${qf.filepath}');">X</span>
                                    </div>
                                </c:forEach>
                            </div>
                        </div>
                        <div class="fileMsg">* 첨부파일을 놓아주세요</div>
                        <div class="qna-check-box">
                            <label class="secret-check-label">비밀글 설정</label>
                            <c:choose>
                            <c:when test="${qb.qnaSecret eq 1 }">
                            <input class="form-check-input" type="checkbox" name="secret" id="secret" checked>
                            </c:when>
                            <c:otherwise>
                            <input class="form-check-input" type="checkbox" name="secret" id="secret" value="${qb.qnaSecret }">
                            </c:otherwise>
                        	</c:choose>
                        </div>
                        <!--display: none-->
                        <input type="file" name="boardFile" multiple style="display:none;">
		                <input type="hidden" name="qnaNo" value=${qb.qnaNo }>
                        <input type="hidden" name="qnaWriter" id="qnaWriter" class="write-qna-form" value="${qb.qnaWriter}">
                    </div><!--writeqna content 끝-->
                    <div class="writeQna-footer">
                        <div class="submit-btn">
                            <button type="button" class="qna-back-btn">취소</button>
                            <button type="submit" class="finish-btn">등록</button>
                        </div>
                    </div>
                </form>
            </div><!--qna box 끝 -->
        </div><!--qna-wrap 끝-->
    </content>
     <jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/board/qnaUpdate.js"></script>
</body>
</html>