<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>산책갈개</title>
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<link rel="stylesheet" href="/css/main.css">
<link rel="icon" href="/img/favicon.ico" type="image/x-icon" sizes="16x16">
</head>
<body>
	<jsp:include page="/WEB-INF/views/common/header.jsp"/>
	<div class="section" id="section1"></div>
	<div class="section" id="section2"></div>
	<div class="section" id="section3">
	<jsp:include page="/WEB-INF/views/common/footer.jsp" />
	</div>
	<script>
		var mHtml = $("html");
		var page = 1;
		const headerWrap = $(".header-wrap");
		const header = $(".header");
		const loginBox = $(".login-box");
		const title = $(".title");

		mHtml.animate({
			scrollTop : 0
		}, 10);

		$(window).on("wheel", function(e) {
			if (mHtml.is(":animated"))
				return;
			if (e.originalEvent.deltaY > 0) {
				if (page == 3)
					return;
				page++;
			} else if (e.originalEvent.deltaY < 0) {
				if (page == 1)
					return;
				page--;
			}
			var posTop = (page - 1) * $(window).height();
			mHtml.animate({
				scrollTop : posTop
			});

			if (page == 1) {
			}
			if (page != 1) {
			}
		});
	</script>
</body>
</html>