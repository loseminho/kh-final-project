<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>카카오 추가 정보 입력</title>
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	<div style="margin-top:300px;">
		<p>카카오 연동 중~</p>
		<input type="text" name="memberPhone" id="memberPhone" placeholder="010-0000-0000 형식">
		<button onclick="getCode();">전화번호 제출</button>
	</div>
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	
	<script type="text/javascript">
    // 카카오 최초 로그인시 DB에 정보넣기
    function getCode() {
    	const memberPhone = $("#memberPhone").val();
    	console.log(memberPhone);
    	if(memberPhone == "") {
    		alert("전화번호를 입력해주세요.");
    		return;
    	}
    	
        // 인가코드 가져오기
        let codeURL = new URL(window.location.href);
        let code= codeURL.searchParams.get('code');

        // 인가코드 유무 확인
        if(code != null){
            console.log("codeURL: " + codeURL);
            console.log("code: " + code);

            /* 토큰 가져오기 */
        	function selectMyAccessTocken() {
        	
        	    $.ajax({
        	        url  : '/selectMyAccessTocken.do',
        	        type : 'get',
        	        data : {"code" : code, "memberPhone" : memberPhone},    // 인가코드 보내기
        	        contentType: "application/json; charset=UTF-8",
        	        success : function(res){
        	        	if(res == "join") {
        	                location.href= "/joinSuccess.do";  // 가입 환영 페이지로 이동하기                           	        	        		
        	        	}
        	        },
        	        error: function(xhr, type){
        	            console.log(xhr);
        	            console.log(type);
        	        }
        	    })
        	}
            
            selectMyAccessTocken();
        }else {
            console.log("코드 존재하지 않음")
        }
    }
    </script>
</body>
</html>