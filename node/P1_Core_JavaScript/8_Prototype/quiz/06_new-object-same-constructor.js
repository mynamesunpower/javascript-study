/*
동일한 생성자 함수로 객체 만들기
중요도: 5
생성자 함수가 하나 있고, 이 생성자 함수를 사용해 만든 임의의 객체 obj가 있다고 가정해봅시다. 지금은 이 생성자 함수를 사용해 새로운 객체를 만들어야하는 상황입니다.

정체를 모르는 생성자 함수를 사용해 새로운 객체를 만드는게 가능할까요?
 */

function Meow() {
    console.log('야옹');
}
Meow.prototype = {};
let obj = new Meow();

let obj2 = new obj.constructor(); // 가능.
// 위 코드가 동작하지 않게 하려면? 프로토타입을 빈 객체로 덮어쓴다.


let obj3 = new obj.constructor(); // 실패

/*
    new obj.constructor('Pete') 의 동작 원리
    1. obj 에서 constructor 를 찾는데, 아무것도 찾지 못함.
    2. 객체에서 프로퍼티를 찾지 못했으므로, 프로토타입에서 검색 시작.
    3. obj 의 프로토타입은 Meow 인데, Meow.prototype 은 빈 객체 {} 임.
    4. User.prototype 은 일반 객체 ( {} ) 이고, constructor 를 찾지 못했으므로, 프로토타입에서 검색 시작.
    5. 일반 객체의 프로토타입은 Object.prototype 임.
    6. Object.prototype.constructor === Object 이므로, new Object() 가 사용됨.
    7. Object 의 생성자는 인수를 무시하고 항상 빈 객체를 생성하므로,
    8. let user2 = new Object('Pete')은 let user2 = {} 와 동일함.
    9. 따라서, user2.name 은 undefined.
 */