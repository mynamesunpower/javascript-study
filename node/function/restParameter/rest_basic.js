/*
    ... params
    상당 수의 JS 내장 함수는 인수의 개수에 제약을 두지 않음.
    - Math.max(arg1, arg2, ..., argN) : 인수 중 가장 큰 수 반환
    - Object.assign(dest, src1, ..., srcN) : src1..N 의 프로퍼티를 dest 로 복사함.
 */

// 함수 정의 방법에 관계없이 인수의 개수에는 제약이 없다
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4, 5)); // 다만 반환값은 처음 두 개의 인수만을 사용

// 여분의 매개변수는 그 값들을 담을 배열 이름을 ... 뒤에 붙여주면 함수 선언부에 포함시킬 수 있음
function sumAll(...args) {
    return args.reduce((prev, curr) => prev + curr);
}
console.log(sumAll(1, 2, 3));

// 앞 부분의 매개변수는 변수로, 그 이외의 매개변수는 배열로 모을 수도 있음.
function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName);
    for (const title of titles) {
        console.log(title);
    }
}
showName('Julius', 'Caesar', 'Consul', 'Imperator');
// *** 나머지 매개변수는 항상 마지막에 있어야 함! ***


/*
    arguments 변수
    특별한 array-like 객체로써 iterable 이기도 함.
    인덱스를 사용해 모든 인수에 접근 가능하다.
    화살표 함수에는 arguments 가 없음!
 */
function showName2() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    // 이터러블이므로 for..of 사용 가능.
    // for (const argument of arguments) console.log(argument);
}
showName2('Julius', 'Caesar');


/*
    spread (전개 연산자)
    배열을 통째로 매개변수에 넘겨주는 것
    Math.max(3, 5, 1) // 5
    배열 [3, 5, 1] 이 있고, 이 배열을 대상으로 Math.max를 호출하고 싶다면?
    아무런 조작 없이 배열을 그대로 max()에 넘기면 원하는 대로 동작하지 않는다. 이 친구는 숫자 목록을 인수로 받기 때문임.
    함수 호출 시, ...arr 을 사용하면, 이터러블 객체 arr이 인수 목록으로 확장된다.
 */
let arr = [3, 5, 1];
console.log(Math.max(...arr));

// 이터러블 여러 개를 전달하는 것도 가능
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2));

// 이터러블과 평범한 값과 혼합 사용도 가능
console.log(Math.max(1, ...arr1, 2, ...arr2, 25));

// 배열을 합칠 때도 전개 문법 활용 가능
let merged = [...arr1, ...arr2];
console.log(merged);

// 문자열도 이터러블이므로 사용 가능
console.log([...'hello']);

// Array.from(obj) 도 사용 가능
console.log(Array.from('hello'));
// 동일한 결과가 출력된다.
// 그러나 Array.from(obj)와 [...obj]는 차이가 있음.
// Array.from : array-like, iterable 모두 사용 가능
// [...obj] : iterable 만 사용 가능