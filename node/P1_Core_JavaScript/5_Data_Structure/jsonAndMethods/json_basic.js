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
    순환 참조가 있다면 원하는 대로 객체를 문자열로 바꾸기 불가능함.
 */
let room = {
    number: 23
}
let meetup = {
    title: 'Conference',
    participants: ['john', 'ann']
}
meetup.place = room;
room.occupiedBy = meetup;

// TypeError: Converting circular structure to JSON
// JSON.stringify(meetup);


// Replacer 로 원하는 프로퍼티만 직렬화하기
/*
    JSON.stringify 의 전체 문법
    let json = JSON.stringify(value[, replacer, space])
    value : 인코딩 하려는 값
    replacer : JSON 으로 인코딩하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
    space : 서식 변경 목적으로 사용할 공백 문자 수

    보통 stringify 엔 인수를 하나만 넘겨서 사용하나, 순환 참조를 다룰 경우처럼 전환 프로세스를 정교하게 조정하려면 두 번째 인수 사용해야 함.
 */
let room2 = {
    number: 23
};
let meetup2 = {
    title: 'Conference',
    participants : [{name: 'John'}, {name: 'Alice'}],
    place: room2
};
room2.occupiedBy = meetup2;
console.log(JSON.stringify(meetup2, ['title', 'participants', 'place', 'name', 'number']))

console.log(JSON.stringify(meetup2, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key === 'occupiedBy') ? undefined : value;
}))

/*
    space 로 가독성 높이기
    space 는 가독성을 높이기 위한 용도로 만들어졌기 때문에, 단순 전달 목적이라면 space 없이 직렬화하는 편임.
 */
let man = {
    name: 'John',
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
}
console.log(JSON.stringify(man, null, 2));


/*
    커스텀 toJSON
    toString 을 이용해 객체를 문자형으로 변환시키는 것처럼, 객체에 toJSON 메서드가 구현되어 있으면 객체를 JSON 으로 바꿀 수 있다.
    JSON.stringify 는 이런 경우를 감지하고 toJSON 을 자동으로 호출한다
 */
let room3 = {
    number: 23
};
let meetup3 = {
    title: 'Conference',
    date: new Date(Date.UTC(2017, 0, 1)),
    room3
};
console.log(JSON.stringify(meetup3));