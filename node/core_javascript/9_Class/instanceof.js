/*
    instanceof 클래스 확인하기
    :: 객체가 특정 클래스에 속하는지 여부 확인 가능
    :: 상속 관계도 확인해 줌!

    용례
    obj instanceof Class
 */

const obj = {}

console.log(obj instanceof Object);

class Rabbit {}
let rabbit = new Rabbit();

// rabbit 은 클래스 Rabbit 의 객체일까?
console.log(rabbit instanceof Rabbit);

// 상속받는 클래스에 속해도 true 반환
class LongEar extends Rabbit {}
let longEar2 = new LongEar();
console.log(rabbit instanceof LongEar); // false
console.log(longEar2 instanceof LongEar);
console.log(longEar2 instanceof Rabbit);

// 생성자 함수에서도 사용 가능
function Human() {}

console.log(new Human() instanceof Human); // true

// 내장 클래스에서도 사용 가능
console.log([1, 2, 3] instanceof Array); // true
console.log([1, 2, 3] instanceof Object); // true

/*
    instanceof 는 프로토타입 체인을 거슬러오르며 인스턴스 여부나 상속 여부를 확인함
    정적 메서드 Symbol.hasInstance 를 사용하면 직접 확인 로직 설정도 가능!

    obj instanceof Class 의 동작 원리
    - 클래스에 정적 메서드 Symbol.hasInstance 가 구현되어 있으면,
      obj instanceof Class 구문이 실행될 때,
      class[Symbol.hasInstance](obj) 가 호출됨! // true or false
 */
class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}
let obj2 = { canEat: true };
console.log(obj2 instanceof Animal);

/*
    그러나 대부분의 클래스에는 Symbol.hasInstance 가 구현되어 있지 않음.
    이럴 때는 일반적인 로직이 사용됨.
    Class.prototype 이 obj 프로토타입 체인 상의 프로토타입 중 하나와 일치하는지 확인!
    obj.__proto__ === Class.prototype ?
    obj.__proto__.__proto__ === Class.prototype ?
    obj.__proto__.__proto__.__proto__ === Class.prototype ?
    ...
    // 하나라도 true 라면 true 반환, 그렇지 않고 체인의 끝에 도달하면 false 반환
 */
