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
				$(".popup-modal").fadeIn(400);
			}else{
				$(".popup-modal").fadeOut(400);
			}
			if (page == 3) {
				
			}
		});
});

if(!$.cookie("wmCookie")){
    $(".popup-modal").css("display","block");
}

$(".popup-close").on("click",function(){
    closemodal(0);
});
$(".popup-close-day").on("click",function(){
	console.log(12312412314);
    closemodal(1);
});
function closemodal(state){
    $(".popup-modal").css("display","none");
    if(state == 1){

        if($.cookie('wmCookie') == undefined){
            $.cookie('wmCookie','y',{expires:1,path:'/'});
        }
    }
};
$(".mainTitle").on("click",function(){
console.log(123);
	$.removeCookie("wmCookie");
});

const popupContent = $(".popup-content");
let page = 0;
$(".popup-back").css("display","none");
$(".popup-next").on("click",function(){
	if(page==0){
		const pageContent = popupContent.eq(1);
		popupContent.eq(1).css("display","block");
		popupContent.not(pageContent).css("display","none");
		$(".popup-back").css("display","block");
		page++;
	}else if(page==1){
		const pageContent = popupContent.eq(2);
		popupContent.eq(2).css("display","block");
		popupContent.not(pageContent).css("display","none");
		page++;
	}else if(page==2){
		const pageContent = popupContent.eq(3);
		popupContent.eq(3).css("display","block");
		popupContent.not(pageContent).css("display","none");
		$(".popup-next").css("display","none");
		page++;
	}
});
$(".popup-back").on("click",function(){
	if(page==1){
		const pageContent = popupContent.eq(0);
		popupContent.eq(0).css("display","block");
		popupContent.not(pageContent).css("display","none");
		$(".popup-back").css("display","none");
		$(".popup-next").css("display","block");
		page--;
	}else if(page==2){
		const pageContent = popupContent.eq(1);
		popupContent.eq(1).css("display","block");
		popupContent.not(pageContent).css("display","none");
		$(".popup-back").css("display","block");
		page--;
	}else if(page==3){
		const pageContent = popupContent.eq(2);
		popupContent.eq(2).css("display","block");
		popupContent.not(pageContent).css("display","none");
		$(".popup-back").css("display","block");
		page--;
	}
});