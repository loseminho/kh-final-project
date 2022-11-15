<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<link rel="stylesheet" href="/resources/css/market/writeFrm.css">
<link rel="stylesheet" href="/resources/css/market/writeFrmContent.css">
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	<form action="/deleteMarket.do" id="deleteMarketForm">
		<input type="hidden" name="marketNo" id="marketNo" value="${md.marketNo }">	
	</form>
		<div class="page-content">
			<div id="rowSession1">
				<ul class="main-menu">
	                <li class="section"><a href="/writeFrm.do">분양등록</a></li>
	                <li class="section"><a href="/myMarketList.do">분양목록</a></li>
	                <li class="section"><a href="/sendDmFrm.do">분양쪽지함❤</a></li>
	            </ul>	
			</div>
			<div id="rowSession2">
			<h1>수정</h1>
			<br>
			<hr>
			<br>
		<form id="update-frm" action="/updateMarket.do" method="post" enctype="multipart/form-data">
			<input type="hidden" name="marketNo" value="${md.marketNo }">
			<input type="hidden" name="memberId" value="${sessionScope.m.memberId }">
			<div class="sub-title"><span>*</span>사진</div>
			<div class="row-part" style="height:150px;">
				<!-- 1번파일 -->
				<input id="imageFile1" type="file" class="photo" name="photo" style="display:none;" disabled>
				<input type="hidden" name="pastFileNo" value="${md.fileList[0].fileNo }" disabled>
				<input type="hidden" name="pastFilePath" value="${md.fileList[0].filePath }" disabled>
				<c:choose>
					<c:when test="${not empty md.fileList[0].fileNo }">
						<input type="hidden" name="procedure" value="1" disabled>
					</c:when>
					<c:otherwise>
						<input type="hidden" name="procedure" value="1" disabled>
					</c:otherwise>
				</c:choose>
				<input type="hidden" name="pastFilePath" value="${md.fileList[0].filePath }" disabled>
				<div class="preview-box">  
					<div class="input-btn">+</div>
					<span class="thumb-nail">대표♥</span>
					<img src="/resources/upload/market/${md.fileList[0].filePath }" class="preview">
				</div>
				<!-- 2번파일 -->
				<input id="imageFile2" type="file" class="photo" name="photo" style="display:none;" disabled>
				<input type="hidden" name="pastFileNo" value="${md.fileList[1].fileNo }" disabled>
				<input type="hidden" name="pastFilePath" value="${md.fileList[1].filePath }" disabled>
				<c:choose>
					<c:when test="${not empty md.fileList[1].fileNo }">
						<input type="hidden" name="procedure" value="2" disabled>
					</c:when>
					<c:otherwise>
						<input type="hidden" name="procedure" value="2" disabled>
					</c:otherwise>
				</c:choose>
				<div class="preview-box">
					<div class="input-btn">+</div>
					<img src="/resources/upload/market/${md.fileList[1].filePath }" class="preview">
				</div>
				<!-- 3번파일 -->
				<input id="imageFile3" type="file" class="photo" name="photo" style="display:none;" disabled>
				<input type="hidden" name="pastFileNo" value="${md.fileList[2].fileNo }" disabled>
				<input type="hidden" name="pastFilePath" value="${md.fileList[2].filePath }" disabled>	
					<c:choose>
						<c:when test="${not empty md.fileList[2].fileNo }">
							<input type="hidden" name="procedure" value="3" disabled>
						</c:when>
						<c:otherwise>
							<input type="hidden" name="procedure" value="3" disabled>
						</c:otherwise>
					</c:choose>						
					<div class="preview-box">
						<div class="input-btn">+</div>
						<img src="/resources/upload/market/${md.fileList[2].filePath }" class="preview">
					</div>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>이름 :</div>
				<input type="text" name="callName" value="${md.callName }" autocomplete="off" disabled>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>품종선택 :</div>
				<select id="select-box" name="typeCode">
				<!-- 강아지 종류 option 넣는 자리 -->
				</select>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>나이(개월) :</div>
			<input type="number" name="age" min="1" max="24" placeholder="0~24개월" value="${md.age }" autocomplete="off">
			<span style="color:blue; font-size:12px;">*개월 단위로 입력해요</span>
			</div>
			<div class="row-part">
			<div class="sub-title"><span>*</span>성별선택 :</div>
				<c:choose>	
				<c:when test="${md.gender == '남자' }">
				<input type="radio" name="gender" id="male" value="남자" checked>
				<label for="male">남자</label>
				<input type="radio" name="gender" id="female" value="여자">
				<label for="female">여자</label>
				</c:when>
				<c:when test="${md.gender == '여자' }">
				<input type="radio" name="gender" id="male" value="남자">
				<label for="male">남자</label>
				<input type="radio" name="gender" id="female" value="여자" checked>
				<label for="female">여자</label>
				</c:when>
				</c:choose>
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
		        <input type="number" name="price" id="price" min="10000" max="100000000" step="10000" placeholder="${md.price }" autocomplete="off">\
		        <span style="color:blue; font-size:12px;"> *만원단위로 입력 할 수 있어요</span>
		    </div>
		    </div>
			<div class="sub-title">*소개</div>
			<div class="row-part">
			<textarea name="saleInfo">${md.saleInfo }</textarea>
	        </div>
	        <br>
		</form>
			<button id="submit-btn">전송</button>
			<button id="cancel-btn">취소</button>
			<button id="delete-btn">삭제</button>
		</div>
	</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	<script src="/resources/js/market/writeFrmContent.js"></script>
	<script>
	$("#delete-btn").on("click",function(){
		if(confirm("정말 삭제 하실거에요?")){
		$("#deleteMarketForm").submit();
		}else{
			
		}
	});
	
	$("#submit-btn").on("click",function(){
		if($("#price").val() == ''){
			$(".box").children("span").text("입력을 해야해요");
			$(".box").children("span").css("color","red");
		}else{
			$("#update-frm").submit();
		}
	});
	
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
</body>
</html>