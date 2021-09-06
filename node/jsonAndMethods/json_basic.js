/*
    JSON (Javascript Object Notation) 값이나 객체를 나타내주는 범용 포맷
    JSON.stringify - 객체를 JSON 으로 바꿔줌
    JSON.parse - JSON 을 객체로 바꿔줌
 */
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
}

let json = JSON.stringify(student);
console.log(typeof json);
console.log(json);
// student가 문자열로 변경됨. 이것은 JSON-encoded, serialized, stringified, marshalled 객체라고 부름.
// 이렇게 문자열로 변환된 후에야 비로소 네트워크를 통해 전송하거나 저장소에 저장 가능.

/*
    JSON 인코딩 객체의 특징
    - 문자열은 큰따옴표로 감싸야 한다. JSON 에서는 작은따옴표나 백틱 사용 불가
    - 객체 프로퍼티명은 큰따옴표로 감싸야 함.
    - 객체뿐만 아니라 원시값에도 적용 가능
    - 적용할 수 있는 자료형
        1. 객체 { ... }
        2. 배열 [ ... ]
        3. 원시형
            - 문자형
            - 숫자형
            - 불린형 값 (true, false)
            - null
 */
console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));

/*
    JSON.stringify 호출 시 무시되는 프로퍼티
        - 함수 프로퍼티 (메소드)
        - 심볼형 프로퍼티 (키가 심볼인 프로퍼티)
        - 값이 undefined 인 프로퍼티
 */
let user = {
    sayHi() {   // 무시
        console.log('hello');
    },
    [Symbol('id')]: 123, // 무시
    something: undefined    // 무시
}
console.log(JSON.stringify(user));  // {} 빈 객체가 출력됨

/*
    주의점
    
 */