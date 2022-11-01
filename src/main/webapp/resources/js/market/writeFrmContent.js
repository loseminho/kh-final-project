/**
 * 
const inputBtn= $(".photo-box").children("span");
inputBtn.on("click",function(){
 	const idx = inputBtn.index(this);
 	$("[name=photo]").eq(idx).trigger("click");
 });
 
$("#imageFile").change(function(){
	const idx = $("#imageFile").index(this);
	console.log(idx);
    setImageFromFile(this, '#preview',idx);
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