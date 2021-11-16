/*
    일정 시간이 지난 후에 원하는 함수를 예약실행(호출) 할 수 있게 하는 것을 호출 스케줄링(scheduling a call)라고 함.
    구현하는 방법은 2가지.
    setTimeout 을 이용해 일정 시간 지난 후 함수 실행하는 방법
    setInterval 을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법.
 */

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// func|code : 실행하고자 하는 코드로, 함수 또는 문자열 형태. 보통 함수가 들어간다. 하위 호환성으로 문자열도 받을 수 있게 되어 있지만 비추.
// delay : 실행 전 대기 시간 (단위는 ms, default 는 0)
// arg1, arg2, ... : 함수에 전달할 인수들로, IE9 이하에선 미지원
function sayHi() {
    console.log('안녕하세요!');
}
let timerId = setTimeout(sayHi, 1000);
console.log(timerId);   // 브라우저에선 타이머 식별자가 숫자임. 여기서는 객체.
clearTimeout(timerId);
console.log(timerId);

function sayHello(who, phrase) {
    console.log(`${who}님, ${phrase}`);
}
setTimeout(sayHello, 1000, '홍길동', '안녕하세요.');

/*
    setTimeout 을 호출하면 타이머 식별자('timer identifier')가 반환됨.
    스케줄링을 취소하고 싶을 때는 이 식별자를 사용하면 된다.
 */


/*
    무언가를 일정 간격을 두고 실행하는 방법은 크게 2가지인데, 하나는 setInterval 을 사용.
    하나는 중첩 setTimeout 이용.
    이 방법은 setInterval 보다 유연함. 호출 결과에 따라 다음 호출을 원하는 방식으로 조절 가능하기 때문.
 */
let timerId2 = setTimeout(function tick() {
    console.log('째깍');
    timerId2 = setTimeout(tick, 2000); // (*) 이 줄의 실행이 종료되면 다음 호출을 스케줄링.
}, 2000);

