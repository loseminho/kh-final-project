const previewBox= $(".preview-box");
previewBox.on("click",function(){
 	const idx = previewBox.index(this);
	console.log(idx);
 	$("#imageFile").eq(idx).trigger("click");
 	
 });
 
/**
 * 
$("#imageFile").change(function(){

});

function setImageFromFile(input, expression, idx) {
	console.log(idx);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(expression).eq(idx).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
 */