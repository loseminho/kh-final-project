const input = $(".box>input");
const btn = $(".btn");
let checks = [0, 0, 0, 0, 0]; // input value들의 적합성 여부를 저장하기 위한 배열
 // 초기값은 0, 정규표현식을 만족하거나 비밀번호 값이 일치하면 1로 변경
 // 정규표현식을 만족하지 않거나 비밀번호 값이 일치하지 않으면 그대로 0 유지
 // submit 버튼 클릭 시 checks에 0이 하나라도 있으면 제출 막음

// 정규표현식
const idReg = /^[a-z0-9]{4,12}$/;
const pwReg = /^[a-zA-Z0-9]{6,18}$/;
const nameReg = /^[가-힣]{2,4}$/;
const phoneReg = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
const lowerReg = /[a-z]/; // 소문자를 1글자 이상 포함
const upperReg = /[A-Z]/; // 대문자를 1글자 이상 포함
const numReg = /[0-9]/; // 숫자를 1글자 이상 포함

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
        } else if (checks.includes(0)) { //checks 배열에 0이 포함되어 있으면
            event.preventDefault(); // submit 막기
        }
    }
});

for(let i=0; i<input.length; i++) {
    input.eq(i).on("change", function(event){
        const val = $(this).val(); // input의 value값 가져옴
        const comment = $(this).prev().children(); // 알림 멘트 띄울 span
        checks[i] = 0;

        if(i == 0) {
            if(!(idReg.test(val) && lowerReg.test(val) && numReg.test(val))) { // 정규표현식을 만족하지 않는다면
                comment.text("영문 소문자+숫자 4~12글자");
                event.preventDefault();
            } else { // 정규표현식을 만족한다면
                checks[i] = 1; // checks[i]를 1로 변경
                comment.text(""); // 알림 멘트를 없앰
            }
        } else if(i == 1 || i == 2) {
            const pwVal = input.eq(1).val();
            const pwComment = input.eq(1).prev().children();
            const pwReVal = input.eq(2).val();
            const pwReComment = input.eq(2).prev().children();

            if(!(pwReg.test(pwVal) && upperReg.test(pwVal) && lowerReg.test(pwVal) && numReg.test(pwVal))) { // 정규표현식을 만족하지 않는다면
                checks[1] = 0;
                pwComment.text("영문 대문자+소문자+숫자 6~18글자");
                pwReComment.text();
                event.preventDefault();
            } else { // 정규식 조건을 만족한다면
                checks[1] = 1;
                pwComment.text("");
                if (pwVal != pwReVal) { // 비번이 확인과 같지 않다면 
                    checks[2] = 0;
                    pwReComment.text("비밀번호가 일치하지 않습니다.");
                    event.preventDefault();
                } else { // 비번이 확인과 같다면
                    checks[2] = 1;
                    pwReComment.text("");
                }
            } 
        } else if(i == 3) {
            if(!(nameReg.test(val))) { // 정규표현식을 만족하지 않는다면
                comment.text("한글 2~4글자");
                event.preventDefault();
            } else { // 정규표현식을 만족한다면
                checks[i] = 1;
                comment.text("");
            }
        } else if(i == 4) {
            if(!(phoneReg.test(val))) { // 정규표현식을 만족하지 않는다면
                comment.text("XXX-XXX(X)-XXXX 형식");
                event.preventDefault();
            } else { // 정규표현식을 만족한다면
                checks[i] = 1;
                comment.text("");
            }
        }
    });
}
