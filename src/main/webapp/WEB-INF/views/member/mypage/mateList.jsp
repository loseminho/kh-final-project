<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<link rel="stylesheet" href="/resources/css/member/mypage/mateList.css">

<div class="content">
    <!-- 앞으로 참가할 예정인 모임 리스트 -->
    <!-- 모집 전, 모집 중, 모임 전, 모임 중, 대기, 수락 -->
    <div class="meet">
        <h1>참가 모임</h1>
        <table>
            <tr>
                <th>모집 글 제목</th>       <!-- 누르면 해당 모임 페이지로 이동(모임장이거나 수락된 경우) -->
                <th>모임장</th>
                <th>시작 일시</th>
                <th>장소</th>       		<!--  시/군/구만 보여주기 -->
                <th>상태</th>
            </tr>
            <tr>
            	<td>산책 메이트 구해요</td>
            	<td><a href="/showProfile.do">닉네임</a></td>
            	<td>xxxx-xx-xx xx:xx</td>
            	<td>금천구</td>
            	<td>수락</td>
            </tr>
            <!-- 반복문으로 리스트 가져오기 -->
        </table>
    </div>

    <!-- 실제로 참가 가능했던 모임 리스트 -->
    <!-- 모임 종료 -->
    <div class="meet">
        <h1>지난 모임</h1>
        <table>
            <tr>
                <th>모집 글 제목</th>       <!-- 누르면 해당 모임 페이지로 이동 -->
                <th>모임장</th>
                <th>시작 일시</th>
                <th>장소</th>       		<!--  시/군/구만 보여주기 -->
                <th>상태</th>
            </tr>
            <!-- 반복문으로 리스트 가져오기 -->
        </table>
        <!-- 페이징 처리 -->
    </div>

    <!-- 참가 신청했으나 참가하지 못한 모임 -->
    <!-- 모집 취소, 모집 실패, 모임 취소, 모임 실패, 거절, 추방 -->
    <div class="meet">
        <h1>참가 못한 모임</h1>
        <table>
            <tr>
                <th>모집 글 제목</th> 
                <th>모임장</th>
                <th>시작 일시</th>
                <th>장소</th>       		<!--  시/군/구만 보여주기 -->
                <th>상태</th>
            </tr>
            <!-- 반복문으로 리스트 가져오기 -->
        </table>
        <!-- 페이징 처리 -->
    </div>
</div>