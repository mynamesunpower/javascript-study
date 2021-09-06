/*
    이터러블을 적용하면 어떤 객체라도 for..of 사용 가능
    배열 : 이터러블임.
    문자열 : 이터러블임.
 */


// for (let num of range) --> num=1,2,3,4,5 로 동작하도록 하는 것이 목표!
// for..of 는 시작되자마자 Symbol.iterator를 호출. (없으면 에러) 이 함수는 반드시 iterator(메서드 next()가 있는 객체)를 반환해야 함.
// 이후 for..of는 반환된 객체 (이터레이터)만을 대상으로 동작
// for..of에 다음 값이 필요하면, 이터레이터의 next() 호출
// next()의 반환값은 done: Boolean, value: any 와 같은 형태여야 한다. done = true는 반복이 종료되었음을 의미. done = false일 때는 value에 다음 값을 저장.

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}

for (let number of range) {
    console.log(number);
}

// 다음처럼 한 번에 만드는 것도 가능
let range2 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
}

for (let number of range2) console.log(number);

// 문자열 -> 이터러블임.
for (let char of "test") console.log(char);

// 이터레이터의 명시적 호출
let str = 'hello';
let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
} // 이 방법은 반복과정을 좀 더 통제할 수 있다.

/*
    이터러블과 유사 배열(iterable and array-like)
    이터러블 : Symbol.iterator가 구현된 객체
    유사 배열 : 인덱스와 length 프로퍼티가 있어 배열처럼 보이는 객체
 */

// 이 객체는 유사 배열 객체이지만 이터러블은 아님.
let arrayLike = {
    0: 'hello',
    1: 'world',
    length: 2
}

// for (let item of arrayLike) {} : Symbol.iterator가 없으므로 에러 발생

/*
    Array.from
    이터러블이나 유사 배열을 받아 진짜 Array 로 만들어 줌.
    이를 거치면 배열 내장 메서드를 사용 가능함.
 */
let arrayLike2 = {
    0: 'hello',
    1: 'world',
    length: 2
}
let arr = Array.from(arrayLike2);
console.log(arr.pop());

let arr2 = Array.from(range2);
console.log(arr2);

// Array.from에는 매핑 함수를 optional로 넘길 수 있음.
// Array.from(obj[, mapFn, thisArg])
// 매핑 함수를 넣어주면 새로운 배열에 obj의 요소를 추가하기 전, 매핑 함수를 적용하고 반환된 값으로 추가함.
// thisArg는 각 요소의 this를 지정할 수 있도록 해 준다.
let arr3 = Array.from(range, number => number * number);
console.log(arr3);