/*
    기명 함수 표현식
    이름이 있는 '함수 표현식'
 */

// 일반 함수 표현식
const sayHi = function(who) {
    console.log(`Hi, ${who}`);
};

// 이름을 붙인다면?
const sayHello = function func(who) {
    console.log(`Hello, ${who}`);
};
// 이름을 붙여도 여전히 함수 표현식임. 선언문이 아님.
// 이름을 추가한다고 기존에 동작하던 기능이 동작하지 않는 일은 발생하지 않는다.

/*
    기명 함수 표현식에 생기는 2가지 변화
    1. 이름을 사용해 함수 표현식 내부에서 자기 자신 참조 가능
    2. 기명 함수 표현식 외부에선 그 이름을 사용할 수 없음
 */
const sayBye = function func(who) {
    if (who) {
        console.log(`Bye, ${who}`);
    } else {
        func('Guest');  // 왜 중첩 호출할 때 sayBye() 대신 func() 를 사용했을까?
        // sayBye('Guest'); 대부분의 개발자는 이렇게 코드를 작성한다.
    }
}
// 하지만 외부 코드에 의해 sayBye가 변경될 수 있다는 문제가 있음.
// 함수 표현식을 새로운 변수에 할당하고, 기존 변수에 null을 할당하면 에러가 발생.
// let welcome = sayBye;
// sayBye = null;

// func 이름은 함수 지역 수준(function-local)에만 존재함. 함수 표현식에 붙은 이름은 현재 함수만 참조하도록 명세서에 정의되어 있음.