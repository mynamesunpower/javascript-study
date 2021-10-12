/*
데코레이팅 "defer()"를 함수에 추가하기
중요도: 4
모든 함수의 프로토타입에 ms 밀리세컨초 지연 호출 래퍼를 반환하는 defer(ms) 메서드를 추가하세요.

아래는 동작예시 입니다.
 */
function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (milliseconds) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), milliseconds);
    }
}

f.defer(1000)(1, 2);
// 조낸 복잡하네..