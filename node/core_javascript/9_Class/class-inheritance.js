class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name}이/가 멈췄습니다.`)
    }
}

let animal = new Animal('동물');

/*
    객체 animal 과 클래스 Animal 의 관계도
           prototype
    Animal ---------> Animal.prototype { constructor: Animal, run: function, stop: function }
                            ↑ [[Prototype]]
                      new Animal { name: '동물' }
 */

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name}이/가 숨었습니다!`);
    }
}
let rabbit = new Rabbit('흰 토끼');
rabbit.run(5);
rabbit.hide();


/*
    extends 뒤에 표현식이 올 수도 있다
 */
function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}
class User extends f('hello!') {}
new User().sayHi();