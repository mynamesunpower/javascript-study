/*
    함수의 자료형은? 객체.
    호출이 가능한(callable) 행동 객체라고 이해하자.
    함수를 호출할 수 있을 뿐 아니라, 객체처럼 함수에 프로퍼티를 추가/제거하거나 참조를 통해 전달할 수도 있음.
 */

// name 프로퍼티
function sayHi() {
    console.log('hi');
}
console.log(sayHi.name); // 함수 이름을 가져올 수 있음.

const sayHello = () => {
    console.log('hello');
}
console.log(sayHello.name); // 익명 함수라도 자동으로 이름 할당됨.

function f(sayHi = function() {}) {
    console.log(sayHi.name);
}
f(); // 기본값을 사용해 이름을 할당해도 이름이 있음.
// 이 기능을 contextual name 이라고 함.

let user = {
    sayHi() {

    },
    sayBye: function() {

    }
}
console.log(user.sayHi.name);
console.log(user.sayBye.name); // 객체 메서드의 이름도 name 프로퍼티로 가져올 수 있음!

// 그러나 적절한 이름을 추론하는게 불가능한 상황에서는 빈 문자열이 저장됨.
let arr = [function() {}];
console.log(arr[0].name);


/*
    length 프로퍼티
    함수 매개변수의 개수를 반환함
 */
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length) // 1
console.log(f2.length) // 2
console.log(many.length) // 2 -> 나머지 매개변수는 개수에 포함되지 않음.

// 아래는 브라우저에서 실행.
function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length === 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}
ask('질문 있으신가요?', () => alert('OK를 클릭함.'), result => alert(result));
// handler.length === 0 이라면, (인수가 없는 함수)라면 -> OK를 클릭했다면, 함수 호출.
// 아니라면, 