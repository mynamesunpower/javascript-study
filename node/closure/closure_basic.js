// 코드 블록
// 코드 블록 {...} 안에서 선언한 변수는 블록 안에서만 사용
{
    let message = '안녕하세요.';
    console.log(message);
}
// console.log(message); // ReferenceError: message is not defined
// if, for, while 코드 블록 안에서 선언한 변수는 오직 블록 안에서만!


/*
    중첩 함수 (nested function)
    코드를 정돈하는데 사용할 수 있음
 */
function sayHiBye(firstName, lastName) {

    // 헬퍼 중첩 함수
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log('Hello, ' + getFullName());
    console.log('Bye, ' + getFullName());
}
sayHiBye('Sunny', 'Kim');

// 중첩 함수는 새로운 객체의 프로퍼티나 중첩 함수 그 자체로 반환될 수 있다.
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


/*
    렉시컬 환경
        1. 변수
        JS 에서는 실행 중인 함수, 코드 블록 {...}, 스크립트 전체는 Lexical Environment 라는 내부 숨김 연관 객체(internal hidden associated object)를 갖는다.
        이 객체는 두 부분으로 구성됨.
        a. 환경 레코드(Environment Record) - 모든 지역 변수를 프로퍼티로 저장하고 있는 객체. this 값 같은 기타 정보도 여기에 저장됨.
        b. 외부 렉시컬 환경(Outer Lexical Environment) 에 대한 참조 - 외부 코드와 연관됨
 */

// 다음 코드에는 렉시컬 환경이 하나만 존재
// Lexical Environment { phrase: "hello" } -> (outer) null
// 스크립트 전체와 관련된 렉시컬 환경을 전역 렉시컬 환경이라고 함 (Global Lexical Environment)
// 여기서 { ... } 는 변수가 저장되는 환경 레코드를 나타내고 화살표는 외부 렉시컬 환경에 대한 참조. 현재 전역 렉시컬 환경은 외부 참조를 갖지 않아 null
{
    let phrase = 'hello';
    console.log(phrase);
}


/*
    아래 코드에서 렉시컬 환경의 변화 과정
    1. 스크립트가 시작되면 여기서 선언한 변수 전체가 렉시컬 환경에 올라감. (pre-populated)
       이 때, 변수의 상태는 특수 내부 상태(special internal state)인 'uninitialized'
       자바스크립트 엔진은 uninitialized 상태의 변수를 인지하지만, let 을 만나기 전까진 이 변수를 참조할 수 없음.
    2. let phrase; 를 만남. 값을 할당하기 전이기 때문에 프로퍼티의 값은 undefined.
       phrase 는 이 시점 이후부터 사용 가능.
    3. phrase 에 값 할당.
    4. phrase 의 값 변경.
 */
// 코드가 실행되고 실행 흐름이 이어져 나가며, 렉시컬 환경은 변화함
{
    // execution start
    let phrase;
    phrase = 'hello';
    phrase = 'bye';
}


/*
    렉시컬 환경
        2. 함수 선언문
        함수는 변수와 마찬가지로 값이지만, 함수 선언문 (function declaration)으로 선언한 함수는 일반 변수와 다르게 바로 초기화됨.
        그러므로 렉시컬 환경이 만들어지는 즉시 사용 가능. 선언되기 전에 함수를 사용할 수 있는 이유가 바로 이것.
        a. 스크립트가 시작되면 선언한 변수와 함수가 렉시컬 환경에 올라감.
           변수 phrase 의 상태는 uninitialized
           함수 say 의 상태는 function (초기화됨)
        이것은 선언문으로 정의한 함수에만 적용됨.
        let say = function(name) ... 과 같이 함수를 변수에 할당한 함수 표현식(function expression)은 해당되지 않음.
 */
{
    // execution start
    let phrase = 'hello';

    function say(name) {
        console.log(`${phrase}, ${name}`);
    }
}

/*
    렉시컬 환경
        3. 내부와 외부 렉시컬 환경
        함수를 호출해 실행하면 새로운 렉시컬 환경이 자동으로 만들어진다.
        이 렉시컬 환경엔 함수 호출 시 넘겨받은 매개변수와, 함수의 지역 변수가 저장됨.
        현재의 렉시컬 환경
         내부 렉시컬 환경                     전역 렉시컬 환경
        { name: "John" } -> (outer) { hi: function, phrase: 'hello' } -> (outer) null
        a. 여기서의 내부 렉시컬 환경은 현재 실행 중인 함수 hi 에 상응함. 여기에는 인자인 name 으로부터 유래한 프로퍼티 하나만 있음.
        hi('John')을 호출했기 때문에, name : 'John'.
        b. 여기서의 외부 렉시컬 환경은 전역 렉시컬 환경임. phrase 와 함수 hi 를 프로퍼티로 가짐.
        c. 내부 렉시컬 환경은 외부 렉시컬 환경에 대한 참조를 가진다.
 */
{
    // execution start
    let phrase = 'hello';

    function hi(name) {
        console.log(`${phrase}, ${name}`);
    }

    hi('John');
}
// *** 코드에서 변수에 접근할 때, 먼저 내부 렉시컬 환경을 검색 범위로 잡는다.
//     여기에서 원하는 변수를 찾지 못하면 검색 범위를 내부 렉시컬 환경이 참조하는 외부 렉시컬 환경으로 확장한다.
//     이것은 검색 범위가 전역 렉시컬 환경으로 확장될 때까지 반복된다.
//     전역 렉시컬 환경에 도달할 때까지 변수를 찾지 못하면 'strict mode' 에서는 에러 발생.
//     비엄격 모드에서는 정의되지 않는 변수에 값을 할당하려고 하면 에러 발생하는 대신 새로운 전역 변수가 만들어진다. (하위 호환성을 위해 남아있는 기능)



/*
    렉시컬 환경
        4. 함수를 반환하는 함수
        _makeCounter()를 호출하면 호출할 때마다 새로운 렉시컬 환경 객체가 만들어지고, 여기에 makeCounter 를 실행하는데 필요한 변수들이 저장됨.
        _makeCounter()를 호출할 때의 렉시컬 환경
                     _makeCounter() 의 렉시컬 환경                             전역 렉시컬 환경
        Line 158 )))        { count: 0 }            -> (outer) { _makeCounter: function, counter: undefined } -> (outer) null
                     _makeCounter()가 실행되는 도중에는 본문(return count++)이 한 줄 짜리인 중첩 함수가 만들어진다.
                     현재는 중첩 함수가 생성되기만 하고 실행은 되지 않은 상태.
                     *** 모든 함수는 함수가 생성된 곳의 렉시컬 환경을 기억한다 ***
                     [[Environment]]라 불리는 숨김 프로퍼티를 갖는데, 여기에 함수가 만들어진 곳의 렉시컬 환경에 대한 참조가 저장된다.

        Line 161 )))  function() [[Environment]]     -> { count:0 } ->              (outer) { _makeCounter: function, counter: undefined } -> (outer) null
                     따라서 counter.[[Environment]] 에는 { count: 0 }이 있는 렉시컬 환경에 대한 참조가 저장된다.
                     호출 장소와 관계없이 함수가 자신이 태어난 곳을 기억할 수 있는 것은 바로 이 프로퍼티 때문.
                     [[Environment]]는 함수가 생성될 때 딱 한 번 값이 세팅되고 영원히 불변.

        Line 166 ))) counter() 를 호출하면 각 호출마다 새로운 렉시컬 환경이 생성된다. 그리고 그 환경은 counter.[[Environment]]에 저장된 렉시컬 환경을 외부 렉시컬 환경으로서 참조한다.
                      counter()     _makeCounter()의 렉시컬 환경                        전역 렉시컬 환경
                     { <empty> } ->    (outer) { count: 0 }    -> (outer) { makeCounter: function, counter: function } -> (outer) null
                     실행 흐름이 중첩 함수의 본문 ( return count++ ) 로 넘어오면 count 변수가 필요한데,
                     먼저 자체 렉시컬 환경에서 찾음. 익명 중첩 함수에서는 지역 변수가 없기에, 이 렉시컬 환경은 비어 있는 상황.
                     그 다음 참조하는 외부 렉시컬 환경에서 count 를 찾는다. 바로 외부 렉시컬 환경에 count 가 존재.
                     이제 count++ 가 실행되면서 count 값이 1 증가해야 하는데,
                     *** 변수값 갱신은 변수가 저장된 렉시컬 환경에서 이뤄진다!!!! ***
 */
{
    function _makeCounter() {
        let count = 0;

        return function () {
            return count++;
        }
    }

    let counter = _makeCounter();
    console.log(counter()); // 0, 후위 ++이라 먼저 리턴하고 1이 되므로.
    console.log(counter()); // 1
    console.log(counter()); // 2
}
// 이것이 바로 클로저의 특징
// 클로저 (Closure)
// 외부 변수를 기억하고, 외부 변수에 접근할 수 있는 함수!
// 자바스크립트에서는 모든 함수가 자연스럽게 클로저이다.
// 1. 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억한다.
// 2. 함수 본문에선 [[Environment]]를 사용해 외부 변수에 접근한다.



/*
    가비지 컬렉션
    함수 호출이 끝나면 그에 대응하는 렉시컬 환경이 메모리에서 제거된다.
    함수와 관련된 변수들은 이 때 모두 사라짐.
    함수 호출이 끝나면 관련 변수를 참조할 수 없는 이유가 이것.
    JavaScript 에서는 모든 객체는 도달 가능한 상태(reachable)일 때만 메모리에 유지된다.

    그러나 호출이 끝난 이후에도 여전히 도달 가능한 중첩 함수가 있을 수 있다.
    이때는 이 중첩 함수의 [[Environment]] 프로퍼티에 외부 함수 렉시컬 환경에 대한 정보가 저장된다. (reachable 이 됨)
 */
{
    function f() {
        let value = 123;

        return function() {
            console.log(value);
        }
    }

    let g = f(); // g.[[Environment]] 에 f() 호출 시 만들어지는 렉시컬 환경 정보가 저장된다.
                 //                                           { value: 123 }
                 // 이렇게 되면 함수 호출이 끝났지만, 렉시컬 환경이 저장되어 도달 가능하기에 메모리에 유지된다.
}

/*
    하지만 이 중첩 함수를 사용할 때의 주의점!
    f()를 여러 번 호출하고 그 결과를 어딘가에 저장하는 경우, 호출 시 만들어지는 각 렉시컬 환경 모두가 메모리에 유지된다!
 */
{
    function d() {
        let value = 1000;

        return function() {
            console.log(value);
        }
    }

    // 이것을 실행하면 3개의 렉시컬 환경이 만들어지는데, 각 환경은 메모리에서 삭제되지 않는다. (모두 도달 가능)
    // 각각 d()를 호출할 때 생성된 렉시컬 환경과 연관 관계를 맺는다.
    let arr = [d(), d(), d()];

    arr = null; // 도달할 수 없는 상태가 되었으므로 메모리에서 삭제된다.
}