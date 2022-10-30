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

const category = $(".getDog-category>li");
category.on("click",function(){
    let categoryIndex = category.index(this);
    let typeSize = categoryIndex-1;
    	$.ajax({
    		url : "/marketListCnt.do",
    		data: {typeSize:typeSize},
    		success: function(result){
    			console.log(result);
    			totalList = result;
    		}
    	});
    console.log(categoryIndex);
    page = categoryIndex;
    if(categoryIndex == 0){
    
    }else if(categoryIndex == 1){
    	    $.ajax({
    		url: "/selectFilterList.do",
    		data: {typeSize : 0},
    		success:function(data){
    			console.log(data);
    			var html = "";
    			for(let i=0;i<data.length;i++){
    				html += "<div class='sale'>";
    				html += "<div class='photo-session'>";
    				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
    				html += "</div>";
    				html += "<span>"+data[i].typeName+"</span>";
    				html += "<li>분양가격 : "+data[i].price+"원</li>";
    				html += "</div>";
    			};
    			$(".sale-wrap").html(html);
    		},
    	});
    }else if(categoryIndex == 2){
    	    $.ajax({
    		url: "/selectFilterList.do",
    		data: {typeSize : 1},
    		success:function(data){
    			console.log(data);
    			var html = "";
    			for(let i=0;i<data.length;i++){
    				html += "<div class='sale'>";
    				html += "<div class='photo-session'>";
    				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
    				html += "</div>";
    				html += "<span>"+data[i].typeName+"</span>";
    				html += "<li>분양가격 : "+data[i].price+"원</li>";
    				html += "</div>";
    			};
    			$(".sale-wrap").html(html);
    		},
    	});
    
    }else if(categoryIndex == 3){
        	    $.ajax({
    		url: "/selectFilterList.do",
    		data: {typeSize : 2},
    		success:function(data){
    			console.log(data);
    			var html = "";
    			for(let i=0;i<data.length;i++){
    				html += "<div class='sale'>";
    				html += "<div class='photo-session'>";
    				html += "<input type='hidden' name='marketNo' value="+data[i].marketNo+">";
    				html += "</div>";
    				html += "<span>"+data[i].typeName+"</span>";
    				html += "<li>분양가격 : "+data[i].price+"원</li>";
    				html += "</div>";
    			};
    			$(".sale-wrap").html(html);
    		},
    	});
    }else if(categoryIndex == 4){
    
    }
        category.css({
            "background-color":"#fff",
            "color":"black"
        });
        category.eq(categoryIndex).css({
            "background-color":"#1abc9c",
            "color":"#fff"
        });
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