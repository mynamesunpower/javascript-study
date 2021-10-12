/*
'prototype' 변경하기
중요도: 5
아래 코드에선 new Rabbit를 만들고 Rabbit의 "prototype"을 변경합니다.

시작 코드는 다음과 같습니다.
 */
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};
let rabbit = new Rabbit();

// 1. 아래 코드를 추가하면 무엇이 출력될까?
// -> 그래도 true 가 출력될거라고 생각. 이미 new Rabbit() 으로 객체를 생성했기에, [[Prototype]]은 만들어진 상태고 바꿔봤자 무의미.
Rabbit.prototype = {};

// 2. 아래와 같이 변경하면 무엇이 출력될끼?
// -> 마찬가지로 true 라고 생각함. 이유는 위와 동일.
// 틀림
// Rabbit.prototype 이 참조하는 객체는 단 하나뿐인데, 이 객체는 Rabbit.prototype 과 rabbit 의 [[Prototype]]을 사용해 참조 가능.
// 따라서 둘 중 하나의 참졸르 사용해 객체의 내용을 변경하면 다른 참조를 통해서도 변경 내용을 볼 수 있음.
Rabbit.prototype.eats = false;

// 3. 아래와 같이 delete 를 사용하면 무엇이 출력될까?
// -> 마찬가지로 true 라고 생각함.
// 해답) delete 는 객체에 직접 적용됨. rabbit.eats 는 rabbit 에서 eats 프로퍼티를 제거하는 연산임. 따라서 아무 영향 없음.
delete rabbit.eats;

// 4. 마지막 코드를 실행하면 무엇이 출력될까?
// -> 이건 undefined 라고 생각함.
// 해답) 프로퍼티 eats 가 프로토타입에서 삭제되었으므로, 더 이상 존재하지 않음.
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // true