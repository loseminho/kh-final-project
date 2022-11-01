
function logout() {
	Swal.fire({
        title: '로그아웃',
        text: "로그아웃하시겠습니까?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#ccc',
        confirmButtonText: '로그아웃',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
			location.href="/logout.do";
        }
    })
}

$(function(){
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
});

 		
		

