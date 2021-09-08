/*
클로저를 이용하여 합 구하기
중요도: 4
sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어보세요.

두 개의 괄호를 사용해서 말이죠.
예시:
sum(1)(2) = 3
sum(5)(-1) = 4
 */

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
