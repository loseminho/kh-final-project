<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/shop/write.css">
<link rel="stylesheet" href="/resources/css/shop/shopModal.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="/writeFrm.do">상품등록</a></li>
	                <li class="section"><a href="/myMarketList.do">상품목록</a></li>
	            </ul>	
			</div>
			<div id="rowSession2">
			<h1>상품등록</h1>
			<br>
			<hr>
			<br>
			<!-- 파일 넣는 자리 -->
			<div class="sub-title"><span>*</span>사진</div>
			<div class="row-part" style="height:150px;">
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
			</div>
			<!-- 파일 넣기 끝 -->
			<!-- 상품 이름 -->
			<div class="row-part">
			<div class="sub-title"><span>*</span>이름 :</div>
				<input type="text" name="productName" id="product-name">
			</div>
			<!-- 상품 가격 -->
			<div class="row-part">
			<div class="sub-title"><span>*</span>가격 :</div>
				<input type="number" name="price" min="0" step="100" id="price">
				<span>원</span>
			</div>
			<!-- 상품 소개 페이지 -->
			<div class="row-part">
			<div class="sub-title">*소개 :</div>
	        </div>				
			<textarea name="productInfo" id="product-info"></textarea>
		</div>
	</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
</body>
<script src="/resources/js/market/writeFrmContent.js"></script>
<script>
	$(document).ready(function(){
		$.ajax({
			url:"/selectTypeList.do",
			success:function(data){
				$.each(data,function(idx,value){
					var option = "<option value='"+value.typeCode+"'>"+value.typeName+"</option>";
					$("#select-box").append(option);
				});
			}
		});
	});
</script>
</html>