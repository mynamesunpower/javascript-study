/*
    새 코드를 작성할 때는 절대 var 를 사용해선 안된다!
    구식 스크립트를 다루지 않기에 건너뛸 수 있지만 그랬다간 이 괴물에게 물릴 수 있다고 함.
 */

// 1. var 는 블록 스코프가 없음
if (true) {
    // var 로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프임.
    var test = true;
}
console.log(test); // 함수가 끝났음에도 전역 변수가 된다.

// 반복문에서도 동일함.
for (var i = 0; i < 10; i++) {
}
console.log(i);

// 코드 블록이 함수 안에 있다면, var 는 함수 레벨 변수
function sayHi() {
    if (true) {
        var phrase = 'hello';
    }

    console.log(phrase);
}
sayHi();
// console.log(phrase); // phrase is not defined


/*
    2. 'var' 는 선언하기 전에도 사용할 수 있음
        선언 위치와 상관없이 함수 본문이 시작되는 지점에서 정의된다.
 */
function sayHello() {
    phrase = 'hello';
    console.log(phrase);
    var phrase;
}
// 이것을 hoisting 이라고 함. var 로 선언한 모든 변수는 함수의 최상위로 끌어올려지기 때문.


// 선언은 호이스팅되지만 할당은 호이스팅되지 않는다.
function sayBye() {
    console.log(phrase); // undefined

    var phrase = 'hello';
}
