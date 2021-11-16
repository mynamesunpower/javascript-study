/*
    전역 객체를 사용하면 어디서나 사용 가능한 변수나 함수를 만들 수 있음.
    브라우저에선 전역 객체를 window, Node.js 환경에선 global 이라고 부른다.
    전역 객체의 이름을 globalThis 로 표준화하자는 내용이 최근 ECMA 명세에 추가되어 따라야 한다.
 */
console.log('hello');
// 아래와 동일하다.
global.console.log('hello');

// let 이나 const 가 아닌 var 로 선언된 전역 함수나 전역 변수는 전역 객체의 프로퍼티가 된다.
var gVar = 5;
console.log(global.gVar); // global 의 프로퍼티는 아닌가봄?

// 중요한 변수라서 모든 곳에서 사용할 수 있게 하려면, 전역 객체에 직접 프로퍼티를 추가
window.currentUser = {
    name: 'John'
}
console.log(currentUser.name);
// 지역 변수 currentUser 가 있다면 지역 변수와 충돌 없이 전역 객체 window 에서 명시적으로 가져올 수 있음.
console.log(window.currentUser.name);