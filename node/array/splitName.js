/*
이름 매핑하기
중요도: 5
name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다.
name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.
예시:
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [ john, pete, mary ];

    let names = 여기에 코드를 작성하세요.

    alert( names ); // John, Pete, Mary
 */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log(names);