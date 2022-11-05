<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/market/writeFrmContent.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="/writeFrm.do">분양등록</a></li>
	                <li class="section"><a href="/myMarketList.do">분양목록</a></li>
	                <li class="section"><a href="/sendDmFrm.do">분양쪽지함❤</a></li>
	            </ul>	
			</div>
			<div id="rowSession2">
			<h1>분양등록</h1>
			<br>
			<hr>
			<br>
		<form action="/inputMarket.do" method="post" enctype="multipart/form-data">
			<input type="hidden" name="memberId" value="${sessionScope.m.memberId }">
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
			<div class="row-part">
			<div class="sub-title"><span>*</span>이름 :</div>
				<input type="text" name="callName">
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>품종선택 :</div>
				<select id="select-box" name="typeCode">
				<!-- 강아지 종류 option 넣는 자리 -->
				</select>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>나이(개월) :</div>
			<input type="number" name="age" min="0" max="24" placeholder="0~24개월">
			<span style="color:red; font-size:12px;">*입력해주세요</span>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>성별선택 :</div>	
			<input type="radio" name="gender" id="male" value="남자">
			<label for="male">남자</label>
			<input type="radio" name="gender" id="female" value="여자">
			<label for="female">여자</label>
			</div>
			<div class="row-part">
			<div class="sub-title">
			<label for="dogVacc"><span>*</span>예방접종 여부 :</label><br>
			</div>
			    <label style="font-size: 14px; margin-right:5px;"><input type="radio" name="dogVacc" value="O"> 했어요</label>
      			<label style="font-size: 14px; margin-right:5px;"><input type="radio" name="dogVacc" value="X"> 안 했어요</label>
			</div>
			<div class="row-part">
			<div class="sub-title">
		    <label for="price"><span>*</span>분양가격 :</label>
		    </div>
		    <div class="box">
		        <input type="number" name="price" id="price" min="0" max="100000000" step="10000" placeholder="숫자만입력해주세요">\
		        <span style="color:red; font-size:12px;"> *만원단위로 입력 할 수 있어요</span>
		    </div>
		    </div>
			<div class="sub-title">*소개</div>
			<div class="row-part">
			<textarea name="saleInfo"></textarea>
	        </div>
	        <br>
			<input type="submit" id="submit-btn" value="전송">
		</form>
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