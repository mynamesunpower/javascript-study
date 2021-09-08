/*
함수를 이용해 원하는 값만 걸러내기
중요도: 5
배열에 사용할 수 있는 내장 메서드 arr.filter(f)는 함수 f의 반환 값을 true로 만드는 모든 요소를 배열로 반환해줍니다.

filter에 넘겨서 사용할 수 있는 함수 두 가지를 만들어봅시다.

inBetween(a, b) – a 이상 b 이하
inArray([...]) – 배열 안에 있는 값인가
위 함수를 활용하면 다음과 같은 결과가 나와야 합니다.

arr.filter(inBetween(3,6)) – 3과 6 사이에 있는 값만 반환함
arr.filter(inArray([1,2,3])) – [1,2,3] 안에 있는 값과 일치하는 값만 반환함
예시:

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
 */

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function(v) {
        return a <= v && v <= b;
    };
}
console.log(arr.filter(inBetween(3, 6)));


function inArray(arr) {
    return function (v) {
        return arr.includes(v);
    }
}
console.log(arr.filter(inArray([1, 2, 10])));

// Well done!
// P.S: 먼저 arr.filter()의 콜백 함수를 짜보고 난 뒤에, 클로저로 전환해보자. 한 방에 클로저로 짜기엔 아직 미숙함.