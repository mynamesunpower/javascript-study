/*
숫자 설정과 감소가 가능한 counter 만들기
중요도: 5
다음 makeCounter()코드를 수정해서 카운터가 감소하고 숫자를 설정하게 해보세요.

counter()는 다음 숫자를 반환해야 합니다.
counter.set(value)는 counter 를 value 로 설정해야 합니다.
counter.decrease()는 counter 를 1 감소시켜야 합니다.
아래 링크를 클릭해 sandbox 에 작성된 코드를 보고, 사용법을 살펴보세요.

참고: 클로저 또는 함수 프로퍼티를 사용해 counter 값을 저장할 수 있습니다. 두 가지 방법을 모두 사용해 답안을 두 개 만드셔도 됩니다.
 */
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = function(value) {
        count = value;
    }

    counter.decrease = function() {
        count--;
    }

    return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // set the new count

console.log( counter() ); // 10

counter.decrease(); // decrease the count by 1

console.log( counter() ); // 10 (instead of 11)