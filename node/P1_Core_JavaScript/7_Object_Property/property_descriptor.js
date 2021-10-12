/*
    객체엔 프로퍼티가 저장됨!
    단지 '키-밸류' 값의 관점이 아니라 더 유연하고 강력함.

    객체 프로퍼티는 값과 플래그라고 불리는 특별한 속성 세 가지를 가진다.
    writable - true 이면 값 수정 가능, 그렇지 않다면 읽기 전용
    enumerable - true 이면 반복문 사용해 나열 가능, 그렇지 않다면 반복문 사용 불가
    configurable - true 이면 프로퍼티 삭제나 플래그 수정이 가능, 그렇지 않다면 불가능

    본래의 평범한 방식으로 프로퍼티를 만들면 플래그는 전부 true 임.
 */

// 용례
// obj: 정보를 얻고자 하는 객체
// propertyName: 정보를 얻고자 하는 객체의 프로퍼티 이름. (string)
// 이를 호출하면 descriptor 객체가 반환되고, 여기는 프로퍼티 값과 3가지 플래그에 대한 정보가 모두 있음!
// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {
    name: 'John'
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
/*
    설명자 객체 :
    {
      "value": "John",
      "writable": true,
      "enumerable": true,
      "configurable": true
    }
 */

// Object.defineProperty(obj, propertyName, descriptor) 를 사용하면 플래그 변경 가능
let user1 = {};

Object.defineProperty(user1, 'name', {
    value: 'John'
});
let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');
console.log(JSON.stringify(descriptor1, null, 2));
/*
    설명자 객체:
    {
      "value": "John",
      "writable": false,
      "enumerable": false,
      "configurable": false
    }
 */

/*
    Writable Flag
 */
let man = {
    name: 'John'
};

Object.defineProperty(man, 'name', {
    writable: false
});
man.name = 'hello!'; // Error: Cannot assign to read only property 'name'
// 이제 defineProperty 로 writable flag 를 true 로 변경하지 않는 이상, 객체의 name 프로퍼티를 변경할 수 없음.
// 에러는 'use strict' 에서만 발생. 비 엄격 모드에서는 에러 없이 그냥 무시됨.

/*
    Enumerable Flag
    반복문에 나타나지 않게 할 수 있음.
 */
let woman = {
    name: 'Mary',
    toString() {
        return this.name;
    }
};

for (let key in woman) console.log(key); // name, toString
Object.defineProperty(woman, 'toString', {
    enumerable: false
})
for (let key in woman) console.log(key); // name

// 열거 불가능한 프로퍼티는 Object.keys 에서도 배제
console.log(Object.keys(woman));

/*
    configurable Flag
    구성 가능하지 않음을 나타내는 플래그 configurable: false 는 몇몇 내장 객체에 기본으로 설정되어 있음!
    설정되어 있다면, 그 프로퍼티는 객체에서 지울 수 없음.
 */
let descriptor2 = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(JSON.stringify(descriptor2, null, 2));
Math.PI = 3; // 수정도 불가능, 지우는 것도 불가능.
// *** 주의 : configurable: false 로 설정한 이후에는 돌이킬 방법이 없다. defineProperty 를 사용해도 true 로 변경 불가.
// configurable Flag, enumerable Flag 수정 불가
// writable 수정 불가 (true -> false 는 가능)
// 접근자 프로퍼티 get/set 변경 불가 (새롭게 만드는 것은 가능)
// 이 특징을 이용하면 영원히 변경 불가한 프로퍼티를 만들 수 있음.!

let sunny = {};
Object.defineProperty(sunny, 'name', {
    value: 'Sunny',
    writable: false,
    configurable: false
}); // 이제 sunny.name 의 값이나 플래그를 변경할 수 없음.
// non-configurable vs. non-writable 의 차이를 이해하자!

/*
    Object.defineProperties() 를 이용하면 프로퍼티 여러 개를 한 번에 정의 가능.
 */
let rang = {};
Object.defineProperties(rang, {
    name: { value: 'rang', writable: false },
    surname: { value: 'cat', writable: false }
});
let desc1 = Object.getOwnPropertyDescriptor(rang, 'name');
let desc2 = Object.getOwnPropertyDescriptor(rang, 'surname');
console.log(JSON.stringify(desc1, null, 2));
console.log(JSON.stringify(desc2, null, 2));

/*
    Object.getOwnPropertyDescriptors 를 사용하면 프로퍼티 설명자를 한 번에 가져올 수 있음!
    이를 Object.defineProperties 와 함께 사용하면 객체 복사 시, 플래그도 복사할 수 있음.
 */
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(rang));
console.log(clone);

// 지금까지는 이런 식으로 복사했었음.
let cheetah;
for (let key in rang) {
    cheetah[key] = rang[key];
}
// 하지만 이는 플래그를 복사하지 않음.