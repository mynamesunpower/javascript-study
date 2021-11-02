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