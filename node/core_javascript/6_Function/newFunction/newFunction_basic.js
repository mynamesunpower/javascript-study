/*
    new Function
    기존에 함수를 만드는 방법과 이것의 차이는 런타임에 받은 문자열을 사용해 함수를 만들 수 있음!

 */

// let func = new Function([arg1, arg2, .. argN], functionBody);
let func = new Function('a', 'b', 'return a + b');
console.log(func(1, 2));

// 함수 본문만 있는 함수
let sayHi = new Function('console.log("Hello")');
sayHi();

let str = 'aaaaaa'; // 서버에서 동적으로 전달받은 문자열(코드 형태)
let fun = new Function(str);
fun();

// new Function 을 이용해 만든 함수는 [[Environment]] 프로퍼티가 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조한다.
// 따라서 전역 변수에만 접근 가능.