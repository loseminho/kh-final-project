const input = $(".box>input");
const btn = $(".btn");
let check = 0; // 아이디(이메일) input value의 적합성 여부를 저장하기 위한 변수
 // 초기값은 0, 정규표현식을 만족하면 1로 변경
 // 정규표현식을 만족하지 않으면 그대로 0 유지
 // submit 버튼 클릭 시 check가 0이면 제출 막음

// 정규표현식
const idReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// input에 focus in 시 라벨 및 보더 바텀에 효과주기
input.on("focusin", function() {
    const label = $(this).prev();
    const span = label.prev();
    label.removeClass("innerLabel");
    $(this).css("border-color", "#1abc9c");
    span.css("color", "#1abc9c");
});

// input에 focus out 시 라벨 및 보더 바텀에 효과주기
input.on("focusout", function() {
    if($(this).val() == "") { // input 내용이 비어있다면 초기화
        const label = $(this).prev();
        const span = label.prev();
        const comment = label.children();
        comment.text("");
        label.addClass("innerLabel");
        $(this).css("border-color", "#ccc");
        span.css("color", "#000000");
    } else { // input에 작성된 내용이 있다면 효과 남겨두기
        const label = $(this).prev();
        const span = label.prev();
        label.removeClass("innerLabel");
        $(this).css("border-color", "#1abc9c");
        span.css("color", "#1abc9c");
    }
});

// sign up 버튼 클릭 시
btn.on("click", function(event){
    for(let i=0; i<input.length; i++) {
        if(input.eq(i).val() == "") { // 비어있는 input이 있다면
            event.preventDefault(); // submit 막기
            const comment = input.eq(i).prev().children(); // 비어있는 input에 알림 멘트 주기
            comment.text("입력 필수입니다.");
        }else if (check == 0) { //check가 0이면
            event.preventDefault(); // submit 막기
        }
    }
});

for(let i=0; i<input.length; i++) {
    input.eq(i).on("change", function(event){
        const val = $(this).val(); // input의 value값 가져옴
        const comment = $(this).prev().children(); // 알림 멘트 띄울 span

        if(i == 0) {
            if(!idReg.test(val)) { // 정규표현식을 만족하지 않는다면
                comment.text("이메일 형식으로 입력해주세요");
                event.preventDefault();
            } else { // 정규표현식을 만족한다면
                check = 1; // check를 1로 변경
                comment.text(""); // 알림 멘트를 없앰
            }
        } else if(i == 1) {
            const pwVal = input.eq(1).val();
            const pwComment = input.eq(1).prev().children();

            if(pwVal != "") {
                pwComment.text("");
            }
        } 
    });
}
