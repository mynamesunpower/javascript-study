/*
    __proto__ 는 더 이상 쓰지 말자.
    모던한 메서드를 사용하자.
    Object.create(proto, [descriptors]) - [[Prototype]]이 proto를 참조하는 빈 객체를 만든다. 설명자를 추가로 넘길 수 있음!
    Object.getPrototypeOf(obj) - obj 의 [[Prototype]]을 반환.
    Object.setPrototypeOf(obj, proto) - obj 의 [[Prototype]]이 proto 가 되도록 설정.
 */

let animal = {
    eats: true
};

let rabbit = Object.create(animal);

console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit));

Object.setPrototypeOf(rabbit, {});

// 설명자를 이용한다면
let giraffe = Object.create(animal, {
    jumps: {
        value: false
    }
});
console.log(giraffe.jumps);

// Object.create 를 사용하면  for ... in 을 사용해 프로퍼티를 복사하는 것보다 더 효과적으로 객체를 복제할 수 있음.
// 열거 가능한 프로퍼티와 불가능한 프로퍼티, 데이터 프로퍼티, 접근자 프로퍼티 복제됨. [[Prototype]]도 복제됨.
let clone = Object.create(Object.getPrototypeOf(giraffe), Object.getOwnPropertyDescriptors(giraffe));