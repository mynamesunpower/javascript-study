/**
 *  자바스크립트의 객체는 명세서에서 명명한 [[Prototype]] 숨김 프로퍼티가 있음.
 *  이 값은 null 또는 다른 객체에 대한 참조가 됨. 다른 객체에 대한 참조라면 그 대상을 프로토타입이라고 부른다.
 *
 *  객체에서 프로퍼티를 읽으려는데 그 프로퍼티가 없다면, 프로토타입에서 프로퍼티를 찾는다.
 *  특별한 이름인 __proto__ 를 사용하면 값 설정 가능
 */
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;
console.log(rabbit.eats);

// __proto__ 는 [[Prototype]] 용 getter/setter 임!
// 하위호환성 때문에 남아 있긴 하지만, 최근 스크립트에선 Object.getPrototypeOf 나 Object.setPrototypeOf 를 써서 프로토타입을 획득하거나 설정한다.

Object.defineProperty(animal, 'walk', {
    value: function() {
        console.log('동물이 걷습니다.');
    }
});
rabbit.walk();

let longEar = {
    earLength: 10,
    __proto__: rabbit
};
longEar.walk();
console.log(longEar.jumps);
/*
    프로토타입 체이닝의 3가지 제약사항:
    1. 순환 참조 허용 불가.
    2. __proto__ 의 값은 객체나 null 만 가능.
    3. 객체는 오직 하나의 [[Prototype]] 만 있을 수 있음!
 */


// 프로토타입은 프로퍼티를 읽을 때만 사용. 추가, 수정은 객체에 직접!
animal = {
    eats: true,
    walk() {
        console.log('Animal walk()')
    }
};

rabbit = {
    __proto__: animal
}
rabbit.walk = function() {
    console.log('토끼가 깡충깡충 뜁니다!');
}
rabbit.walk(); // 이를 호출하면 프로토타입의 메서드가 실행되지 않고, rabbit 에 추가한 메서드가 실행됨! (override)


user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
}
console.log(admin.fullName);    // 프로토타입의 getter 호출.
admin.fullName = 'Alice Cooper';  // 프로토타입의 setter 호출.

console.log(user.fullName);
console.log(admin.fullName);

// 메서드를 객체에서 호출했든, 프로토타입에서 호출했든 상관 없이, this 는 언제나 . 앞의 객체임.
animal = {
    walk() {
        if (!this.isSleeping) {
            console.log('동물이 걸어갑니다.')
        }
    },
    sleep() {
        this.isSleeping = true;
    }
}

rabbit = {
    name: '하얀 토끼',
    __proto__: animal
}

rabbit.sleep(); // rabbit 의 프로퍼티 isSleeping 을 true 로 변경.
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined