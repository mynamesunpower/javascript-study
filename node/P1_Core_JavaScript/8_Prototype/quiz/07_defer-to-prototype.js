/*
메서드"f.defer(ms)"를 함수에 추가하기
중요도: 5
모든 함수의 프로토타입에 ms 밀리초 후에 함수를 실행하는 defer(ms)함수를 추가하세요.

함수를 프로토타입에 추가한 이후 아래 코드는 동작해야 합니다.
 */
function f() {
    console.log('Hello!');
}
Function.prototype.defer = function (milliseconds) {
    setTimeout(this, milliseconds);
}

f.defer(1000);