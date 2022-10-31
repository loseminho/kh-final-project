$(".selected-menu").on("click", function(){
    $(".walkMatePage-content").children().hide();
    const idx = $(".selected-menu").index(this);
    $(".walkMatePage-content").children().eq(idx).show();
});