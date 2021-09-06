/*
나이를 기준으로 객체 정렬하기
중요도: 5
프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.
 */
let pete = { name: "Pete", age: 30 };
let john = { name: "John", age: 25 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

/*
    Array.prototype.sort([compareFunction])
    기본 정렬 순서는 문자의 unicode point.
    정렬 정의 함수를 잘 만들어야 함.
    compareFunction(a, b) 의 반환 값에 따라 정렬된다는 것에 유의.
    compareFunction(a, b) < 0 : a가 먼저
    compareFunction(a, b) = 0 : 서로를 변경하지 않고 다른 요소에 대해 정렬, but ECMAscript 표준이 보장하지 않으므로 모든 브라우저에 적용될지는 미지수
    compareFunction(a, b) > 0 : b가 먼저
 */
const sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

console.log(arr);