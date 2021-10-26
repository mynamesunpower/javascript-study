/*
    정적 메서드 & 정적 프로퍼티
    prototype 이 아닌 클래스 자체에 메서드를 설정.
 */

class User {
    static staticMethod() {
        console.log(this === User);
    }
}

User.staticMethod(); // true, this 의 값은 클래스 생성자인 User 자체가 됨.

// 메서드를 프로퍼티 형태로 직접 할당하는 것과 동일하므로 아래와 같음.
/*
class User { }

User.staticMethod = function () { console.log(this === User); }
User.staticMethod();
 */


/*
    정적 프로퍼티 :: 최근 추가됨. 폴리필 or Chrome 에서만 동작 가능.
 */
class Article {
    static publisher = 'Ilya Kantor';
}

console.log(Article.publisher);

/*
    정적 프로퍼티, 정적 메서드는 상속됨.
 */
class Animal {
    static planet = '지구';

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name}가 숨었습니다!`);
    }
}

const rabbits = [new Rabbit('흰 토끼', 10), new Rabbit('검은 토끼', 5)];
rabbits.sort(Rabbit.compare);

rabbits[0].run();
console.log(Rabbit.planet);


//
class Planet { }
class Earth extends Planet { }

console.log(Earth.__proto__ === Planet); // true :: 클래스 Earth (함수 Earth) 의 [[Prototype]] 은 클래스 Planet (함수 Planet)
console.log(Earth.prototype.__proto__ === Planet.prototype); // true :: 클래스 Earth 의 프로토타입의 [[Prototype]]은 클래스 Planet 의 프로토타입.