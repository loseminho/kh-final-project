const previewBox= $(".preview-box");

 var reader = new FileReader();
 var fidx =0;
 reader.onload = function(e){
	$(".preview").eq(fidx).attr('src',e.target.result);
}
$(document).ready(function(){
	$(".photo").change(function(){
		fidx = $(".photo").index(this);
		 if (this.files && this.files[0]) {
	 		reader.readAsDataURL(this.files[0]);
	 	}
	 	
	 	const idx = $(".photo").index(this);
	 	console.log("input tag fileNo::"+$(".photo").eq(idx).nextAll('input').attr('disabled') );
	 	$(".photo").eq(idx).nextAll('input').attr("disabled",true);
	 	console.log("input tag fileNo::"+$(".photo").eq(idx).nextAll('input').disabled);
	});
	previewBox.on("click",function(){

	 	const idx = previewBox.index(this); 
	 	
		console.log(idx);
		
	 	$(".photo").eq(idx).trigger("click");
 	
 	});
});




const tooltip = $(".tooltip");
tooltip.hide();
$(".my-preview").on("mouseover",function(){
	var index = $(".my-preview").index(this);
	tooltip.eq(index).show();
});
$(".my-preview").on("mouseleave",function(){
	var index = $(".my-preview").index(this);
	tooltip.eq(index).hide();
});

$(".my-preview-box").on("click",function(){
	const index = $(".my-preview-box").index(this);
		$(".updateForm").eq(index).submit();
});