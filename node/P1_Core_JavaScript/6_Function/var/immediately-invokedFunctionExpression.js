/*
    즉시 실행 함수 표현식(IIFE)
    과거엔 var 만 사용할 수 있었지만, 블록 레벨 스코프가 아니기에 개발자들은 var 가 블록 레벨 스코프를 가질 수 있도록 방안을 생각함.
    이 때 만들어진게 IIFE. 요즘에는 잘 쓰지 않음.
 */
(function () {
    let message = 'hello';
    console.log(message);
})();

// JavaScript 가 함수 표현식이라고 인식하게 해주는 다른 방법
// IIFE 만들기
(function() {
    console.log(`함수를 괄호로 둘러싸기`);
})();

(function() {
    console.log(`전체를 괄호로 둘러싸기`);
}());

!function() {
    console.log(`표현식 앞에 bit NOT 연산자 붙이기`);
}();

+function() {
    console.log(`표현식 앞에 단항 덧셈 연산자 붙이기`);
}();