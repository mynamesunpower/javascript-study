/*
    구조 분해 할당 (destructuring assignment) : 객체나 배열을 '변수' 로 분해할 수 있게 해주는 특별한 문법
 */

let arr = ['Taeyang', 'Kim'];

let [firstName, surname] = arr;
console.log(`${firstName}, ${surname}`);

// 다음도 가능하다
let [firstName2, surname2] = 'Taeyang Kim'.split(' ');

// 쉼표를 사용하면 필요하지 않은 배열 요소를 버릴 수 있음
let [firstName3, , rests] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(rests);

// 할당 연산자 우측에는 모든 이터러블이 올 수 있음.
let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

// 할당 연산자 좌측에는 할당할 수 있는 것(assignable)이라면 뭐든지 올 수 있음
let user = {};
[user.name, user.surname] = 'Bora Lee'.split(' ');
console.log(user.name);

// .entries() 로 반복하기
let user2 = {
    name: 'John',
    age: 30
}
for (let [key, value] of Object.entries(user2)) {
    console.log(`${key}: ${value}`);
}

// 변수 교환 트릭
let guest = 'Jane';
let admin = 'Peter';
[guest, admin] = [admin, guest];
console.log(`guest: ${guest}, admin: ${admin}`);

// ...로 나머지 요소 가져오기
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(`${name1}, ${name2}`);
console.log(rest);

// 구조 분해 할당의 기본값
let [first, second] = [];
console.log(`${first} ${second}`) // 기본적으론 undefined (에러가 발생하지 않음)
let [third = 'Guest', fourth = 'Anonymous'] = ['Julius'];
console.log(`${third} ${fourth}`);

// 복잡한 표현식이나 함수 호출도 기본값이 될 수 있음.
let [fifth = console.log('fifth'), sixth = console.log('sixth')] = ['김'];
console.log(`${fifth} ${sixth}`);


/*
    객체 분해하기
    할당 연산자 우측엔 분해하고자 하는 객체를, 좌측엔 상응하는 객체 프로퍼티의 '패턴' 을 넣는다.
 */
let {var1, var2} = {var1: '1', var2: '2'};

let options = {
    title: 'Menu',
    width: 100,
    height: 200
};
// let {title, width, height} = options;
// 순서를 바꿔도 아무 문제 없음
let {height, title, width} = options;
console.log(`${title}, ${width}, ${height}`);

// 분해하려는 객체의 프로퍼티와 변수의 연결을 원하는 대로 조정도 가능
let {width: w, height: h, title: t} = options;
console.log(`${w}, ${h}, ${t}`);

// 프로퍼티가 없는 경우를 대비하여 기본값 세팅 가능
let options2 = {
    title2: 'Menu',
}
let {width: w2 = 100, height: h2 = 200, title2} = options2;
console.log(`${w2}, ${h2}, ${title2}`);

// 나머지 패턴 ...
let options3 = {
    title3: 'Menu',
    height3: 200,
    width3: 100,
}

let {title3, ...rest3} = options3;
console.log(title3);
console.log(rest3);

/*
    let 없이 사용하기
    지금까지는 let {...} = {...} 안에서 변수들을 선언하였는데, 새로운 변수를 선언하지 않고 기존에 있던 변수에 분해한 값을 할당할 수도 있음.
    이 때는 주의할 부분이 있다.
    { ... } 코드 블록의 용도는 문(statement)를 묶는 것임.
    그러므로 {title, width, height} = {title: 'menu', width: 200, height: 100} 같은 표현은 사용 불가
    이를 해결하려면 할당문을 괄호로 감싸 자바스크립트가 {...}를 코드 블록이 아닌 표현식으로 해석하게끔 해야한다
 */
({title, width, height} = {title: 'Menus', width: 300, height: 1000});
console.log(`${title}, ${width}, ${height}`);

