/*
임의의 수만큼 있는 괄호를 이용해 합계 구하기
중요도: 2
다음과 같이 작동하는 함수 sum을 만들어보세요.

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
힌트: 해당 함수 내부에서 쓸 수 있는 객체-원시형으로의 형 변환을 직접 구현해야 할 수도 있습니다.
 */

function sum(a) {
    function f(b) {
        return sum(a + b);
    }

    f.toString = () => a;

    return f;
}

console.log(sum(1)(2).toString());

// 급 어려워진다
// TODO reminder