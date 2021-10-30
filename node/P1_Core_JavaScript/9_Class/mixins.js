/*
    자바스크립트는 단일 상속만을 허용.
    객체는 단 하나의 [[Prototype]] 만 가질 수 있음!

   Class StreetSweeper / Class Bicycle 이 있는데, Class StreetSweepingBicycle 을 만들고 싶다면 ?
   이럴 때 믹스인이라 불리는 개념을 사용.

   믹스인 :: 다른 클래스를 상속받을 필요 없이 이들 클래스에 구현되어 있는 메소드를 담고 있는 클래스.
 */
let sayHiMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User('Dude').sayHi();