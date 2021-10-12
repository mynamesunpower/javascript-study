/*
프로토타입 이해하기
중요도: 5
객체 두 개를 이용해 쌍을 만들고 이를 수정하는 코드가 아래에 있습니다.

얼럿창에 어떤 값이 나올지 예측해보세요.
 */
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // 1) true

delete rabbit.jumps;

console.log(rabbit.jumps); // 2) null

delete animal.jumps;

console.log(rabbit.jumps); // 3) undefined
// 정답!