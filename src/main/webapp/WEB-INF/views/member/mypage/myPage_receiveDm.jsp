<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="stylesheet" href="/resources/css/member/mypage/myPage_receiveDm.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<h1>받은 쪽지함</h1>
<div class="dmWrap">
	<div class="dmCateWrap">
		<select id="receiveDmCate" name="dmCate">
	    	<option value="2" selected>전체쪽지</option>
	    	<option value="0">입양문의</option>
	    	<option value="1">친구해요</option>
	    </select>
	    <div class="dmSearchWrap">
			<select id="receiveDmSearch" name="dmSearch">
		    	<option value="sender" selected>이름으로 검색</option>
		    	<option value="dmContent">내용으로 검색</option>
		    </select>
		    <input type="text" name="dmKeyword" id="receiveDmKeyword">
		    <button type="button" id="receiveDmSearchBtn" onclick="receiveDmSearch(1);">검색</button>
	    </div>
	</div>
	<table id="receiveDmTable" class="dmTable">
		<thead>
			<tr>
				<th>번호</th>
				<th>분류</th>
				<th>내용</th>
				<th>보낸 사람</th>
				<th>보낸 날짜</th>
				<th>조회 여부</th>
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
</div>
<div class="dmPageNavi"></div>

<!-- 쪽지 모달 -->
<div id="receiveDm-modal" class="modal-wrapper" style="display:none;">
	<div class="modal">
		<div class="modal-header">				
			<button id="closeModalBtn" onclick="closeReceiveDmModal();">
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
		<div class="modal-content">
			쪽지 분류 : <span class="dmCate"></span><br>
			보낸 날짜 : <span class="dmDate"></span><br>
			보낸 사람 : <span class="sender"></span><br>
			<br>
			<div class="dmContentDiv">
				<span class="dmContent"></span>
			</div> 
			<input type="hidden" id="dmCate">
			<input type="hidden" id="receiverNo">
			<div class="reply-box">
				<textarea name="dmContent" style="display:none;" maxlength="150"></textarea>
				<br>
				<input type="hidden" id="loginLevel" value="${sessionScope.m.memberLevel }">
				<button type="button" id="dmReplyBtn" onclick="dmReply();">답장하기</button>
				<button type="button" id="dmReplyCancelBtn" onclick="cancelReply();" style="display:none;">취소</button>
			</div>
		</div>
	</div>
</div>

<script src="/resources/js/member/mypage/myPage_receiveDm.js"></script>