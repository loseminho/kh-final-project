let page = 0;
const tabs = $(".dogMarket-tab>li");

tabs.on("click",function(){
    const index = $(this).index();
    if(index-page<1){
        tabs.eq(0).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(1).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".saleDog-content").hide();
        $(".getDog-content").show();
    }else{
        tabs.eq(1).css({
            "border-bottom" : "2px solid #1abc9c"
        });
        tabs.eq(0).css({
            "border-bottom" : "2px solid #e1e1e1"
        });
        $(".getDog-content").hide();
        $(".saleDog-content").show();
    }
});

const category = $(".dogMarket-category>li");
category.on("click",function(){
    const categoryIndex = category.index(this);
    console.log(categoryIndex);
    if(categoryIndex - page <6){
        if(categoryIndex == 0){
            $(".faq-wrap").show();
            $(".answer").hide();
        }else{
            $(".faq-wrap").hide();
            $(".answer").hide();
            $(".faq-wrap").eq(categoryIndex-1).show();
            $(".add-btn>button").hide();
        }
        
        category.css({
            "background-color":"#fff",
            "color":"black"
        });
        category.eq(categoryIndex).css({
            "background-color":"#1abc9c",
            "color":"#fff"
        });
    }
});

let question = $(".question");
question.on("click", function(){
    const questionIndex = question.index(this);
    console.log(questionIndex);
    $(this).toggleClass("active");
    $(this).next().slideToggle();
});

$(".dogMarket-tab>li").eq(0).click();


/*
for(let i = 6; i<11; i++){
    question.eq(i).hide();
    $(".add-btn>button").show();
}

$(".add-btn>button").on("click",function(){
    for(let i = 6; i<11; i++){
        question.eq(i).show();
    }
    $(this).hide();
});
*/