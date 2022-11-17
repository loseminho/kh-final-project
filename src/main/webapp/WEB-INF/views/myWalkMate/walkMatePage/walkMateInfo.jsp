<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<link rel="stylesheet" href="/resources/css/myWalkMate/walkMatePage/walkMateInfo.css">

<div class="wm-info-content">
	<div class="wm-info-header">
		<h1>모임 정보</h1>
		<h2>${w.wmTitle }</h2>
		<h3>#${w.wmTag }</h3>
	</div>

	<div class="wm-info-main">
		<table>
			<tr>
				<th>모임장</th>
				<td>${w.leaderNickname }</td>
			</tr>
			<tr>
				<th>모임 일시</th>
				<td>${w.wmMeetTime }</td>
			</tr>
			<tr>
				<th>모임 장소</th>
				<td>${w.wmAddr }</td>
			</tr>
		</table>
	</div>
	
	<div class="wm-all-img-box">
		<c:forEach items="${w.fileList }" var="file">
			<div class="wm-one-img-box">
				<img src="/resources/upload/walkmate/${file.filepath }">
			</div>
		</c:forEach>
	
		<c:set var="noImgIndex" value="${4 - fn:length(w.fileList) }" />
	
		<c:forEach begin="1" end="${noImgIndex }" step="1" >
			<div class="wm-one-img-box">
				<p>no image</p>
			</div>
		</c:forEach>
	</div>
	
	<div class="wm-info-text">
		${w.wmContent }
	</div>
</div>