/*
    counter는 독립적일까요?
    중요도: 5
    makeCounter를 사용해 두 개의 conuter counter와 counter2를 만들었습니다.

    두 counter는 독립적일까요? 두 번째 카운터는 0, 1이나 2, 3중 어떤 숫자를 얼럿창에 띄워줄까요?
    다른 결과가 출력될까요?
 */
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2());
console.log(counter2());
// 독립적임.
// 0, 1