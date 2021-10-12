/*
    함수의 prototype 프로퍼티.

    new F() 와 같은 생성자 함수를 이용하면 새로운 객체를 만들 수 있었음.
    근데, F.prototype 이 객체면, new 연산자는 F.prototype 을 사용해 새롭게 생성된 객체의 [[Prototype]] 을 설정함.

    F.prototype 은 앞서 배운 프로토타입 객체와 다름. 일반 프로퍼티임.
 */
let animal = {
    eats: true
};
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;  // -> 구문의 의미: new Rabbit 을 호출해 만든 새로운 객체의 [[Prototype]]을 animal 로 설정해라.
let rabbit = new Rabbit('White Rabbit'); // rabbit.__proto__ == animal

console.log(rabbit.eats);
/*
    F.prototype 은 new F 를 호출할 때만 사용된다.
    new F 를 호출해 새롭게 만든 객체의 [[Prototype]]을 할당한다.
    새로운 객체가 만들어진 후, F.prototype 프로퍼티를 변경하면,
    ex) F.prototype = <another object>
    new F 로 만들어지는 새로운 객체는 또 다른 객체를 [[Prototype]]으로 가지게 됨.
    그래도 기존 객체의 [[Prototype]]은 유지된다.
 */

// 기본 prototype
// 모든 함수는 prototype 프로퍼티를 가짐.
function Cat() {}
// 기본 프로퍼티인 prototype 은 constructor 프로퍼티 하나만 있는 객체를 가리키는데, 이 constructor 프로퍼티는 함수 자신을 가리킨다.
Cat.prototype = { constructor: Cat };

// 아래의 예제로 확인하기
function Dog() {}
// 기본 prototype: Dog.prototype = {constructor: Dog}
console.log(Dog.prototype.constructor === Dog);

// 특별히 조작하지 않았다면, Dog 를 구현한 객체 모두에서 [[Prototype]]을 거쳐 constructor 프로퍼티 사용 가능.
let dog = new Dog();
console.log(dog.constructor === Dog);

// constructor 프로퍼티를 사용하면 기존에 있던 객체의 constructor 를 사용해 새로운 객체를 만드는 것도 가능.
let dog2 = new dog.constructor();

// 함수에 기본으로 prototype 이 달려 있긴 하나, constructor 에서 벌어지는 모든 일은 개발자 몫임.
// 기본 prototype 값을 다른 객체로 바꾸면 constructor 가 없을 것임.
function Rang() {}
Rang.prototype = {
    jumps: true
}

let rang = new Rang();
console.log(rang.constructor === Rang); // false
// 이를 방지하려면, prototype 전체를 덮어쓰지 않고, 기본 prototype 에 프로퍼티를 추가/제거해야 함.
Rang.prototype.jumps = true;
// 또는 constructor 프로퍼티를 수동으로 다시 만드는 것도 OK
Rang.prototype.constructor = Rang;