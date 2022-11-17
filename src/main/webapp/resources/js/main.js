$(document).ready(function(){
console.log(1);
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

			if (page == 1 && !$.cookie("wmCookie")) {
				$(".popup-modal").fadeIn(400);
			}else{
				$(".popup-modal").fadeOut(400);
			}
			if (page == 3) {
				$("iframe").attr("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995.053112767938!2d126.89570580446775!3d37.533821730309754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ec3afcd675b%3A0x1d3b8e50a735e00a!2z7J2066CI67mM65Sp!5e0!3m2!1sko!2skr!4v1668564804018!5m2!1sko!2skr' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade");
				
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

/*조원소개*/

$(".name-title").on("click",function(){
	const index = $(".name-title").index(this);
	console.log(index);
	const select = $(".team-select").eq(index);
	$(".team-select").eq(index).fadeIn();
	$(".team-select").not(select).css("display","none");
	if(index==0){
		$(".team-info-title").text('고유빈');
	}else if(index==1){
	$(".team-info-title").text('신다혜');
	}else if(index==2){
	$(".team-info-title").text('안상영');
	}else if(index==3){
	$(".team-info-title").text('유희옥');
	}else if(index==4){
	$(".team-info-title").text('진민호');
	}
});

