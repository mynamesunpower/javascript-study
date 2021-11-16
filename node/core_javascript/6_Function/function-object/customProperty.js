/*
    커스텀 프로퍼티
    함수에 자체적으로 만든 프로퍼티 추가 가능.
 */
function sayHi() {
    console.log('Hi');

    sayHi.counter++;
}
sayHi.counter = 0; // 초기값
sayHi();
sayHi();

console.log(`호출 횟수: ${sayHi.counter}회`);
// sayHi.counter = 0 처럼 함수에 프로퍼티를 할당해도 함수 내에 지역 변수 counter 가 만들어지지 않음.
// counter 프로퍼티와 변수 let counter 는 전혀 관계가 없음.


// 클로저는 함수 프로퍼티로 대체할 수 있음.
function makeCounter() {
    // let count = 0; 대신 아래 프로퍼티를 사용

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
// 이제 count 는 외부 렉시컬 환경이 아니라, 함수 프로퍼티에 바로 저장됨.
// 클로저를 사용하는 방법과의 차이점은 count 값이 외부 변수에 저장되어 있는 경우 드러난다.
// 클로저를 사용한 경우에는 외부 코드에서 count 접근 불가.
// 함수 프로퍼티를 사용하여 바인딩했다면 외부에서 값 수정 가능.