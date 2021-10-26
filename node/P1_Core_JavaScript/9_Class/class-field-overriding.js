/*
    클래스 필드 오버라이딩
    :: 메서드 뿐 아니라, 클래스 필드를 대상으로도 적용 가능함!
 */

class Animal {
    name = 'animal'

    constructor() {
        console.log(this.name);
    }
}

class Rabbit extends Animal {
    name = 'rabbit';    // 필드 초기화 순서 때문에, Rabbit 의 필드는 super(...args) 실행 후에 초기화된다.
                        // 그러므로 super()에서의 this.name 은 animal.
}

new Animal();
new Rabbit(); // 필드 값을 override 했으나 부모 클래스의 필드 값을 사용함.

class Animal2 {
    showName() {
        console.log('animal')
    }

    constructor() {
        this.showName();
    }
}

class Rabbit2 extends Animal2 {
    showName() {
        console.log('rabbit')
    }
}

new Animal2();
new Rabbit2();  // rabbit





/*
    super 와 [[HomeObject]]
 */
let animal = {
    name: '동물',
    eat() {
        console.log(`${this.name}이/가 먹이를 먹습니다.`);
    }
};

let rabbit = {
    __proto__: animal,
    name: '토끼',
    eat() {
        console.log(this);
        this.__proto__.eat.call(this);
    }
};
rabbit.eat();

let longEar = {
    __proto__: rabbit,
    eat() {
        // console.log(this);
        this.__proto__.eat.call(this);
    }
};

longEar.eat();


// [[HomeObject]] 는 클래스, 일반 객체의 메서드에서 정의된다.
// 객체 메서드의 경우, 반드시 method() 형태로 정의해야 함.
// eat() {} (OK)
// eat: function() {} (NO)