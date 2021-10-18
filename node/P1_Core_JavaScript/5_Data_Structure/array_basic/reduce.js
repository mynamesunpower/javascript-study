// Array.prototype.reduce()

const array1 = [1, 2, 3, 4];
const reducer = (prev, curr) => prev + curr;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

/*
   reducer 함수는 4개의 인자를 가진다
        1. 누산기 (accumulator)
        2. 현재 값 (curr)
        3. 현재 인덱스 (index)
        4. 원본 배열 (src)
    reducer 함수의 반환값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 최종 결과는 하나의 값.
 */

/*
    arr.reduce(callback[, initialValue])
    callback(누산기, 현재 값, 현재 인덱스?, 원본 배열?)
    누산기 -> 콜백의 반환값을 누적
    현재 값 -> 현재 요소
    현재 인덱스 -> 현재 인덱스 (선택적)
    원본 배열 -> 원본 배열 (선택적)
    initialValue -> callback 의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용.
                    빈 배열에서 initialValue 없이 reduce() 호출하면 에러.
 */


// 객체 배열에서의 합산
let initialValue = 0;
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce((acc, cur) => {
    return acc + cur.x;
}, initialValue);
console.log(sum);


// 중첩 배열 펼치기
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened);


// 객체 내의 값 인스턴스 개수 세기
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
const countedNames = names.reduce((acc, cur) => {
    if (cur in acc) {
        acc[cur]++;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});
console.log(countedNames);