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
				page==1;
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

popupContent.on("click",function(){
	let idx = popupContent.index(this);
});
