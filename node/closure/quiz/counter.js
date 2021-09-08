/*
counter 객체
중요도: 5
생성자 함수를 이용해 counter 객체를 만들어보았습니다.

아래 예시는 잘 작동할까요? 결과는 어떨까요?
 */

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    }

    this.down = function() {
        return --count;
    }
    // this.up 과 this.down 은 동일한 외부 렉시컬 환경을 공유하므로 같은 count 를 공유한다.
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());