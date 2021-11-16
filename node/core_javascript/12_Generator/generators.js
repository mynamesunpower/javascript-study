/*
    Generator
    :: 필요에 따라 여러 개의 값을 하나씩 반환할 수 있는 함수.
 */

function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();
console.log(generator); // Object [Generator] {}

// next() 는 제너레이터의 주 메서드. 가장 가까운 yield 문을 만날 때까지 실행이 지속됨.
// next() -> 객체를 반환 { value: 산출 값, done: 함수의 종료여부 }

let one = generator.next();
console.log(one);
let two = generator.next();
console.log(two);
let three = generator.next();
console.log(three);

/*
    제너레이터와 이터러블
    generator() 는 이터러블임. -> for .. of 사용 가능
 */
function* generateSequence2() {
    yield 1;
    yield 2;
    return 3;
}
let generator2 = generateSequence2();
for (let a of generator2) {
    console.log(a);
}
// done: true 일 때 마지막 value 를 무시한다.
// 그러므로 모든 값이 출력되려면 yield 로 반환해야 함.

function* generateSequence3() {
    yield 1;
    yield 2;
    yield 3;
}
let generator3 = generateSequence3();
console.log(generator3.next())
console.log(generator3.next())
console.log(generator3.next())
console.log(generator3.next()) // value: undefined, done: true
for (let value of generator3) {
    console.log(value);
}

let sequence = [0, ...generateSequence3()];
// ...generateSequence3() -> iterable 제너레이터 객체를 배열 요소로 바꿔줌
console.log(sequence);


// Iterable -> Generator
// from..to 사이에 있는 값을 반환하는 iterable 객체 range 를 만들었었는데,
// 다시 한번 확인하자.
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
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
}

// Symbol.iterator 대신 제너레이터 함수로 만들기
let range2 = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
}

// generator composition
function* generateNumbers(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

// for (let number of generateNumbers(5, 7)) console.log(number)
function* generatePasswordCodes() {
    // 0..9
    yield* generateNumbers(48, 57);
    // A..Z
    yield* generateNumbers(65, 90);
    // a..z
    yield* generateNumbers(97, 122);
}
let str = '';
for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}
console.log(str);



// yield 를 사용해서 제너레이터 안팎으로 정보 교환하기.
function* gen() {
    let result = yield "2 + 2 = ?"; // (*)
    console.log(result);
}
let gen2 = gen();
let question = gen2.next().value;
console.log(question);
gen2.next(4);


function* gen_A() {
    let ask1 = yield "2 + 2 = ?";
    console.log(ask1);

    let ask2 = yield '3 * 3 = ?';
    console.log(ask2);
}
let genA = gen_A();
console.log(genA.next().value);
console.log(genA.next(4).value);
console.log(genA.next(9).done);

console.log(`---------`)
// generator.throw
// 외부 코드에서 에러를 만들거나 던질 수도 있음!
// 에러를 yield 로 보내려면, generator.throw(err) 호출 필요.
function* gen_B() {
    try {
        let result = yield "2 + 2 = ?";
        console.log(`위에서 에러 던졌으므로 여기까지 다다르지 못함!`)
    } catch (e) {
        console.log(e);
    }
}
let genB = gen_B();
let questionB = genB.next().value;
genB.throw(new Error('답을 찾지 못했읍니다.'));