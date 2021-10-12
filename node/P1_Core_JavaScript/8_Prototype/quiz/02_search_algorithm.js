/*
이번에 풀 과제는 두 부분으로 구성됩니다.

먼저, 아래 객체를 살펴봅시다.
 */
let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};
// 1) __proto__를 할당해서 프로퍼티 조회가 pockets -> bed -> table -> head 의 경로를 따르도록 프로토타입을 할당하세요.
console.log(pockets.pen);
console.log(bed.glasses);

// 2) pockets.glasses로 glasses를 얻는 것이 빠를까요? 아니면 head.glasses로 얻는 것이 빠를까요? 필요하다면 벤치마크를 사용해 성능을 측정해 보세요.
// head.glasses 가 더 빠르다고 생각했음 -> 프로토타입 체이닝에 대한 연산이 없을 것이라고 생각했기 때문.
// 답) 모던 엔진에선 성능적인 차이가 없음.