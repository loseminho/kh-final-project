$(".sub-menu").prev().append("<span class='more down'><i class='fa-solid fa-caret-down'></i></span>");
$(".more").on("click", function(event){
    if($(this).hasClass("down")) {
        $(this).removeClass("down");
        $(this).addClass("up");
        $(this).html("<i class='fa-solid fa-caret-up'></i>");
    } else if($(this).hasClass("up")) {
        $(this).removeClass("up");
        $(this).addClass("down");
        $(this).html("<i class='fa-solid fa-caret-down'></i>");
    }
    $(this).parent().next().slideToggle();
    event.stopPropagation();
});

$(".more").parent().on("click", function(){
    $(this).children().click();
});

$(".section").on("click", function(){
    $("#rowSession2").children().hide();
	const idx = $(".section").index(this);
    $("#rowSession2").children().eq(idx).show();
});