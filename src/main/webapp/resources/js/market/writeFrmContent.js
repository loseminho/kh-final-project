const previewBox= $(".preview-box");

 var reader = new FileReader();
 var fidx =0;
 reader.onload = function(e){
	$(".preview").eq(fidx).attr('src',e.target.result);
}
$(document).ready(function(){
	$(".photo").change(function(){
		fidx = $(".photo").index(this);
		console.log(fidx);	
		console.log(this.files);
		
		 if (this.files && this.files[0]) {
	 		reader.readAsDataURL(this.files[0]);
	 	}
	});
	previewBox.on("click",function(){

	 	const idx = previewBox.index(this);
	 	
		console.log(idx);
		
	 	$(".photo").eq(idx).trigger("click");
 	
 	});
});