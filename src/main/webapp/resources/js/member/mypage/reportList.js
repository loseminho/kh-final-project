let clickedIndex;

$(document).ready(function(){
	clickedIndex = 0;

	$(".report-select").eq(clickedIndex).css("color", "#1abc9c");
	$(".report-list").eq(clickedIndex).show();
});

$(".report-select").on("click", function(){
	const index = $(".report-select").index(this);
	
	if(index != clickedIndex){
		clickedIndex = index;
		$(".report-select").css("color", "black");
		$(".report-select").eq(clickedIndex).css("color", "#1abc9c");
		
		$(".report-list").hide();
		$(".report-list").eq(clickedIndex).show();
	}
});